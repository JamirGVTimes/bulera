import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Bulera Teacher Training Institute', 'Hoima City', 'Western Region, Uganda', 'East Africa'],
      color: 'blue',
    },
    {
      icon: Phone,
      title: 'Office Phone',
      details: ['+256 200 925 690', 'Monday - Friday: 8:00 AM - 5:00 PM'],
      link: 'tel:+256200925690',
      color: 'blue',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+256 774 058 894', 'Quick responses via WhatsApp'],
      link: 'https://wa.me/256774058894',
      color: 'green',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['buleraptc940@gmail.com', 'Response within 24-48 hours'],
      link: 'mailto:buleraptc940@gmail.com',
      color: 'red',
    },
  ];

  const departments = [
    {
      name: 'General Inquiries',
      contact: 'buleraptc940@gmail.com',
      description: 'For all general questions and information',
      icon: Mail,
    },
    {
      name: 'Admissions Office',
      contact: '+256 200 925 690',
      description: 'For application inquiries and enrollment information',
      icon: Phone,
    },
    {
      name: 'WhatsApp Support',
      contact: '+256 774 058 894',
      description: 'Quick responses for urgent inquiries',
      icon: MessageCircle,
      link: 'https://wa.me/256774058894',
    },
    {
      name: 'Campus Visits',
      contact: 'Schedule in advance',
      description: 'Book a tour of our facilities in Hoima City',
      icon: MapPin,
    },
  ];

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact Bulera Teacher Training Institute in Hoima City, Uganda. Get in touch with our admissions, academic, and student affairs offices."
        keywords="contact Bulera TTI, Hoima teacher training contact, Uganda education contact, admissions office"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're here to help. Reach out to us for any inquiries about admissions, programs, or general information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const bgColors: Record<string, string> = {
                blue: 'bg-blue-100',
                green: 'bg-green-100',
                red: 'bg-red-100',
              };
              const textColors: Record<string, string> = {
                blue: 'text-blue-600',
                green: 'text-green-600',
                red: 'text-red-600',
              };
              const content = (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all ${
                    info.link ? 'cursor-pointer hover:-translate-y-1' : ''
                  }`}
                >
                  <div
                    className={`w-16 h-16 ${bgColors[info.color]} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <info.icon className={`w-8 h-8 ${textColors[info.color]}`} />
                  </div>
                  <h3 className="text-xl mb-4">{info.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    {info.details.map((detail) => (
                      <p key={detail} className={info.link ? textColors[info.color] : ''}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );

              return info.link ? (
                <a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                content
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you within 24-48 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="+256 XXX XXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="fees">Fees and Payment</option>
                    <option value="in-service">In-Service Programs</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Map Placeholder and Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl mb-6">Visit Our Campus</h2>
                <div className="bg-gray-200 rounded-xl h-[300px] flex items-center justify-center mb-6">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Map of Hoima City</p>
                    <p className="text-sm">Bulera Teacher Training Institute</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our campus is conveniently located in Hoima City, Western Uganda. We welcome
                  prospective students and parents to visit our facilities. Please call ahead to
                  schedule a campus tour.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl mb-4">Quick Contact Options</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-2xl">💬</span>
                    <div>
                      <div className="font-semibold mb-1">WhatsApp (Fastest)</div>
                      <a
                        href="https://wa.me/256774058894"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        +256 774 058 894
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-2xl">☎️</span>
                    <div>
                      <div className="font-semibold mb-1">Office Phone</div>
                      <a href="tel:+256200925690" className="text-blue-600 hover:text-blue-700">
                        +256 200 925 690
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-2xl">✉️</span>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a
                        href="mailto:buleraptc940@gmail.com"
                        className="text-blue-600 hover:text-blue-700 text-sm break-all"
                      >
                        buleraptc940@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600">
              Reach out to the specific department for your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => {
              const ContactIcon = dept.icon;
              const isLink = dept.link || dept.contact.includes('@') || dept.contact.includes('+');
              const href = dept.link || (dept.contact.includes('@') ? `mailto:${dept.contact}` : dept.contact.includes('+') ? `tel:${dept.contact.replace(/\s/g, '')}` : undefined);

              return (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <ContactIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-2">{dept.name}</h3>
                      <p className="text-gray-600 mb-3 text-sm">{dept.description}</p>
                      {isLink && href ? (
                        <a
                          href={href}
                          target={dept.link ? '_blank' : undefined}
                          rel={dept.link ? 'noopener noreferrer' : undefined}
                          className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
                        >
                          <ContactIcon className="w-4 h-4" />
                          {dept.contact}
                        </a>
                      ) : (
                        <p className="text-gray-700">{dept.contact}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Our admissions team is ready to assist you. Don't hesitate to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/256774058894"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors inline-flex items-center gap-2 text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a
                href="tel:+256200925690"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
