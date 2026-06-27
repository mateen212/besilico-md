import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Eye, MoreVertical, TrendingUp, Package, AlertCircle } from 'lucide-react';

const mockProducts = [
  {
    id: 1,
    name: 'Tagliatelle al Tartufo',
    category: 'Pasta',
    brand: 'Basilico',
    price: 'PKR 850',
    stock: 12,
    status: 'active',
    sales: 245,
    rating: 4.9,
    image: '🍝',
  },
  {
    id: 2,
    name: 'Croissants Français',
    category: 'Pastry',
    brand: 'Panite',
    price: 'PKR 250',
    stock: 48,
    status: 'active',
    sales: 892,
    rating: 4.8,
    image: '🥐',
  },
  {
    id: 3,
    name: 'Risotto ai Funghi Porcini',
    category: 'Main Course',
    brand: 'Basilico',
    price: 'PKR 750',
    stock: 5,
    status: 'low-stock',
    sales: 178,
    rating: 4.7,
    image: '🍚',
  },
  {
    id: 4,
    name: 'Sourdough Loaf',
    category: 'Bread',
    brand: 'Panite',
    price: 'PKR 320',
    stock: 2,
    status: 'low-stock',
    sales: 156,
    rating: 4.9,
    image: '🍞',
  },
  {
    id: 5,
    name: 'Chocolate Éclairs',
    category: 'Dessert',
    brand: 'Panite',
    price: 'PKR 180',
    stock: 35,
    status: 'active',
    sales: 412,
    rating: 4.8,
    image: '🍫',
  },
  {
    id: 6,
    name: 'Bruschetta Classica',
    category: 'Appetizer',
    brand: 'Basilico',
    price: 'PKR 350',
    stock: 0,
    status: 'out-of-stock',
    sales: 98,
    rating: 4.6,
    image: '🍞',
  },
];

export function ProductsManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'low-stock':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'out-of-stock':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  const stats = [
    { label: 'Total Products', value: '150+', icon: Package, color: 'text-blue-600' },
    { label: 'In Stock', value: '102', icon: Package, color: 'text-green-600' },
    { label: 'Low Stock', value: '2', icon: AlertCircle, color: 'text-yellow-600' },
    { label: 'Out of Stock', value: '1', icon: AlertCircle, color: 'text-red-600' },
  ];

  const categories = ['all', 'Pasta', 'Pastry', 'Main Course', 'Bread', 'Appetizer', 'Dessert'];

  return (
    <div className="p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Products</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage inventory across all brands</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          <Plus size={20} />
          Add Product
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
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
            />
          </div>
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'All Categories' : cat}
            </option>
          ))}
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="low-stock">Low Stock</option>
          <option value="out-of-stock">Out of Stock</option>
        </select>
      </motion.div>

      {/* Products Table */}
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
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Product</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Price</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Stock</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Sales</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              {filtered.map((product, index) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-2xl">
                        {product.image}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{product.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{product.brand}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{product.category}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">{product.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{product.stock}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white">
                      <TrendingUp size={14} className="text-green-600" />
                      {product.sales}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(product.status)}`}>
                      {product.status === 'low-stock' ? 'Low Stock' : product.status === 'out-of-stock' ? 'Out of Stock' : 'Active'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors">
                        <Eye size={16} className="text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors">
                        <Edit2 size={16} className="text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors">
                        <Trash2 size={16} className="text-red-600" />
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
            <p className="text-gray-600 dark:text-gray-400">No products found</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
