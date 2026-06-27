import React from 'react';
import { motion } from 'motion/react';
import { Users, ShoppingCart, TrendingUp, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const branchStats = {
  name: 'Lahore Branch',
  manager: 'Ahmed Khan',
  revenue: 'PKR 380K',
  orders: 842,
  employees: 12,
  openingHours: '10:00 AM - 11:00 PM',
};

const todaysOrders = [
  { id: '#ORD-2451', customer: 'Ali Hassan', items: 3, status: 'pending', time: '2:30 PM' },
  { id: '#ORD-2450', customer: 'Zainab Khan', items: 2, status: 'preparing', time: '1:15 PM' },
  { id: '#ORD-2449', customer: 'Bilal Ahmed', items: 5, status: 'ready', time: '12:45 PM' },
];

const staffSchedule = [
  { name: 'Fatima Ali', role: 'Shift Manager', time: '10:00 AM - 6:00 PM', status: 'on-duty' },
  { name: 'Hassan Raza', role: 'Chef', time: '11:00 AM - 8:00 PM', status: 'on-duty' },
  { name: 'Sara Ahmed', role: 'Waitstaff', time: '2:00 PM - 10:00 PM', status: 'upcoming' },
];

export function BranchManagerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{branchStats.name}</h1>
          <p className="text-gray-600 dark:text-gray-400">Manager: {branchStats.manager}</p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Today\'s Revenue', value: branchStats.revenue, icon: TrendingUp, color: 'text-green-600' },
            { label: 'Orders Today', value: '45', icon: ShoppingCart, color: 'text-blue-600' },
            { label: 'On Duty', value: branchStats.employees, icon: Users, color: 'text-purple-600' },
            { label: 'Closes', value: branchStats.openingHours.split('-')[1], icon: Clock, color: 'text-orange-600' },
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
          {/* Today's Orders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Today's Orders</h3>
            <div className="space-y-3">
              {todaysOrders.map((order) => (
                <div key={order.id} className="p-4 border border-gray-200 dark:border-slate-700 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{order.id}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{order.items} items</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${
                        order.status === 'pending'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          : order.status === 'preparing'
                          ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                          : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <AlertCircle size={20} className="text-yellow-600" />
              Branch Alerts
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Low Inventory</p>
                <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">Sourdough loaf stock low (2 units)</p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm font-medium text-blue-800 dark:text-blue-200">Staff Coming In</p>
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">Sara Ahmed arrives at 2:00 PM</p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-sm font-medium text-green-800 dark:text-green-200 flex items-center gap-1">
                  <CheckCircle size={14} />
                  Target Achieved
                </p>
                <p className="text-xs text-green-700 dark:text-green-300 mt-1">Today's revenue target met</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Staff Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Users size={20} />
            Today's Staff Schedule
          </h3>
          <div className="space-y-3">
            {staffSchedule.map((staff) => (
              <div key={staff.name} className="p-4 border border-gray-200 dark:border-slate-700 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{staff.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{staff.role}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{staff.time}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    staff.status === 'on-duty'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {staff.status === 'on-duty' ? 'On Duty' : 'Upcoming'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
