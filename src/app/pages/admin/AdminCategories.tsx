import React from 'react';
import { useState } from 'react';
import { Plus, Edit2, Trash2, GripVertical, Eye, EyeOff } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const defaultCategories = [
  { id: 1, name: 'Antipasti', slug: 'antipasti', products: 8, visible: true, color: '#C9A86A', description: 'Italian starters and appetizers' },
  { id: 2, name: 'Pasta', slug: 'pasta', products: 12, visible: true, color: '#5C7A38', description: 'Fresh and dried pasta dishes' },
  { id: 3, name: 'Secondi', slug: 'secondi', products: 6, visible: true, color: '#9B2D3E', description: 'Main meat and fish courses' },
  { id: 4, name: 'Dolci', slug: 'dolci', products: 5, visible: true, color: '#E0BE84', description: 'Desserts and sweets' },
  { id: 5, name: 'Vini', slug: 'vini', products: 18, visible: true, color: '#9B2D3E', description: 'Italian wine selection' },
  { id: 6, name: 'Drinks', slug: 'drinks', products: 10, visible: true, color: '#B8A569', description: 'Non-alcoholic and cocktails' },
  { id: 7, name: 'Seasonal Specials', slug: 'seasonal', products: 4, visible: false, color: '#5C7A38', description: 'Limited time seasonal dishes' },
];

export function AdminCategories() {
  const { isDark } = useTheme();
  const bgColor = isDark ? '#12110F' : '#F8F6F3';
  const cardBg = isDark ? '#1B1917' : '#FFFFFF';
  const textColor = isDark ? '#F3ECDD' : '#2D2D2D';
  const mutedText = isDark ? '#B8B1A8' : '#999999';
  const borderColor = isDark ? 'rgba(201,168,106,0.10)' : 'rgba(201,168,106,0.15)';
  const inputBg = isDark ? '#252320' : '#F5F5F5';
  const hoverBg = isDark ? 'rgba(201,168,106,0.08)' : 'rgba(201,168,106,0.1)';
  
  const [categories, setCategories] = useState(defaultCategories);
  const [adding, setAdding] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [editing, setEditing] = useState<number | null>(null);

  const toggleVisible = (id: number) =>
    setCategories(cats => cats.map(c => c.id === id ? { ...c, visible: !c.visible } : c));

  const addCategory = () => {
    if (!newName.trim()) return;
    setCategories(cats => [...cats, {
      id: Date.now(),
      name: newName,
      slug: newName.toLowerCase().replace(/\s+/g, '-'),
      products: 0,
      visible: true,
      color: '#C9A86A',
      description: newDesc,
    }]);
    setNewName('');
    setNewDesc('');
    setAdding(false);
  };

  const inputStyle = { backgroundColor: inputBg, color: textColor, border: '1px solid rgba(201,168,106,0.15)' };

  return (
    <div className="p-6 space-y-6" style={{ backgroundColor: bgColor, minHeight: '100%', transition: 'background-color 0.3s' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1" style={{ color: textColor, fontFamily: 'Playfair Display' }}>Categories</h1>
          <p className="text-sm" style={{ color: mutedText }}>{categories.length} categories · {categories.reduce((s, c) => s + c.products, 0)} total products</p>
        </div>
        <button onClick={() => setAdding(true)} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#C9A86A', color: '#12110F' }}>
          <Plus size={15} /> New Category
        </button>
      </div>

      {adding && (
        <div className="rounded-2xl p-5" style={{ backgroundColor: cardBg, border: '1px solid rgba(201,168,106,0.2)' }}>
          <h3 className="text-base font-semibold mb-4" style={{ color: textColor }}>New Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: mutedText }}>Name *</label>
              <input value={newName} onChange={e => setNewName(e.target.value)} className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={inputStyle} placeholder="e.g. Zuppe" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: mutedText }}>Description</label>
              <input value={newDesc} onChange={e => setNewDesc(e.target.value)} className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={inputStyle} placeholder="Short description" />
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={addCategory} className="px-5 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#C9A86A', color: '#12110F' }}>Create Category</button>
            <button onClick={() => setAdding(false)} className="px-5 py-2 rounded-xl text-sm" style={{ backgroundColor: 'rgba(201,168,106,0.1)', color: '#C9A86A' }}>Cancel</button>
          </div>
        </div>
      )}

      <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
        <div className="p-4" style={{ borderBottom: '1px solid rgba(201,168,106,0.10)' }}>
          <p className="text-xs uppercase tracking-wider" style={{ color: mutedText }}>Drag to reorder categories</p>
        </div>
        <div className="divide-y" style={{ borderColor: 'rgba(201,168,106,0.06)' }}>
          {categories.map(cat => (
            <div key={cat.id} className="flex items-center gap-4 p-4 transition-all group" style={{ opacity: cat.visible ? 1 : 0.5 }}>
              <button className="cursor-grab" style={{ color: 'rgba(184,177,168,0.3)' }}>
                <GripVertical size={18} />
              </button>
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium" style={{ color: textColor }}>{cat.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(201,168,106,0.1)', color: '#C9A86A' }}>{cat.slug}</span>
                  {!cat.visible && <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(155,45,62,0.15)', color: '#9B2D3E' }}>Hidden</span>}
                </div>
                <p className="text-xs mt-0.5" style={{ color: mutedText }}>{cat.description}</p>
              </div>
              <div className="text-sm font-medium" style={{ color: '#C9A86A' }}>{cat.products} products</div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => setEditing(cat.id)} className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ color: '#C9A86A', backgroundColor: 'rgba(201,168,106,0.1)' }}>
                  <Edit2 size={14} />
                </button>
                <button onClick={() => toggleVisible(cat.id)} className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ color: mutedText, backgroundColor: 'rgba(184,177,168,0.1)' }}>
                  {cat.visible ? <Eye size={14} /> : <EyeOff size={14} />}
                </button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ color: '#9B2D3E', backgroundColor: 'rgba(155,45,62,0.1)' }}>
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
