import { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, Users, Mail, Phone, User, Check } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type ReservationForm = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
};

export function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReservationForm>();

  const onSubmit = (data: ReservationForm) => {
    console.log('Reservation data:', data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 5000);
  };

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1583354608715-177553a4035e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZWxlZ2FudHxlbnwxfHx8fDE3ODE3MTUzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#F8F3EA]" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-6 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl md:text-6xl lg:text-7xl mb-4"
              style={{ fontFamily: 'Playfair Display', color: '#F8F3EA' }}
            >
              Reservations
            </h1>
            <p
              className="text-lg md:text-xl"
              style={{ fontFamily: 'Inter', color: '#F8F3EA' }}
            >
              Secure your evening in Italy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: '#F8F3EA' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <h2
                  className="text-3xl md:text-4xl mb-4"
                  style={{ fontFamily: 'Playfair Display', color: '#1C1C1C' }}
                >
                  Reserve Your Table
                </h2>
                <p
                  className="text-base opacity-70"
                  style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
                >
                  Complete the form below and we'll confirm your reservation within 24 hours
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3
                      className="text-xl pb-3 border-b"
                      style={{
                        fontFamily: 'Playfair Display',
                        color: '#556B2F',
                        borderColor: 'rgba(85, 107, 47, 0.2)',
                      }}
                    >
                      Your Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label
                          className="flex items-center gap-2 text-sm mb-2"
                          style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
                        >
                          <User size={16} style={{ color: '#556B2F' }} />
                          Full Name *
                        </label>
                        <input
                          {...register('name', { required: 'Name is required' })}
                          type="text"
                          placeholder="Sara Rossi"
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                          style={{
                            borderColor: errors.name ? '#6B1F2B' : 'rgba(85, 107, 47, 0.2)',
                            fontFamily: 'Inter',
                            backgroundColor: '#F8F3EA',
                          }}
                          onFocus={(e) => {
                            if (!errors.name) e.currentTarget.style.borderColor = '#556B2F';
                          }}
                          onBlur={(e) => {
                            if (!errors.name) e.currentTarget.style.borderColor = 'rgba(85, 107, 47, 0.2)';
                          }}
                        />
                        {errors.name && (
                          <p className="text-sm mt-1" style={{ color: '#6B1F2B', fontFamily: 'Inter' }}>
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          className="flex items-center gap-2 text-sm mb-2"
                          style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
                        >
                          <Mail size={16} style={{ color: '#556B2F' }} />
                          Email Address *
                        </label>
                        <input
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            },
                          })}
                          type="email"
                          placeholder="sara@example.com"
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                          style={{
                            borderColor: errors.email ? '#6B1F2B' : 'rgba(85, 107, 47, 0.2)',
                            fontFamily: 'Inter',
                            backgroundColor: '#F8F3EA',
                          }}
                          onFocus={(e) => {
                            if (!errors.email) e.currentTarget.style.borderColor = '#556B2F';
                          }}
                          onBlur={(e) => {
                            if (!errors.email) e.currentTarget.style.borderColor = 'rgba(85, 107, 47, 0.2)';
                          }}
                        />
                        {errors.email && (
                          <p className="text-sm mt-1" style={{ color: '#6B1F2B', fontFamily: 'Inter' }}>
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="md:col-span-2">
                        <label
                          className="flex items-center gap-2 text-sm mb-2"
                          style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
                        >
                          <Phone size={16} style={{ color: '#556B2F' }} />
                          Phone Number *
                        </label>
                        <input
                          {...register('phone', { required: 'Phone number is required' })}
                          type="tel"
                          placeholder="+39 02 1234 5678"
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                          style={{
                            borderColor: errors.phone ? '#6B1F2B' : 'rgba(85, 107, 47, 0.2)',
                            fontFamily: 'Inter',
                            backgroundColor: '#F8F3EA',
                          }}
                          onFocus={(e) => {
                            if (!errors.phone) e.currentTarget.style.borderColor = '#556B2F';
                          }}
                          onBlur={(e) => {
                            if (!errors.phone) e.currentTarget.style.borderColor = 'rgba(85, 107, 47, 0.2)';
                          }}
                        />
                        {errors.phone && (
                          <p className="text-sm mt-1" style={{ color: '#6B1F2B', fontFamily: 'Inter' }}>
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Reservation Details */}
                  <div className="space-y-6">
                    <h3
                      className="text-xl pb-3 border-b"
                      style={{
                        fontFamily: 'Playfair Display',
                        color: '#556B2F',
                        borderColor: 'rgba(85, 107, 47, 0.2)',
                      }}
                    >
                      Reservation Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Date */}
                      <div>
                        <label
                          className="flex items-center gap-2 text-sm mb-2"
                          style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
                        >
                          <Calendar size={16} style={{ color: '#556B2F' }} />
                          Date *
                        </label>
                        <input
                          {...register('date', { required: 'Date is required' })}
                          type="date"
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                          style={{
                            borderColor: errors.date ? '#6B1F2B' : 'rgba(85, 107, 47, 0.2)',
                            fontFamily: 'Inter',
                            backgroundColor: '#F8F3EA',
                          }}
                          onFocus={(e) => {
                            if (!errors.date) e.currentTarget.style.borderColor = '#556B2F';
                          }}
                          onBlur={(e) => {
                            if (!errors.date) e.currentTarget.style.borderColor = 'rgba(85, 107, 47, 0.2)';
                          }}
                        />
                        {errors.date && (
                          <p className="text-sm mt-1" style={{ color: '#6B1F2B', fontFamily: 'Inter' }}>
                            {errors.date.message}
                          </p>
                        )}
                      </div>

                      {/* Time */}
                      <div>
                        <label
                          className="flex items-center gap-2 text-sm mb-2"
                          style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
                        >
                          <Clock size={16} style={{ color: '#556B2F' }} />
                          Time *
                        </label>
                        <select
                          {...register('time', { required: 'Time is required' })}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                          style={{
                            borderColor: errors.time ? '#6B1F2B' : 'rgba(85, 107, 47, 0.2)',
                            fontFamily: 'Inter',
                            backgroundColor: '#F8F3EA',
                          }}
                          onFocus={(e) => {
                            if (!errors.time) e.currentTarget.style.borderColor = '#556B2F';
                          }}
                          onBlur={(e) => {
                            if (!errors.time) e.currentTarget.style.borderColor = 'rgba(85, 107, 47, 0.2)';
                          }}
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                        {errors.time && (
                          <p className="text-sm mt-1" style={{ color: '#6B1F2B', fontFamily: 'Inter' }}>
                            {errors.time.message}
                          </p>
                        )}
                      </div>

                      {/* Guests */}
                      <div>
                        <label
                          className="flex items-center gap-2 text-sm mb-2"
                          style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
                        >
                          <Users size={16} style={{ color: '#556B2F' }} />
                          Guests *
                        </label>
                        <select
                          {...register('guests', { required: 'Number of guests is required' })}
                          className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                          style={{
                            borderColor: errors.guests ? '#6B1F2B' : 'rgba(85, 107, 47, 0.2)',
                            fontFamily: 'Inter',
                            backgroundColor: '#F8F3EA',
                          }}
                          onFocus={(e) => {
                            if (!errors.guests) e.currentTarget.style.borderColor = '#556B2F';
                          }}
                          onBlur={(e) => {
                            if (!errors.guests) e.currentTarget.style.borderColor = 'rgba(85, 107, 47, 0.2)';
                          }}
                        >
                          <option value="">Select</option>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                          <option value="9+">9+ Guests</option>
                        </select>
                        {errors.guests && (
                          <p className="text-sm mt-1" style={{ color: '#6B1F2B', fontFamily: 'Inter' }}>
                            {errors.guests.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label
                        className="flex items-center gap-2 text-sm mb-2"
                        style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
                      >
                        Special Requests (Optional)
                      </label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        placeholder="Dietary restrictions, special occasion, seating preferences..."
                        className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none"
                        style={{
                          borderColor: 'rgba(85, 107, 47, 0.2)',
                          fontFamily: 'Inter',
                          backgroundColor: '#F8F3EA',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#556B2F';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(85, 107, 47, 0.2)';
                        }}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl transition-all duration-300 text-lg"
                      style={{
                        backgroundColor: '#556B2F',
                        color: '#F8F3EA',
                        fontFamily: 'Inter',
                        fontWeight: 500,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#6B1F2B';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#556B2F';
                      }}
                    >
                      Confirm Reservation
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-12 text-center"
            >
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#556B2F' }}
              >
                <Check size={40} style={{ color: '#F8F3EA' }} />
              </div>
              <h2
                className="text-3xl md:text-4xl mb-4"
                style={{ fontFamily: 'Playfair Display', color: '#1C1C1C' }}
              >
                Reservation Confirmed!
              </h2>
              <p
                className="text-lg mb-6 opacity-70"
                style={{ fontFamily: 'Inter', color: '#1C1C1C' }}
              >
                Thank you for choosing Basilico by Sara. We'll send a confirmation email shortly.
              </p>
              <p
                className="text-base italic"
                style={{ fontFamily: 'Inter', color: '#556B2F' }}
              >
                We can't wait to welcome you to our table
              </p>
            </motion.div>
          )}

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center p-6 rounded-2xl bg-white">
              <Clock size={32} className="mx-auto mb-4" style={{ color: '#556B2F' }} />
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: 'Playfair Display', color: '#1C1C1C' }}
              >
                Opening Hours
              </h3>
              <p className="text-sm opacity-70" style={{ fontFamily: 'Inter', color: '#1C1C1C' }}>
                Tue-Sun: 12pm-3pm, 6pm-11pm<br />
                Closed Mondays
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white">
              <Phone size={32} className="mx-auto mb-4" style={{ color: '#556B2F' }} />
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: 'Playfair Display', color: '#1C1C1C' }}
              >
                Call Us
              </h3>
              <p className="text-sm opacity-70" style={{ fontFamily: 'Inter', color: '#1C1C1C' }}>
                +39 02 1234 5678<br />
                Available 11am-10pm
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white">
              <Mail size={32} className="mx-auto mb-4" style={{ color: '#556B2F' }} />
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: 'Playfair Display', color: '#1C1C1C' }}
              >
                Email Us
              </h3>
              <p className="text-sm opacity-70" style={{ fontFamily: 'Inter', color: '#1C1C1C' }}>
                info@basilicobysara.it<br />
                We reply within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
