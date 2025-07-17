'use client';

import { useState, useEffect } from 'react';
import { useSession } from '@/lib/session';
import Link from 'next/link';
import { 
  TruckIcon, 
  DocumentTextIcon, 
  ClockIcon, 
  CheckCircleIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  BellIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

interface DashboardStats {
  active: number;
  pending: number;
  in_transit: number;
  delivered: number;
  total_value: number;
}

interface Shipment {
  id: string;
  service: string;
  status: string;
  pickup: string;
  delivery: string;
  date: string;
  statusColor: string;
  totalCost?: number;
}

interface Notification {
  _id: string;
  title: string;
  message: string;
  type: string;
  read: boolean;
  createdAt: string;
}

const quickActions = [
  {
    name: 'Create Shipment',
    description: 'Book a new shipment',
    href: '/dashboard/shipments/new',
    icon: PlusIcon,
    color: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    name: 'Track Package',
    description: 'Track existing shipment',
    href: '/tracking',
    icon: MagnifyingGlassIcon,
    color: 'bg-green-600 hover:bg-green-700'
  },
  {
    name: 'Get Quote',
    description: 'Calculate shipping costs',
    href: '/quote',
    icon: DocumentTextIcon,
    color: 'bg-purple-600 hover:bg-purple-700'
  }
];

export default function Dashboard() {
  const { data: session } = useSession();
  const [stats, setStats] = useState<DashboardStats>({
    active: 0,
    pending: 0,
    in_transit: 0,
    delivered: 0,
    total_value: 0
  });
  const [recentShipments, setRecentShipments] = useState<Shipment[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch dashboard data
  useEffect(() => {
    interface CustomUser {
      id?: string;
    }
    const userId = (session?.user as CustomUser)?.id;
    if (userId) {
      fetchDashboardData();
    }
  }, [session]);

  const fetchDashboardData = async () => {
    try {
      setIsLoading(true);
      
      // Fetch stats, shipments, and notifications in parallel
      const [statsRes, shipmentsRes, notificationsRes] = await Promise.all([
        fetch('/api/dashboard/stats'),
        fetch('/api/dashboard/shipments?limit=3'),
        fetch('/api/dashboard/notifications?limit=1&unread=true')
      ]);

      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData.data.stats);
      }

      if (shipmentsRes.ok) {
        const shipmentsData = await shipmentsRes.json();
        setRecentShipments(shipmentsData.data.shipments);
      }

      if (notificationsRes.ok) {
        const notificationsData = await notificationsRes.json();
        setNotifications(notificationsData.data.notifications);
        setUnreadCount(notificationsData.data.unreadCount);
      }

    } catch (err) {
      setError('Failed to load dashboard data');
      console.error('Dashboard fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Create dynamic stats array
  const dynamicStats = [
    { 
      name: 'Active Shipments', 
      value: isLoading ? '...' : stats.active.toString(), 
      icon: TruckIcon, 
      color: 'text-blue-600' 
    },
    { 
      name: 'Pending Quotes', 
      value: isLoading ? '...' : stats.pending.toString(), 
      icon: DocumentTextIcon, 
      color: 'text-yellow-600' 
    },
    { 
      name: 'In Transit', 
      value: isLoading ? '...' : stats.in_transit.toString(), 
      icon: ClockIcon, 
      color: 'text-orange-600' 
    },
    { 
      name: 'Delivered', 
      value: isLoading ? '...' : stats.delivered.toString(), 
      icon: CheckCircleIcon, 
      color: 'text-green-600' 
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {session?.user?.name?.split(' ')[0]}!
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Heres whats happening with your shipments today.
        </p>
      </div>

      {/* Error State */}
      {error && (
        <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon className="h-5 w-5 text-red-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error Loading Dashboard</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error}</p>
                <button 
                  onClick={fetchDashboardData}
                  className="mt-2 text-red-800 underline hover:text-red-900"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {dynamicStats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {stat.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-4">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className={`flex-shrink-0 p-2 rounded-md ${action.color}`}>
                    <action.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900">
                      {action.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {action.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Shipments */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recent Shipments
              </h3>
              <Link
                href="/dashboard/shipments"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {recentShipments.map((shipment) => (
                <div key={shipment.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-gray-900">
                          {shipment.id}
                        </h4>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${shipment.statusColor}`}>
                          {shipment.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {shipment.service}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {shipment.pickup} → {shipment.delivery}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Notifications */}
      {notifications.length > 0 && (
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <BellIcon className="h-5 w-5 text-blue-400" />
            </div>
            <div className="ml-3 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-blue-800">
                  {unreadCount > 0 ? `${unreadCount} New Update${unreadCount > 1 ? 's' : ''}` : 'Recent Updates'}
                </h3>
                {unreadCount > 0 && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div className="mt-2 space-y-2">
                {notifications.slice(0, 2).map((notification) => (
                  <div key={notification._id} className="text-sm text-blue-700">
                    <p className="font-medium">{notification.title}</p>
                    <p>{notification.message}</p>
                  </div>
                ))}
                <Link href="/dashboard/notifications" className="text-sm font-medium text-blue-800 underline hover:text-blue-900">
                  View all notifications
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State for New Users */}
      {!isLoading && recentShipments.length === 0 && (
        <div className="mt-8 text-center py-12 bg-white rounded-lg shadow">
          <TruckIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Welcome to Simba Dispatch LLC!</h3>
          <p className="text-gray-600 mb-6">
            You haven&apos;t created any shipments yet. Get started by requesting a quote or creating your first shipment.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/quote"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}