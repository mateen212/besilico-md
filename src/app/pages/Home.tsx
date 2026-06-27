import React, { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Award, Heart, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const featuredDishes = [
  {
    name: "Tagliatelle al Tartufo",
    description: "Fresh handmade pasta with black truffle and aged Parmigiano",
    image:
      "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcGFzdGElMjBmcmVzaCUyMGhvbWVtYWRlfGVufDF8fHx8MTc4MTcxNTMxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    price: "€32",
  },
  {
    name: "Risotto ai Funghi Porcini",
    description: "Creamy Carnaroli rice with wild porcini mushrooms",
    image:
      "https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcmlzb3R0byUyMGRpc2h8ZW58MXx8fHwxNzgxNzE1MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "€28",
  },
  {
    name: "Bruschetta Classica",
    description: "Grilled sourdough with San Marzano tomatoes and basil",
    image:
      "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwYnJ1c2NoZXR0YSUyMGFwcGV0aXplcnxlbnwxfHx8fDE3ODE3MTUzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "€14",
  },
  {
    name: "Tiramisù della Nonna",
    description: "Traditional mascarpone layered dessert with espresso",
    image:
      "https://images.unsplash.com/photo-1698688334089-c68105801d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwdGlyYW1pc3UlMjBkZXNzZXJ0fGVufDF8fHx8MTc4MTcxNTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    price: "€12",
  },
];

const testimonials = [
  {
    name: "Alessandro Romano",
    comment: "Like dining in my nonna's kitchen in Tuscany. Pure magic.",
    rating: 5,
  },
  {
    name: "Emma Rossi",
    comment: "Every dish tells a story. The passion is palpable in every bite.",
    rating: 5,
  },
  {
    name: "Marco Bianchi",
    comment: "Simply the most authentic Italian experience outside of Italy.",
    rating: 5,
  },
];

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative top-24 h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <ImageWithFallback
            src="/images/mainImage.png"
            alt="Italian candlelit dining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative h-full flex items-center justify-center text-center px-6"
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1
                className="font-['Great_Vibes'] text-6xl md:text-8xl lg:text-9xl mb-4"
                style={{ color: "var(--brand-gold)" }}
              >
                Basilico
              </h1>
              <p
                className="text-sm md:text-base tracking-[0.4em] uppercase mb-8"
                style={{ fontFamily: "Inter", color: "#F8F3EA" }}
              >
                by Sara
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl mb-12 leading-relaxed"
              style={{
                fontFamily: "Cormorant Garamond",
                color: "#F8F3EA",
                fontStyle: "italic",
              }}
            >
              Where authentic Italian heritage meets
              <br />
              Mediterranean warmth
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Link
                to="/basilico/reservation"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full transition-all duration-500 border-2 text-sm tracking-widest uppercase"
                style={{
                  borderColor: "var(--brand-gold)",
                  backgroundColor: "var(--brand-gold)",
                  color: "#1C1C1C",
                  fontFamily: "Inter",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--brand-gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--brand-gold)";
                  (e.currentTarget as HTMLElement).style.color = "#1C1C1C";
                }}
              >
                Secure Your Evening
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center pt-2"
            style={{ borderColor: "var(--brand-gold)" }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--brand-gold)" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Dishes */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--brand-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "Inter", color: "var(--brand-gold)" }}
            >
              Chef's Selection
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl mb-4"
              style={{
                fontFamily: "Playfair Display",
                color: "var(--brand-text)",
              }}
            >
              Signature Creations
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "Inter", color: "var(--brand-text-muted)" }}
            >
              Each dish is crafted with love, tradition, and the finest Italian
              ingredients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4]">
                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p
                      className="text-sm opacity-90"
                      style={{ fontFamily: "Inter" }}
                    >
                      {dish.description}
                    </p>
                  </div>
                </div>
                <h3
                  className="text-xl mb-2"
                  style={{
                    fontFamily: "Playfair Display",
                    color: "var(--brand-text)",
                  }}
                >
                  {dish.name}
                </h3>
                <p
                  className="text-lg"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    color: "var(--brand-olive)",
                  }}
                >
                  {dish.price}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              to="/basilico/menu"
              className="inline-flex items-center gap-2 text-lg transition-all duration-300"
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                color: "var(--brand-olive)",
              }}
            >
              Explore Full Menu
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--brand-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1636115130040-adf36e3ed32b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwY2hlZiUyMGNvb2tpbmclMjBraXRjaGVufGVufDF8fHx8MTc4MTcxNTMxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Chef Sara in kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <p
                  className="text-sm tracking-[0.3em] uppercase mb-3"
                  style={{ fontFamily: "Inter", color: "var(--brand-gold)" }}
                >
                  Our Heritage
                </p>
                <h2
                  className="text-4xl md:text-5xl mb-6"
                  style={{
                    fontFamily: "Playfair Display",
                    color: "var(--brand-text)",
                  }}
                >
                  A Love Letter to
                  <br />
                  Italian Tradition
                </h2>
              </div>
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "Inter",
                  color: "var(--brand-text-muted)",
                }}
              >
                Born in the sun-drenched hills of Tuscany, Chef Sara brings
                three generations of family recipes to life. Each dish is a
                tribute to her grandmother's kitchen, where she first learned
                that cooking is an act of love.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "Inter",
                  color: "var(--brand-text-muted)",
                }}
              >
                At Basilico, we honor the slow food movement—sourcing from local
                artisans, hand-rolling our pasta daily, and letting flavors
                develop with patience and care.
              </p>
              <Link
                to="/basilico/about"
                className="inline-flex items-center gap-2 pt-4 text-lg transition-all duration-300"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  color: "var(--brand-olive)",
                }}
              >
                Discover Our Journey
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--brand-olive)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "Playfair Display", color: "#F8F3EA" }}
            >
              The Basilico Promise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Award,
                title: "Artisan Quality",
                description:
                  "Every ingredient sourced from trusted Italian producers and local artisans",
              },
              {
                icon: Heart,
                title: "Made with Love",
                description:
                  "Recipes passed down through generations, prepared with genuine passion",
              },
              {
                icon: Users,
                title: "Family Experience",
                description:
                  "Warm hospitality that makes you feel like part of our famiglia",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: "var(--brand-gold)" }}
                >
                  <value.icon
                    size={32}
                    style={{ color: "var(--brand-gold)" }}
                  />
                </div>
                <h3
                  className="text-2xl mb-4"
                  style={{ fontFamily: "Playfair Display", color: "#F8F3EA" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-base opacity-80 leading-relaxed"
                  style={{ fontFamily: "Inter", color: "#F8F3EA" }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--brand-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{
                fontFamily: "Playfair Display",
                color: "var(--brand-text)",
              }}
            >
              Words from Our Guests
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl"
                style={{
                  backgroundColor: "var(--brand-surface)",
                  border: "1px solid var(--brand-border)",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} style={{ color: "var(--brand-gold)" }}>
                      ★
                    </span>
                  ))}
                </div>
                <p
                  className="text-lg mb-6 italic leading-relaxed"
                  style={{
                    fontFamily: "Cormorant Garamond",
                    color: "var(--brand-text)",
                    fontSize: "1.2rem",
                  }}
                >
                  "{t.comment}"
                </p>
                <p
                  className="text-sm tracking-wider uppercase"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    color: "var(--brand-olive)",
                  }}
                >
                  {t.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1583354608715-177553a4035e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZWxlZ2FudHxlbnwxfHx8fDE3ODE3MTUzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center px-6"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
            style={{ fontFamily: "Playfair Display", color: "#F8F3EA" }}
          >
            Ready for an Unforgettable
            <br />
            Italian Experience?
          </h2>
          <p
            className="text-lg md:text-xl mb-12 opacity-90"
            style={{ fontFamily: "Inter", color: "#F8F3EA" }}
          >
            Reserve your table and let us transport you to the heart of Italy
          </p>
          <Link
            to="/basilico/reservation"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full transition-all duration-500 text-lg border-2"
            style={{
              borderColor: "var(--brand-gold)",
              backgroundColor: "var(--brand-gold)",
              color: "#1C1C1C",
              fontFamily: "Inter",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "transparent";
              (e.currentTarget as HTMLElement).style.color =
                "var(--brand-gold)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--brand-gold)";
              (e.currentTarget as HTMLElement).style.color = "#1C1C1C";
            }}
          >
            Reserve Your Table
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
