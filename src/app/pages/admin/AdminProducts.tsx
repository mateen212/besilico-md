import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router';
import { Search, Plus, Filter, Download, Upload, ChevronLeft, ChevronRight, MoreHorizontal, Star, Eye, EyeOff } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const products = [
  { id: 1, name: 'Tagliatelle al Tartufo', category: 'Pasta', price: 32, available: true, featured: true, image: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=80&h=80&fit=crop&auto=format', status: 'Active', orders: 284 },
  { id: 2, name: 'Risotto ai Funghi Porcini', category: 'Pasta', price: 28, available: true, featured: true, image: 'https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?w=80&h=80&fit=crop&auto=format', status: 'Active', orders: 241 },
  { id: 3, name: 'Bruschetta al Pomodoro', category: 'Antipasti', price: 14, available: true, featured: false, image: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=80&h=80&fit=crop&auto=format', status: 'Active', orders: 198 },
  { id: 4, name: 'Carbonara Tradizionale', category: 'Pasta', price: 22, available: true, featured: false, image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=80&h=80&fit=crop&auto=format', status: 'Active', orders: 176 },
  { id: 5, name: 'Osso Buco alla Milanese', category: 'Secondi', price: 38, available: false, featured: false, image: 'https://images.unsplash.com/photo-1628543108325-1c27cd7246b3?w=80&h=80&fit=crop&auto=format', status: 'Seasonal', orders: 142 },
  { id: 6, name: 'Tiramisù della Nonna', category: 'Dolci', price: 12, available: true, featured: true, image: 'https://images.unsplash.com/photo-1698688334089-c68105801d02?w=80&h=80&fit=crop&auto=format', status: 'Active', orders: 198 },
  { id: 7, name: 'Barolo DOCG', category: 'Vini', price: 85, available: true, featured: false, image: 'https://images.unsplash.com/photo-1596142332133-327e2a0ff006?w=80&h=80&fit=crop&auto=format', status: 'Active', orders: 94 },
  { id: 8, name: 'Insalata Caprese', category: 'Antipasti', price: 16, available: true, featured: false, image: 'https://images.unsplash.com/photo-1610817153377-e54299ffdb1e?w=80&h=80&fit=crop&auto=format', status: 'Active', orders: 132 },
];

const statusStyle: Record<string, string> = { Active: '#5C7A38', Seasonal: '#C9A86A', Draft: '#B8B1A8', Archived: '#9B2D3E' };
const categories = ['All', 'Antipasti', 'Pasta', 'Secondi', 'Dolci', 'Vini'];

export function AdminProducts() {
  const { isDark } = useTheme();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState<number[]>([]);
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const bgColor = isDark ? '#12110F' : '#F8F6F3';
  const cardBg = isDark ? '#1B1917' : '#FFFFFF';
  const textColor = isDark ? '#F3ECDD' : '#2D2D2D';
  const mutedText = isDark ? '#B8B1A8' : '#999999';
  const borderColor = isDark ? 'rgba(201,168,106,0.10)' : 'rgba(201,168,106,0.15)';
  const inputBg = isDark ? '#252320' : '#F5F5F5';
  const hoverBg = isDark ? 'rgba(201,168,106,0.08)' : 'rgba(201,168,106,0.1)';

  const filtered = products.filter(p =>
    (category === 'All' || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (id: number) =>
    setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);

  return (
    <div className="p-6 space-y-6 transition-colors" style={{ backgroundColor: bgColor, minHeight: '100%' }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1 transition-colors" style={{ color: textColor, fontFamily: 'Playfair Display' }}>Products</h1>
          <p className="text-sm transition-colors" style={{ color: mutedText }}>{products.length} items on the menu</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all" style={{ backgroundColor: hoverBg, color: '#C9A86A', border: `1px solid ${borderColor}` }}>
            <Upload size={15} /> Export
          </button>
          <Link to="/admin/products/new" className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-colors" style={{ backgroundColor: '#C9A86A', color: bgColor, fontWeight: 500 }}>
            <Plus size={15} /> New Product
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-2xl p-4 transition-colors" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: mutedText }} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm focus:outline-none transition-colors"
              style={{ backgroundColor: inputBg, color: textColor, border: `1px solid ${borderColor}` }}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className="px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-all"
                style={{
                  backgroundColor: category === c ? '#C9A86A' : hoverBg,
                  color: category === c ? bgColor : mutedText,
                  fontWeight: category === c ? 500 : 400,
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-colors" style={{ backgroundColor: hoverBg, color: mutedText, border: `1px solid ${borderColor}` }}>
            <Filter size={15} /> Filter
          </button>
        </div>

        {selected.length > 0 && (
          <div className="mt-3 pt-3 flex items-center gap-3 transition-colors" style={{ borderTop: borderColor }}>
            <span className="text-sm" style={{ color: '#C9A86A' }}>{selected.length} selected</span>
            <button className="text-sm px-3 py-1 rounded-lg" style={{ backgroundColor: 'rgba(92,122,56,0.15)', color: '#5C7A38' }}>Make Available</button>
            <button className="text-sm px-3 py-1 rounded-lg" style={{ backgroundColor: 'rgba(155,45,62,0.15)', color: '#9B2D3E' }}>Archive</button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="rounded-2xl overflow-hidden transition-colors" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: `1px solid ${borderColor}` }}>
              <th className="p-4 text-left w-10">
                <input
                  type="checkbox"
                  className="rounded"
                  onChange={e => setSelected(e.target.checked ? filtered.map(p => p.id) : [])}
                  checked={selected.length === filtered.length && filtered.length > 0}
                />
              </th>
              <th className="p-4 text-left text-xs font-medium tracking-wider uppercase transition-colors" style={{ color: mutedText }}>Product</th>
              <th className="p-4 text-left text-xs font-medium tracking-wider uppercase hidden md:table-cell transition-colors" style={{ color: mutedText }}>Category</th>
              <th className="p-4 text-left text-xs font-medium tracking-wider uppercase transition-colors" style={{ color: mutedText }}>Price</th>
              <th className="p-4 text-left text-xs font-medium tracking-wider uppercase hidden lg:table-cell transition-colors" style={{ color: mutedText }}>Orders</th>
              <th className="p-4 text-left text-xs font-medium tracking-wider uppercase hidden lg:table-cell transition-colors" style={{ color: mutedText }}>Featured</th>
              <th className="p-4 text-left text-xs font-medium tracking-wider uppercase transition-colors" style={{ color: mutedText }}>Status</th>
              <th className="p-4 text-left text-xs font-medium tracking-wider uppercase transition-colors" style={{ color: mutedText }}>Available</th>
              <th className="p-4 w-10" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((product, i) => (
              <tr
                key={product.id}
                className="transition-all"
                style={{
                  borderBottom: i < filtered.length - 1 ? `1px solid ${borderColor}` : 'none',
                  backgroundColor: selected.includes(product.id) ? hoverBg : 'transparent',
                }}
              >
                <td className="p-4">
                  <input type="checkbox" className="rounded" checked={selected.includes(product.id)} onChange={() => toggleSelect(product.id)} />
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={product.image} alt={product.name} className="w-10 h-10 rounded-xl object-cover flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium transition-colors" style={{ color: textColor }}>{product.name}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <span className="text-xs px-2.5 py-1 rounded-full transition-colors" style={{ backgroundColor: hoverBg, color: '#C9A86A' }}>
                    {product.category}
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-sm font-medium transition-colors" style={{ color: textColor }}>€{product.price}</span>
                </td>
                <td className="p-4 hidden lg:table-cell">
                  <span className="text-sm transition-colors" style={{ color: mutedText }}>{product.orders}</span>
                </td>
                <td className="p-4 hidden lg:table-cell">
                  <Star size={16} style={{ color: product.featured ? '#C9A86A' : 'rgba(201,168,106,0.2)' }} fill={product.featured ? '#C9A86A' : 'none'} />
                </td>
                <td className="p-4">
                  <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: `${statusStyle[product.status]}18`, color: statusStyle[product.status] }}>
                    {product.status}
                  </span>
                </td>
                <td className="p-4">
                  {product.available
                    ? <Eye size={16} style={{ color: '#5C7A38' }} />
                    : <EyeOff size={16} style={{ color: '#9B2D3E' }} />
                  }
                </td>
                <td className="p-4">
                  <div className="relative">
                    <button
                      onClick={() => setOpenMenu(openMenu === product.id ? null : product.id)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ color: '#B8B1A8' }}
                    >
                      <MoreHorizontal size={16} />
                    </button>
                    {openMenu === product.id && (
                      <div className="absolute right-0 top-full z-10 w-40 rounded-xl shadow-xl py-1" style={{ backgroundColor: '#252320', border: '1px solid rgba(201,168,106,0.15)' }}>
                        <Link to={`/admin/products/${product.id}`} className="block px-4 py-2 text-sm transition-all" style={{ color: '#F3ECDD' }} onClick={() => setOpenMenu(null)}>Edit</Link>
                        <button className="w-full text-left px-4 py-2 text-sm" style={{ color: '#F3ECDD' }}>Duplicate</button>
                        <button className="w-full text-left px-4 py-2 text-sm" style={{ color: '#9B2D3E' }}>Archive</button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 transition-colors" style={{ borderTop: borderColor }}>
          <span className="text-sm transition-colors" style={{ color: mutedText }}>Showing {filtered.length} of {products.length} products</span>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors" style={{ color: mutedText, border: `1px solid ${borderColor}` }}>
              <ChevronLeft size={15} />
            </button>
            <span className="text-sm px-3 py-1 rounded-lg transition-colors" style={{ backgroundColor: '#C9A86A', color: bgColor }}>1</span>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors" style={{ color: mutedText, border: `1px solid ${borderColor}` }}>
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
