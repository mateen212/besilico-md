import { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Users, Calendar, MapPin, Mail, Phone, Check, ChefHat } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type CateringForm = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guests: string;
  location: string;
  message: string;
};

const packages = [
  {
    name: 'Antipasto Experience',
    price: '€45',
    perPerson: true,
    description: 'Perfect for cocktail hours and standing receptions',
    items: ['Selection of 5 traditional Italian appetizers', 'Bruschetta station with fresh toppings', 'Italian charcuterie and cheese board', 'Seasonal vegetable antipasti', 'Prosecco and wine service'],
  },
  {
    name: 'Classic Italian Dinner',
    price: '€85',
    perPerson: true,
    description: 'Full sit-down dinner experience with multiple courses',
    items: ['Antipasto course with 3 selections', 'Choice of 2 pasta dishes', 'Main course: meat or fish', 'Seasonal side dishes', 'Dessert selection', 'Coffee service', 'Wine pairing available'],
  },
  {
    name: 'Luxury Wedding Menu',
    price: '€125',
    perPerson: true,
    description: 'An unforgettable culinary journey for your special day',
    items: ['Welcome aperitivo with Prosecco', 'Gourmet antipasto trio', 'Fresh pasta course', 'Palate cleanser', 'Premium main course (surf & turf)', 'Handcrafted dessert buffet', 'Premium wine and champagne', 'Late-night Italian coffee bar'],
  },
];

const eventTypes = ['Wedding', 'Corporate Event', 'Birthday Party', 'Anniversary', 'Private Dinner', 'Holiday Party', 'Other'];

const inputBase = 'w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none';

