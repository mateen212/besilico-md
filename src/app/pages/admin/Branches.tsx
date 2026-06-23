import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Edit2, Trash2, MapPin, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { getThemeColors } from '../../styles/themes';
import { useBranches } from '../../context/BranchContext';
import { basilico } from '../../data/basilico-config';

export function AdminBranches() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  const { activeBranches } = useBranches();
  const [showForm, setShowForm] = useState(false);

  const allBranches = basilico.branches;

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <h1 style={{ fontFamily: 'Playfair Display', color: colors.text }} className="text-3xl mb-2">
            Branch Management
          </h1>
          <p style={{ fontFamily: 'Inter', color: colors.textMuted }}>
            Manage all Basilico by Sara locations ({allBranches.length} branches)
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300"
          style={{
            backgroundColor: colors.primary,
            color: colors.background,
            fontFamily: 'Inter',
          }}
        >
          <Plus size={20} />
          Add Branch
        </button>
      </motion.div>

      {/* Add Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-6 rounded-xl mb-8"
          style={{ backgroundColor: colors.cardBg }}
        >
          <h2 style={{ fontFamily: 'Playfair Display', color: colors.text }} className="text-xl mb-4">
            Add New Branch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label style={{ fontFamily: 'Inter', color: colors.text }} className="block text-sm font-medium mb-2">
                Branch Name
              </label>
              <input
                type="text"
                placeholder="e.g., Basilico Milano"
                className="w-full px-4 py-2 rounded-lg border transition-colors"
                style={{
                  backgroundColor: colors.background,
                  borderColor: colors.accent + '40',
                  color: colors.text,
                  fontFamily: 'Inter',
                }}
              />
            </div>
            <div>
              <label style={{ fontFamily: 'Inter', color: colors.text }} className="block text-sm font-medium mb-2">
                Type
              </label>
              <select
                className="w-full px-4 py-2 rounded-lg border"
                style={{
                  backgroundColor: colors.background,
                  borderColor: colors.accent + '40',
                  color: colors.text,
                  fontFamily: 'Inter',
                }}
              >
                <option>Restaurant</option>
                <option>Café</option>
              </select>
            </div>
            <div>
              <label style={{ fontFamily: 'Inter', color: colors.text }} className="block text-sm font-medium mb-2">
                City
              </label>
              <input
                type="text"
                placeholder="e.g., Milan"
                className="w-full px-4 py-2 rounded-lg border"
                style={{
                  backgroundColor: colors.background,
                  borderColor: colors.accent + '40',
                  color: colors.text,
                  fontFamily: 'Inter',
                }}
              />
            </div>
            <div>
              <label style={{ fontFamily: 'Inter', color: colors.text }} className="block text-sm font-medium mb-2">
                Status
              </label>
              <select
                className="w-full px-4 py-2 rounded-lg border"
                style={{
                  backgroundColor: colors.background,
                  borderColor: colors.accent + '40',
                  color: colors.text,
                  fontFamily: 'Inter',
                }}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button
              className="px-6 py-2 rounded-lg font-medium"
              style={{
                backgroundColor: colors.primary,
                color: colors.background,
                fontFamily: 'Inter',
              }}
            >
              Save Branch
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="px-6 py-2 rounded-lg border font-medium"
              style={{
                borderColor: colors.accent + '40',
                color: colors.text,
                fontFamily: 'Inter',
              }}
            >
              Cancel
            </button>
          </div>
        </motion.div>
      )}

      {/* Branches Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-xl overflow-hidden"
        style={{ backgroundColor: colors.cardBg }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: colors.background + '80' }}>
                <th
                  style={{ fontFamily: 'Inter', color: colors.text }}
                  className="px-6 py-4 text-left font-semibold text-sm"
                >
                  Branch Name
                </th>
                <th
                  style={{ fontFamily: 'Inter', color: colors.text }}
                  className="px-6 py-4 text-left font-semibold text-sm"
                >
                  Type
                </th>
                <th
                  style={{ fontFamily: 'Inter', color: colors.text }}
                  className="px-6 py-4 text-left font-semibold text-sm"
                >
                  Location
                </th>
                <th
                  style={{ fontFamily: 'Inter', color: colors.text }}
                  className="px-6 py-4 text-left font-semibold text-sm"
                >
                  Status
                </th>
                <th
                  style={{ fontFamily: 'Inter', color: colors.text }}
                  className="px-6 py-4 text-left font-semibold text-sm"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {allBranches.map((branch, index) => (
                <tr
                  key={branch.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? 'transparent' : colors.background + '40',
                    borderBottom: `1px solid ${colors.accent}20`,
                  }}
                >
                  <td className="px-6 py-4">
                    <div>
                      <p style={{ fontFamily: 'Playfair Display', color: colors.text }} className="font-semibold">
                        {branch.name}
                      </p>
                      <p style={{ fontFamily: 'Inter', color: colors.textMuted }} className="text-sm">
                        {branch.menu.length} menu items
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor:
                          branch.type === 'restaurant'
                            ? colors.primary + '20'
                            : colors.accent + '20',
                        color: branch.type === 'restaurant' ? colors.primary : colors.accent,
                      }}
                    >
                      {branch.type === 'restaurant' ? 'Restaurant' : 'Café'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2" style={{ color: colors.text }}>
                      <MapPin size={16} />
                      <span style={{ fontFamily: 'Inter' }}>
                        {branch.location.city}, {branch.location.country}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor:
                          branch.status === 'active'
                            ? '#10b981' + '20'
                            : colors.accent + '20',
                        color: branch.status === 'active' ? '#10b981' : colors.accent,
                      }}
                    >
                      {branch.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-3">
                      <button
                        className="p-2 rounded-lg transition-all duration-300"
                        style={{ backgroundColor: colors.background, color: colors.primary }}
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        className="p-2 rounded-lg transition-all duration-300"
                        style={{ backgroundColor: colors.background, color: '#ef4444' }}
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-6 rounded-xl text-center"
          style={{ backgroundColor: colors.cardBg }}
        >
          <Globe size={32} className="mx-auto mb-4" style={{ color: colors.primary }} />
          <p style={{ fontFamily: 'Inter', color: colors.textMuted }} className="text-sm mb-2">
            Total Branches
          </p>
          <p style={{ fontFamily: 'Playfair Display', color: colors.text }} className="text-3xl font-bold">
            {allBranches.length}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-6 rounded-xl text-center"
          style={{ backgroundColor: colors.cardBg }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold"
            style={{ backgroundColor: '#10b981', color: 'white' }}
          >
            {activeBranches.length}
          </div>
          <p style={{ fontFamily: 'Inter', color: colors.textMuted }} className="text-sm mb-2">
            Active
          </p>
          <p style={{ fontFamily: 'Playfair Display', color: colors.text }} className="text-3xl font-bold">
            {((activeBranches.length / allBranches.length) * 100).toFixed(0)}%
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-6 rounded-xl text-center"
          style={{ backgroundColor: colors.cardBg }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold"
            style={{ backgroundColor: colors.primary, color: colors.background }}
          >
            {allBranches.reduce((sum, b) => sum + b.menu.length, 0)}
          </div>
          <p style={{ fontFamily: 'Inter', color: colors.textMuted }} className="text-sm mb-2">
            Total Menu Items
          </p>
          <p style={{ fontFamily: 'Playfair Display', color: colors.text }} className="text-3xl font-bold">
            Across All
          </p>
        </motion.div>
      </div>
    </div>
  );
}
