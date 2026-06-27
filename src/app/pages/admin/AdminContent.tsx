import { useState } from 'react';
import { Edit3, Eye, Save, Globe, Instagram, Facebook, ChevronRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const sections = [
  { id: 'hero', label: 'Hero Slider', description: 'Homepage hero section and CTA', editable: true },
  { id: 'story', label: 'Story Section', description: 'About Chef Sara and heritage text', editable: true },
  { id: 'chef', label: 'Chef Spotlight', description: "Chef Sara's bio and photo", editable: true },
  { id: 'testimonials', label: 'Testimonials', description: 'Guest reviews and quotes', editable: true },
  { id: 'footer', label: 'Footer', description: 'Contact info, links, hours', editable: true },
  { id: 'seo', label: 'SEO & Metadata', description: 'Title tags, descriptions, og images', editable: true },
];

const seoData = {
  title: 'Basilico by Sara — Authentic Italian Fine Dining | Milan',
  description: 'Experience authentic Italian cuisine at Basilico by Sara. Handmade pasta, fresh ingredients, and warm Mediterranean hospitality in the heart of Milan.',
  keywords: 'Italian restaurant Milan, authentic Italian food, fine dining Milan, Basilico by Sara',
};

const heroSlides = [
  { id: 1, title: 'Basilico by Sara', subtitle: 'Where authentic Italian heritage meets Mediterranean warmth', cta: 'Secure Your Evening', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=120&h=80&fit=crop&auto=format', active: true },
  { id: 2, title: 'Fresh Every Day', subtitle: 'Handmade pasta, truffle, and the finest Italian ingredients', cta: 'Explore Menu', image: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=120&h=80&fit=crop&auto=format', active: false },
];

const inputStyle = { backgroundColor: '#252320', color: '#F3ECDD', border: '1px solid rgba(201,168,106,0.15)' };

export function AdminContent() {
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [saved, setSaved] = useState(false);

  const bgColor = isDark ? '#12110F' : '#F8F6F3';
  const cardBg = isDark ? '#1B1917' : '#FFFFFF';
  const textColor = isDark ? '#F3ECDD' : '#2D2D2D';
  const mutedText = isDark ? '#B8B1A8' : '#666666';
  const borderColor = isDark ? 'rgba(201,168,106,0.10)' : 'rgba(201,168,106,0.15)';
  const inputBg = isDark ? '#252320' : '#F8F6F3';
  const inputBorder = isDark ? 'rgba(201,168,106,0.15)' : 'rgba(201,168,106,0.2)';

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-6 space-y-6 transition-colors" style={{ backgroundColor: bgColor, minHeight: '100%' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1 transition-colors" style={{ color: textColor, fontFamily: 'Playfair Display' }}>Content Management</h1>
          <p className="text-sm transition-colors" style={{ color: mutedText }}>Edit website content without code</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-colors" style={{ backgroundColor: isDark ? 'rgba(201,168,106,0.1)' : 'rgba(201,168,106,0.15)', color: '#C9A86A', border: `1px solid ${borderColor}` }}>
            <Eye size={15} /> Preview
          </a>
          <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors" style={{ backgroundColor: saved ? '#5C7A38' : '#C9A86A', color: bgColor }}>
            <Save size={15} /> {saved ? 'Saved!' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Section list */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201,168,106,0.10)' }}>
            {sections.map((section, i) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className="w-full text-left px-4 py-3 flex items-center gap-3 transition-all"
                style={{
                  backgroundColor: activeSection === section.id ? 'rgba(201,168,106,0.08)' : 'transparent',
                  borderBottom: i < sections.length - 1 ? '1px solid rgba(201,168,106,0.06)' : 'none',
                }}
              >
                <Edit3 size={15} style={{ color: activeSection === section.id ? '#C9A86A' : '#B8B1A8' }} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium" style={{ color: activeSection === section.id ? '#C9A86A' : '#F3ECDD' }}>{section.label}</div>
                  <div className="text-xs truncate" style={{ color: '#B8B1A8' }}>{section.description}</div>
                </div>
                <ChevronRight size={14} style={{ color: '#B8B1A8' }} />
              </button>
            ))}
          </div>

          {/* Social links */}
          <div className="rounded-2xl p-4 mt-4" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201,168,106,0.10)' }}>
            <p className="text-xs uppercase tracking-wider mb-3" style={{ color: '#B8B1A8' }}>Social Media</p>
            <div className="space-y-2">
              {[{ icon: Instagram, label: '@basilicobysara', color: '#C9A86A' }, { icon: Facebook, label: 'Basilico by Sara', color: '#C9A86A' }, { icon: Globe, label: 'basilicobysara.it', color: '#5C7A38' }].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-2 text-sm">
                  <Icon size={15} style={{ color }} />
                  <span style={{ color: '#B8B1A8' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Editor */}
        <div className="lg:col-span-3 space-y-6">
          {activeSection === 'hero' && (
            <div className="rounded-2xl p-6" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201,168,106,0.10)' }}>
              <h2 className="text-lg font-semibold mb-5" style={{ color: '#F3ECDD', fontFamily: 'Playfair Display' }}>Hero Slider</h2>
              <div className="space-y-4">
                {heroSlides.map(slide => (
                  <div key={slide.id} className="rounded-xl p-4 flex gap-4" style={{ backgroundColor: '#252320', border: '1px solid rgba(201,168,106,0.12)' }}>
                    <img src={slide.image} alt="" className="w-20 h-14 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1 space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs uppercase tracking-wider mb-1 block" style={{ color: '#B8B1A8' }}>Title</label>
                          <input defaultValue={slide.title} className="w-full px-3 py-2 rounded-lg text-sm focus:outline-none" style={inputStyle} />
                        </div>
                        <div>
                          <label className="text-xs uppercase tracking-wider mb-1 block" style={{ color: '#B8B1A8' }}>CTA Text</label>
                          <input defaultValue={slide.cta} className="w-full px-3 py-2 rounded-lg text-sm focus:outline-none" style={inputStyle} />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-wider mb-1 block" style={{ color: '#B8B1A8' }}>Subtitle</label>
                        <input defaultValue={slide.subtitle} className="w-full px-3 py-2 rounded-lg text-sm focus:outline-none" style={inputStyle} />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: slide.active ? '#5C7A38' : '#B8B1A8' }} />
                      <span className="text-xs" style={{ color: '#B8B1A8' }}>{slide.active ? 'Active' : 'Draft'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'seo' && (
            <div className="rounded-2xl p-6" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201,168,106,0.10)' }}>
              <h2 className="text-lg font-semibold mb-5" style={{ color: '#F3ECDD', fontFamily: 'Playfair Display' }}>SEO & Metadata</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-wider mb-2 block" style={{ color: '#B8B1A8' }}>Page Title</label>
                  <input defaultValue={seoData.title} className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={inputStyle} />
                  <p className="text-xs mt-1" style={{ color: '#5C7A38' }}>{seoData.title.length}/60 characters</p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider mb-2 block" style={{ color: '#B8B1A8' }}>Meta Description</label>
                  <textarea defaultValue={seoData.description} rows={3} className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none resize-none" style={inputStyle} />
                  <p className="text-xs mt-1" style={{ color: '#5C7A38' }}>{seoData.description.length}/160 characters</p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider mb-2 block" style={{ color: '#B8B1A8' }}>Keywords</label>
                  <input defaultValue={seoData.keywords} className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={inputStyle} />
                </div>
              </div>
            </div>
          )}

          {!['hero', 'seo'].includes(activeSection) && (
            <div className="rounded-2xl p-6" style={{ backgroundColor: '#1B1917', border: '1px solid rgba(201,168,106,0.10)' }}>
              <h2 className="text-lg font-semibold mb-5" style={{ color: '#F3ECDD', fontFamily: 'Playfair Display' }}>
                {sections.find(s => s.id === activeSection)?.label}
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-wider mb-2 block" style={{ color: '#B8B1A8' }}>Heading</label>
                  <input className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none" style={inputStyle} placeholder="Section heading..." />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider mb-2 block" style={{ color: '#B8B1A8' }}>Body Text</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none resize-none" style={inputStyle} placeholder="Section content..." />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
