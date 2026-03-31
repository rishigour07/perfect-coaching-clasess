import { Link } from "react-router";
import { CheckCircle, BookOpen, ArrowRight, IndianRupee } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Courses() {
  const class11Subjects = [
    "Accountancy",
    "Business Studies",
    "Economics",
    "Applied Mathematics",
    "Information Practices",
  ];

  const class12Subjects = [
    "Accountancy",
    "Business Studies",
    "Economics",
    "Applied Mathematics",
    "Information Practices",
  ];

  const features = [
    "Experienced Faculty",
    "Comprehensive Study Material",
    "Regular Tests & Assessments",
    "Doubt Clearing Sessions",
    "Parent-Teacher Meetings",
    "Result-Oriented Teaching",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our <span className="text-sky-900">Courses</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive Commerce coaching for Class 11th & 12th (CBSE, ICSE, MP Board)
          </p>
        </div>
      </section>

      {/* Class 11th Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1639396104908-a8f2037ad565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHN0dWR5JTIwZGVza3xlbnwxfHx8fDE3NzQ3NzU0ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Class 11th Commerce Studies"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block bg-sky-100 text-sky-950 px-4 py-2 rounded-full text-sm font-semibold">
                Class 11th Commerce
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Foundation Year - Class 11th
              </h2>
              <p className="text-gray-600 text-lg">
                Build a strong foundation in Commerce with our comprehensive coaching program designed for CBSE, ICSE, and MP Board students.
              </p>

              {/* Subjects */}
              <div>
                <h3 className="font-bold text-xl text-black mb-3">Subjects Covered:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {class11Subjects.map((subject, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fee Structure */}
              <div className="bg-slate-50 border-2 border-orange-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <IndianRupee size={24} className="text-sky-900" />
                  <h3 className="text-2xl font-bold text-black">₹18,000/year</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Complete annual fee for Class 11th Commerce
                </p>
                <div className="bg-white rounded-lg p-3 border border-orange-300">
                  <p className="text-sm font-semibold text-sky-950">
                    💳 Flexible Payment Option Available
                  </p>
                  <p className="text-sm text-gray-600">
                    Pay in 2 easy installments: ₹9,000 + ₹9,000
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-sky-900 hover:bg-sky-950 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Enquire Now <ArrowRight size={20} />
                </Link>
                <a
                  href="tel:7987895503"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Call: 79878-95503
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class 12th Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-sky-100 text-sky-950 px-4 py-2 rounded-full text-sm font-semibold">
                Class 12th Commerce
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Board Exam Preparation - Class 12th
              </h2>
              <p className="text-gray-600 text-lg">
                Comprehensive board exam preparation with focus on scoring high marks in CBSE, ICSE, and MP Board examinations.
              </p>

              {/* Subjects */}
              <div>
                <h3 className="font-bold text-xl text-black mb-3">Subjects Covered:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {class12Subjects.map((subject, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fee Structure */}
              <div className="bg-slate-50 border-2 border-orange-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <IndianRupee size={24} className="text-sky-900" />
                  <h3 className="text-2xl font-bold text-black">₹25,000/year</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Complete annual fee for Class 12th Commerce
                </p>
                <div className="bg-white rounded-lg p-3 border border-orange-300">
                  <p className="text-sm font-semibold text-sky-950">
                    💳 Flexible Payment Option Available
                  </p>
                  <p className="text-sm text-gray-600">
                    Pay in 2 easy installments: ₹12,500 + ₹12,500
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-sky-900 hover:bg-sky-950 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Enquire Now <ArrowRight size={20} />
                </Link>
                <a
                  href="tel:7987895503"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Call: 79878-95503
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1664382953518-4a664ab8a8c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdGVhY2hpbmclMjB3aGl0ZWJvYXJkfGVufDF8fHx8MTc3NDc3NTQ4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Class 12th Board Exam Preparation"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What's Included in All Our Courses
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive learning experience designed for your success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-slate-500 transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen size={20} className="text-sky-900" />
                  </div>
                  <h3 className="font-bold text-black">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Courses */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Other Programs We Offer
            </h2>
            <p className="text-lg text-gray-600">
              Coaching for higher education commerce students
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "B.Com", desc: "Bachelor of Commerce preparation" },
              { name: "BBA", desc: "Business Administration courses" },
              { name: "MBA", desc: "Management entrance preparation" },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-8 text-center hover:border-slate-500 transition-all hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen size={28} className="text-sky-900" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{program.name}</h3>
                <p className="text-gray-600 mb-6">{program.desc}</p>
                <Link
                  to="/contact"
                  className="inline-block bg-sky-900 hover:bg-sky-950 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Contact for Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-sky-900 to-sky-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Enroll?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Take the first step towards academic excellence. Contact us today!
          </p>
          <Link
            to="/contact"
            className="bg-white text-sky-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            Get Started Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
