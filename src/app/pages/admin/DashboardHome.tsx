import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { 
  Users, 
  MessageSquareQuote, 
  ArrowRight,
  TrendingUp,
  Award,
  UserSquare2
} from 'lucide-react';

// Example Mock Data Counts
const MOCK_STATS = {
  totalResults: 142,
  totalTestimonials: 34,
};

const DashboardHome = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
        <p className="mt-2 text-sm text-gray-500">Welcome back, handle your coaching metrics here.</p>
      </div>

      {/* Main Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Results Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Student Results</p>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2">{MOCK_STATS.totalResults}</h2>
            </div>
            <div className="p-3 bg-sky-100 text-sky-900 rounded-xl">
              <Award size={24} />
            </div>
          </div>
          <div className="mt-6 flex items-center text-sm text-green-600 font-medium">
            <TrendingUp size={16} className="mr-1" />
            <span>+12 this year</span>
          </div>
        </div>

        {/* Testimonials Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Testimonials</p>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2">{MOCK_STATS.totalTestimonials}</h2>
            </div>
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <MessageSquareQuote size={24} />
            </div>
          </div>
          <div className="mt-6 flex items-center text-sm gap-2">
            <button 
              className="text-sky-900 hover:text-sky-950 font-medium inline-flex items-center group"
              onClick={() => {
                // Future Implementation Route
              }}
            >
              View Testimonials
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="pt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <button 
            onClick={() => navigate('/admin/results')}
            className="flex items-center p-4 bg-sky-900 text-white rounded-xl shadow-sm hover:bg-sky-950 transition"
          >
            <div className="bg-sky-800 p-3 rounded-lg mr-4">
              <Users size={24} />
            </div>
            <div className="text-left flex-1">
              <h3 className="font-semibold text-lg">Manage Results</h3>
              <p className="text-sky-200 text-sm">Add or edit student marks</p>
            </div>
            <ArrowRight size={20} className="text-sky-300" />
          </button>

          <button 
            onClick={() => navigate('/admin/founder')}
            className="flex items-center p-4 bg-gray-900 text-white rounded-xl shadow-sm hover:bg-black transition"
          >
            <div className="bg-gray-800 p-3 rounded-lg mr-4">
              <UserSquare2 size={24} />
            </div>
            <div className="text-left flex-1">
              <h3 className="font-semibold text-lg">Edit Founder Info</h3>
              <p className="text-gray-400 text-sm">Update bio and photo</p>
            </div>
            <ArrowRight size={20} className="text-gray-500" />
          </button>

        </div>
      </div>

    </div>
  );
};

export default DashboardHome;
