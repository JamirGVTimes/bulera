import { motion } from 'motion/react';
import { Target, Eye, Award, Users, BookOpen, Globe } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in teacher education and training.',
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'We welcome students from all backgrounds and provide equal opportunities.',
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'We embrace modern teaching methods and educational technologies.',
    },
    {
      icon: Globe,
      title: 'Community',
      description: 'We serve our community and contribute to Uganda\'s educational development.',
    },
  ];

  const milestones = [
    { year: '1998', event: 'Bulera Teacher Training Institute was established' },
    { year: '2000', event: 'Introduced Diploma in Education Primary program' },
    { year: '2005', event: 'Launched Diploma in Pre-Primary Education' },
    { year: '2010', event: 'Started In-service training programs' },
    { year: '2015', event: 'Introduced Certificate in Early Childhood Education (Private)' },
    { year: '2020', event: 'Expanded facilities and modernized campus' },
    { year: '2026', event: 'Continuing excellence in teacher training' },
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Bulera Teacher Training Institute - A government-owned institution established in 1998, training quality teachers in Hoima City, Uganda. Our motto: Education for Responsibility."
        keywords="about Bulera TTI, teacher training Uganda, Hoima education, government college"
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
            <h1 className="text-4xl md:text-5xl mb-6">About Bulera TTI</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A legacy of excellence in teacher education since 1998
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide quality, accessible, and relevant <span className="font-bold text-blue-700">primary teacher education</span> that prepares competent,
                responsible, and innovative educators who will transform Uganda's education system and
                contribute to national development through excellence in teaching.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-50 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a center of excellence in teacher education, recognized nationally and
                internationally for producing highly skilled, ethical, and innovative educators who
                champion quality education for all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">Our History</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Established in 1998, Bulera Teacher Training Institute has been at the forefront of
                <span className="font-bold"> primary teacher education</span> in Western Uganda. As a government-owned institution, we have trained
                thousands of <span className="font-bold">primary teachers</span> who are now serving in schools across the country, shaping the
                minds of Uganda's children.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Located in the vibrant Hoima City, our institute has grown from a small college to a
                comprehensive teacher training center offering multiple programs focused on primary and
                early childhood education. Our commitment to "Education for Responsibility" drives
                everything we do.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We take pride in our experienced faculty, modern facilities, and the success of our
                graduates who are making significant contributions to Uganda's education sector, particularly
                in primary education where the foundation of learning is built.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1728743264694-4ac39fa29385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  alt="Bulera TTI classroom"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide our institution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our history
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:mb-0 mb-4`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
                      <div className="text-2xl text-blue-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-6 h-6 bg-blue-600 rounded-full border-4 border-blue-100 z-10"></div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Government Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-green-700 text-white p-12 rounded-2xl text-center"
          >
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl mb-4">Government Recognized Institution</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Bulera Teacher Training Institute is a fully accredited government-owned institution,
              ensuring that your qualifications are recognized nationally and your education meets
              the highest standards set by Uganda's Ministry of Education.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
