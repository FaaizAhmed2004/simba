// Simple session management to replace NextAuth temporarily
export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  status: string;
}

export interface Session {
  user: User;
}

// Mock session hook for development
export function useSession() {
  return {
    data: null as Session | null,
    status: 'unauthenticated' as 'loading' | 'authenticated' | 'unauthenticated'
  };
}

// Mock server session function
export async function getServerSession(): Promise<Session | null> {
  return null;
}

// Mock sign in function
export async function signIn(_provider?: string, _options?: Record<string, unknown>) {
  // This is a mock implementation - in production you'd implement actual authentication
  return { error: null };
}

// Mock get session function
export async function getSession(): Promise<Session | null> {
  return null;
}