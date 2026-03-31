import { StudentResult } from "../pages/admin/ResultsManager";

const MOCK_RESULTS_KEY = 'perfect_coaching_mock_results';

const INITIAL_MOCK_RESULTS: StudentResult[] = [
  { id: '1', name: 'Vaijanti', className: '12th', subject: 'Commerce', marks: '94%', year: '2025' },
  { id: '2', name: 'Vanshika', className: '11th', subject: 'Commerce', marks: '90%', year: '2025' },
  { id: '3', name: 'Shubham', className: '12th', subject: 'Commerce', marks: '90%', year: '2025' },
  { id: '4', name: 'Chetan', className: '11th', subject: 'Commerce', marks: '87%', year: '2025' },
  { id: '5', name: 'Arju', className: '12th', subject: 'Commerce', marks: '87%', year: '2025' },
  { id: '6', name: 'Mona', className: '12th', subject: 'Commerce', marks: '87%', year: '2025' },
  { id: '7', name: 'Aarav Sharma', className: '12th', subject: 'PCM', marks: '95%', year: '2024' },
  { id: '8', name: 'Neha Gupta', className: '11th', subject: 'PCB', marks: '89%', year: '2024' }
];

export const getMockResults = (): StudentResult[] => {
  try {
    const stored = localStorage.getItem(MOCK_RESULTS_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as StudentResult[];
      const hasPravatar = parsed.some(r => r.photo && r.photo.includes('pravatar.cc'));
      const cleaned = parsed.map(result => {
        if (result.photo && result.photo.includes('pravatar.cc')) {
          const { photo, ...rest } = result;
          return rest as StudentResult;
        }
        return result;
      });
      if (hasPravatar) {
        localStorage.setItem(MOCK_RESULTS_KEY, JSON.stringify(cleaned));
      }
      return cleaned;
    }
  } catch (error) {
    console.error("Failed to read from localStorage", error);
  }
  
  // Initialize if empty
  localStorage.setItem(MOCK_RESULTS_KEY, JSON.stringify(INITIAL_MOCK_RESULTS));
  return INITIAL_MOCK_RESULTS;
};

export const saveMockResults = (results: StudentResult[]) => {
  try {
    localStorage.setItem(MOCK_RESULTS_KEY, JSON.stringify(results));
  } catch (error) {
    console.error("Failed to save to localStorage", error);
  }
};
