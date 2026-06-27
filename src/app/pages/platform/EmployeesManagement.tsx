import React from 'react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Search, MoreVertical, Mail, Phone, MapPin, Clock, Trash2, Edit2 } from 'lucide-react';

const mockEmployees = [
  {
    id: 1,
    name: 'Ahmed Khan',
    role: 'Chef',
    department: 'Kitchen',
    email: 'ahmed.khan@basilico.pk',
    phone: '+92 300 123 4567',
    branch: 'Lahore',
    joinDate: '2023-01-15',
    status: 'active',
    salary: 'PKR 80,000',
    avatar: 'AK',
  },
  {
    id: 2,
    name: 'Fatima Ali',
    role: 'Restaurant Manager',
    department: 'Management',
    email: 'fatima@basilico.pk',
    phone: '+92 300 234 5678',
    branch: 'Islamabad',
    joinDate: '2022-06-10',
    status: 'active',
    salary: 'PKR 75,000',
    avatar: 'FA',
  },
  {
    id: 3,
    name: 'Hassan Raza',
    role: 'Head Chef',
    department: 'Kitchen',
    email: 'hassan@basilico.pk',
    phone: '+92 300 345 6789',
    branch: 'Karachi',
    joinDate: '2021-03-20',
    status: 'active',
    salary: 'PKR 120,000',
    avatar: 'HR',
  },
  {
    id: 4,
    name: 'Sara Ahmed',
    role: 'Pastry Chef',
    department: 'Kitchen',
    email: 'sara@panite.pk',
    phone: '+92 300 456 7890',
    branch: 'Lahore',
    joinDate: '2023-08-05',
    status: 'active',
    salary: 'PKR 85,000',
    avatar: 'SA',
  },
  {
    id: 5,
    name: 'Zara Khan',
    role: 'Bakery Manager',
    department: 'Management',
    email: 'zara@panite.pk',
    phone: '+92 300 567 8901',
    branch: 'Multan',
    joinDate: '2023-02-14',
    status: 'active',
    salary: 'PKR 70,000',
    avatar: 'ZK',
  },
];

export function EmployeesManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filtered = mockEmployees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          emp.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || emp.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Head Chef':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Chef':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Manager':
      case 'Restaurant Manager':
      case 'Bakery Manager':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Employees</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage all staff members across branches</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          <Plus size={20} />
          Add Employee
        </button>
      </motion.div>

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
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </motion.div>

      {/* Employee Table */}
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
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Employee</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Role</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Branch</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Contact</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              {filtered.map((emp, index) => (
                <motion.tr
                  key={emp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                        {emp.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{emp.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{emp.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRoleColor(emp.role)}`}>
                      {emp.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{emp.branch}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <Phone size={14} />
                      {emp.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold rounded-full">
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
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
            <p className="text-gray-600 dark:text-gray-400">No employees found</p>
          </div>
        )}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8"
      >
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Total Employees</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">60+</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Active</p>
          <p className="text-3xl font-bold text-green-600">58</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">On Leave</p>
          <p className="text-3xl font-bold text-yellow-600">2</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">New This Month</p>
          <p className="text-3xl font-bold text-blue-600">5</p>
        </div>
      </motion.div>
    </div>
  );
}
