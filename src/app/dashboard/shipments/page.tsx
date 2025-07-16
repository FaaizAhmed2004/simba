'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  PlusIcon, 
  MagnifyingGlassIcon,
  EyeIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

const shipments = [
  {
    id: 'SL20241215001',
    service: 'FBA Prep',
    status: 'In Transit',
    pickup: 'Los Angeles, CA 90210',
    delivery: 'Phoenix, AZ 85001',
    createdDate: '2024-12-15',
    estimatedDelivery: '2024-12-18',
    totalCost: 245.50,
    statusColor: 'text-orange-600 bg-orange-100'
  },
  {
    id: 'SL20241214002',
    service: 'FBM Fulfillment',
    status: 'Processing',
    pickup: 'Dallas, TX 75201',
    delivery: 'Houston, TX 77001',
    createdDate: '2024-12-14',
    estimatedDelivery: '2024-12-17',
    totalCost: 89.25,
    statusColor: 'text-blue-600 bg-blue-100'
  },
  {
    id: 'SL20241213003',
    service: 'Freight Shipping',
    status: 'Delivered',
    pickup: 'Miami, FL 33101',
    delivery: 'Orlando, FL 32801',
    createdDate: '2024-12-13',
    estimatedDelivery: '2024-12-15',
    totalCost: 567.80,
    statusColor: 'text-green-600 bg-green-100'
  },
  {
    id: 'SL20241212004',
    service: 'Pallet Storage',
    status: 'Active',
    pickup: 'Atlanta, GA 30301',
    delivery: 'Warehouse Storage',
    createdDate: '2024-12-12',
    estimatedDelivery: 'Ongoing',
    totalCost: 100.00,
    statusColor: 'text-purple-600 bg-purple-100'
  },
  {
    id: 'SL20241211005',
    service: 'FBA Prep',
    status: 'Quote Requested',
    pickup: 'Seattle, WA 98101',
    delivery: 'Portland, OR 97201',
    createdDate: '2024-12-11',
    estimatedDelivery: 'Pending',
    totalCost: 0,
    statusColor: 'text-gray-600 bg-gray-100'
  }
];

export default function ShipmentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');

  const filteredShipments = shipments.filter(shipment => {
    const matchesSearch = shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shipment.pickup.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shipment.delivery.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || shipment.status.toLowerCase().includes(statusFilter.toLowerCase());
    const matchesService = serviceFilter === 'all' || shipment.service.toLowerCase().includes(serviceFilter.toLowerCase());
    
    return matchesSearch && matchesStatus && matchesService;
  });

  return (
    <div>
      {/* Header */}
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Shipments</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and track all your shipments in one place.
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link
            href="/dashboard/shipments/new"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
            New Shipment
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search shipments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Status Filter */}
            <div>
              <select
              title = "status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Statuses</option>
                <option value="quote">Quote Requested</option>
                <option value="processing">Processing</option>
                <option value="transit">In Transit</option>
                <option value="delivered">Delivered</option>
                <option value="active">Active</option>
              </select>
            </div>

            {/* Service Filter */}
            <div>
              <select
              title='services'
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Services</option>
                <option value="fba">FBA Prep</option>
                <option value="fbm">FBM Fulfillment</option>
                <option value="freight">Freight Shipping</option>
                <option value="storage">Pallet Storage</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Shipments Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Shipment ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Route
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Est. Delivery
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cost
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredShipments.map((shipment) => (
                  <tr key={shipment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {shipment.id}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{shipment.service}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${shipment.statusColor}`}>
                        {shipment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        <div>{shipment.pickup}</div>
                        <div className="text-gray-500">↓</div>
                        <div>{shipment.delivery}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(shipment.createdDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {shipment.estimatedDelivery === 'Pending' || shipment.estimatedDelivery === 'Ongoing' 
                        ? shipment.estimatedDelivery 
                        : new Date(shipment.estimatedDelivery).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {shipment.totalCost > 0 ? `$${shipment.totalCost.toFixed(2)}` : 'Pending'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        href={`/dashboard/shipments/${shipment.id}`}
                        className="text-blue-600 hover:text-blue-900 inline-flex items-center"
                      >
                        <EyeIcon className="h-4 w-4 mr-1" />
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredShipments.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500">
                <TruckIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No shipments found</h3>
                <p className="text-sm">
                  {searchTerm || statusFilter !== 'all' || serviceFilter !== 'all'
                    ? 'Try adjusting your search or filters.'
                    : 'Get started by creating your first shipment.'}
                </p>
                {!searchTerm && statusFilter === 'all' && serviceFilter === 'all' && (
                  <Link
                    href="/dashboard/shipments/new"
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
                    Create First Shipment
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold text-blue-600">
                  {filteredShipments.length}
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <p className="text-sm font-medium text-gray-500 truncate">
                  Total Shipments
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold text-green-600">
                  ${filteredShipments.reduce((sum, s) => sum + s.totalCost, 0).toFixed(2)}
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <p className="text-sm font-medium text-gray-500 truncate">
                  Total Value
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold text-orange-600">
                  {filteredShipments.filter(s => s.status === 'In Transit').length}
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <p className="text-sm font-medium text-gray-500 truncate">
                  In Transit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}