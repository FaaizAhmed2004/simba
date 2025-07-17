'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  UsersIcon,
  EnvelopeIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
  EyeIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

interface Contact {
  _id: string;
  name: string;
  email: string;
  companyName: string;
  phone: string;
  channels: string[];
  productTypes: string[];
  requirements: string;
  status: string;
  submittedAt: string;
}

interface DashboardStats {
  totalContacts: number;
  newContacts: number;
  contactedContacts: number;
  convertedContacts: number;
}

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalContacts: 0,
    newContacts: 0,
    contactedContacts: 0,
    convertedContacts: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const router = useRouter();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          router.push('/admin/login');
          return;
        }

        const response = await fetch(`/api/contact/list?status=${statusFilter}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setContacts(data.data.contacts);
          
          // Calculate stats
          const statusSummary = data.data.statusSummary || {};
          setStats({
            totalContacts: data.data.pagination.total,
            newContacts: statusSummary.new || 0,
            contactedContacts: statusSummary.contacted || 0,
            convertedContacts: statusSummary.converted || 0
          });
        } else if (response.status === 401) {
          localStorage.removeItem('adminToken');
          router.push('/admin/login');
        }
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, [router, statusFilter]);

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/contact/list?status=${statusFilter}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setContacts(data.data.contacts);
        
        // Calculate stats
        const statusSummary = data.data.statusSummary || {};
        setStats({
          totalContacts: data.data.pagination.total,
          newContacts: statusSummary.new || 0,
          contactedContacts: statusSummary.contacted || 0,
          convertedContacts: statusSummary.converted || 0
        });
      } else if (response.status === 401) {
        localStorage.removeItem('adminToken');
        router.push('/admin/login');
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateContactStatus = async (contactId: string, newStatus: string) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/contact/${contactId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        fetchContacts(); // Refresh the list
      }
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const deleteContact = async (contactId: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/contact/${contactId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        fetchContacts(); // Refresh the list
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'qualified': return 'bg-purple-100 text-purple-800';
      case 'converted': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Simba Dispatch LLC Management</p>
            </div>
            <Button onClick={logout} variant="outline" className="flex items-center gap-2">
              <ArrowRightStartOnRectangleIcon className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <UsersIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Contacts</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalContacts}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <EnvelopeIcon className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">New Leads</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.newContacts}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <ChartBarIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Contacted</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.contactedContacts}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Cog6ToothIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Converted</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.convertedContacts}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <div className="flex gap-2">
            {['all', 'new', 'contacted', 'qualified', 'converted', 'closed'].map((status) => (
              <Button
                key={status}
                onClick={() => setStatusFilter(status)}
                variant={statusFilter === status ? 'default' : 'outline'}
                size="sm"
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Contacts Table */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            {contacts.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No contacts found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Contact</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Company</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Channels</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact._id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium text-gray-900">{contact.name}</p>
                            <p className="text-sm text-gray-600">{contact.email}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <p className="text-gray-900">{contact.companyName}</p>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex flex-wrap gap-1">
                            {contact.channels.slice(0, 2).map((channel, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {channel}
                              </Badge>
                            ))}
                            {contact.channels.length > 2 && (
                              <Badge variant="secondary" className="text-xs">
                                +{contact.channels.length - 2}
                              </Badge>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={getStatusColor(contact.status)}>
                            {contact.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <p className="text-sm text-gray-600">
                            {new Date(contact.submittedAt).toLocaleDateString()}
                          </p>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setSelectedContact(contact)}
                            >
                              <EyeIcon className="h-4 w-4" />
                            </Button>
                            <select
                              value={contact.status}
                              onChange={(e) => updateContactStatus(contact._id, e.target.value)}
                              className="text-xs border rounded px-2 py-1"
                              aria-label={`Update status for ${contact.name}`}
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="qualified">Qualified</option>
                              <option value="converted">Converted</option>
                              <option value="closed">Closed</option>
                            </select>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => deleteContact(contact._id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <TrashIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
              <Button
                onClick={() => setSelectedContact(null)}
                className="absolute top-4 right-4"
                variant="outline"
                size="sm"
              >
                ×
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Name</label>
                  <p className="text-gray-900">{selectedContact.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Email</label>
                  <p className="text-gray-900">{selectedContact.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Company</label>
                  <p className="text-gray-900">{selectedContact.companyName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Phone</label>
                  <p className="text-gray-900">{selectedContact.phone}</p>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-600">Sales Channels</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedContact.channels.map((channel, index) => (
                    <Badge key={index} variant="secondary">{channel}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Product Types</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedContact.productTypes.map((product, index) => (
                    <Badge key={index} variant="outline">{product}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Requirements</label>
                <p className="text-gray-900 mt-1">{selectedContact.requirements || 'No specific requirements'}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Submitted</label>
                <p className="text-gray-900">{new Date(selectedContact.submittedAt).toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}