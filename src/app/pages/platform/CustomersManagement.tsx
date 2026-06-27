import React from 'react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Search, Star, TrendingUp, Heart, ShoppingCart } from 'lucide-react';

const mockCustomers = [
  {
    id: 1,
    name: 'Ali Hassan',
    email: 'ali.hassan@gmail.com',
    phone: '+92 300 111 2222',
    totalOrders: 24,
    totalSpent: 'PKR 125,000',
    lastOrder: '2 days ago',
    loyalty: 'Gold',
    rating: 4.8,
    avatar: 'AH',
  },
  {
    id: 2,
    name: 'Zainab Khan',
    email: 'zainab.khan@gmail.com',
    phone: '+92 300 222 3333',
    totalOrders: 18,
    totalSpent: 'PKR 92,500',
    lastOrder: '5 days ago',
    loyalty: 'Silver',
    rating: 4.6,
    avatar: 'ZK',
  },
  {
    id: 3,
    name: 'Bilal Ahmed',
    email: 'bilal.ahmed@gmail.com',
    phone: '+92 300 333 4444',
    totalOrders: 42,
    totalSpent: 'PKR 285,000',
    lastOrder: '1 day ago',
    loyalty: 'Platinum',
    rating: 5.0,
    avatar: 'BA',
  },
  {
    id: 4,
    name: 'Sophia Ali',
    email: 'sophia.ali@gmail.com',
    phone: '+92 300 444 5555',
    totalOrders: 12,
    totalSpent: 'PKR 78,000',
    lastOrder: '1 week ago',
    loyalty: 'Bronze',
    rating: 4.4,
    avatar: 'SA',
  },
  {
    id: 5,
    name: 'Faisal Khan',
    email: 'faisal.khan@gmail.com',
    phone: '+92 300 555 6666',
    totalOrders: 31,
    totalSpent: 'PKR 198,500',
    lastOrder: '3 days ago',
    loyalty: 'Gold',
    rating: 4.9,
    avatar: 'FK',
  },
];

export function CustomersManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [loyaltyFilter, setLoyaltyFilter] = useState('all');

  const filtered = mockCustomers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLoyalty = loyaltyFilter === 'all' || customer.loyalty === loyaltyFilter;
    return matchesSearch && matchesLoyalty;
  });

  const getLoyaltyColor = (loyalty: string) => {
    switch (loyalty) {
      case 'Platinum':
        return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200';
      case 'Gold':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Silver':
        return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200';
      case 'Bronze':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  const stats = [
    { label: 'Total Customers', value: '1,240', icon: ShoppingCart, color: 'text-blue-600' },
    { label: 'Avg. Lifetime Value', value: 'PKR 145K', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Repeat Customers', value: '68%', icon: Heart, color: 'text-red-600' },
    { label: 'Avg. Rating', value: '4.7/5', icon: Star, color: 'text-yellow-600' },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Customers</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage customer profiles and loyalty</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          <Plus size={20} />
          Add Customer
        </button>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            </motion.div>
          );
        })}
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
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
            />
          </div>
        </div>
        <select
          value={loyaltyFilter}
          onChange={(e) => setLoyaltyFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
        >
          <option value="all">All Tiers</option>
          <option value="Platinum">Platinum</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Bronze">Bronze</option>
        </select>
      </motion.div>

      {/* Customer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((customer, index) => (
          <motion.div
            key={customer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-semibold">
                  {customer.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{customer.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{customer.email}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLoyaltyColor(customer.loyalty)}`}>
                {customer.loyalty}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(customer.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">{customer.rating}</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg mb-4">
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Orders</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{customer.totalOrders}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Total Spent</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">{customer.totalSpent}</p>
              </div>
            </div>

            {/* Last Order */}
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
              Last order: {customer.lastOrder}
            </p>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <p className="text-gray-600 dark:text-gray-400">No customers found</p>
        </motion.div>
      )}
    </div>
  );
}
