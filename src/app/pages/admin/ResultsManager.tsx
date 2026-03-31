import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Trash2, 
  Edit,
  GraduationCap,
  Eye,
  Upload,
  X
} from 'lucide-react';
import { toast } from 'sonner';

// Mock Result Type
export interface StudentResult {
  id: string;
  name: string;
  className: '11th' | '12th';
  subject: string;
  marks: string;
  year: string;
  photo?: string;
}

import { getMockResults, saveMockResults } from '../../utils/mockDb';

const ResultsManager = () => {
  const [results, setResults] = useState<StudentResult[]>(getMockResults());
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState('All');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingResult, setEditingResult] = useState<StudentResult | null>(null);
  const [formData, setFormData] = useState<Partial<StudentResult>>({
    name: '', className: '12th', subject: '', marks: '', year: new Date().getFullYear().toString(), photo: ''
  });

  // View Details Modal State
  const [viewingResult, setViewingResult] = useState<StudentResult | null>(null);

  // Filtered Results
  const filteredResults = results.filter(res => {
    const matchesSearch = res.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          res.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          res.year.includes(searchTerm);
    const matchesClass = filterClass === 'All' || res.className === filterClass;
    return matchesSearch && matchesClass;
  });

  const handleDelete = (id: string, currentName: string) => {
    if (window.confirm(`Are you sure you want to delete the result for ${currentName}?`)) {
      const updated = results.filter(r => r.id !== id);
      setResults(updated);
      saveMockResults(updated);
      toast.success("Result deleted successfully");
    }
  };

  const handleOpenModal = (result: StudentResult | null = null) => {
    if (result) {
      setEditingResult(result);
      setFormData(result);
    } else {
      setEditingResult(null);
      setFormData({ name: '', className: '12th', subject: '', marks: '', year: new Date().getFullYear().toString(), photo: '' });
    }
    setIsModalOpen(true);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error("Please upload an image file (JPG, PNG)");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 500;
        const MAX_HEIGHT = 500;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
        setFormData(prev => ({ ...prev, photo: dataUrl }));
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingResult) {
      const updated = results.map(r => r.id === editingResult.id ? { ...formData, id: r.id } as StudentResult : r);
      setResults(updated);
      saveMockResults(updated);
      toast.success("Result updated successfully");
    } else {
      const newResult = { ...formData, id: Date.now().toString() } as StudentResult;
      const updated = [newResult, ...results];
      setResults(updated);
      saveMockResults(updated);
      toast.success("New result added successfully");
    }
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center">
            <GraduationCap className="mr-3 text-sky-900" size={32} />
            Student Results
          </h1>
          <p className="mt-2 text-sm text-gray-500">Manage, add, and view top performing students.</p>
        </div>
        
        <button 
          onClick={() => handleOpenModal()}
          className="flex items-center px-4 py-2 bg-sky-900 text-white rounded-lg shadow hover:bg-sky-950 transition"
        >
          <Plus size={18} className="mr-2" />
          Add Result
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
        
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search by name, subject, or year..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-900 focus:border-sky-900 outline-none transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2 w-full md:w-auto overflow-x-auto">
          {['All', '11th', '12th'].map(cls => (
            <button
              key={cls}
              onClick={() => setFilterClass(cls)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap ${
                filterClass === cls 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Class {cls}
            </button>
          ))}
        </div>
      </div>

      {/* Results Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marks/Percentage</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredResults.length > 0 ? (
                filteredResults.map((result) => (
                  <tr key={result.id} className="hover:bg-sky-50/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {result.photo && (
                        <img src={result.photo} alt={result.name} className="h-10 w-10 rounded-full object-cover shadow-sm bg-gray-50" />
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{result.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        result.className === '12th' ? 'bg-sky-100 text-sky-900' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {result.className}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{result.subject}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">{result.marks}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{result.year}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => setViewingResult(result)} className="text-gray-400 hover:text-sky-900 mr-4 transition-colors">
                        <Eye size={18} />
                      </button>
                      <button onClick={() => handleOpenModal(result)} className="text-gray-400 hover:text-sky-900 mr-4 transition-colors">
                        <Edit size={18} />
                      </button>
                      <button onClick={() => handleDelete(result.id, result.name)} className="text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No results found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" onClick={() => setIsModalOpen(false)} />
            
            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full z-50">
              <form onSubmit={handleSave}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h3 className="text-xl leading-6 font-bold text-gray-900 mb-6 border-b pb-4">
                    {editingResult ? 'Edit Student Result' : 'Add New Result'}
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Photo Upload */}
                    <div className="flex flex-col items-center justify-center mb-4">
                      {formData.photo ? (
                        <div className="relative">
                          <img src={formData.photo} alt="Preview" className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 shadow-sm bg-gray-50" />
                          <button 
                            type="button" 
                            onClick={() => setFormData({...formData, photo: ''})}
                            className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 transition"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ) : (
                        <div className="relative group cursor-pointer">
                          <div className="w-24 h-24 rounded-full bg-gray-50 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center group-hover:bg-gray-100 group-hover:border-gray-400 transition">
                            <Upload className="text-gray-400 mb-1" size={20} />
                            <span className="text-[10px] text-gray-500 font-medium text-center px-2">Upload<br/>Photo</span>
                          </div>
                          <input 
                            type="file" 
                            accept="image/jpeg, image/png" 
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleImageUpload}
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                      <input 
                        type="text" required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-900 focus:border-sky-900 outline-none transition" 
                        value={formData.name || ''}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                        <select 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-900 focus:border-sky-900 outline-none transition"
                          value={formData.className || '12th'}
                          onChange={(e) => setFormData({...formData, className: e.target.value as '11th' | '12th'})}
                        >
                          <option value="11th">11th</option>
                          <option value="12th">12th</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                        <input 
                          type="text" required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-900 focus:border-sky-900 outline-none transition" 
                          value={formData.year || ''}
                          onChange={(e) => setFormData({...formData, year: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject / Stream</label>
                      <input 
                        type="text" required placeholder="e.g. PCM, Physics, Bio"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-900 focus:border-sky-900 outline-none transition" 
                        value={formData.subject || ''}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Marks / Percentage</label>
                      <input 
                        type="text" required placeholder="e.g. 98% or 95/100"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-900 focus:border-sky-900 outline-none transition" 
                        value={formData.marks || ''}
                        onChange={(e) => setFormData({...formData, marks: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-2xl border-t border-gray-100">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-5 py-2.5 bg-sky-900 text-base font-medium text-white hover:bg-sky-950 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
                  >
                    Save Result
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-5 py-2.5 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* View Details Modal */}
      {viewingResult && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" onClick={() => setViewingResult(null)} />
            
            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md w-full z-50">
              <div className="relative">
                <div className="h-32 bg-sky-900 w-full"></div>
                <button 
                  onClick={() => setViewingResult(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition bg-black/20 rounded-full p-1.5"
                >
                  <X size={20} />
                </button>
                {viewingResult.photo && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2">
                    <img src={viewingResult.photo} alt={viewingResult.name} className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl bg-white" />
                  </div>
                )}
              </div>
              
               <div className={`pb-8 px-6 text-center ${viewingResult.photo ? 'pt-20' : 'pt-8'}`}>
                <h3 className="text-2xl font-bold text-gray-900">{viewingResult.name}</h3>
                <p className="text-sky-900 font-medium mb-6">Class {viewingResult.className} • {viewingResult.year}</p>
                
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Subject / Stream</p>
                    <p className="font-medium text-gray-900">{viewingResult.subject}</p>
                  </div>
                  <div className="bg-sky-50 p-4 rounded-xl border border-sky-100">
                    <p className="text-xs text-sky-700 uppercase tracking-wider font-semibold mb-1">Score</p>
                    <p className="font-bold text-sky-900 text-xl">{viewingResult.marks}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-6 py-4 flex justify-end">
                <button
                  onClick={() => setViewingResult(null)}
                  className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition shadow-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ResultsManager;
