import { useState } from 'react';
import { motion } from 'motion/react';
import { Wine } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type MenuCategory = 'Antipasti' | 'Pasta' | 'Secondi' | 'Dolci' | 'Vini';

const menuData = {
  Antipasti: [
    {
      name: 'Bruschetta al Pomodoro',
      description: 'Grilled artisan bread with San Marzano tomatoes, fresh basil, and extra virgin olive oil',
      ingredients: 'Tomatoes, Basil, Garlic, Olive Oil',
      price: '€14',
      image: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwYnJ1c2NoZXR0YSUyMGFwcGV0aXplcnxlbnwxfHx8fDE3ODE3MTUzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      wine: 'Pair with Vermentino'
    },
    {
      name: 'Prosciutto e Melone',
      description: 'Aged Parma prosciutto with sweet cantaloupe melon',
      ingredients: '24-month Prosciutto di Parma, Melon',
      price: '€18',
      image: 'https://images.unsplash.com/photo-1673720111806-1d26f1e18f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcHJvc2NpdXR0byUyMGFudGlwYXN0b3xlbnwxfHx8fDE3ODE3MTUzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      wine: 'Pair with Prosecco'
    },
    {
      name: 'Insalata Caprese',
      description: 'Buffalo mozzarella, heirloom tomatoes, fresh basil, aged balsamic',
      ingredients: 'Buffalo Mozzarella, Tomatoes, Basil, Balsamic',
      price: '€16',
      image: 'https://images.unsplash.com/photo-1610817153377-e54299ffdb1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwY2FwcmVzZSUyMHNhbGFkJTIwbW96emFyZWxsYXxlbnwxfHx8fDE3ODE3MTUzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      wine: 'Pair with Pinot Grigio'
    },
  ],
  Pasta: [
    {
      name: 'Tagliatelle al Tartufo Nero',
      description: 'Fresh egg pasta with black truffle, butter, and aged Parmigiano-Reggiano',
      ingredients: 'Fresh Pasta, Black Truffle, Butter, Parmigiano',
      price: '€32',
      image: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcGFzdGElMjBmcmVzaCUyMGhvbWVtYWRlfGVufDF8fHx8MTc4MTcxNTMxNXww&ixlib=rb-4.1.0&q=80&w=1080',
      wine: 'Pair with Barolo'
    },
    {
      name: 'Carbonara Tradizionale',
      description: 'Guanciale, free-range eggs, Pecorino Romano, black pepper',
      ingredients: 'Guanciale, Eggs, Pecorino, Black Pepper',
      price: '€22',
      image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwY2FyYm9uYXJhJTIwcGFzdGF8ZW58MXx8fHwxNzgxNzE1Mzk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      wine: 'Pair with Frascati'
    },
    {
      name: 'Gnocchi al Gorgonzola',
      description: 'Handmade potato gnocchi in creamy Gorgonzola sauce with walnuts',
      ingredients: 'Potato, Gorgonzola, Cream, Walnuts',
      price: '€24',
      image: 'https://images.unsplash.com/photo-1579349443343-73da56a71a20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwZ25vY2NoaSUyMHBvdGF0b3xlbnwxfHx8fDE3ODE3MTUzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      wine: 'Pair with Barbera'
    },
    {
      name: 'Risotto ai Funghi Porcini',
      description: 'Carnaroli rice with wild porcini mushrooms, butter, and aged Parmigiano',
      ingredients: 'Carnaroli Rice, Porcini, Butter, Parmigiano',
      price: '€28',
      image: 'https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcmlzb3R0byUyMGRpc2h8ZW58MXx8fHwxNzgxNzE1MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      wine: 'Pair with Nebbiolo'
    },
  ],
  Secondi: [
    {
      name: 'Osso Buco alla Milanese',
      description: 'Braised veal shanks with saffron risotto and gremolata',
      ingredients: 'Veal Shank, Saffron, Risotto, Lemon Zest',
      price: '€38',
      image: 'https://images.unsplash.com/photo-1628543108325-1c27cd7246b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwb3NzbyUyMGJ1Y28lMjBtZWF0fGVufDF8fHx8MTc4MTcxNTM5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      wine: 'Pair with Amarone'
    },
    {
      name: 'Branzino al Forno',
      description: 'Whole roasted Mediterranean sea bass with herbs and lemon',
      ingredients: 'Sea Bass, Rosemary, Thyme, Lemon, Olive Oil',
      price: '€34',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcGFubmElMjBjb3R0YSUyMGRlc3NlcnR8ZW58MXx8fHwxNzgxNzE1Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      wine: 'Pair with Verdicchio'
    },
  ],
  Dolci: [
    {
      name: 'Tiramisù della Nonna',
      description: 'Traditional mascarpone layered dessert with espresso and cocoa',
      ingredients: 'Mascarpone, Ladyfingers, Espresso, Cocoa',
      price: '€12',
      image: 'https://images.unsplash.com/photo-1698688334089-c68105801d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwdGlyYW1pc3UlMjBkZXNzZXJ0fGVufDF8fHx8MTc4MTcxNTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      wine: 'Pair with Vin Santo'
    },
    {
      name: 'Panna Cotta ai Frutti di Bosco',
      description: 'Vanilla cream with wild berry compote',
      ingredients: 'Cream, Vanilla, Mixed Berries',
      price: '€10',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcGFubmElMjBjb3R0YSUyMGRlc3NlcnR8ZW58MXx8fHwxNzgxNzE1Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      wine: 'Pair with Moscato d\'Asti'
    },
  ],
  Vini: [
    {
      name: 'Barolo DOCG',
      description: 'Full-bodied Nebbiolo from Piedmont',
      ingredients: 'Nebbiolo grape, oak aged 3 years',
      price: '€85 / bottle',
      image: 'https://images.unsplash.com/photo-1596142332133-327e2a0ff006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwd2luZSUyMHZpbmV5YXJkJTIwYm90dGxlfGVufDF8fHx8MTc4MTcxNTMxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Brunello di Montalcino',
      description: 'Elegant Sangiovese from Tuscany',
      ingredients: 'Sangiovese grape, aged 5 years',
      price: '€95 / bottle',
      image: 'https://images.unsplash.com/photo-1596142332133-327e2a0ff006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwd2luZSUyMHZpbmV5YXJkJTIwYm90dGxlfGVufDF8fHx8MTc4MTcxNTMxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Prosecco Superiore',
      description: 'Sparkling wine from Valdobbiadene',
      ingredients: 'Glera grape, sparkling',
      price: '€45 / bottle',
      image: 'https://images.unsplash.com/photo-1596142332133-327e2a0ff006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwd2luZSUyMHZpbmV5YXJkJTIwYm90dGxlfGVufDF8fHx8MTc4MTcxNTMxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ],
};

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Antipasti');
  const [hoveredDish, setHoveredDish] = useState<string | null>(null);

  const categories: MenuCategory[] = ['Antipasti', 'Pasta', 'Secondi', 'Dolci', 'Vini'];

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
            Our Menu
          </h1>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto opacity-70"
            style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
          >
            Every dish is a celebration of Italian tradition, crafted with love and the finest ingredients
          </p>
        </motion.div>

        {/* Menu Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Category Navigation - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="lg:sticky lg:top-32 space-y-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="w-full text-left px-6 py-4 rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor: activeCategory === category ? '#556B2F' : 'transparent',
                    color: activeCategory === category ? '#F8F3EA' : '#1C1C1C',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    border: activeCategory === category ? 'none' : '1px solid rgba(85, 107, 47, 0.2)',
                  }}
                >
                  <span className="text-lg">{category}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Dish Cards - Right Side */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {menuData[activeCategory].map((dish, index) => (
                <motion.div
                  key={dish.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredDish(dish.name)}
                  onMouseLeave={() => setHoveredDish(null)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    {/* Image */}
                    <div className="md:col-span-1">
                      <div className="relative aspect-square rounded-xl overflow-hidden">
                        <ImageWithFallback
                          src={dish.image}
                          alt={dish.name}
                          className="w-full h-full object-cover transition-transform duration-700"
                          style={{
                            transform: hoveredDish === dish.name ? 'scale(1.1)' : 'scale(1)',
                          }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <h3
                            className="text-2xl md:text-3xl"
                            style={{ fontFamily: 'Playfair Display', color: '#1C1C1C' }}
                          >
                            {dish.name}
                          </h3>
                          <span
                            className="text-xl md:text-2xl ml-4 flex-shrink-0"
                            style={{ fontFamily: 'Inter', fontWeight: 500, color: '#556B2F' }}
                          >
                            {dish.price}
                          </span>
                        </div>

                        <p
                          className="text-base md:text-lg mb-4 leading-relaxed opacity-80"
                          style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
                        >
                          {dish.description}
                        </p>

                        {/* Ingredients */}
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: hoveredDish === dish.name ? 1 : 0,
                            height: hoveredDish === dish.name ? 'auto' : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p
                            className="text-sm italic mb-3"
                            style={{ fontFamily: 'Inter', color: '#6B6B6B' }}
                          >
                            Ingredients: {dish.ingredients}
                          </p>
                        </motion.div>

                        {/* Wine Pairing */}
                        {dish.wine && (
                          <div className="flex items-center gap-2 mt-4">
                            <Wine size={16} style={{ color: '#6B1F2B' }} />
                            <span
                              className="text-sm italic"
                              style={{ fontFamily: 'Inter', color: '#6B1F2B' }}
                            >
                              {dish.wine}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Wine Pairing Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center p-8 rounded-2xl"
          style={{ backgroundColor: '#556B2F' }}
        >
          <Wine size={40} className="mx-auto mb-4" style={{ color: '#C8A96A' }} />
          <h3
            className="text-2xl md:text-3xl mb-3"
            style={{ fontFamily: 'Playfair Display', color: '#F8F3EA' }}
          >
            Wine Pairing Excellence
          </h3>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto opacity-90"
            style={{ fontFamily: 'Inter', color: '#F8F3EA' }}
          >
            Our sommelier has carefully curated wine pairings for each dish. Ask your server for personalized recommendations from our extensive Italian wine collection.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
