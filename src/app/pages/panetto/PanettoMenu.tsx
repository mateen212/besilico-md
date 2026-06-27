import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { PanettoFooter } from '../../components/PanettoFooter';

const menuCategories = [
  {
    name: 'Pastries',
    items: [
      {
        name: 'Croissants Français',
        description: 'Classic buttery, flaky French croissant',
        price: 'PKR 250',
        image: 'https://images.unsplash.com/photo-1585080198519-35fdd160cb4d?w=400&h=300&fit=crop',
      },
      {
        name: 'Pain au Chocolat',
        description: 'Rich chocolate layers with crispy pastry',
        price: 'PKR 200',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db97?w=400&h=300&fit=crop',
      },
      {
        name: 'Éclair Assortment',
        description: 'Chocolate, vanilla, and pistachio éclairs',
        price: 'PKR 150 each',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      },
      {
        name: 'Mille-feuille',
        description: 'Thousand layers of pastry and cream',
        price: 'PKR 280',
        image: 'https://images.unsplash.com/photo-1535920527894-b82b27910c95?w=400&h=300&fit=crop',
      },
    ],
  },
  {
    name: 'Breads',
    items: [
      {
        name: 'Sourdough Loaf',
        description: 'Fermented 48 hours, naturally leavened',
        price: 'PKR 320',
        image: 'https://images.unsplash.com/photo-1549365778-bc4e4b1b0313?w=400&h=300&fit=crop',
      },
      {
        name: 'Focaccia',
        description: 'Italian oil-brushed flatbread with rosemary',
        price: 'PKR 180',
        image: 'https://images.unsplash.com/photo-1585080198519-35fdd160cb4d?w=400&h=300&fit=crop',
      },
      {
        name: 'Baguette',
        description: 'Authentic French baguette with crispy crust',
        price: 'PKR 150',
        image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop',
      },
      {
        name: 'Ciabatta',
        description: 'Airy Italian loaf, perfect for sandwiches',
        price: 'PKR 200',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
      },
    ],
  },
  {
    name: 'Tarts & Cakes',
    items: [
      {
        name: 'Berry Tart',
        description: 'Fresh seasonal berries with pastry cream',
        price: 'PKR 400',
        image: 'https://images.unsplash.com/photo-1535920527894-b82b27910c95?w=400&h=300&fit=crop',
      },
      {
        name: 'Lemon Meringue',
        description: 'Tangy lemon curd with toasted meringue',
        price: 'PKR 350',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      },
      {
        name: 'Chocolate Torte',
        description: 'Decadent dark chocolate layer cake',
        price: 'PKR 450',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      },
      {
        name: 'Fruit Cake',
        description: 'Classic spiced cake with dried fruits',
        price: 'PKR 300',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      },
    ],
  },
  {
    name: 'Cookies & Treats',
    items: [
      {
        name: 'Macarons',
        description: 'Delicate almond meringue cookies',
        price: 'PKR 100 each',
        image: 'https://images.unsplash.com/photo-1515182629504-727d4753751f?w=400&h=300&fit=crop',
      },
      {
        name: 'Chocolate Chip Cookies',
        description: 'Classic cookies with premium chocolate',
        price: 'PKR 80',
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
      },
      {
        name: 'Donut Selection',
        description: 'Glazed, filled, and frosted varieties',
        price: 'PKR 60 each',
        image: 'https://images.unsplash.com/photo-1585080198519-35fdd160cb4d?w=400&h=300&fit=crop',
      },
      {
        name: 'Brownies',
        description: 'Fudgy chocolate brownies',
        price: 'PKR 120',
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop',
      },
    ],
  },
];

export function PanettoMenu() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [cart, setCart] = useState<{ name: string; price: string }[]>([]);
  
  const bgColor = isDark ? '#1A1512' : '#F5F1E8';
  const cardBg = isDark ? '#2A2420' : '#FFFFFF';
  const textColor = isDark ? '#F5F1E8' : '#2D2D2D';
  const mutedText = isDark ? '#B8966B' : '#A0865F';

  const addToCart = (item: { name: string; price: string }) => {
    setCart([...cart, item]);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 transition-colors" style={{ backgroundColor: bgColor }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/panetto"
            className="inline-flex items-center gap-2 mb-4 text-amber-100 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold mb-2">Our Menu</h1>
          <p className="text-lg text-amber-100">Freshly baked selections available daily</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 mb-12 justify-center"
        >
          {menuCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(idx)}
              className={`px-6 py-3 rounded-full transition-all font-semibold ${
                selectedCategory === idx
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {menuCategories[selectedCategory].items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-3 min-h-10">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-bold text-lg">{item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="p-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
                    title="Add to cart"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-8 right-8 bg-amber-600 text-white p-6 rounded-lg shadow-2xl max-w-xs"
          >
            <p className="font-semibold mb-2">Items in Cart: {cart.length}</p>
            <button
              onClick={() => setCart([])}
              className="w-full px-4 py-2 bg-white text-amber-600 rounded-full hover:bg-gray-100 transition-colors font-semibold mb-2"
            >
              View Cart
            </button>
            <button
              onClick={() => setCart([])}
              className="w-full px-4 py-2 border border-white text-white rounded-full hover:bg-amber-700 transition-colors text-sm"
            >
              Clear
            </button>
          </motion.div>
        )}
      </div>

      <PanettoFooter />
    </div>
  );
}
