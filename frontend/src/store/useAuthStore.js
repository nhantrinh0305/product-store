import { create } from "zustand";
import axios from "axios";

export const useAuthStore = create((set) => ({
  token: localStorage.getItem("token") || "",
  isAuthenticated: !!localStorage.getItem("token"),

  login: async (username, password) => {
    try {
      const res = await axios.post("/api/login", { username, password });
      localStorage.setItem("token", res.data.token);
      set({ token: res.data.token, isAuthenticated: true });
      return { success: true };
    } catch (error) {
      return { success: false, message: "Invalid credentials" };
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ token: "", isAuthenticated: false });
  },
}));
