import { motion } from 'motion/react';
import { Link } from 'react-router';
import { GraduationCap, Users, BookOpen, Award, Calendar, MapPin } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const stats = [
    { icon: Calendar, label: 'Established', value: '1998' },
    { icon: Users, label: 'Experienced Teachers', value: '50+' },
    { icon: BookOpen, label: 'Programs Offered', value: '3' },
    { icon: Award, label: 'Years of Excellence', value: '28+' },
  ];

  const features = [
    {
      title: 'Government Recognized',
      description: 'Fully accredited government institution providing quality teacher education.',
      image: 'https://images.unsplash.com/photo-1566796096874-dd14890c80b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      title: 'Experienced Faculty',
      description: 'Learn from qualified and experienced educators dedicated to your success.',
      image: 'https://images.unsplash.com/photo-1764169689207-e23fb66e1fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      title: 'Modern Facilities',
      description: 'State-of-the-art classrooms and resources for effective learning.',
      image: 'https://images.unsplash.com/photo-1758270704296-a59b8f4e7dda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
  ];

  return (
    <>
      <SEO
        title="Home"
        description="Bulera Teacher Training Institute - Premier government teacher training college in Hoima City, Uganda. Established 1998. Education for Responsibility."
        keywords="teacher training, Uganda, Hoima, education, diploma in education, early childhood education, pre-primary education"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Bulera Teacher Training Institute
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100 italic">
                "Education for Responsibility"
              </p>
              <p className="text-lg mb-8 text-blue-50">
                Empowering <span className="font-bold text-yellow-300">primary teachers</span> since 1998 in Hoima City, Uganda. Join our government-recognized institution and become the educator that shapes Uganda's future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/courses"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block"
                >
                  Explore Programs
                </Link>
                <Link
                  to="/admissions"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors inline-block"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761208662734-fb46f1398551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  alt="Students learning at Bulera TTI"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <div className="font-bold">Hoima City</div>
                    <div className="text-sm">Uganda, East Africa</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose Bulera TTI?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the premier choice for teacher training in Western Uganda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Ready to Start Your Teaching Career?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join hundreds of successful graduates who are making a difference in Uganda's education sector.
            </p>
            <Link
              to="/admissions"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors inline-block text-lg"
            >
              Apply for Admission
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
