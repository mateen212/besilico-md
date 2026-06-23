import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Users,
  Calendar,
  Clock,
  User,
  Phone,
  MapPin,
  Check,
  Heart,
  Coffee,
  Briefcase,
  Users as UsersIcon,
  X,
} from 'lucide-react';

// --- Data ---
const tables = [
  {
    id: 1,
    title: 'Couple Table',
    seats: 2,
    available: true,
    image: '/images/couple.jpeg',
    description: 'Intimate setting for two, perfect for romantic evenings.',
  },
  {
    id: 2,
    title: 'Family Table',
    seats: 4,
    available: true,
    image: '/images/family.jpeg',
    description: 'Spacious and welcoming, ideal for family gatherings.',
  },
  {
    id: 3,
    title: 'Private Seat',
    seats: 1,
    available: true,
    image: '/images/single.jpeg',
    description: 'A quiet corner for solo dining, coffee, or dessert.',
  },
];

const slots = [
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '6:00 PM',
  '7:00 PM',
  '8:00 PM',
  '9:00 PM',
];

const reservedSlots: Record<number, string[]> = {
  1: ['1:00 PM', '7:00 PM'],
  2: ['2:00 PM', '8:00 PM'],
  3: ['12:00 PM'],
};

type ReservationForm = {
  name: string;
  phone: string;
  guests: number;
  specialRequest?: string;
};

