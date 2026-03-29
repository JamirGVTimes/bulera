import { motion } from 'motion/react';
import { BookOpen, Clock, GraduationCap, CheckCircle, AlertCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Courses() {
  const programs = [
    {
      title: 'Diploma in Education Primary',
      type: 'Government Program',
      duration: '2 Years',
      description: 'Comprehensive training for primary school teachers, equipping you with pedagogical skills and subject knowledge to educate primary level students.',
      image: 'https://images.unsplash.com/photo-1761208662734-fb46f1398551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      color: 'blue',
      features: [
        'Child Development and Psychology',
        'Teaching Methodologies',
        'Curriculum Studies',
        'Subject Specializations',
        'Classroom Management',
        'Teaching Practice',
      ],
      requirements: [
        'Uganda Certificate of Education (UCE) or equivalent',
        'Minimum of 5 passes including English and Mathematics',
        'Age: 18 years and above',
      ],
    },
    {
      title: 'Diploma in Pre-Primary Education',
      type: 'Government Program',
      duration: '2 Years',
      description: 'Specialized training for nursery and kindergarten educators, focusing on early childhood development and age-appropriate teaching methods.',
      image: 'https://images.unsplash.com/photo-1761604478724-13fe879468cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      color: 'green',
      features: [
        'Early Childhood Development',
        'Play-Based Learning',
        'Child Psychology',
        'Creative Arts and Music',
        'Language Development',
        'Supervised Teaching Practice',
      ],
      requirements: [
        'Uganda Certificate of Education (UCE) or equivalent',
        'Minimum of 5 passes',
        'Passion for working with young children',
      ],
    },
    {
      title: 'Certificate in Early Childhood Education',
      type: 'Private Program',
      duration: '1 Year',
      description: 'Fast-track certification for those seeking to enter the early childhood education field quickly, covering essential skills and knowledge.',
      image: 'https://images.unsplash.com/photo-1761208662441-9ba3264ca7fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      color: 'purple',
      features: [
        'Fundamentals of Early Childhood Care',
        'Basic Child Development',
        'Activity Planning',
        'Health and Safety',
        'Parent-Teacher Communication',
        'Practical Training',
      ],
      requirements: [
        'Uganda Certificate of Education (UCE) or equivalent',
        'Minimum of 4 passes',
        'Interview and assessment',
      ],
    },
  ];

  const inServicePrograms = [
    'Professional development workshops',
    'Curriculum update training',
    'ICT integration in teaching',
    'Special needs education',
    'Assessment and evaluation techniques',
    'Leadership and management for educators',
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; accent: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', accent: 'bg-blue-600' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', accent: 'bg-green-600' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', accent: 'bg-purple-600' },
    };
    return colors[color];
  };

  return (
    <>
      <SEO
        title="Courses & Programs"
        description="Explore our teacher training programs: Diploma in Education Primary, Diploma in Pre-Primary Education, and Certificate in Early Childhood Education. Government and private programs available."
        keywords="teacher training courses, diploma in education, pre-primary education, early childhood education, Uganda teacher programs"
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
            <h1 className="text-4xl md:text-5xl mb-6">Our Programs</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Choose from our range of accredited teacher training programs designed to launch or advance your education career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => {
              const colors = getColorClasses(program.color);
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      <div className="h-full min-h-[400px]">
                        <ImageWithFallback
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                      <div className={`inline-block ${colors.bg} ${colors.text} px-4 py-2 rounded-full text-sm mb-4`}>
                        {program.type}
                      </div>
                      <h2 className="text-3xl md:text-4xl mb-4">{program.title}</h2>

                      <div className="flex items-center gap-6 mb-6 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-5 h-5" />
                          <span>Professional Certification</span>
                        </div>
                      </div>

                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {program.description}
                      </p>

                      <div className="mb-6">
                        <h3 className="text-xl mb-4 flex items-center gap-2">
                          <BookOpen className="w-6 h-6" />
                          Course Highlights
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {program.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={`${colors.bg} p-6 rounded-xl`}>
                        <h3 className="text-xl mb-3 flex items-center gap-2">
                          <AlertCircle className="w-6 h-6" />
                          Entry Requirements
                        </h3>
                        <ul className="space-y-2">
                          {program.requirements.map((req) => (
                            <li key={req} className="flex items-start gap-2 text-gray-700">
                              <span className="text-gray-400">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* In-Service Programs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">In-Service Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional development opportunities for practicing teachers to enhance their skills and stay current with educational trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl mb-6">Available Training Areas:</h3>
                <ul className="space-y-4">
                  {inServicePrograms.map((program, index) => (
                    <motion.li
                      key={program}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-lg text-gray-700">{program}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758270704296-a59b8f4e7dda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                    alt="In-service training"
                    className="w-full h-[350px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                  <div className="text-3xl mb-1">Flexible</div>
                  <div className="text-sm text-blue-100">Weekend & Evening Classes</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-2xl text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Ready to Enroll?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards a rewarding career in education. Apply now and join our community of dedicated educators.
            </p>
            <a
              href="/admissions"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors inline-block text-lg"
            >
              Apply for Admission
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
