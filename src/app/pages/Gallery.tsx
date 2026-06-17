import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { X } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTheme } from '../context/ThemeContext';
import { getThemeColors } from '../styles/themes';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcGFzdGElMjBmcmVzaCUyMGhvbWVtYWRlfGVufDF8fHx8MTc4MTcxNTMxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Fresh handmade pasta',
  },
  {
    src: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcGl6emElMjBtYXJnaGVyaXRhJTIwZnJlc2h8ZW58MXx8fHwxNzgxNzE1MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Wood-fired pizza',
  },
  {
    src: 'https://images.unsplash.com/photo-1636115130040-adf36e3ed32b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwY2hlZiUyMGNvb2tpbmclMjBraXRjaGVufGVufDF8fHx8MTc4MTcxNTMxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'In the kitchen with Chef Sara',
  },
  {
    src: 'https://images.unsplash.com/photo-1596142332133-327e2a0ff006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwd2luZSUyMHZpbmV5YXJkJTIwYm90dGxlfGVufDF8fHx8MTc4MTcxNTMxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Italian wine selection',
  },
  {
    src: 'https://images.unsplash.com/photo-1698688334089-c68105801d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwdGlyYW1pc3UlMjBkZXNzZXJ0fGVufDF8fHx8MTc4MTcxNTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Classic tiramisù',
  },
  {
    src: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwYnJ1c2NoZXR0YSUyMGFwcGV0aXplcnxlbnwxfHx8fDE3ODE3MTUzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Bruschetta al pomodoro',
  },
  {
    src: 'https://images.unsplash.com/photo-1583354608715-177553a4035e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZWxlZ2FudHxlbnwxfHx8fDE3ODE3MTUzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Our dining space',
  },
  {
    src: 'https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcmlzb3R0byUyMGRpc2h8ZW58MXx8fHwxNzgxNzE1MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Risotto ai funghi',
  },
  {
    src: 'https://images.unsplash.com/photo-1673720111806-1d26f1e18f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcHJvc2NpdXR0byUyMGFudGlwYXN0b3xlbnwxfHx8fDE3ODE3MTUzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Antipasto selection',
  },
  {
    src: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwY2FyYm9uYXJhJTIwcGFzdGF8ZW58MXx8fHwxNzgxNzE1Mzk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Carbonara tradizionale',
  },
  {
    src: 'https://images.unsplash.com/photo-1532117472055-4d0734b51f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcmVzdGF1cmFudCUyMHBsYXRpbmclMjBlbGVnYW50fGVufDF8fHx8MTc4MTcxNTUyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Artful plating',
  },
  {
    src: 'https://images.unsplash.com/photo-1530188420093-aac759d2f675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwZXNwcmVzc28lMjBjb2ZmZWV8ZW58MXx8fHwxNzgxNzE1NTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Italian espresso',
  },
  {
    src: 'https://images.unsplash.com/photo-1602532769069-0e856a643e7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwZ2VsYXRvJTIwZGVzc2VydHxlbnwxfHx8fDE3ODE3MTU1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Homemade gelato',
  },
  {
    src: 'https://images.unsplash.com/photo-1559811814-e2c57b5e69df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwYnJlYWQlMjBiYWtpbmclMjBhcnRpc2FufGVufDF8fHx8MTc4MTcxNTUyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Artisan bread baking',
  },
  {
    src: 'https://images.unsplash.com/photo-1586718520704-f7f9db04b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwdGFibGUlMjBzZXR0aW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3ODE3MTU1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Elegant table setting',
  },
  {
    src: 'https://images.unsplash.com/photo-1610817153377-e54299ffdb1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwY2FwcmVzZSUyMHNhbGFkJTIwbW96emFyZWxsYXxlbnwxfHx8fDE3ODE3MTUzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Caprese salad',
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-24" style={{ backgroundColor: '#F8F3EA' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl mb-6"
            style={{ fontFamily: 'Playfair Display', color: '#1C1C1C' }}
          >
            Gallery
          </h1>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto opacity-70"
            style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
          >
            A visual journey through our culinary artistry and Italian heritage
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={3} gutter="24px">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group cursor-pointer relative overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(index)}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.caption}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p
                  className="text-lg"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backgroundColor: 'rgba(28, 28, 28, 0.95)' }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10"
              style={{
                backgroundColor: 'rgba(200, 169, 106, 0.2)',
                color: '#C8A96A',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C8A96A';
                e.currentTarget.style.color = '#1C1C1C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(200, 169, 106, 0.2)';
                e.currentTarget.style.color = '#C8A96A';
              }}
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].caption}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              />
              <div className="text-center mt-6">
                <p
                  className="text-2xl"
                  style={{ fontFamily: 'Playfair Display', color: '#C8A96A' }}
                >
                  {galleryImages[selectedImage].caption}
                </p>
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) =>
                  prev === 0 ? galleryImages.length - 1 : (prev ?? 0) - 1
                );
              }}
              className="absolute left-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: 'rgba(200, 169, 106, 0.2)',
                color: '#C8A96A',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C8A96A';
                e.currentTarget.style.color = '#1C1C1C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(200, 169, 106, 0.2)';
                e.currentTarget.style.color = '#C8A96A';
              }}
            >
              ←
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) =>
                  prev === galleryImages.length - 1 ? 0 : (prev ?? 0) + 1
                );
              }}
              className="absolute right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: 'rgba(200, 169, 106, 0.2)',
                color: '#C8A96A',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C8A96A';
                e.currentTarget.style.color = '#1C1C1C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(200, 169, 106, 0.2)';
                e.currentTarget.style.color = '#C8A96A';
              }}
            >
              →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
