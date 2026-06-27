import React from 'react';
import { useState } from "react";
import { motion } from "motion/react";
import { LayoutGrid, List, ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

type MenuCategory =
  | "Soups & Salads"
  | "Sandwiches & Flatbreads"
  | "Main Courses – Chicken"
  | "Main Courses – Fish"
  | "Desserts"
  | "Beverages";

type ViewMode = "grid" | "list";

const menuData: Record<
  MenuCategory,
  Array<{
    name: string;
    description: string;
    price: string;
    image: string;
    ingredients?: string;
  }>
> = {
  "Soups & Salads": [
    {
      name: "Spicy Thai Fusion",
      description:
        "Blend of chicken, green chillies, and vegetables in a spicy thai broth",
      ingredients: "Chicken, Green Chillies, Vegetables, Thai Broth",
      price: "PKR 890",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Bangkok Chicken Salad",
      description:
        "Fresh rocket and iceberg tossed with grilled chicken, celery, and sesame in a zesty ginger-cilantro dressing",
      ingredients:
        "Rocket, Iceberg, Grilled Chicken, Celery, Sesame, Ginger-Cilantro Dressing",
      price: "PKR 1,765",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ],
  "Sandwiches & Flatbreads": [
    {
      name: "Chicken Spinaci Sandwich",
      description:
        "Grilled chicken, sautéed spinach, melted mozzarella on sourdough bread",
      ingredients: "Grilled Chicken, Spinach, Mozzarella, Sourdough",
      price: "PKR 1,950",
      image:
        "https://images.unsplash.com/photo-1553909489-cd47e90ec2e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "La Basilia",
      description:
        "Crisp thin crust layered with chicken, spinach, black olives, and sun-dried tomatoes",
      ingredients: "Chicken, Spinach, Black Olives, Sun-Dried Tomatoes",
      price: "PKR 1,595",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Basilico Club Sandwich",
      description:
        "Turkey ham, grilled chicken, fried eggs, tomatoes, cucumber and cheddar served in sourdough bread",
      ingredients:
        "Turkey Ham, Grilled Chicken, Eggs, Tomato, Cucumber, Cheddar, Sourdough",
      price: "PKR 1,850",
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Sriracha Grilled Chicken",
      description:
        "Grilled chicken layered with BBQ and sriracha, onions, capsicum, sweet corn, black olives, and melted cheese",
      ingredients:
        "Chicken, BBQ Sauce, Sriracha, Onions, Capsicum, Sweet Corn, Black Olives, Cheese",
      price: "PKR 1,850",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Zest Chicken Fingers",
      description: "Stuffed chicken fingers with a citrus orange dressing",
      ingredients: "Chicken, Citrus Orange Dressing",
      price: "PKR 1,520",
      image:
        "https://images.unsplash.com/photo-1562967914-608f82629710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Bombay Tandoori Sandwich",
      description:
        "Tandoori chicken, jalapeños, and onions baked with cheddar, mozzarella, and signature creamy sauce",
      ingredients:
        "Tandoori Chicken, Jalapeños, Onions, Cheddar, Mozzarella, Creamy Sauce",
      price: "PKR 1,790",
      image:
        "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ],
  "Main Courses – Chicken": [
    {
      name: "Creamy Tarragon Chicken",
      description: "Grilled chicken served in a rich, creamy tarragon sauce",
      ingredients: "Chicken, Tarragon, Cream",
      price: "PKR 2,350",
      image:
        "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Tuscan Artichoke Chicken",
      description:
        "Chicken stuffed with spinach, artichokes, and cheese, served with a sun-dried tomato, caper, and cayenne cream sauce",
      ingredients:
        "Chicken, Spinach, Artichokes, Cheese, Sun-Dried Tomato, Capers, Cayenne Cream",
      price: "PKR 2,790",
      image:
        "https://images.unsplash.com/photo-1574481169299-dde3dc823558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Chicken Oregato",
      description:
        "Grilled chicken steak topped with a creamy white-pepper and oregano sauce",
      ingredients: "Chicken, White Pepper, Oregano, Cream",
      price: "PKR 2,350",
      image:
        "https://images.unsplash.com/photo-1529042410759-befb1204b468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Chicken À La Dijon",
      description:
        "Pan-seared chicken with creamy Dijon sauce, served with sautéed mushrooms and spinach on a bed of roasted potatoes",
      ingredients:
        "Chicken, Dijon Mustard, Cream, Mushrooms, Spinach, Roasted Potatoes",
      price: "PKR 1,950",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Polo Alla Milanese",
      description:
        "Thinly breaded pan-fried chicken served with Caesar salad and linguine pasta",
      ingredients: "Chicken, Breadcrumbs, Caesar Salad, Linguine",
      price: "PKR 2,750",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ],
  "Main Courses – Fish": [
    {
      name: "Mediterranean Sole",
      description: "Pan-seared sole with garlic rice and peppercorn sauce",
      ingredients: "Sole, Garlic Rice, Peppercorn Sauce",
      price: "PKR 3,150",
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Sole À La Basilico",
      description:
        "Sole fish marinated with mustard, cooked with onions, bell peppers, olives, and finished with lemon slices",
      ingredients: "Sole, Mustard, Onions, Bell Peppers, Olives, Lemon",
      price: "PKR 2,850",
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Crispy Tamarind Red Snapper",
      description:
        "Crispy fried red snapper served with organic rice, sautéed vegetables, and tangy tamarind sauce",
      ingredients: "Red Snapper, Rice, Vegetables, Tamarind Sauce",
      price: "PKR 2,890",
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ],
  Desserts: [
    {
      name: "Churros Di Casa",
      description:
        "Golden fried churros paired with vanilla ice cream and warm chocolate drizzle",
      ingredients: "Churros, Vanilla Ice Cream, Chocolate",
      price: "PKR 790",
      image:
        "https://images.unsplash.com/photo-1624377189760-37d8e0cd9521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ],
  Beverages: [
    {
      name: "Mojitos & Margaritas",
      description:
        "Flavors: raspberry, mixed berries, ocean blue, strawberry, virgin mojito",
      ingredients: "Fresh fruits, Mint, Lime, Soda",
      price: "PKR 690",
      image:
        "https://images.unsplash.com/photo-1556855810-ac404aa91e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Iced Teas & Chillers",
      description:
        "Flavors: Amalfi citrus sunrise, ginger peach, tropical lychee",
      ingredients: "Tea, Fruits, Ice",
      price: "PKR 680",
      image:
        "https://images.unsplash.com/photo-1556679343-c7306be197b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Perrier Water",
      description: "Sparkling water",
      ingredients: "Sparkling Mineral Water",
      price: "PKR 790",
      image:
        "https://images.unsplash.com/photo-1523362628745-6c10050ab3b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Smoothies",
      description:
        "Flavors: strawberry cheesecake, strawberry banana, mango coconut berrylicious dream",
      ingredients: "Fresh Fruits, Yogurt, Ice",
      price: "PKR 850",
      image:
        "https://images.unsplash.com/photo-1577805947697-89e18249d767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Affogato",
      description: "Espresso poured over vanilla with a drizzle of caramel",
      ingredients: "Espresso, Vanilla Ice Cream, Caramel",
      price: "PKR 695",
      image:
        "https://images.unsplash.com/photo-1570971585195-7d37a9f7a3e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Affogato Fresco",
      description: "Classic affogato with a fresh twist",
      ingredients: "Espresso, Vanilla Ice Cream",
      price: "PKR 695",
      image:
        "https://images.unsplash.com/photo-1570971585195-7d37a9f7a3e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Lattes",
      description: "Hot matcha, Spanish, vanilla, caramel, hazelnut, mocha",
      ingredients: "Milk, Coffee, Flavor Syrups",
      price: "PKR 740",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      name: "Pistachio Latte",
      description: "Creamy latte with pistachio flavor",
      ingredients: "Milk, Coffee, Pistachio Syrup",
      price: "PKR 980",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ],
};

export function Menu() {
  const [activeCategory, setActiveCategory] =
    useState<MenuCategory>("Soups & Salads");
  const [hoveredDish, setHoveredDish] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const categories: MenuCategory[] = [
    "Soups & Salads",
    "Sandwiches & Flatbreads",
    "Main Courses – Chicken",
    "Main Courses – Fish",
    "Desserts",
    "Beverages",
  ];

  const handleAddToCart = (dishName: string, price: string) => {
    // Placeholder for cart logic
    console.log(`Added ${dishName} (${price}) to cart`);
    // You can integrate with your cart state/context here
  };

  return (
    <div
      className=" top-24 min-h-screen pt-24 lg:pt-32 pb-24"
      style={{ backgroundColor: "var(--brand-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "Inter", color: "var(--brand-gold)" }}
          >
            La Cucina
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl mb-6"
            style={{
              fontFamily: "Playfair Display",
              color: "var(--brand-text)",
            }}
          >
            Our Menu
          </h1>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ fontFamily: "Inter", color: "var(--brand-text-muted)" }}
          >
            Inspired by authentic Italian flavours, crafted with the finest
            ingredients
          </p>
        </motion.div>

        {/* Top Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-10"
        >
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap"
                style={{
                  backgroundColor:
                    activeCategory === category
                      ? "var(--brand-olive)"
                      : "transparent",
                  color:
                    activeCategory === category
                      ? "var(--brand-bg)"
                      : "var(--brand-text)",
                  fontFamily: "Inter",
                  border: `1px solid ${activeCategory === category ? "transparent" : "var(--brand-border)"}`,
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <span
              className="text-sm mr-1"
              style={{ fontFamily: "Inter", color: "var(--brand-text-muted)" }}
            >
              View:
            </span>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-brand-olive text-brand-bg"
                  : "bg-transparent text-brand-text-muted"
              }`}
              style={{ border: "1px solid var(--brand-border)" }}
              aria-label="Grid view"
            >
              <LayoutGrid size={18} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-brand-olive text-brand-bg"
                  : "bg-transparent text-brand-text-muted"
              }`}
              style={{ border: "1px solid var(--brand-border)" }}
              aria-label="List view"
            >
              <List size={18} />
            </button>
          </div>
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuData[activeCategory].map((dish, index) => (
                <motion.div
                  key={dish.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredDish(dish.name)}
                  onMouseLeave={() => setHoveredDish(null)}
                  className="rounded-2xl overflow-hidden transition-all duration-300 flex flex-col relative"
                  style={{
                    backgroundColor: "var(--brand-surface)",
                    border: "1px solid var(--brand-border)",
                    boxShadow:
                      hoveredDish === dish.name
                        ? "0 20px 60px rgba(0,0,0,0.12)"
                        : "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700"
                      style={{
                        transform:
                          hoveredDish === dish.name
                            ? "scale(1.05)"
                            : "scale(1)",
                      }}
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3
                      className="text-lg font-semibold mb-1"
                      style={{
                        fontFamily: "Playfair Display",
                        color: "var(--brand-text)",
                      }}
                    >
                      {dish.name}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-2"
                      style={{
                        fontFamily: "Inter",
                        color: "var(--brand-text-muted)",
                      }}
                    >
                      {dish.description}
                    </p>
                    {/* Ingredients always visible */}
                    {dish.ingredients && (
                      <p
                        className="text-xs italic mb-2"
                        style={{
                          fontFamily: "Inter",
                          color: "var(--brand-text-muted)",
                        }}
                      >
                        {dish.ingredients}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-auto">
                      <span
                        className="text-base font-medium"
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 600,
                          color: "var(--brand-olive)",
                        }}
                      >
                        {dish.price}
                      </span>
                      
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {menuData[activeCategory].map((dish, index) => (
                <motion.div
                  key={dish.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="rounded-2xl overflow-hidden transition-all duration-300 flex items-stretch"
                  style={{
                    backgroundColor: "var(--brand-surface)",
                    border: "1px solid var(--brand-border)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                    minHeight: "120px", // reduced height
                  }}
                >
                  {/* Smaller image on the left */}
                  <div className="w-32 md:w-40 flex-shrink-0">
                    <ImageWithFallback
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h3
                          className="text-lg font-semibold"
                          style={{
                            fontFamily: "Playfair Display",
                            color: "var(--brand-text)",
                          }}
                        >
                          {dish.name}
                        </h3>
                        <span
                          className="text-base font-medium"
                          style={{
                            fontFamily: "Inter",
                            fontWeight: 600,
                            color: "var(--brand-olive)",
                          }}
                        >
                          {dish.price}
                        </span>
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          fontFamily: "Inter",
                          color: "var(--brand-text-muted)",
                        }}
                      >
                        {dish.description}
                      </p>
                      {dish.ingredients && (
                        <p
                          className="text-xs italic"
                          style={{
                            fontFamily: "Inter",
                            color: "var(--brand-text-muted)",
                          }}
                        >
                          {dish.ingredients}
                        </p>
                      )}
                    </div>
                    {/* Add to Cart button always visible */}
                    <button
                      onClick={() => handleAddToCart(dish.name, dish.price)}
                      className="self-start mt-2 px-4 py-1.5 rounded-full bg-brand-olive text-white text-sm font-medium flex items-center gap-2 transition-colors hover:bg-brand-olive-dark"
                      style={{ fontFamily: "Inter" }}
                    >
                      <ShoppingCart size={14} />
                      Add – {dish.price}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center p-8 rounded-2xl"
          style={{ backgroundColor: "var(--brand-olive)" }}
        >
          <h3
            className="text-2xl md:text-3xl mb-3"
            style={{ fontFamily: "Playfair Display", color: "#F8F3EA" }}
          >
            Buon Appetito!
          </h3>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto opacity-90"
            style={{ fontFamily: "Inter", color: "#F8F3EA" }}
          >
            Every dish is made with passion and the freshest ingredients. Enjoy
            a taste of Italy in every bite.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
