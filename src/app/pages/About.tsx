import { motion } from 'motion/react';
import { MapPin, Clock, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const timeline = [
  {
    year: '1985',
    title: 'The Beginning',
    description: 'Sara was born in a small village in Tuscany, where her grandmother taught her the sacred art of Italian cooking.'
  },
  {
    year: '2005',
    title: 'Culinary School',
    description: 'Studied at the prestigious Alma Culinary Institute in Parma, mastering traditional Italian techniques.'
  },
  {
    year: '2010',
    title: 'European Journey',
    description: 'Worked in Michelin-starred kitchens across Italy and France, refining her craft while staying true to her roots.'
  },
  {
    year: '2018',
    title: 'Basilico Opens',
    description: 'Opened Basilico to share her family\'s recipes and Italian culinary heritage with the world.'
  },
  {
    year: '2024',
    title: 'Recognition',
    description: 'Awarded "Best Italian Restaurant" and featured in major culinary publications worldwide.'
  },
];

const values = [
  {
    icon: Heart,
    title: 'Passion & Love',
    description: 'Every dish is prepared with the same love and care Sara learned from her grandmother\'s kitchen.'
  },
  {
    icon: Award,
    title: 'Authenticity',
    description: 'We honor traditional Italian recipes, using time-tested techniques passed down through generations.'
  },
  {
    icon: MapPin,
    title: 'Local Sourcing',
    description: 'Partnering with trusted Italian producers and local artisans to bring you the finest ingredients.'
  },
  {
    icon: Clock,
    title: 'Slow Food',
    description: 'We embrace the slow food philosophy—no shortcuts, just patience and respect for the craft.'
  },
];

export function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1516108317508-6788f6a160e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUdXNjYW55JTIwdmluZXlhcmQlMjBsYW5kc2NhcGUlMjBJdGFseXxlbnwxfHx8fDE3ODE3MTU0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Tuscany landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#F8F3EA]" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-6 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1
              className="text-5xl md:text-6xl lg:text-7xl mb-6"
              style={{ fontFamily: 'Playfair Display', color: '#F8F3EA' }}
            >
              Our Story
            </h1>
            <p
              className="text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: 'Inter', color: '#F8F3EA' }}
            >
              A journey from the hills of Tuscany to your table
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: '#F8F3EA' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1496811425508-6d7ebb7ff32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwd29tYW4lMjBjaGVmJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzgxNzE1NDczfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Chef Sara"
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
                <h2
                  className="text-4xl md:text-5xl mb-6"
                  style={{ fontFamily: 'Playfair Display', color: '#1C1C1C' }}
                >
                  Meet Chef Sara
                </h2>
                <p
                  className="font-['Great_Vibes'] text-2xl mb-4"
                  style={{ color: '#556B2F' }}
                >
                  "Cooking is my love language"
                </p>
              </div>

              <p
                className="text-lg leading-relaxed opacity-80"
                style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
              >
                Growing up in a small Tuscan village, I spent countless hours in my grandmother's kitchen, 
                where the air was always filled with the aroma of fresh basil, simmering tomato sauce, 
                and handmade pasta drying on wooden racks.
              </p>

              <p
                className="text-lg leading-relaxed opacity-80"
                style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
              >
                Those moments taught me that Italian cooking isn't just about food—it's about family, 
                tradition, and sharing love through every dish. At Basilico, I strive to recreate that 
                same warmth and authenticity that made my grandmother's kitchen so magical.
              </p>

              <p
                className="text-lg leading-relaxed opacity-80"
                style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
              >
                Every recipe here has a story, every ingredient is chosen with care, and every plate 
                that leaves our kitchen carries a piece of my family's heritage.
              </p>

              <div className="pt-6">
                <p
                  className="text-base italic"
                  style={{ fontFamily: 'Inter', color: '#556B2F' }}
                >
                  — Sara Rossi, Chef & Owner
                </p>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2
              className="text-4xl md:text-5xl text-center mb-16"
              style={{ fontFamily: 'Playfair Display', color: '#1C1C1C' }}
            >
              Our Journey
            </h2>

            <div className="max-w-4xl mx-auto space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-8 items-start"
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span
                      className="text-3xl"
                      style={{ fontFamily: 'Playfair Display', color: '#556B2F', fontWeight: 600 }}
                    >
                      {event.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-px h-24 bg-gradient-to-b from-[#556B2F] to-transparent mt-2" />
                  <div className="flex-1 pt-1">
                    <h3
                      className="text-2xl mb-2"
                      style={{ fontFamily: 'Playfair Display', color: '#1C1C1C' }}
                    >
                      {event.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed opacity-70"
                      style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
                    >
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl mb-6"
              style={{ fontFamily: 'Playfair Display', color: '#1C1C1C' }}
            >
              Our Philosophy
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto opacity-70"
              style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
            >
              Four pillars that guide everything we do at Basilico
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl"
                style={{ backgroundColor: '#F8F3EA' }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: '#556B2F' }}
                >
                  <value.icon size={28} style={{ color: '#556B2F' }} />
                </div>
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: 'Playfair Display', color: '#1C1C1C' }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed opacity-70"
                  style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760445529098-949fcfc7c9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwa2l0Y2hlbiUyMGluZ3JlZGllbnRzJTIwZnJlc2h8ZW58MXx8fHwxNzgxNzE1NDczfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fresh ingredients"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center px-6"
        >
          <h2
            className="text-4xl md:text-5xl mb-8"
            style={{ fontFamily: 'Playfair Display', color: '#F8F3EA' }}
          >
            The Finest Ingredients
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed mb-8 opacity-90"
            style={{ fontFamily: 'Inter', color: '#F8F3EA' }}
          >
            We source directly from trusted Italian producers—San Marzano tomatoes from Campania, 
            Parmigiano-Reggiano aged 36 months, black truffles from Umbria, and extra virgin olive oil 
            from our family's grove in Tuscany.
          </p>
          <p
            className="text-base italic opacity-80"
            style={{ fontFamily: 'Inter', color: '#C8A96A' }}
          >
            Because great cuisine begins with great ingredients
          </p>
        </motion.div>
      </section>
    </div>
  );
}
