import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Phone, ArrowRight, CheckCircle, Users, Award, BookOpen, GraduationCap, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AchieversSection } from "../components/AchieversSection";
import { getMockResults } from "../utils/mockDb";
import { StudentResult } from "./admin/ResultsManager";
export default function Home() {
  const [studentResults, setStudentResults] = useState<StudentResult[]>([]);

  useEffect(() => {
    const syncResults = () => setStudentResults(getMockResults());

    syncResults();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "perfect_coaching_mock_results") {
        syncResults();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const courses = [
    {
      title: "Class 11th Commerce",
      icon: BookOpen,
      subjects: ["Accounts", "Business Studies", "Economics"],
      fee: "₹18,000/year",
      badge: "CBSE, ICSE, MP Board",
    },
    {
      title: "Class 12th Commerce",
      icon: GraduationCap,
      subjects: ["Accounts", "Business Studies", "Economics", "Applied Maths"],
      fee: "₹25,000/year",
      badge: "CBSE, ICSE, MP Board",
    },
    {
      title: "B.Com",
      icon: TrendingUp,
      subjects: ["All Core Subjects"],
      fee: "Contact for Details",
      badge: "University Prep",
    },
    {
      title: "BBA / MBA",
      icon: Award,
      subjects: ["Management Studies"],
      fee: "Contact for Details",
      badge: "Professional Course",
    },
  ];

  const boards = [
    "CBSE (Hindi/English)",
    "ICSE (English)",
    "MP Board (Hindi/English)",
  ];

  const features = [
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Learn from subject experts with years of teaching experience",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Consistent track record of 90%+ student success rate",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Material",
      description: "Well-structured study material and practice tests",
    },
    {
      icon: CheckCircle,
      title: "Flexible Payments",
      description: "Pay fees in 2 easy installments",
    },
  ];

  const topResults = [...studentResults]
    .sort((a, b) => (parseFloat(b.marks) || 0) - (parseFloat(a.marks) || 0))
    .slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-sky-100 text-sky-950 px-4 py-2 rounded-full text-sm font-medium">
                Admissions Open for 2026-27
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Admissions Open for<br />
                <span className="text-sky-900">11th & 12th</span><br />
                <span className="text-sky-900">(CBSE Commerce)</span>
              </h1>
              <p className="text-lg text-gray-600">
                <strong>Subjects:</strong> Accounts, Business Studies, Economics, Applied Maths, Information Practices
              </p>
              
              <div className="bg-sky-900 text-white p-4 rounded-lg inline-block">
                <p className="text-sm font-medium">✨ Flexible Payment Option</p>
                <p className="text-lg font-bold">Pay Fees in 2 Installments</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="bg-sky-900 hover:bg-sky-950 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  Enquire Now <ArrowRight size={20} />
                </Link>
                <a
                  href="tel:7987895503"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Phone size={20} /> Call Now
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
                  alt="Happy students at Perfect Coaching Classes"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold text-sky-900">500+</p>
                <p className="text-sm text-gray-600">Students Enrolled</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-sky-900 text-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold">95%+</p>
                <p className="text-sm">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Billboard Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#173954] via-slate-900 to-[#173954] relative overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 space-y-4">
            <p className="text-yellow-500/90 text-sm md:text-base font-medium tracking-widest">
              || श्री गणेशाय नमः ||
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight drop-shadow-lg">
              PERFECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-200">COMMERCE</span> CLASSES
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Card 1: Classes */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all hover:-translate-y-1 shadow-2xl">
              <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="text-sky-300" size={28} />
              </div>
              <h3 className="text-xl font-bold text-sky-200 mb-4 uppercase tracking-wider">Classes & Degrees</h3>
              <div className="space-y-4">
                <p className="text-3xl lg:text-4xl font-black text-white tracking-wide">IX, X, XI, XII</p>
                <div className="h-px w-full bg-white/20"></div>
                <p className="text-xl lg:text-2xl font-bold text-white/90">B.Com, BBA, MBA</p>
              </div>
            </div>

            {/* Card 2: Boards */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all hover:-translate-y-1 shadow-2xl">
              <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="text-sky-300" size={28} />
              </div>
              <h3 className="text-xl font-bold text-sky-200 mb-4 uppercase tracking-wider">Boards & Medium</h3>
              <div className="space-y-4">
                <p className="text-3xl lg:text-4xl font-black text-white tracking-wide">ICSE, CBSE</p>
                <div className="h-px w-full bg-white/20"></div>
                <p className="text-xl lg:text-2xl font-bold text-white/90">MP BOARD</p>
                <p className="text-sm lg:text-lg font-medium text-sky-200 bg-sky-900/50 inline-block px-4 py-1 rounded-full">(Hindi / English)</p>
              </div>
            </div>

            {/* Card 3: Subjects */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all hover:-translate-y-1 shadow-2xl">
              <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-sky-300" size={28} />
              </div>
              <h3 className="text-xl font-bold text-sky-200 mb-4 uppercase tracking-wider">Our Subjects</h3>
              <ul className="grid grid-cols-1 gap-3">
                {["Accounts", "Business Studies", "Economics", "Applied Maths", "Information Practices", "C S"].map((sub, i) => (
                  <li key={i} className="flex items-center gap-3 text-base lg:text-lg font-bold text-white">
                    <CheckCircle className="text-sky-400 flex-shrink-0" size={20} />
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Banner Footer */}
          <div className="bg-gradient-to-r from-sky-900/80 via-sky-800/80 to-sky-900/80 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl ring-1 ring-white/10">
            <h3 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-sm text-center lg:text-left">
              क्षेत्र की सर्वश्रेष्ठ कोचिंग
            </h3>
            <a href="tel:7987895503" className="group flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/30 px-4 py-3 md:px-6 md:py-4 rounded-xl transition-all hover:scale-105">
              <div className="bg-white text-sky-900 p-2 md:p-3 rounded-full flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                <Phone size={24} className="md:w-7 md:h-7 animate-pulse" />
              </div>
              <span className="text-2xl md:text-4xl font-black text-white tracking-wider">
                79878-95503
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Hall of Fame / Achievers Section */}
      <AchieversSection />

      {/* Courses Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Courses</h2>
            <p className="text-lg text-gray-600">Choose the perfect course for your academic journey</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-slate-500 hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-900 transition-colors">
                  <course.icon className="text-sky-900 group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{course.title}</h3>
                <div className="inline-block bg-slate-50 text-sky-950 px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {course.badge}
                </div>
                <ul className="space-y-2 mb-4">
                  {course.subjects.map((subject, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-500" />
                      {subject}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-bold text-sky-900 mb-4">{course.fee}</p>
                <Link
                  to="/contact"
                  className="block w-full bg-sky-900 hover:bg-sky-950 text-white text-center py-2 rounded-lg font-medium transition-colors"
                >
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Why Choose Perfect Coaching?</h2>
            <p className="text-lg text-gray-600">We are committed to your success</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-sky-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Student Success Stories</h2>
            <p className="text-lg text-gray-600">Hear from our successful students</p>
          </div>

          {topResults.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {topResults.map((result) => (
                <div key={result.id} className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-slate-500 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    {result.photo ? (
                      <img src={result.photo} alt={result.name} className="w-16 h-16 rounded-full object-cover" />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-sky-100 text-sky-900 flex items-center justify-center text-xl font-bold">
                        {result.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-black">{result.name}</h4>
                      <p className="text-sm text-gray-600">Class {result.className} - {result.year}</p>
                      <p className="text-sm font-bold text-sky-900">{result.marks}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">Subject: {result.subject}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 border border-dashed border-gray-300 rounded-xl">
              <p className="text-gray-600">No student results added yet.</p>
            </div>
          )}

          <div className="text-center mt-8">
            <Link
              to="/results"
              className="inline-flex items-center gap-2 text-sky-900 hover:text-sky-950 font-semibold"
            >
              View All Results <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-sky-900 to-sky-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Success Journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join Perfect Coaching Classes today and achieve your academic goals with expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-sky-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Get Started Now <ArrowRight size={20} />
            </Link>
            <a
              href="tel:7987895503"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone size={20} /> Call: 79878-95503
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
