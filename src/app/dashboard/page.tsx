'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { 
  TruckIcon, 
  DocumentTextIcon, 
  ClockIcon, 
  CheckCircleIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  BellIcon
} from '@heroicons/react/24/outline';

const stats = [
  { name: 'Active Shipments', value: '12', icon: TruckIcon, color: 'text-blue-600' },
  { name: 'Pending Quotes', value: '3', icon: DocumentTextIcon, color: 'text-yellow-600' },
  { name: 'In Transit', value: '8', icon: ClockIcon, color: 'text-orange-600' },
  { name: 'Delivered', value: '47', icon: CheckCircleIcon, color: 'text-green-600' },
];

const recentShipments = [
  {
    id: 'SL20241215001',
    service: 'FBA Prep',
    status: 'In Transit',
    pickup: 'Los Angeles, CA',
    delivery: 'Phoenix, AZ',
    date: '2024-12-15',
    statusColor: 'text-orange-600 bg-orange-100'
  },
  {
    id: 'SL20241214002',
    service: 'FBM Fulfillment',
    status: 'Processing',
    pickup: 'Dallas, TX',
    delivery: 'Houston, TX',
    date: '2024-12-14',
    statusColor: 'text-blue-600 bg-blue-100'
  },
  {
    id: 'SL20241213003',
    service: 'Freight',
    status: 'Delivered',
    pickup: 'Miami, FL',
    delivery: 'Orlando, FL',
    date: '2024-12-13',
    statusColor: 'text-green-600 bg-green-100'
  }
];

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

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
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

      {/* Notifications */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <BellIcon className="h-5 w-5 text-blue-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              New Updates Available
            </h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>
                Your shipment SL20241215001 has been picked up and is now in transit.
                <Link href="/dashboard/notifications" className="font-medium underline ml-1">
                  View all notifications
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}