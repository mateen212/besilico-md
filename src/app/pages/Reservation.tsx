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

const inputStyle = (hasError: boolean) => ({
  borderColor: hasError ? 'var(--brand-wine)' : 'var(--brand-border)',
  fontFamily: 'Inter',
  backgroundColor: 'var(--brand-bg)',
  color: 'var(--brand-text)',
});

export function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReservationForm>();

  const onSubmit = (data: ReservationForm) => {
    console.log('Reservation data:', data);
    setIsSubmitted(true);
    setTimeout(() => { setIsSubmitted(false); reset(); }, 5000);
  };

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  const inputClass = 'w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none';

  return (
    <div className="min-h-screen">
      <section className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1583354608715-177553a4035e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZWxlZ2FudHxlbnwxfHx8fDE3ODE3MTUzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-6 pt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4" style={{ fontFamily: 'Playfair Display', color: '#F8F3EA' }}>Reservations</h1>
            <p className="text-lg md:text-xl" style={{ fontFamily: 'Cormorant Garamond', color: '#F8F3EA', fontStyle: 'italic', fontSize: '1.3rem' }}>
              Secure your evening in Italy
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--brand-bg)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {!isSubmitted ? (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}>Reserve Your Table</h2>
                <p className="text-base" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
                  Complete the form below and we'll confirm your reservation within 24 hours
                </p>
              </div>

              <div className="rounded-2xl shadow-lg p-8 lg:p-12" style={{ backgroundColor: 'var(--brand-surface)', border: '1px solid var(--brand-border)' }}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-xl pb-3" style={{ fontFamily: 'Playfair Display', color: 'var(--brand-olive)', borderBottom: '1px solid var(--brand-border)' }}>
                      Your Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="flex items-center gap-2 text-sm mb-2" style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}>
                          <User size={16} style={{ color: 'var(--brand-olive)' }} /> Full Name *
                        </label>
                        <input
                          {...register('name', { required: 'Name is required' })}
                          type="text"
                          placeholder="Sara Rossi"
                          className={inputClass}
                          style={inputStyle(!!errors.name)}
                          onFocus={(e) => { if (!errors.name) (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-olive)'; }}
                          onBlur={(e) => { if (!errors.name) (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-border)'; }}
                        />
                        {errors.name && <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm mb-2" style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}>
                          <Mail size={16} style={{ color: 'var(--brand-olive)' }} /> Email Address *
                        </label>
                        <input
                          {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } })}
                          type="email"
                          placeholder="sara@example.com"
                          className={inputClass}
                          style={inputStyle(!!errors.email)}
                          onFocus={(e) => { if (!errors.email) (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-olive)'; }}
                          onBlur={(e) => { if (!errors.email) (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-border)'; }}
                        />
                        {errors.email && <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>{errors.email.message}</p>}
                      </div>
                      <div className="md:col-span-2">
                        <label className="flex items-center gap-2 text-sm mb-2" style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}>
                          <Phone size={16} style={{ color: 'var(--brand-olive)' }} /> Phone Number *
                        </label>
                        <input
                          {...register('phone', { required: 'Phone number is required' })}
                          type="tel"
                          placeholder="+39 02 1234 5678"
                          className={inputClass}
                          style={inputStyle(!!errors.phone)}
                          onFocus={(e) => { if (!errors.phone) (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-olive)'; }}
                          onBlur={(e) => { if (!errors.phone) (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-border)'; }}
                        />
                        {errors.phone && <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>{errors.phone.message}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl pb-3" style={{ fontFamily: 'Playfair Display', color: 'var(--brand-olive)', borderBottom: '1px solid var(--brand-border)' }}>
                      Reservation Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="flex items-center gap-2 text-sm mb-2" style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}>
                          <Calendar size={16} style={{ color: 'var(--brand-olive)' }} /> Date *
                        </label>
                        <input
                          {...register('date', { required: 'Date is required' })}
                          type="date"
                          className={inputClass}
                          style={inputStyle(!!errors.date)}
                          onFocus={(e) => { if (!errors.date) (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-olive)'; }}
                          onBlur={(e) => { if (!errors.date) (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-border)'; }}
                        />
                        {errors.date && <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>{errors.date.message}</p>}
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm mb-2" style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}>
                          <Clock size={16} style={{ color: 'var(--brand-olive)' }} /> Time *
                        </label>
                        <select
                          {...register('time', { required: 'Time is required' })}
                          className={inputClass}
                          style={inputStyle(!!errors.time)}
                          onFocus={(e) => { if (!errors.time) (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-olive)'; }}
                          onBlur={(e) => { if (!errors.time) (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-border)'; }}
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
                        </select>
                        {errors.time && <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>{errors.time.message}</p>}
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm mb-2" style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}>
                          <Users size={16} style={{ color: 'var(--brand-olive)' }} /> Guests *
                        </label>
                        <select
                          {...register('guests', { required: 'Number of guests is required' })}
                          className={inputClass}
                          style={inputStyle(!!errors.guests)}
                          onFocus={(e) => { if (!errors.guests) (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-olive)'; }}
                          onBlur={(e) => { if (!errors.guests) (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-border)'; }}
                        >
                          <option value="">Select</option>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                          <option value="9+">9+ Guests</option>
                        </select>
                        {errors.guests && <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>{errors.guests.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm mb-2 block" style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}>Special Requests (Optional)</label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        placeholder="Dietary restrictions, special occasion, seating preferences..."
                        className={`${inputClass} resize-none`}
                        style={{ borderColor: 'var(--brand-border)', fontFamily: 'Inter', backgroundColor: 'var(--brand-bg)', color: 'var(--brand-text)' }}
                        onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-olive)')}
                        onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-border)')}
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl transition-all duration-300 text-lg"
                      style={{ backgroundColor: 'var(--brand-olive)', color: 'var(--brand-bg)', fontFamily: 'Inter', fontWeight: 500 }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-wine)')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-olive)')}
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
              className="rounded-2xl shadow-lg p-12 text-center"
              style={{ backgroundColor: 'var(--brand-surface)', border: '1px solid var(--brand-border)' }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--brand-olive)' }}>
                <Check size={40} style={{ color: 'var(--brand-bg)' }} />
              </div>
              <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}>Reservation Confirmed!</h2>
              <p className="text-lg mb-6" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
                Thank you for choosing Basilico by Sara. We'll send a confirmation email shortly.
              </p>
              <p className="text-base italic" style={{ fontFamily: 'Cormorant Garamond', color: 'var(--brand-olive)', fontSize: '1.2rem' }}>
                We can't wait to welcome you to our table
              </p>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Clock, title: 'Opening Hours', text: 'Tue–Sun: 12pm–3pm, 6pm–11pm\nClosed Mondays' },
              { icon: Phone, title: 'Call Us', text: '+39 02 1234 5678\nAvailable 11am–10pm' },
              { icon: Mail, title: 'Email Us', text: 'info@basilicobysara.it\nWe reply within 24 hours' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center p-6 rounded-2xl" style={{ backgroundColor: 'var(--brand-surface)', border: '1px solid var(--brand-border)' }}>
                <Icon size={32} className="mx-auto mb-4" style={{ color: 'var(--brand-olive)' }} />
                <h3 className="text-lg mb-2" style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}>{title}</h3>
                <p className="text-sm whitespace-pre-line" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
