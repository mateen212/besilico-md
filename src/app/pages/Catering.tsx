import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  ChefHat,
  Calendar,
  Users,
  MapPin,
  Phone,
  Mail,
  Check,
  PartyPopper,
  Heart,
  Building2,
  Cake,
  User,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// --- Data ---
const packages = [
  {
    name: 'Classic Celebration',
    price: 'Rs. 5,500',
    perPerson: true,
    description: 'Perfect for birthdays and intimate gatherings.',
    items: ['Fresh salads', 'Choice of pasta', 'Wood-fired pizza', 'Desserts', 'Soft beverages'],
  },
  {
    name: 'Signature Experience',
    price: 'Rs. 8,500',
    perPerson: true,
    description: 'Ideal for corporate events and family occasions.',
    items: ['Starters', 'Two pasta selections', 'Premium main course', 'Desserts', 'Coffee service'],
  },
  {
    name: 'Wedding Collection',
    price: 'Custom',
    perPerson: false,
    description: 'Tailored menus for unforgettable wedding celebrations.',
    items: ['Customized menu', 'Live stations', 'Dessert selection', 'Beverage service', 'Professional staff'],
  },
];

const eventGallery = [
  '/images/cat1.jpg',
  '/images/cat2.jpg',
  '/images/cat3.jpg',
  '/images/cat4.jpg',
];

const eventTypes = ['Wedding', 'Corporate Event', 'Birthday Party', 'Anniversary', 'Private Dinner', 'Other'];

type CateringForm = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  guests: number;
  venue: string;
  budget: string;
  requirements: string;
};

