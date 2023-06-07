import create from 'zustand';

interface LanguageStoreState {
  selectedLanguage: string;
  setLanguage: (language: string) => void;
}

export const useLanguageStore = create<LanguageStoreState>((set) => ({
  selectedLanguage: 'en',
  setLanguage: (language) => set({ selectedLanguage: language }),
}));
