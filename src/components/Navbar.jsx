import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { favoritesCount } from "../services/favorites";

export default function Navbar() {
  const [count, setCount] = useState(favoritesCount());
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // ❤️ listen for favorites updates
  useEffect(() => {
    const updateCount = () => setCount(favoritesCount());
    window.addEventListener("favoritesUpdated", updateCount);
    return () => window.removeEventListener("favoritesUpdated", updateCount);
  }, []);

  // 🌙 dark mode toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">ProductSPA</NavLink>

        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/products">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/favorites">
              Favorites ❤️
              {count > 0 && (
                <span className="badge bg-danger ms-1">{count}</span>
              )}
            </NavLink>
          </li>
        </ul>

        {/* 🌙 DARK MODE BUTTON (FIXED) */}
        <button
          onClick={toggleTheme}
          className="btn btn-outline-light"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
