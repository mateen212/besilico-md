import { useState } from 'react';
import { Search, Upload, FolderOpen, Grid, List, Trash2, Copy, Download, MoreHorizontal } from 'lucide-react';

const folders = ['All', 'Products', 'Gallery', 'Hero Images', 'Chef Images', 'Events'];

const mediaFiles = [
  { id: 1, name: 'tagliatelle-truffle.jpg', folder: 'Products', size: '2.4 MB', url: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=300&h=200&fit=crop&auto=format', date: '2026-06-15' },
  { id: 2, name: 'risotto-porcini.jpg', folder: 'Products', size: '1.8 MB', url: 'https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?w=300&h=200&fit=crop&auto=format', date: '2026-06-14' },
  { id: 3, name: 'chef-sara-kitchen.jpg', folder: 'Chef Images', size: '3.1 MB', url: 'https://images.unsplash.com/photo-1636115130040-adf36e3ed32b?w=300&h=200&fit=crop&auto=format', date: '2026-06-12' },
  { id: 4, name: 'wine-barolo.jpg', folder: 'Products', size: '1.2 MB', url: 'https://images.unsplash.com/photo-1596142332133-327e2a0ff006?w=300&h=200&fit=crop&auto=format', date: '2026-06-10' },
  { id: 5, name: 'tiramisu-dessert.jpg', folder: 'Products', size: '1.9 MB', url: 'https://images.unsplash.com/photo-1698688334089-c68105801d02?w=300&h=200&fit=crop&auto=format', date: '2026-06-09' },
  { id: 6, name: 'bruschetta-appetizer.jpg', folder: 'Products', size: '2.2 MB', url: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=300&h=200&fit=crop&auto=format', date: '2026-06-08' },
  { id: 7, name: 'restaurant-interior.jpg', folder: 'Gallery', size: '4.5 MB', url: 'https://images.unsplash.com/photo-1583354608715-177553a4035e?w=300&h=200&fit=crop&auto=format', date: '2026-06-07' },
  { id: 8, name: 'caprese-salad.jpg', folder: 'Products', size: '1.7 MB', url: 'https://images.unsplash.com/photo-1610817153377-e54299ffdb1e?w=300&h=200&fit=crop&auto=format', date: '2026-06-06' },
  { id: 9, name: 'hero-hero.jpg', folder: 'Hero Images', size: '5.2 MB', url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300&h=200&fit=crop&auto=format', date: '2026-06-05' },
  { id: 10, name: 'carbonara-pasta.jpg', folder: 'Products', size: '2.0 MB', url: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=300&h=200&fit=crop&auto=format', date: '2026-06-04' },
  { id: 11, name: 'event-catering.jpg', folder: 'Events', size: '3.8 MB', url: 'https://images.unsplash.com/photo-1727425383452-2be55354f06e?w=300&h=200&fit=crop&auto=format', date: '2026-06-03' },
  { id: 12, name: 'table-setting.jpg', folder: 'Gallery', size: '2.6 MB', url: 'https://images.unsplash.com/photo-1586718520704-f7f9db04b8c0?w=300&h=200&fit=crop&auto=format', date: '2026-06-02' },
];

export function AdminMedia() {
  const [folder, setFolder] = useState('All');
  const [search, setSearch] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [selected, setSelected] = useState<number[]>([]);

  const filtered = mediaFiles.filter(f =>
    (folder === 'All' || f.folder === folder) &&
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (id: number) =>
    setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);

  return (
    <div className="p-6 space-y-6" style={{ backgroundColor: '#12110F', minHeight: '100%' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1" style={{ color: '#F3ECDD', fontFamily: 'Playfair Display' }}>Media Library</h1>
          <p className="text-sm" style={{ color: '#B8B1A8' }}>{mediaFiles.length} files · 38.4 MB total</p>
        </div>
        <label className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium cursor-pointer" style={{ backgroundColor: '#C9A86A', color: '#12110F' }}>
          <Upload size={15} /> Upload Files
          <input type="file" multiple accept="image/*" className="hidden" />
        </label>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Folders */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl p-4" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201,168,106,0.10)' }}>
            <p className="text-xs font-medium mb-3 uppercase tracking-wider" style={{ color: '#B8B1A8' }}>Folders</p>
            <div className="space-y-1">
              {folders.map(f => (
                <button
                  key={f}
                  onClick={() => setFolder(f)}
                  className="w-full text-left px-3 py-2 rounded-xl text-sm flex items-center gap-2 transition-all"
                  style={{
                    backgroundColor: folder === f ? 'rgba(201,168,106,0.12)' : 'transparent',
                    color: folder === f ? '#C9A86A' : '#B8B1A8',
                  }}
                >
                  <FolderOpen size={15} />
                  {f}
                  <span className="ml-auto text-xs" style={{ color: 'rgba(184,177,168,0.5)' }}>
                    {f === 'All' ? mediaFiles.length : mediaFiles.filter(m => m.folder === f).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Files */}
        <div className="lg:col-span-4 space-y-4">
          {/* Toolbar */}
          <div className="rounded-2xl p-4 flex gap-3" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201,168,106,0.10)' }}>
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#B8B1A8' }} />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search files..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm focus:outline-none"
                style={{ backgroundColor: '#252320', color: '#F3ECDD', border: '1px solid rgba(201,168,106,0.12)' }}
              />
            </div>
            <div className="flex items-center gap-1 p-1 rounded-xl" style={{ backgroundColor: '#252320' }}>
              <button onClick={() => setView('grid')} className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: view === 'grid' ? '#C9A86A' : 'transparent', color: view === 'grid' ? '#12110F' : '#B8B1A8' }}>
                <Grid size={16} />
              </button>
              <button onClick={() => setView('list')} className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: view === 'list' ? '#C9A86A' : 'transparent', color: view === 'list' ? '#12110F' : '#B8B1A8' }}>
                <List size={16} />
              </button>
            </div>
          </div>

          {selected.length > 0 && (
            <div className="rounded-xl px-4 py-3 flex items-center gap-3" style={{ backgroundColor: 'rgba(201,168,106,0.08)', border: '1px solid rgba(201,168,106,0.2)' }}>
              <span className="text-sm" style={{ color: '#C9A86A' }}>{selected.length} selected</span>
              <button className="flex items-center gap-1 text-sm px-3 py-1 rounded-lg" style={{ backgroundColor: 'rgba(201,168,106,0.15)', color: '#C9A86A' }}>
                <Download size={13} /> Download
              </button>
              <button className="flex items-center gap-1 text-sm px-3 py-1 rounded-lg" style={{ backgroundColor: 'rgba(155,45,62,0.15)', color: '#9B2D3E' }}>
                <Trash2 size={13} /> Delete
              </button>
            </div>
          )}

          {view === 'grid' ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {/* Upload zone */}
              <label className="border-2 border-dashed rounded-2xl aspect-square flex flex-col items-center justify-center cursor-pointer transition-all" style={{ borderColor: 'rgba(201,168,106,0.2)', color: '#B8B1A8' }}>
                <Upload size={24} className="mb-2" style={{ color: '#C9A86A' }} />
                <span className="text-xs">Upload</span>
                <input type="file" multiple accept="image/*" className="hidden" />
              </label>

              {filtered.map(file => (
                <div
                  key={file.id}
                  className="rounded-2xl overflow-hidden group cursor-pointer transition-all relative"
                  style={{ border: selected.includes(file.id) ? '2px solid #C9A86A' : '2px solid transparent' }}
                  onClick={() => toggleSelect(file.id)}
                >
                  <img src={file.url} alt={file.name} className="w-full aspect-square object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(201,168,106,0.9)', color: '#12110F' }} onClick={e => { e.stopPropagation(); navigator.clipboard.writeText(file.url); }}>
                      <Copy size={14} />
                    </button>
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(155,45,62,0.9)', color: '#F3ECDD' }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                  {selected.includes(file.id) && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C9A86A' }}>
                      <span className="text-xs font-bold" style={{ color: '#12110F' }}>✓</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs truncate" style={{ color: '#F3ECDD' }}>{file.name}</p>
                    <p className="text-xs" style={{ color: '#B8B1A8' }}>{file.size}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201,168,106,0.10)' }}>
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(201,168,106,0.10)' }}>
                    <th className="p-4 text-left text-xs uppercase tracking-wider" style={{ color: '#B8B1A8' }}>File</th>
                    <th className="p-4 text-left text-xs uppercase tracking-wider" style={{ color: '#B8B1A8' }}>Folder</th>
                    <th className="p-4 text-left text-xs uppercase tracking-wider" style={{ color: '#B8B1A8' }}>Size</th>
                    <th className="p-4 text-left text-xs uppercase tracking-wider" style={{ color: '#B8B1A8' }}>Date</th>
                    <th className="p-4" />
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((file, i) => (
                    <tr key={file.id} style={{ borderBottom: i < filtered.length - 1 ? '1px solid rgba(201,168,106,0.06)' : 'none' }}>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img src={file.url} alt="" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                          <span className="text-sm" style={{ color: '#F3ECDD' }}>{file.name}</span>
                        </div>
                      </td>
                      <td className="p-4"><span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: 'rgba(201,168,106,0.1)', color: '#C9A86A' }}>{file.folder}</span></td>
                      <td className="p-4"><span className="text-sm" style={{ color: '#B8B1A8' }}>{file.size}</span></td>
                      <td className="p-4"><span className="text-sm" style={{ color: '#B8B1A8' }}>{file.date}</span></td>
                      <td className="p-4">
                        <button className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ color: '#B8B1A8' }}>
                          <MoreHorizontal size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
