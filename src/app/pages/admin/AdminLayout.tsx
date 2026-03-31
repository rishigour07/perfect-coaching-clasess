import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router';
import { 
  LayoutDashboard, 
  GraduationCap, 
  UserSquare2, 
  LogOut, 
  Menu,
  X
} from 'lucide-react';
import { Toaster, toast } from 'sonner';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Simulated logout
  const handleLogout = () => {
    toast.success("Logged out successfully");
    // In a real app, clear Firebase auth / tokens here
    navigate("/admin/login");
  };

  const navItems = [
    { path: "/admin", exact: true, label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { path: "/admin/results", exact: false, label: "Student Results", icon: <GraduationCap size={20} /> },
    { path: "/admin/founder", exact: false, label: "Founder Details", icon: <UserSquare2 size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      <Toaster position="top-right" richColors />

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-black text-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <span className="text-xl font-bold tracking-wider text-sky-900">Perfect Coaching</span>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.exact}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-sky-900 text-white font-medium" 
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
              onClick={() => setSidebarOpen(false)}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full gap-3 px-4 py-3 text-red-400 rounded-lg hover:bg-gray-800 hover:text-red-300 transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content wrapper */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm sm:justify-end md:px-8 z-10">
          <div className="flex items-center md:hidden">
            <button onClick={() => setSidebarOpen(true)} className="text-gray-600 focus:outline-none">
              <Menu size={24} />
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex flex-col text-right hidden sm:flex">
              <span className="text-sm font-semibold text-gray-900">Admin User</span>
              <span className="text-xs text-gray-500">Owner</span>
            </div>
            <div className="w-10 h-10 bg-sky-100 text-sky-900 rounded-full flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 sm:p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
