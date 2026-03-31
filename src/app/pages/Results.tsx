import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { Award, TrendingUp, Star, Quote, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getMockResults } from "../utils/mockDb";
import { StudentResult } from "./admin/ResultsManager";

export default function Results() {
  const [dynamicResults, setDynamicResults] = useState<StudentResult[]>([]);

  useEffect(() => {
    // Initial fetch
    setDynamicResults(getMockResults());

    // Listen for storage changes to update across tabs in real-time
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'perfect_coaching_mock_results') {
        setDynamicResults(getMockResults());
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const sortedResults = [...dynamicResults].sort((a, b) => {
    const aScore = parseFloat(a.marks.replace('%', '')) || 0;
    const bScore = parseFloat(b.marks.replace('%', '')) || 0;
    return bScore - aScore;
  });

  const toppers = sortedResults.map(res => ({
    name: res.name,
    percentage: res.marks,
    photo: res.photo,
    id: res.id
  }));

  const testimonials = [
    {
      name: "Mrs. Sharma",
      relation: "Parent of Priya Sharma",
      text: "The best decision we made was enrolling our daughter at Perfect Coaching. The faculty is dedicated and the results speak for themselves. Our daughter scored 97.8% in her boards!",
      rating: 5,
    },
    {
      name: "Mr. Verma",
      relation: "Parent of Rahul Verma",
      text: "Excellent coaching with personal attention to every student. The flexible payment option also helped us manage the fees easily. Highly recommended for Commerce students.",
      rating: 5,
    },
    {
      name: "Riya Patel",
      relation: "Class 11th Student",
      text: "I was weak in Accounts, but the teachers here explained concepts so clearly that it became my favorite subject. The study material is comprehensive and easy to understand.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      relation: "Class 12th Student",
      text: "Mock tests and regular assessments helped me identify my weak areas and improve continuously. The teaching methodology is result-oriented and very effective.",
      rating: 5,
    },
    {
      name: "Mrs. Gupta",
      relation: "Parent of Neha Gupta",
      text: "Professional institute with experienced teachers. They maintain good communication with parents and keep us updated about our child's progress regularly.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      relation: "B.Com Student",
      text: "Even for B.Com subjects, the coaching quality is excellent. Teachers have deep subject knowledge and practical experience. Worth every rupee!",
      rating: 5,
    },
  ];

  const statistics = [
    { label: "Average Success Rate", value: "95%+", icon: TrendingUp },
    { label: "Students Scoring 90%+", value: "50+", icon: Award },
    { label: "Top Scorers (95%+)", value: "25+", icon: Star },
    { label: "Student Satisfaction", value: "98%", icon: Award },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-sky-100 text-sky-950 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Success Stories
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our <span className="text-sky-900">Results</span> Speak for Themselves
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating the success of our students who achieved excellence with dedication and expert guidance
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-gradient-to-r from-sky-900 to-sky-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon size={48} className="mx-auto mb-3 opacity-90" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Performers */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Board Exam Toppers</h2>
            <p className="text-lg text-gray-600">Our students who achieved outstanding results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toppers.map((topper) => (
              <div
                key={topper.id}
                className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-sky-500 hover:shadow-xl transition-all hover:-translate-y-2 pb-6"
              >
                {/* Header with Initial Avatar */}
                <div className="bg-gradient-to-br from-slate-50 to-white p-6 text-center relative">
                  <div className="absolute top-4 right-4 bg-sky-900 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                    {topper.percentage}
                  </div>

                  {topper.photo && (
                    <img src={topper.photo} alt={topper.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover bg-white" />
                  )}

                  <h3 className="text-xl font-bold text-black">{topper.name}</h3>
                  <p className="text-sm text-gray-600">Top Achiever 2024-25</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student & Parent Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What Students & Parents Say
            </h2>
            <p className="text-lg text-gray-600">Testimonials from our satisfied students and parents</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>

                {/* Author */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.relation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Success Moments</h2>
            <p className="text-lg text-gray-600">Celebrating achievements with our students</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1767595789539-cd012af80914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VsZWJyYXRpb24lMjBzdWNjZXNzfGVufDF8fHx8MTc3NDY3OTY2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={`Success moment ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-sky-900 to-sky-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be the Next Success Story!
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join Perfect Coaching Classes and achieve your academic dreams with expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-sky-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Enquire Now <ArrowRight size={20} />
            </Link>
            <Link
              to="/courses"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
