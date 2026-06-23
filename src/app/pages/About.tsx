import { motion } from "motion/react";
import { MapPin, Clock, Award, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const timeline = [
  {
    year: "ICIF Italy",
    title: "Professional Training",
    description:
      "Chef Sara refined her culinary skills through professional training at ICIF in Italy, developing a passion for authentic European cuisine and artisan cooking.",
  },
  {
    year: "The Vision",
    title: "A Dream Takes Shape",
    description:
      "Inspired by Italy's food culture and hospitality, Sara envisioned creating a destination where guests could experience exceptional food and memorable moments.",
  },
  {
    year: "Openings",
    title: "Bringing Europe to Lahore",
    description:
      "Basilico by Sara opened its doors in Gulberg, Lahore, offering Italian, Mediterranean and French-inspired cuisine in a refined and welcoming atmosphere.",
  },
  {
    year: "Experience",
    title: "Artisan Dining",
    description:
      "Handmade pasta, Neapolitan pizzas, premium steaks, seafood, desserts and specialty beverages became part of the Basilico experience.",
  },
  {
    year: "Today",
    title: "Growing Community",
    description:
      "Basilico continues to create unforgettable dining experiences through exceptional cuisine, elegant ambience and heartfelt hospitality.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "Every dish is prepared with care and creativity, reflecting Chef Sara's dedication to authentic flavours and memorable experiences.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Premium ingredients, handcrafted recipes and meticulous presentation are at the heart of everything we serve.",
  },
  {
    icon: MapPin,
    title: "European Hospitality",
    description:
      "Inspired by Italy and the Mediterranean, we create a warm and welcoming atmosphere where guests feel at home.",
  },
  {
    icon: Clock,
    title: "Craftsmanship",
    description:
      "Great food takes time. From fresh pasta to artisan desserts, every detail is thoughtfully crafted.",
  },
];

export function About() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative top-24 h-[60vh] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1516108317508-6788f6a160e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUdXNjYW55JTIwdmluZXlhcmQlMjBsYW5kc2NhcGUlMjBJdGFseXxlbnwxfHx8fDE3ODE3MTU0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Tuscany landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
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
              style={{ fontFamily: "Playfair Display", color: "#F8F3EA" }}
            >
              Our Story
            </h1>
            <p
              className="text-xl md:text-2xl leading-relaxed"
              style={{
                fontFamily: "Cormorant Garamond",
                color: "#F8F3EA",
                fontStyle: "italic",
              }}
            >
              A journey from the hills of Tuscany to your table
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--brand-bg)" }}
      >
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
                  src="/images/owner.jpeg"
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
                  className="text-4xl md:text-5xl mb-4"
                  style={{
                    fontFamily: "Playfair Display",
                    color: "var(--brand-text)",
                  }}
                >
                  Meet Chef Sara
                </h2>
                <p
                  className="font-['Great_Vibes'] text-2xl mb-4"
                  style={{ color: "var(--brand-olive)" }}
                >
                  "Great food is not just eaten — it's felt, remembered, and
                  relived."
                </p>
              </div>
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "Inter",
                  color: "var(--brand-text-muted)",
                }}
              >
                Born from Chef Sara's culinary journey through Italy, Basilico
                by Sara is more than a restaurant — it is a celebration of
                flavour, craftsmanship and hospitality. Inspired by her training
                at ICIF Italy, Chef Sara brings authentic European influences
                together with contemporary creativity to create a truly
                memorable dining experience.
              </p>

              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "Inter",
                  color: "var(--brand-text-muted)",
                }}
              >
                Located in Gulberg, Lahore, Basilico offers an elegant setting
                where guests can enjoy handmade pasta, artisan pizzas, premium
                steaks, seafood, fresh salads, indulgent desserts and specialty
                coffees. Whether it is a casual lunch, a romantic dinner or a
                celebration with family and friends, every experience is
                designed with warmth and attention to detail.
              </p>

              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "Inter",
                  color: "var(--brand-text-muted)",
                }}
              >
                At Basilico, great food is not simply eaten — it is felt,
                remembered and shared. Every plate reflects a passion for
                authentic flavours, refined presentation and the timeless spirit
                of European hospitality.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "Inter",
                  color: "var(--brand-text-muted)",
                }}
              ></p>
              <p
                className="text-base italic pt-4"
                style={{ fontFamily: "Inter", color: "var(--brand-olive)" }}
              >
                — Sara , Chef & Owner
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="/images/site1.jpeg"
                  alt="Chef Sara"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="/images/site2.jpeg"
                  alt="Chef Sara"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2
              className="text-4xl md:text-5xl text-center mb-16"
              style={{
                fontFamily: "Playfair Display",
                color: "var(--brand-text)",
              }}
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
                  <div className="flex-shrink-0 w-48 text-inlin text-right">
                    <span
                      className="text-3xl"
                      style={{
                        fontFamily: "Playfair Display",
                        color: "var(--brand-olive)",
                        fontWeight: 600,
                      }}
                    >
                      {event.year}
                    </span>
                  </div>
                  <div
                    className="flex-shrink-0 w-px h-24 mt-2"
                    style={{
                      background: `linear-gradient(to bottom, var(--brand-olive), transparent)`,
                    }}
                  />
                  <div className="flex-1 pt-1">
                    <h3
                      className="text-2xl mb-2"
                      style={{
                        fontFamily: "Playfair Display",
                        color: "var(--brand-text)",
                      }}
                    >
                      {event.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        fontFamily: "Inter",
                        color: "var(--brand-text-muted)",
                      }}
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

      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--brand-surface)" }}
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
              className="text-4xl md:text-5xl mb-6"
              style={{
                fontFamily: "Playfair Display",
                color: "var(--brand-text)",
              }}
            >
              Our Philosophy
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ fontFamily: "Inter", color: "var(--brand-text-muted)" }}
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
                style={{
                  backgroundColor: "var(--brand-bg)",
                  border: "1px solid var(--brand-border)",
                }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: "var(--brand-olive)" }}
                >
                  <value.icon
                    size={28}
                    style={{ color: "var(--brand-olive)" }}
                  />
                </div>
                <h3
                  className="text-xl mb-3"
                  style={{
                    fontFamily: "Playfair Display",
                    color: "var(--brand-text)",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "Inter",
                    color: "var(--brand-text-muted)",
                  }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            style={{ fontFamily: "Playfair Display", color: "#F8F3EA" }}
          >
            The Art of Exceptional Dining
          </h2>

          <p
            className="text-lg md:text-xl leading-relaxed mb-8 opacity-90"
            style={{ fontFamily: "Inter", color: "#F8F3EA" }}
          >
            At Basilico by Sara, every dish is crafted with carefully selected
            ingredients, authentic European inspiration, and a passion for
            excellence. From handmade pasta and artisan pizzas to premium
            steaks, fresh seafood, decadent desserts, and specialty coffees,
            each creation reflects our commitment to quality, flavour, and
            unforgettable dining experiences.
          </p>

          <p
            className="text-lg md:text-xl leading-relaxed mb-8 opacity-90"
            style={{ fontFamily: "Inter", color: "#F8F3EA" }}
          >
            Whether you're joining us for a leisurely breakfast, a business
            lunch, a romantic dinner, or a celebration with family and friends,
            our goal is to create moments that bring people together through
            exceptional food and warm hospitality.
          </p>

          <p
            className="text-base italic opacity-80"
            style={{
              fontFamily: "Cormorant Garamond",
              color: "var(--brand-gold)",
              fontSize: "1.2rem",
            }}
          >
            Where flavour, elegance, and hospitality come together.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
