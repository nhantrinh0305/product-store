import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage"; // 👈 Add this line

import { Routes, Route, Navigate } from "react-router-dom"; // 👈 Add Navigate
import { useThemeStore } from "./store/useThemeStore";
import { useAuthStore } from "./store/useAuthStore"; // 👈 Add this line
import { Toaster } from "react-hot-toast";

function App() {
  const { theme } = useThemeStore();
  const { isAuthenticated } = useAuthStore(); // 👈 Check if logged in

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300" data-theme={theme}>
      {isAuthenticated && <Navbar />} {/* 👈 Show navbar only if logged in */}

      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/product/:id"
          element={isAuthenticated ? <ProductPage /> : <Navigate to="/login" replace />}
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
