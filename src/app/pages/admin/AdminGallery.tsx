import React from 'react';
import { useState } from 'react';
import { Plus, GripVertical, Eye, EyeOff, Trash2, Edit2, Image } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const albums = [
  {
    id: 1, name: 'Food Photography', cover: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=200&h=150&fit=crop&auto=format',
    images: 16, visible: true, description: 'Our signature dishes'
  },
  {
    id: 2, name: 'Restaurant Ambiance', cover: 'https://images.unsplash.com/photo-1583354608715-177553a4035e?w=200&h=150&fit=crop&auto=format',
    images: 8, visible: true, description: 'Interior and atmosphere'
  },
  {
    id: 3, name: 'Chef at Work', cover: 'https://images.unsplash.com/photo-1636115130040-adf36e3ed32b?w=200&h=150&fit=crop&auto=format',
    images: 12, visible: true, description: 'Behind the scenes'
  },
  {
    id: 4, name: 'Events & Catering', cover: 'https://images.unsplash.com/photo-1727425383452-2be55354f06e?w=200&h=150&fit=crop&auto=format',
    images: 6, visible: false, description: 'Private events'
  },
  {
    id: 5, name: 'Wine Cellar', cover: 'https://images.unsplash.com/photo-1596142332133-327e2a0ff006?w=200&h=150&fit=crop&auto=format',
    images: 9, visible: true, description: 'Our wine collection'
  },
];

const featuredImages = [
  { src: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=200&h=150&fit=crop&auto=format', caption: 'Tagliatelle al Tartufo', order: 1 },
  { src: 'https://images.unsplash.com/photo-1583354608715-177553a4035e?w=200&h=150&fit=crop&auto=format', caption: 'Our dining room', order: 2 },
  { src: 'https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?w=200&h=150&fit=crop&auto=format', caption: 'Risotto ai Porcini', order: 3 },
  { src: 'https://images.unsplash.com/photo-1636115130040-adf36e3ed32b?w=200&h=150&fit=crop&auto=format', caption: 'Chef Sara', order: 4 },
  { src: 'https://images.unsplash.com/photo-1698688334089-c68105801d02?w=200&h=150&fit=crop&auto=format', caption: 'Tiramisù', order: 5 },
  { src: 'https://images.unsplash.com/photo-1596142332133-327e2a0ff006?w=200&h=150&fit=crop&auto=format', caption: 'Wine selection', order: 6 },
];

export function AdminGallery() {
  const { isDark } = useTheme();
  const bgColor = isDark ? '#12110F' : '#F8F6F3';
  const cardBg = isDark ? '#1B1917' : '#FFFFFF';
  const textColor = isDark ? '#F3ECDD' : '#2D2D2D';
  const mutedText = isDark ? '#B8B1A8' : '#999999';
  const borderColor = isDark ? 'rgba(201,168,106,0.10)' : 'rgba(201,168,106,0.15)';
  const inputBg = isDark ? '#252320' : '#F5F5F5';
  const hoverBg = isDark ? 'rgba(201,168,106,0.08)' : 'rgba(201,168,106,0.1)';
  
  const [albums_, setAlbums] = useState(albums);
  const [activeTab, setActiveTab] = useState<'albums' | 'featured'>('albums');

  const toggleVisible = (id: number) =>
    setAlbums(a => a.map(al => al.id === id ? { ...al, visible: !al.visible } : al));

  return (
    <div className="p-6 space-y-6" style={{ backgroundColor: bgColor, minHeight: '100%', transition: 'background-color 0.3s' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1" style={{ color: textColor, fontFamily: 'Playfair Display' }}>Gallery</h1>
          <p className="text-sm" style={{ color: mutedText }}>{albums.length} albums · {albums.reduce((s, a) => s + a.images, 0)} images</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#C9A86A', color: '#12110F' }}>
          <Plus size={15} /> New Album
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 rounded-xl w-fit" style={{ backgroundColor: cardBg }}>
        {(['albums', 'featured'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-5 py-2 rounded-lg text-sm capitalize transition-all"
            style={{
              backgroundColor: activeTab === tab ? '#C9A86A' : 'transparent',
              color: activeTab === tab ? '#12110F' : '#B8B1A8',
              fontWeight: activeTab === tab ? 500 : 400,
            }}
          >
            {tab === 'featured' ? 'Featured Order' : 'Albums'}
          </button>
        ))}
      </div>

      {activeTab === 'albums' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {albums_.map(album => (
            <div key={album.id} className="rounded-2xl overflow-hidden group" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
              <div className="relative h-40 overflow-hidden">
                <img src={album.cover} alt={album.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 right-3 flex gap-1">
                  {!album.visible && (
                    <span className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: 'rgba(155,45,62,0.8)', color: textColor }}>Hidden</span>
                  )}
                </div>
                <div className="absolute bottom-3 left-3">
                  <div className="flex items-center gap-1 text-xs" style={{ color: 'rgba(243,236,221,0.7)' }}>
                    <Image size={12} /> {album.images} images
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-medium" style={{ color: textColor }}>{album.name}</h3>
                    <p className="text-xs mt-1" style={{ color: mutedText }}>{album.description}</p>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => toggleVisible(album.id)} className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ color: mutedText, backgroundColor: 'rgba(184,177,168,0.1)' }}>
                      {album.visible ? <Eye size={13} /> : <EyeOff size={13} />}
                    </button>
                    <button className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ color: '#C9A86A', backgroundColor: 'rgba(201,168,106,0.1)' }}>
                      <Edit2 size={13} />
                    </button>
                    <button className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ color: '#9B2D3E', backgroundColor: 'rgba(155,45,62,0.1)' }}>
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Add album */}
          <button className="rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-8 transition-all h-48" style={{ borderColor: 'rgba(201,168,106,0.2)', color: mutedText }}>
            <Plus size={24} className="mb-2" style={{ color: '#C9A86A' }} />
            <span className="text-sm">Create New Album</span>
          </button>
        </div>
      ) : (
        <div>
          <p className="text-sm mb-4" style={{ color: mutedText }}>Drag to reorder images shown in the public gallery</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredImages.map((img, i) => (
              <div key={i} className="group rounded-xl overflow-hidden relative" style={{ border: '1px solid rgba(201,168,106,0.15)' }}>
                <img src={img.src} alt={img.caption} className="w-full aspect-square object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <GripVertical size={24} style={{ color: textColor }} className="cursor-grab" />
                </div>
                <div className="absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#C9A86A', color: '#12110F' }}>
                  {img.order}
                </div>
                <div className="p-2">
                  <p className="text-xs truncate" style={{ color: mutedText }}>{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
