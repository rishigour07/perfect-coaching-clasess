import React, { useState } from 'react';
import { UserSquare2, Upload, Camera, Save } from 'lucide-react';
import { toast } from 'sonner';

// Mock Founder Data
const MOCK_FOUNDER = {
  name: "Krishna Choudhary",
  bio: "Founder of Perfect Coaching Classes with over 15+ years of experience in teaching Physics and guiding students toward academic excellence and top-tier engineering/medical scores.",
  photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300"
};

const FounderManager = () => {
  const [founder, setFounder] = useState(MOCK_FOUNDER);
  const [loading, setLoading] = useState(false);
  
  // Create a local blob url for simulated photo upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image must be smaller than 2MB");
        return;
      }
      const url = URL.createObjectURL(file);
      setFounder({ ...founder, photoUrl: url });
      toast.success("Photo attached! Click save to apply changes.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      toast.success("Founder profile updated successfully!");
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center">
          <UserSquare2 className="mr-3 text-sky-900" size={32} />
          Founder Details
        </h1>
        <p className="mt-2 text-sm text-gray-500">Update the coaching owner's biography and official portrait here.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Photo Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 border-b border-gray-100 pb-8">
            <div className="relative group">
              <div className="h-40 w-40 rounded-2xl overflow-hidden bg-gray-100 shadow-inner border-4 border-white mb-2">
                {founder.photoUrl ? (
                  <img src={founder.photoUrl} alt="Founder" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                    <UserSquare2 size={48} />
                  </div>
                )}
              </div>
              
              <label 
                htmlFor="photo-upload" 
                className="absolute bottom-2 right-2 bg-sky-900 hover:bg-sky-950 text-white p-2.5 rounded-full cursor-pointer shadow-lg transition-transform group-hover:scale-110"
              >
                <Camera size={20} />
              </label>
              <input 
                id="photo-upload" 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleImageChange}
              />
            </div>
            
            <div className="text-center sm:text-left pt-2">
              <h3 className="text-lg font-bold text-gray-900">Profile Picture</h3>
              <p className="text-sm text-gray-500 mt-1 max-w-sm">
                Upload a professional headshot. Recommended size is 400x400px. JPG, PNG formats up to 2MB.
              </p>
              <label htmlFor="photo-upload" className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition">
                <Upload size={16} className="mr-2" />
                Select Photo
              </label>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Founder / Owner Name</label>
              <input 
                id="name"
                type="text" 
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-900 focus:border-sky-900 outline-none transition" 
                value={founder.name}
                onChange={(e) => setFounder({...founder, name: e.target.value})}
              />
            </div>
            
            <div>
              <label htmlFor="bio" className="block text-sm font-bold text-gray-700 mb-1">Biography / About</label>
              <textarea 
                id="bio"
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-900 focus:border-sky-900 outline-none transition resize-none leading-relaxed" 
                value={founder.bio}
                onChange={(e) => setFounder({...founder, bio: e.target.value})}
                placeholder="Write a brief background about the founder..."
              />
              <p className="mt-2 text-xs text-gray-500 text-right">{founder.bio.length} characters</p>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end">
             <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-xl text-white bg-sky-900 hover:bg-sky-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-900 transition disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center">
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span>
                  Saving...
                </span>
              ) : (
                <>
                  <Save size={20} className="mr-2" />
                  Save Changes
                </>
              )}
            </button>
          </div>

        </form>
      </div>

    </div>
  );
};

export default FounderManager;
