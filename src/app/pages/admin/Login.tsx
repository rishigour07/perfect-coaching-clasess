import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Toaster, toast } from 'sonner';
import { Lock, Mail } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API Call for Mock Auth
    setTimeout(() => {
      if (email === 'admin@perfectcoaching.com' && password === 'admin123') {
        toast.success("Login successful!");
        navigate('/admin');
      } else {
        toast.error("Invalid email or password");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Toaster position="top-center" richColors />
      
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-sky-100 text-sky-900 rounded-full flex items-center justify-center mb-4 shadow-sm border border-sky-200">
            <Lock size={32} />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Admin Login</h2>
          <p className="text-gray-500 mt-2 text-sm">Sign in to manage Perfect Coaching</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="email" 
                required 
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-900 focus:border-sky-900 outline-none transition-all" 
                placeholder="admin@perfectcoaching.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="password" 
                required 
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-900 focus:border-sky-900 outline-none transition-all" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-sky-900 hover:bg-sky-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-900 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;
