import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, Clock, MapPin, Star, LogOut } from 'lucide-react';

const customerOrders = [
  { id: '#ORD-2451', items: 3, total: 'PKR 2,850', status: 'preparing', date: '2026-06-27' },
  { id: '#ORD-2448', items: 1, total: 'PKR 320', status: 'delivered', date: '2026-06-26' },
  { id: '#ORD-2440', items: 5, total: 'PKR 4,200', status: 'delivered', date: '2026-06-20' },
];

const wishlist = [
  { name: 'Croissants Français', price: 'PKR 250', image: '🥐' },
  { name: 'Chocolate Éclairs', price: 'PKR 180', image: '🍫' },
];

export function CustomerPortal() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Account</h1>
            <p className="text-gray-600 dark:text-gray-400">Welcome, Bilal Ahmed!</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6 mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-2xl font-semibold">
                BA
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Bilal Ahmed</h2>
                <div className="flex items-center gap-4 mt-2">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 text-xs font-semibold rounded-full">
                    Platinum Member
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Spent</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">PKR 285K</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Orders', value: '42', icon: ShoppingCart, color: 'text-blue-600' },
            { label: 'Wishlist', value: '8', icon: Heart, color: 'text-red-600' },
            { label: 'Loyalty Points', value: '1,250', icon: Star, color: 'text-yellow-600' },
            { label: 'Last Order', value: '2 days ago', icon: Clock, color: 'text-green-600' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
              >
                <Icon className={`w-6 h-6 ${stat.color} mb-3`} />
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recent Orders</h3>
            <div className="space-y-4">
              {customerOrders.map((order) => (
                <div key={order.id} className="p-4 border border-gray-200 dark:border-slate-700 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{order.id}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{order.items} items • {order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 dark:text-white">{order.total}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'delivered'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Wishlist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Heart size={20} className="text-red-600" />
              My Wishlist
            </h3>
            <div className="space-y-3">
              {wishlist.map((item) => (
                <div key={item.name} className="p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-2xl mb-2">{item.image}</div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">{item.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.price}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Addresses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <MapPin size={20} />
            Delivery Addresses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50 dark:bg-green-900/10">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Home</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">123 Main Street, Lahore, Punjab 54000</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Phone: +92 300 123 4567</p>
            </div>
            <div className="p-4 border-2 border-gray-300 dark:border-slate-600 rounded-lg">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Office</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">456 Business Park, Lahore, Punjab 54100</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Phone: +92 300 234 5678</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
