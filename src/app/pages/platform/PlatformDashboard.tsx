import { motion } from 'motion/react';
import { TrendingUp, Users, Store, ShoppingCart, DollarSign, AlertCircle } from 'lucide-react';

const stats = [
  { label: 'Total Revenue', value: 'PKR 2.4M', change: '+12.5%', icon: DollarSign },
  { label: 'Active Brands', value: '2', change: '+100%', icon: Store },
  { label: 'Total Customers', value: '1,240', change: '+8.2%', icon: Users },
  { label: 'Orders Today', value: '84', change: '+23%', icon: ShoppingCart },
];

const recentActivities = [
  { id: 1, type: 'order', title: 'New order from Karachi branch', time: '2 hours ago', status: 'pending' },
  { id: 2, type: 'customer', title: 'New customer registered', time: '4 hours ago', status: 'success' },
  { id: 3, type: 'product', title: 'Inventory low for Basilico Pasta', time: '6 hours ago', status: 'warning' },
  { id: 4, type: 'order', title: 'Order #2451 delivered', time: '1 day ago', status: 'success' },
  { id: 5, type: 'branch', title: 'Lahore branch report submitted', time: '2 days ago', status: 'success' },
];

export function PlatformDashboard() {
  return (
    <div className="p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Super Admin Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Sara Group Multi-Brand SaaS Platform</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-green-600">{stat.change}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700"
        >
          <div className="p-6 border-b border-gray-200 dark:border-slate-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Activities</h2>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-slate-700">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="p-4 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">{activity.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    activity.status === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    activity.status === 'warning' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {activity.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          {/* System Health */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">System Health</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Server Status</span>
                  <span className="text-sm font-semibold text-green-600">Online</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Database</span>
                  <span className="text-sm font-semibold text-green-600">98%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">API Rate</span>
                  <span className="text-sm font-semibold text-blue-600">45/sec</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Brands */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Top Brands</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Basilico</span>
                <span className="text-sm font-bold text-blue-600">PKR 1.8M</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Panite</span>
                <span className="text-sm font-bold text-purple-600">PKR 600K</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
