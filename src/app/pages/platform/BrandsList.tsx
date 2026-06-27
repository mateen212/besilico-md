import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Plus, Settings, Users, ShoppingCart, TrendingUp, MapPin } from 'lucide-react';

const brands = [
  {
    id: 1,
    name: 'Basilico',
    tagline: 'Authentic Italian Cuisine',
    status: 'active',
    branches: 3,
    employees: 35,
    customers: 850,
    revenue: 'PKR 1.8M',
    color: '#8B7355',
  },
  {
    id: 2,
    name: 'Panite',
    tagline: 'Premium Bakery & Pastries',
    status: 'active',
    branches: 2,
    employees: 20,
    customers: 390,
    revenue: 'PKR 600K',
    color: '#D4A574',
  },
];

export function BrandsList() {
  return (
    <div className="p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Brands</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage all brands under Sara Group</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          <Plus size={20} />
          New Brand
        </button>
      </motion.div>

      {/* Brands Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={`/admin/brands/${brand.id}`}>
              <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
                {/* Brand Header */}
                <div
                  className="h-24 transition-opacity group-hover:opacity-90"
                  style={{ backgroundColor: brand.color }}
                />

                {/* Brand Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{brand.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{brand.tagline}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold rounded-full">
                      {brand.status}
                    </span>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <MapPin size={16} className="text-blue-600" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{brand.branches}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Branches</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users size={16} className="text-purple-600" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{brand.employees}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Employees</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <ShoppingCart size={16} className="text-green-600" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{brand.customers}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Customers</p>
                    </div>
                  </div>

                  {/* Revenue & Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp size={16} className="text-green-600" />
                      <p className="font-semibold text-gray-900 dark:text-white">{brand.revenue}</p>
                    </div>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                      <Settings size={18} className="text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {brands.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <p className="text-gray-600 dark:text-gray-400">No brands found</p>
        </motion.div>
      )}
    </div>
  );
}
