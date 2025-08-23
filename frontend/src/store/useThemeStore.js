import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("wave-theme") || "light",
  setTheme: (theme) => {
    localStorage.setItem("wave-theme", theme);
    set({ theme });
  },
}));
