import { motion } from 'motion/react';
import { FileText, Calendar, CheckCircle, DollarSign, Clock, Users } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Admissions() {
  const steps = [
    {
      number: '1',
      title: 'Choose Your Program',
      description: 'Review our programs and select the one that matches your career goals.',
      icon: FileText,
    },
    {
      number: '2',
      title: 'Meet Requirements',
      description: 'Ensure you meet the entry requirements for your chosen program.',
      icon: CheckCircle,
    },
    {
      number: '3',
      title: 'Submit Application',
      description: 'Complete and submit your application form with required documents.',
      icon: FileText,
    },
    {
      number: '4',
      title: 'Interview & Assessment',
      description: 'Attend an interview and complete any required assessments.',
      icon: Users,
    },
    {
      number: '5',
      title: 'Receive Admission',
      description: 'Get your admission letter and complete enrollment procedures.',
      icon: CheckCircle,
    },
  ];

  const requiredDocuments = [
    'Completed application form',
    'Certified copies of academic certificates (UCE, UACE if applicable)',
    'Birth certificate or National ID',
    'Two recent passport-size photographs',
    'Recommendation letters (2)',
    'Medical certificate',
    'Application fee receipt',
  ];

  const intakes = [
    {
      period: 'January - March',
      deadline: 'December 15th',
      status: 'Main Intake',
    },
    {
      period: 'August - October',
      deadline: 'July 15th',
      status: 'Second Intake',
    },
  ];

  return (
    <>
      <SEO
        title="Admissions"
        description="Apply to Bulera Teacher Training Institute. Learn about admission requirements, application process, deadlines, and fees for our teacher training programs."
        keywords="admission, apply, teacher training admission, Bulera TTI application, enrollment Uganda"
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
            <h1 className="text-4xl md:text-5xl mb-6">Admissions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Begin your journey to becoming a certified teacher. Follow our simple admission process to join Bulera TTI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">
              Five simple steps to your teaching career
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow h-full">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    {step.number}
                  </div>
                  <step.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-blue-200 -z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intakes & Deadlines */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Intake Periods & Deadlines</h2>
            <p className="text-xl text-gray-600">
              Plan your application timeline
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {intakes.map((intake, index) => (
              <motion.div
                key={intake.period}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm mb-4">
                  {intake.status}
                </div>
                <h3 className="text-2xl mb-3">{intake.period}</h3>
                <div className="text-gray-600 mb-2">Application Deadline:</div>
                <div className="text-xl text-blue-600">{intake.deadline}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">Required Documents</h2>
              <p className="text-lg text-gray-700 mb-8">
                Prepare these documents for your application:
              </p>
              <ul className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <motion.li
                    key={doc}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{doc}</span>
                  </motion.li>
                ))}
              </ul>
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
                  src="https://images.unsplash.com/photo-1539893867126-7ce0b48971ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  alt="Student studying"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fees Information */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Fees Structure</h2>
            <p className="text-xl text-gray-600">
              Affordable education for quality teacher training
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl mb-3">Government Programs</h3>
              <p className="text-gray-600 mb-4">
                Diploma in Education Primary & Diploma in Pre-Primary Education
              </p>
              <div className="text-3xl text-blue-600 mb-2">Subsidized</div>
              <p className="text-sm text-gray-500">
                Government-sponsored with minimal student contribution
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <DollarSign className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl mb-3">Private Program</h3>
              <p className="text-gray-600 mb-4">
                Certificate in Early Childhood Education
              </p>
              <div className="text-3xl text-purple-600 mb-2">Affordable</div>
              <p className="text-sm text-gray-500">
                Competitive fees with flexible payment plans
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl mb-3">In-Service Programs</h3>
              <p className="text-gray-600 mb-4">
                Professional development courses
              </p>
              <div className="text-3xl text-green-600 mb-2">Variable</div>
              <p className="text-sm text-gray-500">
                Based on course duration and content
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600">
              For detailed fee structures and payment plans, please contact our admissions office.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-2xl text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Ready to Apply?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your application today or contact our admissions team for more information and guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors inline-block text-lg"
              >
                Contact Admissions
              </a>
              <a
                href="/courses"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors inline-block text-lg"
              >
                View Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
