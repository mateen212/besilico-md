import { motion } from 'motion/react';
import { useState } from 'react';
import { Search, Eye, Printer, Download, TrendingUp, Clock, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const mockOrders = [
  {
    id: '#ORD-2451',
    customer: 'Ali Hassan',
    items: 3,
    amount: 'PKR 2,850',
    status: 'pending',
    date: '2026-06-27',
    time: '2:30 PM',
    branch: 'Lahore',
  },
  {
    id: '#ORD-2450',
    customer: 'Zainab Khan',
    items: 2,
    amount: 'PKR 1,500',
    status: 'preparing',
    date: '2026-06-27',
    time: '1:15 PM',
    branch: 'Islamabad',
  },
  {
    id: '#ORD-2449',
    customer: 'Bilal Ahmed',
    items: 5,
    amount: 'PKR 4,200',
    status: 'ready',
    date: '2026-06-27',
    time: '12:45 PM',
    branch: 'Karachi',
  },
  {
    id: '#ORD-2448',
    customer: 'Sophia Ali',
    items: 1,
    amount: 'PKR 320',
    status: 'delivered',
    date: '2026-06-26',
    time: '6:20 PM',
    branch: 'Lahore',
  },
  {
    id: '#ORD-2447',
    customer: 'Faisal Khan',
    items: 4,
    amount: 'PKR 3,600',
    status: 'cancelled',
    date: '2026-06-26',
    time: '3:00 PM',
    branch: 'Multan',
  },
];

export function OrdersDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = mockOrders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'preparing':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'ready':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'delivered':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock size={14} />;
      case 'preparing':
        return <TrendingUp size={14} />;
      case 'ready':
        return <CheckCircle size={14} />;
      case 'delivered':
        return <CheckCircle size={14} />;
      case 'cancelled':
        return <XCircle size={14} />;
      default:
        return null;
    }
  };

  const stats = [
    { label: 'Total Orders', value: '2,451', color: 'text-blue-600' },
    { label: 'Pending', value: '12', color: 'text-orange-600' },
    { label: 'Delivered Today', value: '84', color: 'text-green-600' },
    { label: 'Avg. Order Value', value: 'PKR 1,850', color: 'text-purple-600' },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Orders</h1>
        <p className="text-gray-600 dark:text-gray-400">Live order tracking across all branches</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 flex gap-4 flex-wrap"
      >
        <div className="flex-1 min-w-80">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by order ID or customer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
            />
          </div>
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="preparing">Preparing</option>
          <option value="ready">Ready</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </motion.div>

      {/* Orders Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Order ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Customer</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Branch</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Items</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Time</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              {filtered.map((order, index) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{order.branch}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{order.items} items</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">{order.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{order.time}</td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold w-fit ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors">
                        <Eye size={16} className="text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors">
                        <Printer size={16} className="text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No orders found</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
