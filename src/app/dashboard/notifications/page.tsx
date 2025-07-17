'use client';

import { useState, useEffect } from 'react';
import { useSession } from '@/lib/session';
import { 
  BellIcon, 
  CheckIcon,
  TruckIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

interface Notification {
  _id: string;
  title: string;
  message: string;
  type: string;
  read: boolean;
  shipmentId?: string;
  createdAt: string;
}

export default function NotificationsPage() {
  const { data: session } = useSession();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (session?.user?.id) {
      fetchNotifications();
    }
  }, [session]);

  const fetchNotifications = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/dashboard/notifications?limit=20');
      
      if (response.ok) {
        const data = await response.json();
        setNotifications(data.data.notifications);
      } else {
        setError('Failed to load notifications');
      }
    } catch (err) {
      setError('Failed to load notifications');
      console.error('Notifications fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (notificationId: string) => {
    try {
      const response = await fetch('/api/dashboard/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'mark_read',
          notificationId
        })
      });

      if (response.ok) {
        setNotifications(prev => 
          prev.map(notification => 
            notification._id === notificationId 
              ? { ...notification, read: true }
              : notification
          )
        );
      }
    } catch (err) {
      console.error('Mark as read error:', err);
    }
  };

  const markAllAsRead = async () => {
    try {
      const response = await fetch('/api/dashboard/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'mark_all_read'
        })
      });

      if (response.ok) {
        setNotifications(prev => 
          prev.map(notification => ({ ...notification, read: true }))
        );
      }
    } catch (err) {
      console.error('Mark all as read error:', err);
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'shipment_update':
        return <TruckIcon className="h-5 w-5 text-blue-600" />;
      case 'quote_ready':
        return <DocumentTextIcon className="h-5 w-5 text-green-600" />;
      case 'delivery_complete':
        return <CheckIcon className="h-5 w-5 text-green-600" />;
      case 'system':
        return <BellIcon className="h-5 w-5 text-gray-600" />;
      case 'promotion':
        return <ExclamationTriangleIcon className="h-5 w-5 text-purple-600" />;
      default:
        return <BellIcon className="h-5 w-5 text-gray-600" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays < 7) {
        return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
      } else {
        return date.toLocaleDateString();
      }
    }
  };

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
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="mt-1 text-sm text-gray-500">
            Stay updated with your shipment status and important updates.
          </p>
        </div>
        {notifications.some(n => !n.read) && (
          <div className="mt-4 sm:mt-0">
            <button
              onClick={markAllAsRead}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" />
              Mark All as Read
            </button>
          </div>
        )}
      </div>

      {/* Error State */}
      {error && (
        <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon className="h-5 w-5 text-red-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error Loading Notifications</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error}</p>
                <button 
                  onClick={fetchNotifications}
                  className="mt-2 text-red-800 underline hover:text-red-900"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notifications List */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {notifications.length === 0 ? (
          <div className="text-center py-12">
            <BellIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
            <p className="text-sm text-gray-500">
              You&apos;re all caught up! New notifications will appear here.
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <li 
                key={notification._id}
                className={`p-6 hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-sm font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                        {notification.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">
                          {formatDate(notification.createdAt)}
                        </span>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                      </div>
                    </div>
                    <p className={`mt-1 text-sm ${!notification.read ? 'text-gray-800' : 'text-gray-600'}`}>
                      {notification.message}
                    </p>
                    {notification.shipmentId && (
                      <p className="mt-1 text-xs text-blue-600">
                        Shipment: {notification.shipmentId}
                      </p>
                    )}
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification._id)}
                        className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                      >
                        Mark as read
                      </button>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}