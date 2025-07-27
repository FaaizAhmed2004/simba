// Simple in-memory job queue for background processing
// In production, this should be replaced with Redis or a proper queue system

export interface Job {
  id: string;
  type: 'email' | 'notification';
  payload: any;
  retryCount: number;
  maxRetries: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: Date;
  processedAt?: Date;
  error?: string;
}

class JobQueue {
  private jobs: Map<string, Job> = new Map();
  private processing = false;
  private processingInterval: NodeJS.Timeout | null = null;

  constructor() {
    // Start processing jobs every 100ms for fast response
    this.startProcessing();
  }

  // Add a job to the queue
  addJob(type: Job['type'], payload: any, maxRetries = 3): string {
    const jobId = this.generateJobId();
    const job: Job = {
      id: jobId,
      type,
      payload,
      retryCount: 0,
      maxRetries,
      status: 'pending',
      createdAt: new Date()
    };

    this.jobs.set(jobId, job);
    console.log(`Job ${jobId} added to queue (type: ${type})`);
    return jobId;
  }

  // Get job status
  getJob(jobId: string): Job | undefined {
    return this.jobs.get(jobId);
  }

  // Get all jobs (for monitoring)
  getAllJobs(): Job[] {
    return Array.from(this.jobs.values());
  }

  // Get pending jobs count
  getPendingJobsCount(): number {
    return Array.from(this.jobs.values()).filter(job => job.status === 'pending').length;
  }

  // Start processing jobs
  private startProcessing() {
    if (this.processingInterval) return;

    this.processingInterval = setInterval(() => {
      this.processNextJob();
    }, 100); // Process every 100ms for responsiveness
  }

  // Stop processing jobs
  stopProcessing() {
    if (this.processingInterval) {
      clearInterval(this.processingInterval);
      this.processingInterval = null;
    }
  }

  // Process the next pending job
  private async processNextJob() {
    if (this.processing) return;

    const pendingJob = Array.from(this.jobs.values())
      .find(job => job.status === 'pending');

    if (!pendingJob) return;

    this.processing = true;
    pendingJob.status = 'processing';
    pendingJob.processedAt = new Date();

    try {
      console.log(`Processing job ${pendingJob.id} (type: ${pendingJob.type})`);
      
      // Process the job based on type
      await this.processJob(pendingJob);
      
      pendingJob.status = 'completed';
      console.log(`Job ${pendingJob.id} completed successfully`);
    } catch (error) {
      console.error(`Job ${pendingJob.id} failed:`, error);
      pendingJob.error = error instanceof Error ? error.message : 'Unknown error';
      
      // Retry logic
      if (pendingJob.retryCount < pendingJob.maxRetries) {
        pendingJob.retryCount++;
        pendingJob.status = 'pending';
        console.log(`Job ${pendingJob.id} will be retried (attempt ${pendingJob.retryCount}/${pendingJob.maxRetries})`);
      } else {
        pendingJob.status = 'failed';
        console.error(`Job ${pendingJob.id} failed permanently after ${pendingJob.maxRetries} retries`);
      }
    } finally {
      this.processing = false;
    }
  }

  // Process individual job based on type
  private async processJob(job: Job): Promise<void> {
    switch (job.type) {
      case 'email':
        await this.processEmailJob(job);
        break;
      case 'notification':
        await this.processNotificationJob(job);
        break;
      default:
        throw new Error(`Unknown job type: ${job.type}`);
    }
  }

  // Process email job
  private async processEmailJob(job: Job): Promise<void> {
    const { emailService } = await import('./emailService');
    await emailService.sendEmail(job.payload);
  }

  // Process notification job
  private async processNotificationJob(job: Job): Promise<void> {
    // Placeholder for notification processing
    console.log('Processing notification job:', job.payload);
  }

  // Generate unique job ID
  private generateJobId(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `job_${timestamp}_${random}`;
  }

  // Clean up completed jobs older than 1 hour
  cleanupOldJobs() {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    
    for (const [jobId, job] of this.jobs.entries()) {
      if (job.status === 'completed' && job.processedAt && job.processedAt < oneHourAgo) {
        this.jobs.delete(jobId);
      }
    }
  }
}

// Singleton instance
export const jobQueue = new JobQueue();

// Clean up old jobs every 10 minutes
setInterval(() => {
  jobQueue.cleanupOldJobs();
}, 10 * 60 * 1000);