// --- Component ---
export function Catering() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CateringForm>();

  const onSubmit = (data: CateringForm) => {
    console.log('Catering inquiry:', data);
    setIsSubmitted(true);
    // In a real app, send data to backend
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none';

  const fieldStyle = (hasErr: boolean) => ({
    borderColor: hasErr ? 'var(--brand-wine)' : 'var(--brand-border)',
    fontFamily: 'Inter',
    backgroundColor: 'var(--brand-bg)',
    color: 'var(--brand-text)',
  });

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Video */}
      <section className="relative top-24 h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/images/hero-poster.jpg" // optional fallback image
          >
            <source src="/videos/event-reel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
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
              Catering & Private Events
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{
                fontFamily: 'Cormorant Garamond',
                color: '#F8F3EA',
                fontStyle: 'italic',
                fontSize: '1.4rem',
              }}
            >
              Bring the elegance of Basilico by Sara to your celebrations,
              corporate gatherings, and unforgettable occasions in Lahore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--brand-bg)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-6"
              style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}
            >
              Crafted For Memorable Gatherings
            </h2>
            <p
              className="text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: 'Cormorant Garamond', color: 'var(--brand-text)', fontSize: '1.5rem' }}
            >
              From intimate dinners to grand celebrations, our culinary team
              creates experiences inspired by authentic Italian flavors and warm
              hospitality. Every menu is tailored to suit your event and create
              lasting memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--brand-surface)' }}>
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
              style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}
            >
              Events We Cater
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Weddings', desc: 'Elegant wedding receptions and celebrations.' },
              { icon: Building2, title: 'Corporate Events', desc: 'Professional meetings and executive dining.' },
              { icon: Cake, title: 'Birthdays', desc: 'Personalized menus for special celebrations.' },
              { icon: Users, title: 'Private Gatherings', desc: 'Family dinners and intimate occasions.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl transition-all hover:shadow-xl"
                style={{
                  backgroundColor: 'var(--brand-bg)',
                  border: '1px solid var(--brand-border)',
                }}
              >
                <div className="flex justify-center mb-4">
                  <item.icon size={40} style={{ color: 'var(--brand-olive)' }} />
                </div>
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Packages */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--brand-bg)' }}>
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
              style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}
            >
              Premium Packages
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl p-8 border-2 transition-all duration-500 hover:shadow-xl"
                style={{
                  backgroundColor: 'var(--brand-surface)',
                  borderColor: 'var(--brand-border)',
                }}
              >
                <div className="text-center mb-6">
                  <h3
                    className="text-2xl md:text-3xl mb-2"
                    style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className="text-3xl mb-3"
                    style={{ fontFamily: 'Playfair Display', color: 'var(--brand-olive)', fontWeight: 600 }}
                  >
                    {pkg.price}
                    {pkg.perPerson && (
                      <span className="text-base opacity-70"> per person</span>
                    )}
                  </p>
                  <p className="text-sm italic" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
                    {pkg.description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--brand-olive)' }} />
                      <span className="text-sm leading-relaxed" style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Basilico */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--brand-surface)' }}>
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
              style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}
            >
              Why Choose Basilico
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ChefHat,
                title: 'Authentic Italian Cuisine',
                desc: 'Prepared with carefully selected ingredients and traditional techniques.',
              },
              {
                icon: Calendar,
                title: 'Customized Menus',
                desc: 'Tailored according to guest preferences.',
              },
              {
                icon: PartyPopper,
                title: 'Elegant Presentation',
                desc: 'Refined presentation and attention to detail.',
              },
              {
                icon: Users,
                title: 'Professional Service',
                desc: 'Dedicated team ensuring memorable events.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl transition-all hover:shadow-lg"
                style={{
                  backgroundColor: 'var(--brand-bg)',
                  border: '1px solid var(--brand-border)',
                }}
              >
                <div className="flex justify-center mb-4">
                  <item.icon size={40} style={{ color: 'var(--brand-olive)' }} />
                </div>
                <h3
                  className="text-lg mb-2"
                  style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--brand-bg)' }}>
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
              style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}
            >
              Event Gallery
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventGallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl shadow-lg group"
                style={{ border: '1px solid var(--brand-border)' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={img}
                    alt={`Event ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--brand-surface)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <ChefHat size={48} className="mx-auto mb-6" style={{ color: 'var(--brand-olive)' }} />
                <h2
                  className="text-3xl md:text-4xl mb-4"
                  style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}
                >
                  Request a Proposal
                </h2>
                <p className="text-base" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
                  Tell us about your event and we'll create a personalized culinary experience
                </p>
              </div>

              <div
                className="rounded-2xl shadow-lg p-8 lg:p-12"
                style={{ backgroundColor: 'var(--brand-bg)', border: '1px solid var(--brand-border)' }}
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        className="flex items-center gap-2 text-sm mb-2"
                        style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}
                      >
                        <User size={16} style={{ color: 'var(--brand-olive)' }} /> Full Name *
                      </label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        className={inputBase}
                        style={fieldStyle(!!errors.name)}
                      />
                      {errors.name && (
                        <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    {/* Email */}
                    <div>
                      <label
                        className="flex items-center gap-2 text-sm mb-2"
                        style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}
                      >
                        <Mail size={16} style={{ color: 'var(--brand-olive)' }} /> Email Address *
                      </label>
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email',
                          },
                        })}
                        type="email"
                        className={inputBase}
                        style={fieldStyle(!!errors.email)}
                      />
                      {errors.email && (
                        <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    {/* Phone */}
                    <div>
                      <label
                        className="flex items-center gap-2 text-sm mb-2"
                        style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}
                      >
                        <Phone size={16} style={{ color: 'var(--brand-olive)' }} /> Phone Number *
                      </label>
                      <input
                        {...register('phone', { required: 'Phone is required' })}
                        type="tel"
                        className={inputBase}
                        style={fieldStyle(!!errors.phone)}
                      />
                      {errors.phone && (
                        <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    {/* Event Type */}
                    <div>
                      <label
                        className="text-sm mb-2 block"
                        style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}
                      >
                        Event Type *
                      </label>
                      <select
                        {...register('eventType', { required: 'Event type is required' })}
                        className={inputBase}
                        style={fieldStyle(!!errors.eventType)}
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {errors.eventType && (
                        <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>
                          {errors.eventType.message}
                        </p>
                      )}
                    </div>
                    {/* Date */}
                    <div>
                      <label
                        className="flex items-center gap-2 text-sm mb-2"
                        style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}
                      >
                        <Calendar size={16} style={{ color: 'var(--brand-olive)' }} /> Event Date *
                      </label>
                      <input
                        {...register('date', { required: 'Date is required' })}
                        type="date"
                        className={inputBase}
                        style={fieldStyle(!!errors.date)}
                      />
                      {errors.date && (
                        <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>
                          {errors.date.message}
                        </p>
                      )}
                    </div>
                    {/* Guests */}
                    <div>
                      <label
                        className="flex items-center gap-2 text-sm mb-2"
                        style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}
                      >
                        <Users size={16} style={{ color: 'var(--brand-olive)' }} /> Number of Guests *
                      </label>
                      <input
                        {...register('guests', {
                          required: 'Guests is required',
                          min: { value: 1, message: 'At least 1 guest' },
                          valueAsNumber: true,
                        })}
                        type="number"
                        min="1"
                        className={inputBase}
                        style={fieldStyle(!!errors.guests)}
                      />
                      {errors.guests && (
                        <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>
                          {errors.guests.message}
                        </p>
                      )}
                    </div>
                    {/* Venue Location */}
                    <div>
                      <label
                        className="flex items-center gap-2 text-sm mb-2"
                        style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}
                      >
                        <MapPin size={16} style={{ color: 'var(--brand-olive)' }} /> Venue Location *
                      </label>
                      <input
                        {...register('venue', { required: 'Venue is required' })}
                        type="text"
                        placeholder="Venue name or address"
                        className={inputBase}
                        style={fieldStyle(!!errors.venue)}
                      />
                      {errors.venue && (
                        <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>
                          {errors.venue.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label
                      className="text-sm mb-2 block"
                      style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}
                    >
                      Budget Range *
                    </label>
                    <select
                      {...register('budget', { required: 'Budget is required' })}
                      className={inputBase}
                      style={fieldStyle(!!errors.budget)}
                    >
                      <option value="">Select budget range</option>
                      <option value="Under Rs. 50,000">Under Rs. 50,000</option>
                      <option value="Rs. 50,000 - Rs. 100,000">Rs. 50,000 - Rs. 100,000</option>
                      <option value="Rs. 100,000 - Rs. 200,000">Rs. 100,000 - Rs. 200,000</option>
                      <option value="Rs. 200,000 - Rs. 500,000">Rs. 200,000 - Rs. 500,000</option>
                      <option value="Above Rs. 500,000">Above Rs. 500,000</option>
                    </select>
                    {errors.budget && (
                      <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>
                        {errors.budget.message}
                      </p>
                    )}
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <label
                      className="text-sm mb-2 block"
                      style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}
                    >
                      Additional Requirements
                    </label>
                    <textarea
                      {...register('requirements')}
                      rows={4}
                      placeholder="Menu preferences, dietary restrictions, special requests..."
                      className={`${inputBase} resize-none`}
                      style={{
                        borderColor: 'var(--brand-border)',
                        fontFamily: 'Inter',
                        backgroundColor: 'var(--brand-bg)',
                        color: 'var(--brand-text)',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl transition-all duration-300 text-lg font-medium"
                    style={{
                      backgroundColor: 'var(--brand-olive)',
                      color: 'var(--brand-bg)',
                      fontFamily: 'Inter',
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-wine)')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-olive)')
                    }
                  >
                    Request Proposal
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            // Success State
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl shadow-lg p-12 text-center"
              style={{ backgroundColor: 'var(--brand-bg)', border: '1px solid var(--brand-border)' }}
            >
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--brand-olive)' }}
              >
                <Check size={40} style={{ color: 'var(--brand-bg)' }} />
              </div>
              <h2
                className="text-3xl md:text-4xl mb-4"
                style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}
              >
                Inquiry Received
              </h2>
              <p
                className="text-lg mb-6"
                style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}
              >
                Thank you for considering Basilico by Sara for your special occasion.
                <br />
                Our team will contact you shortly to create a personalized culinary
                experience for your event.
              </p>
              <p
                className="text-base italic"
                style={{
                  fontFamily: 'Cormorant Garamond',
                  color: 'var(--brand-olive)',
                  fontSize: '1.2rem',
                }}
              >
                "Creating unforgettable moments through exceptional food and warm
                hospitality."
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Final Parallax Section */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/images/catering-bg.png"
            alt="Celebration event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-6"
              style={{ fontFamily: 'Playfair Display', color: '#F8F3EA' }}
            >
              Celebrations Worth Remembering
            </h2>
            <p
              className="text-xl md:text-2xl leading-relaxed mb-8"
              style={{ fontFamily: 'Cormorant Garamond', color: '#F8F3EA', fontSize: '1.4rem' }}
            >
              Whether it's a wedding, birthday, business gathering, or private
              dinner, every event is thoughtfully crafted to bring people together
              through exceptional cuisine and elegant hospitality.
            </p>
            <blockquote
              className="text-2xl md:text-3xl italic"
              style={{ fontFamily: 'Cormorant Garamond', color: 'var(--brand-gold)' }}
            >
              "Because every celebration deserves extraordinary flavors."
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
}