// --- Component ---
export function Reservation() {
  const [selectedTable, setSelectedTable] = useState<typeof tables[0] | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReservationForm>();

  const openModal = (table: typeof tables[0]) => {
    setSelectedTable(table);
    setSelectedSlot(null);
    setSelectedDate('');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTable(null);
    setSelectedSlot(null);
    setSelectedDate('');
    setIsSubmitted(false);
    reset();
  };

  const onSubmit = (data: ReservationForm) => {
    console.log('Reservation:', { ...data, table: selectedTable, date: selectedDate, slot: selectedSlot });
    setIsSubmitted(true);
    // Auto close after a few seconds? We'll keep success state.
    // In real app you'd send data.
  };

  // Helper to check if a slot is reserved for the current table
  const isSlotReserved = (slot: string) => {
    if (!selectedTable) return false;
    return reservedSlots[selectedTable.id]?.includes(slot) || false;
  };

  // Reset success when modal closes
  const handleModalClose = () => {
    closeModal();
  };

  // Input styling
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
      {/* Hero Section */}
      <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpdGFsaWFuJTIwcmVzdGF1cmFudCUyMGVuZ2xpc2h8ZW58MHx8fHwxNzQyNzU1MDQwfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Italian restaurant interior"
            className="w-full h-full object-cover"
          />
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
              Reserve Your Experience
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
              Experience the warmth of Italian hospitality in Lahore, where every
              table is prepared for memorable moments, refined flavors, and
              timeless elegance.
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
              Dining Crafted Around You
            </h2>
            <p
              className="text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: 'Cormorant Garamond', color: 'var(--brand-text)', fontSize: '1.5rem' }}
            >
              Whether you're planning a romantic evening, a family gathering, or
              a quiet moment with coffee and dessert, Basilico offers carefully
              curated seating designed to make every occasion memorable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seating Collection */}
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
              Select Your Table
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tables.map((table, index) => (
              <motion.div
                key={table.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
                style={{ backgroundColor: 'var(--brand-bg)', border: '1px solid var(--brand-border)' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={table.image}
                    alt={table.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        table.available ? 'bg-green-500/80 text-white' : 'bg-red-500/80 text-white'
                      }`}
                      style={{ fontFamily: 'Inter' }}
                    >
                      {table.available ? 'Available' : 'Reserved'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl mb-2"
                    style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}
                  >
                    {table.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Users size={18} style={{ color: 'var(--brand-olive)' }} />
                    <span style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
                      {table.seats} {table.seats === 1 ? 'seat' : 'seats'}
                    </span>
                  </div>
                  <p
                    className="text-sm mb-4"
                    style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}
                  >
                    {table.description}
                  </p>
                  <button
                    onClick={() => openModal(table)}
                    disabled={!table.available}
                    className="w-full py-3 rounded-xl transition-all duration-300 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: table.available ? 'var(--brand-olive)' : 'var(--brand-border)',
                      color: 'var(--brand-bg)',
                      fontFamily: 'Inter',
                    }}
                    onMouseEnter={(e) => {
                      if (table.available) {
                        (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-wine)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (table.available) {
                        (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-olive)';
                      }
                    }}
                  >
                    {table.available ? 'Reserve' : 'Unavailable'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedTable && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
            onClick={handleModalClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
              style={{ backgroundColor: 'var(--brand-bg)', border: '1px solid var(--brand-border)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleModalClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors z-10"
                style={{ color: 'var(--brand-text)' }}
              >
                <X size={24} />
              </button>

              {!isSubmitted ? (
                <div className="p-6 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Table image */}
                    <div className="lg:w-1/2">
                      <div className="rounded-2xl overflow-hidden shadow-lg">
                        <ImageWithFallback
                          src={selectedTable.image}
                          alt={selectedTable.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <div className="mt-4">
                        <h3
                          className="text-2xl"
                          style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}
                        >
                          {selectedTable.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Users size={18} style={{ color: 'var(--brand-olive)' }} />
                          <span style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
                            {selectedTable.seats} {selectedTable.seats === 1 ? 'seat' : 'seats'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Reservation details */}
                    <div className="lg:w-1/2">
                      {/* Date picker */}
                      <div className="mb-6">
                        <label
                          className="flex items-center gap-2 text-sm mb-2"
                          style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}
                        >
                          <Calendar size={16} style={{ color: 'var(--brand-olive)' }} />
                          Select Date *
                        </label>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className={inputBase}
                          style={fieldStyle(false)}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>

                      {/* Time slots */}
                      <div className="mb-6">
                        <label
                          className="flex items-center gap-2 text-sm mb-3"
                          style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}
                        >
                          <Clock size={16} style={{ color: 'var(--brand-olive)' }} />
                          Available Time Slots
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {slots.map((slot) => {
                            const reserved = isSlotReserved(slot);
                            const selected = selectedSlot === slot;
                            return (
                              <button
                                key={slot}
                                disabled={reserved}
                                onClick={() => !reserved && setSelectedSlot(slot)}
                                className={`py-2 px-3 rounded-xl text-sm transition-all duration-200 ${
                                  reserved
                                    ? 'bg-red-100 text-red-600 cursor-not-allowed'
                                    : selected
                                    ? 'bg-brand-olive text-white'
                                    : 'hover:bg-brand-olive/20'
                                }`}
                                style={{
                                  backgroundColor: reserved
                                    ? '#fecaca'
                                    : selected
                                    ? 'var(--brand-olive)'
                                    : 'var(--brand-surface)',
                                  color: reserved
                                    ? 'var(--brand-wine)'
                                    : selected
                                    ? 'var(--brand-bg)'
                                    : 'var(--brand-text)',
                                  border: selected ? '2px solid var(--brand-olive)' : '1px solid var(--brand-border)',
                                  fontFamily: 'Inter',
                                }}
                              >
                                {slot}
                                {reserved && (
                                  <span className="block text-xs">Reserved</span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                          <label
                            className="flex items-center gap-2 text-sm mb-2"
                            style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}
                          >
                            <User size={16} style={{ color: 'var(--brand-olive)' }} />
                            Full Name *
                          </label>
                          <input
                            {...register('name', { required: 'Name is required' })}
                            type="text"
                            className={inputBase}
                            style={fieldStyle(!!errors.name)}
                            placeholder="Your name"
                          />
                          {errors.name && (
                            <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            className="flex items-center gap-2 text-sm mb-2"
                            style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}
                          >
                            <Phone size={16} style={{ color: 'var(--brand-olive)' }} />
                            Phone Number *
                          </label>
                          <input
                            {...register('phone', { required: 'Phone is required' })}
                            type="tel"
                            className={inputBase}
                            style={fieldStyle(!!errors.phone)}
                            placeholder="Your phone number"
                          />
                          {errors.phone && (
                            <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>
                              {errors.phone.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            className="flex items-center gap-2 text-sm mb-2"
                            style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}
                          >
                            <UsersIcon size={16} style={{ color: 'var(--brand-olive)' }} />
                            Number of Guests *
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
                            placeholder="How many guests?"
                          />
                          {errors.guests && (
                            <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>
                              {errors.guests.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            className="text-sm mb-2 block"
                            style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}
                          >
                            Special Request
                          </label>
                          <textarea
                            {...register('specialRequest')}
                            rows={3}
                            placeholder="Dietary preferences, occasion details, etc."
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
                          Confirm Reservation
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              ) : (
                // Success state
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-12 text-center"
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
                    Reservation Confirmed
                  </h2>
                  <p
                    className="text-lg mb-6"
                    style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}
                  >
                    Thank you for choosing Basilico by Sara.
                    <br />
                    We look forward to welcoming you and creating a memorable
                    dining experience.
                  </p>
                  <p
                    className="text-sm italic"
                    style={{ fontFamily: 'Cormorant Garamond', color: 'var(--brand-olive)', fontSize: '1.2rem' }}
                  >
                    We will confirm your reservation shortly.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Perfect For Every Occasion */}
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
              Perfect For Every Occasion
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Romantic Dinner', desc: 'Intimate setting with candlelight and classic Italian charm.' },
              { icon: UsersIcon, title: 'Family Gathering', desc: 'Spacious tables for shared meals and joyful moments.' },
              { icon: Briefcase, title: 'Business Lunch', desc: 'Professional ambiance for productive meetings.' },
              { icon: Coffee, title: 'Coffee & Dessert', desc: 'Relax and indulge in our finest pastries and coffee.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl transition-all hover:shadow-xl"
                style={{
                  backgroundColor: 'var(--brand-surface)',
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

      {/* Parallax Section */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/images/reservation-bg.png"
            alt="Italian dining experience"
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
              Moments Worth Sharing
            </h2>
            <p
              className="text-xl md:text-2xl leading-relaxed mb-8"
              style={{ fontFamily: 'Cormorant Garamond', color: '#F8F3EA', fontSize: '1.4rem' }}
            >
              From intimate dinners to joyful celebrations, every experience at
              Basilico is designed with elegance, warmth, and authentic Italian
              hospitality.
            </p>
            <blockquote
              className="text-2xl md:text-3xl italic"
              style={{ fontFamily: 'Cormorant Garamond', color: 'var(--brand-gold)' }}
            >
              "Where flavors, conversations, and memories come together."
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
}