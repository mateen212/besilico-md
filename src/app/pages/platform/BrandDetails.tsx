import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Settings, BarChart3, Users, ShoppingCart, MapPin } from 'lucide-react';

const brandData = {
  1: {
    name: 'Basilico',
    tagline: 'Authentic Italian Cuisine',
    color: '#8B7355',
    status: 'active',
    subscription: 'Premium',
    domain: 'basilico.saragroup.demo',
    branches: [
      { id: 1, name: 'Lahore', manager: 'Ahmed Khan', employees: 12, status: 'active' },
      { id: 2, name: 'Islamabad', manager: 'Fatima Ali', employees: 10, status: 'active' },
      { id: 3, name: 'Karachi', manager: 'Hassan Raza', employees: 13, status: 'active' },
    ],
    stats: {
      revenue: 'PKR 1.8M',
      customers: 850,
      orders: 2340,
      employees: 35,
    },
  },
  2: {
    name: 'Panite',
    tagline: 'Premium Bakery & Pastries',
    color: '#D4A574',
    status: 'active',
    subscription: 'Premium',
    domain: 'panite.saragroup.demo',
    branches: [
      { id: 1, name: 'Lahore', manager: 'Sara Ahmed', employees: 10, status: 'active' },
      { id: 2, name: 'Multan', manager: 'Zara Khan', employees: 10, status: 'active' },
    ],
    stats: {
      revenue: 'PKR 600K',
      customers: 390,
      orders: 860,
      employees: 20,
    },
  },
};

export function BrandDetails() {
  const { brandId } = useParams();
  const navigate = useNavigate();
  const brand = brandData[parseInt(brandId || '1')];

  if (!brand) {
    return (
      <div className="p-8">
        <p className="text-gray-600">Brand not found</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <button
          onClick={() => navigate('/admin/brands')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Brands
        </button>

        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{brand.name}</h1>
            <p className="text-gray-600 dark:text-gray-400">{brand.tagline}</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Settings size={18} />
              Settings
            </button>
          </div>
        </div>
      </motion.div>

      {/* Brand Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6 mb-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Domain</p>
            <p className="font-semibold text-gray-900 dark:text-white">{brand.domain}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Status</p>
            <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-sm font-semibold rounded-full inline-block">
              {brand.status}
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Subscription</p>
            <p className="font-semibold text-gray-900 dark:text-white">{brand.subscription}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Branches</p>
            <p className="font-semibold text-gray-900 dark:text-white">{brand.branches.length}</p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Revenue', value: brand.stats.revenue, icon: BarChart3 },
          { label: 'Customers', value: brand.stats.customers, icon: Users },
          { label: 'Orders', value: brand.stats.orders, icon: ShoppingCart },
          { label: 'Employees', value: brand.stats.employees, icon: Users },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Branches */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700"
      >
        <div className="p-6 border-b border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <MapPin size={20} />
            Branches
          </h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-slate-700">
          {brand.branches.map((branch) => (
            <div key={branch.id} className="p-6 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{branch.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Manager: {branch.manager}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{branch.employees}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Employees</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold rounded-full">
                    {branch.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
