
import { create } from 'zustand';


export const useUserStore = create<UserState>((set) => ({
    // State
    searchTerm: localStorage.getItem('searchTerm') || '',
    searchResults: [],
    userCount: 0,
    currentProfile: undefined ,
    // currentProfileReadme: '',

    // Methods
    setSearchTerm: (term) => {
        localStorage.setItem('searchTerm', term);
        set({ searchTerm: term });
    },
    setSearchResults: (results) => set({ searchResults: results }),
    setUserCount: (count) => set({ userCount: count }),
    setCurrentProfile: (profile) => set({ currentProfile: profile }),
    // setCurrentProfileReadme: (readme) => set({ currentProfileReadme: readme }),

}));