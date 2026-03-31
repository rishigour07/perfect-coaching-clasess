import { Link } from "react-router";
import { CheckCircle, Target, Users, Award, BookOpen, TrendingUp, Heart, Lightbulb, Mail, Phone } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in everything we do, living up to our tagline 'Always being perfect'",
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Every student's success is our priority, with personalized attention and care",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Modern teaching methods combined with traditional values for best results",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuous improvement in our teaching methodology and student outcomes",
    },
  ];

  const whyChooseUs = [
    {
      title: "Experienced Faculty",
      description: "Our teachers have 10+ years of experience in coaching Commerce students",
      icon: Users,
    },
    {
      title: "Proven Track Record",
      description: "Consistent 95%+ pass rate with many students scoring above 90%",
      icon: Award,
    },
    {
      title: "Comprehensive Material",
      description: "Well-researched study material covering entire syllabus with practice questions",
      icon: BookOpen,
    },
    {
      title: "Individual Attention",
      description: "Small batch sizes ensuring every student gets personalized guidance",
      icon: Target,
    },
    {
      title: "Regular Assessments",
      description: "Weekly tests and monthly assessments to track progress effectively",
      icon: TrendingUp,
    },
    {
      title: "Doubt Clearing",
      description: "Dedicated doubt clearing sessions to ensure concept clarity",
      icon: Lightbulb,
    },
  ];

  const achievements = [
    { number: "10+", label: "Years of Excellence" },
    { number: "500+", label: "Students Taught" },
    { number: "95%+", label: "Success Rate" },
    { number: "50+", label: "90% Scorers" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-sky-100 text-sky-950 px-4 py-2 rounded-full text-sm font-semibold">
                About Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Welcome to <span className="text-sky-900">Perfect Coaching Classes</span>
              </h1>
              <p className="text-xl text-sky-900 font-semibold italic">
                "Always being perfect"
              </p>
              <p className="text-lg text-gray-600">
                We are a premier coaching institute dedicated to providing quality education to Commerce students. With years of experience and a passion for teaching, we help students achieve their academic dreams.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759922378123-a1f4f1e39bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3NDc3NTQ4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Perfect Coaching Classes"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-sky-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-sky-900 rounded-full flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-black mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class education to Commerce students, helping them build strong fundamentals and achieve excellent results in their board examinations. We aim to make quality education accessible and affordable for every student.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-sky-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-sky-900 rounded-full flex items-center justify-center mb-6">
                <Award size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-black mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and preferred coaching institute for Commerce education in Madhya Pradesh, creating a generation of well-educated and successful individuals who contribute positively to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educator Profile Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Meet The Educator</h2>
            <div className="h-1 w-20 bg-sky-900 mx-auto rounded"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-xl items-center">
            {/* Image Box */}
            <div className="w-full md:w-[35%] flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center rotate-2 hover:rotate-0 transition-all duration-300 group">
                <ImageWithFallback
                  src="/krishna-choudhary.jpg"
                  alt="Krishna Choudhary"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Content Box */}
            <div className="w-full md:w-[65%] space-y-6">
              <div>
                <h3 className="text-3xl md:text-5xl font-black text-sky-950 tracking-tight mb-2">Krishna Choudhary</h3>
                <p className="text-xl md:text-2xl text-amber-500 font-bold tracking-wide">Dedicated Commerce Educator</p>
              </div>

              <div className="text-gray-700 text-lg leading-relaxed border-l-4 border-amber-400 pl-6 bg-amber-50/50 py-4 rounded-r-2xl">
                <p>
                  With <strong>8 years of experience</strong> in shaping young minds and fostering academic excellence, I specialize in Accountancy and Economics (Micro and Macro). My goal is to help students not just excel in exams, but also develop a deep understanding of commerce concepts.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                {/* Qualifications */}
                <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-md transition-all border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                      <Award className="text-sky-700" size={20} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-800">Qualifications</h4>
                  </div>
                  <ul className="space-y-3">
                    {['B.Com', 'MBA', 'B.Ed'].map((qual, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700 font-semibold bg-white px-4 py-2 rounded-lg border border-gray-50 shadow-sm">
                        <CheckCircle size={18} className="text-green-500" />
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Teaching Approach */}
                <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-md transition-all border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                      <BookOpen className="text-sky-700" size={20} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-800">Teaching Approach</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    I believe in learning with fun and creating memorable experiences for students. My interactive sessions are designed to make complex concepts easy to grasp and retain.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                <a href="mailto:krishnachoudhary175@gmail.com" className="flex-1 flex items-center justify-center gap-3 text-white bg-sky-900 hover:bg-sky-950 transition-colors font-semibold px-6 py-4 rounded-xl shadow-md">
                  <Mail size={20} />
                  Email Me
                </a>
                <a href="tel:7987895503" className="flex-1 flex items-center justify-center gap-3 text-sky-950 bg-white border-2 border-slate-200 hover:border-sky-900 transition-colors font-semibold px-6 py-4 rounded-xl shadow-sm">
                  <Phone size={20} />
                  79878-95503
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-sky-900" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Choose Perfect Coaching Classes?
            </h2>
            <p className="text-lg text-gray-600">We offer the best Commerce education experience</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-slate-500 transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon size={24} className="text-sky-900" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-sky-900 to-sky-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg opacity-90">Numbers that speak for our excellence</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1664382953518-4a664ab8a8c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdGVhY2hpbmclMjB3aGl0ZWJvYXJkfGVufDF8fHx8MTc3NDc3NTQ4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Teaching Methodology"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Our Teaching <span className="text-sky-900">Approach</span>
              </h2>
              <p className="text-lg text-gray-600">
                At Perfect Coaching Classes, we believe in a holistic approach to education that combines:
              </p>
              <ul className="space-y-4">
                {[
                  "Conceptual clarity through interactive teaching methods",
                  "Regular practice sessions with NCERT and board pattern questions",
                  "Continuous assessment through weekly tests and mock exams",
                  "Individual doubt clearing sessions after every class",
                  "Parent-teacher meetings to track student progress",
                  "Motivational guidance for overall personality development",
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Join Our Success Story
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Become a part of Perfect Coaching Classes and experience excellence in Commerce education
          </p>
          <Link
            to="/contact"
            className="bg-sky-900 hover:bg-sky-950 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
