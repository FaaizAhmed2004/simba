'use client';

import { useState, useEffect } from 'react';
import { useSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { 
  TruckIcon, 
  ClockIcon, 
  MapPinIcon,
  UserIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

interface DispatchShipment {
  id: string;
  serviceType: string;
  status: 'pending' | 'assigned' | 'in_transit' | 'delivered';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  pickup: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    contactName?: string;
    contactPhone?: string;
  };
  delivery: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    contactName?: string;
    contactPhone?: string;
  };
  assignedDriver?: string;
  estimatedPickup: string;
  estimatedDelivery: string;
  specialInstructions?: string;
  createdAt: string;
}

// Mock data for demonstration
const mockShipments: DispatchShipment[] = [
  {
    id: 'SL20241215001',
    serviceType: 'FBA Prep',
    status: 'pending',
    priority: 'high',
    pickup: {
      address: '123 Warehouse St',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      contactName: 'John Smith',
      contactPhone: '(555) 123-4567'
    },
    delivery: {
      address: '456 Distribution Ave',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85001',
      contactName: 'Jane Doe',
      contactPhone: '(555) 987-6543'
    },
    estimatedPickup: '2024-12-16T09:00:00Z',
    estimatedDelivery: '2024-12-18T15:00:00Z',
    specialInstructions: 'Fragile items - handle with care',
    createdAt: '2024-12-15T08:30:00Z'
  },
  {
    id: 'SL20241215002',
    serviceType: 'Freight Shipping',
    status: 'assigned',
    priority: 'medium',
    pickup: {
      address: '789 Industrial Blvd',
      city: 'Dallas',
      state: 'TX',
      zipCode: '75201',
      contactName: 'Mike Johnson',
      contactPhone: '(555) 456-7890'
    },
    delivery: {
      address: '321 Commerce Dr',
      city: 'Houston',
      state: 'TX',
      zipCode: '77001',
      contactName: 'Sarah Wilson',
      contactPhone: '(555) 234-5678'
    },
    assignedDriver: 'Driver #1234',
    estimatedPickup: '2024-12-16T14:00:00Z',
    estimatedDelivery: '2024-12-17T10:00:00Z',
    createdAt: '2024-12-15T10:15:00Z'
  }
];

export default function DispatchPage() {
  const { data: session, status } = useSession();
  const [shipments, setShipments] = useState<DispatchShipment[]>(mockShipments);
  const [filteredShipments, setFilteredShipments] = useState<DispatchShipment[]>(mockShipments);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  // Check authentication and authorization
  useEffect(() => {
    if (status === 'loading') return;
    
    if (status === 'unauthenticated') {
      redirect('/auth/login');
    }
    
    // Check if user has operator or admin role
    interface CustomUser {
      role?: string;
    }
    const userRole = (session?.user as CustomUser)?.role;
    if (userRole !== 'operator' && userRole !== 'admin') {
      redirect('/dashboard');
    }
  }, [session, status]);

  // Filter shipments based on search and filters
  useEffect(() => {
    let filtered = shipments;

    if (searchTerm) {
      filtered = filtered.filter(shipment =>
        shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shipment.pickup.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shipment.delivery.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(shipment => shipment.status === statusFilter);
    }

    if (priorityFilter !== 'all') {
      filtered = filtered.filter(shipment => shipment.priority === priorityFilter);
    }

    setFilteredShipments(filtered);
  }, [shipments, searchTerm, statusFilter, priorityFilter]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-gray-100 text-gray-800';
      case 'assigned': return 'bg-blue-100 text-blue-800';
      case 'in_transit': return 'bg-orange-100 text-orange-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const updateShipmentStatus = (shipmentId: string, newStatus: DispatchShipment['status']) => {
    setShipments(prev => 
      prev.map(shipment => 
        shipment.id === shipmentId 
          ? { ...shipment, status: newStatus }
          : shipment
      )
    );
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dispatch Center</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage and coordinate shipment operations
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {session?.user?.name}
              </span>
              <div className="bg-blue-100 p-2 rounded-full">
                <UserIcon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
              title='filter'
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="assigned">Assigned</option>
                <option value="in_transit">In Transit</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>

            {/* Priority Filter */}
            <div>
              <select
              title='priority'
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Priorities</option>
                <option value="urgent">Urgent</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center bg-blue-50 rounded-lg p-2">
              <span className="text-sm font-medium text-blue-900">
                {filteredShipments.length} shipments
              </span>
            </div>
          </div>
        </div>

        {/* Shipments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredShipments.map((shipment) => (
            <div key={shipment.id} className="bg-white rounded-lg shadow-md p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <TruckIcon className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{shipment.id}</h3>
                    <p className="text-sm text-gray-500">{shipment.serviceType}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(shipment.priority)}`}>
                    {shipment.priority.toUpperCase()}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(shipment.status)}`}>
                    {shipment.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Route */}
              <div className="mb-4">
                <div className="flex items-start space-x-3 mb-2">
                  <MapPinIcon className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Pickup</p>
                    <p className="text-sm text-gray-600">
                      {shipment.pickup.address}, {shipment.pickup.city}, {shipment.pickup.state} {shipment.pickup.zipCode}
                    </p>
                    {shipment.pickup.contactName && (
                      <p className="text-xs text-gray-500">
                        Contact: {shipment.pickup.contactName} {shipment.pickup.contactPhone}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Delivery</p>
                    <p className="text-sm text-gray-600">
                      {shipment.delivery.address}, {shipment.delivery.city}, {shipment.delivery.state} {shipment.delivery.zipCode}
                    </p>
                    {shipment.delivery.contactName && (
                      <p className="text-xs text-gray-500">
                        Contact: {shipment.delivery.contactName} {shipment.delivery.contactPhone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-4 flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <ClockIcon className="h-4 w-4" />
                  <span>Pickup: {new Date(shipment.estimatedPickup).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <ClockIcon className="h-4 w-4" />
                  <span>Delivery: {new Date(shipment.estimatedDelivery).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Driver Assignment */}
              {shipment.assignedDriver && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">
                    Assigned to: {shipment.assignedDriver}
                  </p>
                </div>
              )}

              {/* Special Instructions */}
              {shipment.specialInstructions && (
                <div className="mb-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm font-medium text-yellow-900 mb-1">Special Instructions:</p>
                  <p className="text-sm text-yellow-800">{shipment.specialInstructions}</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-2">
                {shipment.status === 'pending' && (
                  <button
                    onClick={() => updateShipmentStatus(shipment.id, 'assigned')}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                  >
                    Assign Driver
                  </button>
                )}
                {shipment.status === 'assigned' && (
                  <button
                    onClick={() => updateShipmentStatus(shipment.id, 'in_transit')}
                    className="px-3 py-1 bg-orange-600 text-white text-sm rounded-md hover:bg-orange-700"
                  >
                    Mark In Transit
                  </button>
                )}
                {shipment.status === 'in_transit' && (
                  <button
                    onClick={() => updateShipmentStatus(shipment.id, 'delivered')}
                    className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700"
                  >
                    Mark Delivered
                  </button>
                )}
                <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredShipments.length === 0 && (
          <div className="text-center py-12">
            <TruckIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No shipments found</h3>
            <p className="text-sm text-gray-500">
              {searchTerm || statusFilter !== 'all' || priorityFilter !== 'all'
                ? 'Try adjusting your search or filters.'
                : 'No shipments are currently available for dispatch.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}