import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { ArrowLeft, Upload, X, Plus, GripVertical, Star, Eye, Save, Copy, Archive } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const spiceLevels = ['None', 'Mild', 'Medium', 'Hot', 'Very Hot'];
const allergens = ['Gluten', 'Dairy', 'Eggs', 'Nuts', 'Seafood', 'Soy', 'Sesame'];
const categories = ['Antipasti', 'Pasta', 'Secondi', 'Dolci', 'Vini', 'Drinks'];
const wines = ['Barolo DOCG', 'Brunello di Montalcino', 'Chianti Classico', 'Prosecco Superiore', 'Pinot Grigio', 'Vermentino', 'Verdicchio', 'Frascati'];

const inputCls = 'w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all';

export function AdminProductEdit() {
  const { isDark } = useTheme();
  const bgColor = isDark ? '#12110F' : '#F8F6F3';
  const cardBg = isDark ? '#1B1917' : '#FFFFFF';
  const textColor = isDark ? '#F3ECDD' : '#2D2D2D';
  const mutedText = isDark ? '#B8B1A8' : '#999999';
  const borderColor = isDark ? 'rgba(201,168,106,0.10)' : 'rgba(201,168,106,0.15)';
  const inputBg = isDark ? '#252320' : '#F5F5F5';
  const hoverBg = isDark ? 'rgba(201,168,106,0.08)' : 'rgba(201,168,106,0.1)';
  
  const inputStyle = { backgroundColor: inputBg, color: textColor, border: '1px solid rgba(201,168,106,0.15)' };
  const labelStyle = { color: mutedText, fontSize: '12px', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' as const };
  
  const { id } = useParams();
  const isNew = !id;

  const [images, setImages] = useState<string[]>([
    'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=400&h=300&fit=crop&auto=format',
  ]);
  const [featured, setFeatured] = useState(false);
  const [available, setAvailable] = useState(true);
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>(['Gluten', 'Dairy', 'Eggs']);
  const [spice, setSpice] = useState('None');
  const [isDraft, setIsDraft] = useState(false);

  const toggleAllergen = (a: string) =>
    setSelectedAllergens(s => s.includes(a) ? s.filter(x => x !== a) : [...s, a]);

  return (
    <div className="p-6" style={{ backgroundColor: bgColor, minHeight: '100%', transition: 'background-color 0.3s' }}>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/admin/products" className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(201,168,106,0.1)', color: '#C9A86A' }}>
          <ArrowLeft size={18} />
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold" style={{ color: textColor, fontFamily: 'Playfair Display' }}>
            {isNew ? 'New Product' : 'Edit Product'}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm" style={{ backgroundColor: 'rgba(201,168,106,0.1)', color: '#C9A86A', border: '1px solid rgba(201,168,106,0.2)' }}>
            <Copy size={15} /> Duplicate
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm" style={{ backgroundColor: 'rgba(155,45,62,0.1)', color: '#9B2D3E', border: '1px solid rgba(155,45,62,0.2)' }}>
            <Archive size={15} /> Archive
          </button>
          <button onClick={() => setIsDraft(true)} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm" style={{ backgroundColor: 'rgba(201,168,106,0.1)', color: '#C9A86A', border: '1px solid rgba(201,168,106,0.2)' }}>
            <Save size={15} /> Save Draft
          </button>
          <button className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#C9A86A', color: '#12110F' }}>
            <Eye size={15} /> Publish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left: images */}
        <div className="xl:col-span-1 space-y-6">
          {/* Main image */}
          <div className="rounded-2xl p-5" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
            <p className="mb-3" style={labelStyle}>Main Image</p>
            {images[0] ? (
              <div className="relative rounded-xl overflow-hidden aspect-video mb-3">
                <img src={images[0]} alt="main" className="w-full h-full object-cover" />
                <button className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(18,17,15,0.8)', color: textColor }}>
                  <X size={14} />
                </button>
              </div>
            ) : null}
            <div
              className="border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all"
              style={{ borderColor: 'rgba(201,168,106,0.2)', color: mutedText }}
            >
              <Upload size={24} className="mb-2" style={{ color: '#C9A86A' }} />
              <span className="text-sm">Drop image or click to upload</span>
              <span className="text-xs mt-1" style={{ color: 'rgba(184,177,168,0.6)' }}>PNG, JPG, WebP up to 10MB</span>
            </div>
          </div>

          {/* Gallery images */}
          <div className="rounded-2xl p-5" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
            <p className="mb-3" style={labelStyle}>Gallery Images</p>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {[
                'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=120&h=90&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=120&h=90&fit=crop&auto=format',
              ].map((img, i) => (
                <div key={i} className="relative rounded-lg overflow-hidden aspect-square group">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                    <button className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: 'rgba(18,17,15,0.8)', color: textColor }}>
                      <GripVertical size={12} />
                    </button>
                    <button className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: 'rgba(18,17,15,0.8)', color: '#9B2D3E' }}>
                      <X size={12} />
                    </button>
                  </div>
                </div>
              ))}
              <div className="rounded-lg border-2 border-dashed aspect-square flex items-center justify-center cursor-pointer" style={{ borderColor: 'rgba(201,168,106,0.2)' }}>
                <Plus size={20} style={{ color: '#C9A86A' }} />
              </div>
            </div>
          </div>

          {/* Toggles */}
          <div className="rounded-2xl p-5 space-y-4" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium" style={{ color: textColor }}>Featured Product</p>
                <p className="text-xs mt-0.5" style={{ color: mutedText }}>Show on homepage</p>
              </div>
              <button
                onClick={() => setFeatured(!featured)}
                className="w-11 h-6 rounded-full transition-all relative"
                style={{ backgroundColor: featured ? '#C9A86A' : 'rgba(201,168,106,0.2)' }}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full transition-all ${featured ? 'left-6' : 'left-1'}`} style={{ backgroundColor: featured ? '#12110F' : '#B8B1A8' }} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium" style={{ color: textColor }}>Available</p>
                <p className="text-xs mt-0.5" style={{ color: mutedText }}>Show on menu</p>
              </div>
              <button
                onClick={() => setAvailable(!available)}
                className="w-11 h-6 rounded-full transition-all relative"
                style={{ backgroundColor: available ? '#5C7A38' : 'rgba(92,122,56,0.2)' }}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full transition-all ${available ? 'left-6' : 'left-1'}`} style={{ backgroundColor: available ? '#12110F' : '#B8B1A8' }} />
              </button>
            </div>
          </div>
        </div>

        {/* Right: details */}
        <div className="xl:col-span-2 space-y-6">
          {/* Basic info */}
          <div className="rounded-2xl p-6" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
            <h2 className="text-base font-semibold mb-5" style={{ color: textColor, fontFamily: 'Playfair Display' }}>Product Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2" style={labelStyle}>Product Name *</label>
                  <input type="text" defaultValue={isNew ? '' : 'Tagliatelle al Tartufo Nero'} className={inputCls} style={inputStyle} placeholder="e.g. Tagliatelle al Tartufo" />
                </div>
                <div>
                  <label className="block mb-2" style={labelStyle}>SEO Title</label>
                  <input type="text" className={inputCls} style={inputStyle} placeholder="Search engine title" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2" style={labelStyle}>URL Slug</label>
                  <input type="text" className={inputCls} style={inputStyle} placeholder="tagliatelle-al-tartufo" />
                </div>
                <div>
                  <label className="block mb-2" style={labelStyle}>Category *</label>
                  <select className={inputCls} style={inputStyle}>
                    {categories.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block mb-2" style={labelStyle}>Description</label>
                <textarea rows={3} className={`${inputCls} resize-none`} style={inputStyle} placeholder="Describe the dish..." defaultValue={isNew ? '' : 'Fresh egg pasta with black truffle, butter, and aged Parmigiano-Reggiano'} />
              </div>
              <div>
                <label className="block mb-2" style={labelStyle}>Ingredients</label>
                <textarea rows={2} className={`${inputCls} resize-none`} style={inputStyle} placeholder="List ingredients separated by commas..." />
              </div>
            </div>
          </div>

          {/* Pricing & Details */}
          <div className="rounded-2xl p-6" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
            <h2 className="text-base font-semibold mb-5" style={{ color: textColor, fontFamily: 'Playfair Display' }}>Pricing & Nutritional Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block mb-2" style={labelStyle}>Price (€)</label>
                <input type="number" defaultValue={32} className={inputCls} style={inputStyle} />
              </div>
              <div>
                <label className="block mb-2" style={labelStyle}>Calories (kcal)</label>
                <input type="number" className={inputCls} style={inputStyle} placeholder="480" />
              </div>
              <div>
                <label className="block mb-2" style={labelStyle}>Prep Time (min)</label>
                <input type="number" className={inputCls} style={inputStyle} placeholder="25" />
              </div>
              <div>
                <label className="block mb-2" style={labelStyle}>Spice Level</label>
                <select className={inputCls} style={inputStyle} value={spice} onChange={e => setSpice(e.target.value)}>
                  {spiceLevels.map(l => <option key={l}>{l}</option>)}
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2" style={labelStyle}>Wine Pairing Recommendation</label>
              <select className={inputCls} style={inputStyle}>
                <option value="">No pairing</option>
                {wines.map(w => <option key={w}>{w}</option>)}
              </select>
            </div>

            <div>
              <label className="block mb-3" style={labelStyle}>Allergens</label>
              <div className="flex flex-wrap gap-2">
                {allergens.map(a => (
                  <button
                    key={a}
                    onClick={() => toggleAllergen(a)}
                    className="px-3 py-1.5 rounded-xl text-sm transition-all"
                    style={{
                      backgroundColor: selectedAllergens.includes(a) ? 'rgba(155,45,62,0.2)' : 'rgba(201,168,106,0.08)',
                      color: selectedAllergens.includes(a) ? '#9B2D3E' : '#B8B1A8',
                      border: selectedAllergens.includes(a) ? '1px solid rgba(155,45,62,0.3)' : '1px solid rgba(201,168,106,0.12)',
                    }}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