export function Catering() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CateringForm>();

  const onSubmit = (data: CateringForm) => {
    console.log('Catering inquiry:', data);
    setIsSubmitted(true);
    setTimeout(() => { setIsSubmitted(false); reset(); }, 5000);
  };

  const fieldStyle = (hasErr: boolean) => ({
    borderColor: hasErr ? 'var(--brand-wine)' : 'var(--brand-border)',
    fontFamily: 'Inter',
    backgroundColor: 'var(--brand-bg)',
    color: 'var(--brand-text)',
  });

  return (
    <div className="overflow-x-hidden">
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1727425383452-2be55354f06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwd2VkZGluZyUyMGV2ZW50JTIwZWxlZ2FudHxlbnwxfHx8fDE3ODE3MTU2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Italian event catering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-6 pt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6" style={{ fontFamily: 'Playfair Display', color: '#F8F3EA' }}>Catering Services</h1>
            <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'Cormorant Garamond', color: '#F8F3EA', fontStyle: 'italic', fontSize: '1.3rem' }}>
              Bring the authentic taste of Italy to your special occasion
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--brand-bg)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-xl md:text-2xl leading-relaxed mb-8" style={{ fontFamily: 'Cormorant Garamond', color: 'var(--brand-text)', fontSize: '1.5rem' }}>
              Whether it's an intimate gathering or a grand celebration, we bring the warmth of Italian hospitality and culinary excellence to your event.
            </p>
            <p className="text-base md:text-lg" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
              From weddings to corporate events, our team creates memorable dining experiences with the same passion and attention to detail that defines Basilico.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--brand-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}>Our Catering Packages</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>Carefully curated menus designed to delight your guests</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl p-8 border-2 transition-all duration-500 hover:shadow-xl"
                style={{ backgroundColor: 'var(--brand-bg)', borderColor: 'var(--brand-border)' }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}>{pkg.name}</h3>
                  <p className="text-3xl mb-3" style={{ fontFamily: 'Playfair Display', color: 'var(--brand-olive)', fontWeight: 600 }}>
                    {pkg.price}{pkg.perPerson && <span className="text-base opacity-70"> per person</span>}
                  </p>
                  <p className="text-sm italic" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>{pkg.description}</p>
                </div>
                <ul className="space-y-3">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--brand-olive)' }} />
                      <span className="text-sm leading-relaxed" style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--brand-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}>Events We Cater</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ icon: '💍', title: 'Weddings', desc: 'Make your special day unforgettable' }, { icon: '🎉', title: 'Celebrations', desc: 'Birthdays, anniversaries & more' }, { icon: '💼', title: 'Corporate', desc: 'Professional events & meetings' }, { icon: '🏠', title: 'Private Dining', desc: 'Intimate gatherings at home' }].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--brand-surface)', border: '1px solid var(--brand-border)' }}
              >
                <div className="text-5xl mb-4">{event.icon}</div>
                <h3 className="text-xl mb-2" style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}>{event.title}</h3>
                <p className="text-sm" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32" style={{ backgroundColor: 'var(--brand-surface)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {!isSubmitted ? (
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="text-center mb-12">
                <ChefHat size={48} className="mx-auto mb-6" style={{ color: 'var(--brand-olive)' }} />
                <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}>Request a Proposal</h2>
                <p className="text-base" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
                  Tell us about your event and we'll create a customized proposal
                </p>
              </div>

              <div className="rounded-2xl shadow-lg p-8 lg:p-12" style={{ backgroundColor: 'var(--brand-bg)', border: '1px solid var(--brand-border)' }}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { name: 'name' as const, label: 'Full Name', type: 'text', icon: null, rules: { required: 'Name is required' } },
                      { name: 'email' as const, label: 'Email Address', type: 'email', icon: Mail, rules: { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' } } },
                      { name: 'phone' as const, label: 'Phone Number', type: 'tel', icon: Phone, rules: { required: 'Phone is required' } },
                    ].map(({ name, label, type, icon: Icon, rules }) => (
                      <div key={name}>
                        <label className="flex items-center gap-2 text-sm mb-2" style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}>
                          {Icon && <Icon size={16} style={{ color: 'var(--brand-olive)' }} />} {label} *
                        </label>
                        <input
                          {...register(name, rules)}
                          type={type}
                          className={inputBase}
                          style={fieldStyle(!!errors[name])}
                          onFocus={(e) => { if (!errors[name]) (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-olive)'; }}
                          onBlur={(e) => { if (!errors[name]) (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-border)'; }}
                        />
                        {errors[name] && <p className="text-sm mt-1" style={{ color: 'var(--brand-wine)', fontFamily: 'Inter' }}>{errors[name]?.message}</p>}
                      </div>
                    ))}
                    <div>
                      <label className="text-sm mb-2 block" style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}>Event Type *</label>
                      <select {...register('eventType', { required: 'Event type is required' })} className={inputBase} style={fieldStyle(!!errors.eventType)}>
                        <option value="">Select event type</option>
                        {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm mb-2" style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}>
                        <Calendar size={16} style={{ color: 'var(--brand-olive)' }} /> Event Date *
                      </label>
                      <input {...register('eventDate', { required: 'Date is required' })} type="date" className={inputBase} style={fieldStyle(!!errors.eventDate)} />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm mb-2" style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}>
                        <Users size={16} style={{ color: 'var(--brand-olive)' }} /> Number of Guests *
                      </label>
                      <input {...register('guests', { required: 'Number of guests is required' })} type="number" min="1" className={inputBase} style={fieldStyle(!!errors.guests)} />
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm mb-2" style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}>
                      <MapPin size={16} style={{ color: 'var(--brand-olive)' }} /> Event Location *
                    </label>
                    <input {...register('location', { required: 'Location is required' })} type="text" placeholder="Venue name or address" className={inputBase} style={fieldStyle(!!errors.location)} />
                  </div>
                  <div>
                    <label className="text-sm mb-2 block" style={{ fontFamily: 'Inter', color: 'var(--brand-text)' }}>Additional Details</label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Menu preferences, dietary restrictions, budget range..."
                      className={`${inputBase} resize-none`}
                      style={{ borderColor: 'var(--brand-border)', fontFamily: 'Inter', backgroundColor: 'var(--brand-bg)', color: 'var(--brand-text)' }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl transition-all duration-300 text-lg"
                    style={{ backgroundColor: 'var(--brand-olive)', color: 'var(--brand-bg)', fontFamily: 'Inter', fontWeight: 500 }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-wine)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-olive)')}
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="rounded-2xl shadow-lg p-12 text-center" style={{ backgroundColor: 'var(--brand-bg)', border: '1px solid var(--brand-border)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--brand-olive)' }}>
                <Check size={40} style={{ color: 'var(--brand-bg)' }} />
              </div>
              <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Playfair Display', color: 'var(--brand-text)' }}>Inquiry Received!</h2>
              <p className="text-lg mb-6" style={{ fontFamily: 'Inter', color: 'var(--brand-text-muted)' }}>
                Thank you for considering Basilico for your event. Our catering team will contact you within 24 hours with a customized proposal.
              </p>
              <p className="text-base italic" style={{ fontFamily: 'Cormorant Garamond', color: 'var(--brand-olive)', fontSize: '1.2rem' }}>
                We look forward to making your event extraordinary
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
