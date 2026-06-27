import React from 'react';
import { motion } from 'motion/react';
import { Download, TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react';

const mockReportData = {
  revenue: [
    { month: 'Jan', basilico: 85000, panite: 25000 },
    { month: 'Feb', basilico: 92000, panite: 32000 },
    { month: 'Mar', basilico: 98000, panite: 38000 },
    { month: 'Apr', basilico: 110000, panite: 45000 },
    { month: 'May', basilico: 125000, panite: 52000 },
    { month: 'Jun', basilico: 135000, panite: 60000 },
  ],
  topProducts: [
    { name: 'Croissants Français', sales: 892, revenue: 'PKR 223K' },
    { name: 'Tagliatelle al Tartufo', sales: 245, revenue: 'PKR 208K' },
    { name: 'Sourdough Loaf', sales: 156, revenue: 'PKR 50K' },
    { name: 'Chocolate Éclairs', sales: 412, revenue: 'PKR 74K' },
    { name: 'Risotto ai Funghi Porcini', sales: 178, revenue: 'PKR 134K' },
  ],
  topCustomers: [
    { name: 'Bilal Ahmed', orders: 42, spent: 'PKR 285K', rating: 5.0 },
    { name: 'Faisal Khan', orders: 31, spent: 'PKR 198K', rating: 4.9 },
    { name: 'Ali Hassan', orders: 24, spent: 'PKR 125K', rating: 4.8 },
    { name: 'Zainab Khan', orders: 18, spent: 'PKR 92.5K', rating: 4.6 },
    { name: 'Sophia Ali', orders: 12, spent: 'PKR 78K', rating: 4.4 },
  ],
  branchPerformance: [
    { branch: 'Lahore', revenue: 'PKR 380K', orders: 842, customers: 456 },
    { branch: 'Islamabad', revenue: 'PKR 285K', orders: 612, customers: 324 },
    { branch: 'Karachi', revenue: 'PKR 320K', orders: 721, customers: 387 },
    { branch: 'Multan', revenue: 'PKR 125K', orders: 289, customers: 187 },
  ],
};

export function ReportsDashboard() {
  return (
    <div className="p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Reports & Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400">Platform performance insights and metrics</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          <Download size={20} />
          Export Report
        </button>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Revenue', value: 'PKR 1.11M', change: '+15.2%', icon: DollarSign, color: 'text-green-600' },
          { label: 'Total Orders', value: '2,464', change: '+12.5%', icon: ShoppingCart, color: 'text-blue-600' },
          { label: 'Active Customers', value: '1,354', change: '+8.7%', icon: Users, color: 'text-purple-600' },
          { label: 'Growth Rate', value: '+14.3%', change: 'Month over Month', icon: TrendingUp, color: 'text-orange-600' },
        ].map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-8 h-8 ${metric.color}`} />
                <span className="text-xs font-semibold text-green-600">{metric.change}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{metric.label}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Revenue Trend Simulation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6 mb-8"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Revenue Trend</h2>
        <div className="space-y-4">
          {mockReportData.revenue.map((item, index) => (
            <div key={item.month}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.month}</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  PKR {((item.basilico + item.panite) / 1000).toFixed(0)}K
                </span>
              </div>
              <div className="flex gap-2 h-6 rounded-full overflow-hidden bg-gray-200 dark:bg-slate-700">
                <div
                  className="bg-blue-500 transition-all"
                  style={{ width: `${(item.basilico / 200000) * 100}%` }}
                  title={`Basilico: PKR ${item.basilico / 1000}K`}
                />
                <div
                  className="bg-purple-500 transition-all"
                  style={{ width: `${(item.panite / 200000) * 100}%` }}
                  title={`Panite: PKR ${item.panite / 1000}K`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Basilico</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Panite</span>
          </div>
        </div>
      </motion.div>

      {/* Top Products & Customers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Top Products</h3>
          <div className="space-y-4">
            {mockReportData.topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-slate-700 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{index + 1}. {product.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{product.sales} sales</p>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">{product.revenue}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Customers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Top Customers</h3>
          <div className="space-y-4">
            {mockReportData.topCustomers.map((customer, index) => (
              <div key={customer.name} className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-slate-700 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{index + 1}. {customer.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-600 dark:text-gray-400">{customer.orders} orders</span>
                    <span className="text-xs font-semibold text-yellow-600">★ {customer.rating}</span>
                  </div>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">{customer.spent}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Branch Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
      >
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Branch Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-slate-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Branch</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Revenue</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Orders</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Customers</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Avg Order</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              {mockReportData.branchPerformance.map((branch) => (
                <tr key={branch.branch} className="hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{branch.branch}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{branch.revenue}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{branch.orders}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{branch.customers}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    PKR {Math.round(parseInt(branch.revenue.split(' ')[1]) * 1000 / branch.orders)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
