import React, { useState, useEffect } from "react";
import { Trophy, Star, Medal, Sparkles, Award } from "lucide-react";

import { getMockResults } from "../utils/mockDb";
import { StudentResult } from "../pages/admin/ResultsManager";

export function AchieversSection() {
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
  
  const mappedToppers = sortedResults.map(res => ({
    name: res.name,
    score: res.marks,
    photo: res.photo
  }));

  const topThree = mappedToppers.slice(0, 3);
  const others = mappedToppers.slice(3);

  const getMedalColor = (index: number) => {
    if (index === 0) return "text-yellow-400";
    if (index === 1) return "text-gray-300";
    return "text-amber-600";
  };

  const getBorderColor = (index: number) => {
    if (index === 0) return "from-yellow-400 via-yellow-200 to-yellow-500";
    if (index === 1) return "from-gray-300 via-gray-100 to-gray-400";
    return "from-amber-600 via-amber-400 to-amber-700";
  };

  return (
    <section className="py-20 md:py-32 bg-[#0a192f] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky-300 text-sm font-medium backdrop-blur-sm mb-4">
            <Sparkles size={16} />
            <span>Excellence Unveiled</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Hall of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Fame</span>
          </h2>
          <p className="text-xl md:text-2xl text-sky-200 font-medium mt-2">
            2024-25 में मांगलिया का सर्वश्रेष्ठ रिजल्ट
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4">
            Celebrating our top achievers who have set new benchmarks of excellence with their outstanding performance.
          </p>
        </div>

        {/* Top 3 Achievers */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20 px-4 md:px-0 mt-20">
          {topThree.map((student, index) => (
            <div 
              key={index}
              className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 ${index === 0 ? 'md:-mt-12 md:scale-105 z-10' : 'mt-0'} border border-white/10 shadow-2xl`}
            >
              <div className={`absolute -top-[1px] -left-[1px] -right-[1px] -bottom-[1px] rounded-2xl bg-gradient-to-br ${getBorderColor(index)} opacity-20 z-0`}></div>
              
              <div className="relative z-10 flex flex-col items-center">
                {/* Custom Avatar with Initial */}
                {student.photo ? (
                  <div className="relative mb-6 flex justify-center">
                    <img src={student.photo} alt={student.name} className={`w-24 h-24 rounded-full object-cover shadow-[0_0_30px_rgba(0,0,0,0.3)] bg-slate-900 border-2 border-transparent border-gradient-to-br ${getBorderColor(index)}`} style={{borderImageSlice: 1}} />
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 rounded-full p-2 border border-white/10 shadow-xl">
                      <Trophy className={getMedalColor(index)} size={24} />
                    </div>
                  </div>
                ) : (
                  <div className="mb-4 flex justify-center">
                    <Trophy className={getMedalColor(index)} size={36} />
                  </div>
                )}

                <div className="text-center mt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{student.name}</h3>
                  <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/5">
                    <p className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${getBorderColor(index)}`}>
                      {student.score}
                    </p>
                  </div>
                  <p className="text-slate-400 font-medium mt-3 text-sm tracking-widest uppercase">
                    {index === 0 ? "Rank 1" : index === 1 ? "Rank 2" : "Rank 3"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Achievers Grid */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <Award className="text-sky-400" />
            <span>Our Star Performers</span>
            <Award className="text-sky-400" />
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {others.map((student, index) => (
            <div 
              key={index}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/50 transition-all duration-300 rounded-xl p-5 flex flex-col items-center justify-center backdrop-blur-sm"
            >
              {student.photo && (
                <img src={student.photo} alt={student.name} className="w-14 h-14 rounded-full object-cover mb-3 border border-white/5 shadow-sm bg-slate-800/80 group-hover:border-sky-400/30 transition-colors" />
              )}
              <h4 className="text-lg font-bold text-white text-center mb-1 leading-tight">{student.name}</h4>
              <p className="text-xl font-black text-sky-400">{student.score}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
