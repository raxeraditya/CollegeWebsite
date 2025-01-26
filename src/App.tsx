// App.tsx
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Papers } from "./pages/Papers";
import { Dates } from "./pages/Dates";
import { Courses } from "./pages/Courses";
import { Notes } from "./pages/Notes";
import Nav from "./pages/Nav";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Nav
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />

        {/* Main Content */}
        <main className="min-h-[calc(100vh-140px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/papers" element={<Papers />} />
            <Route path="/dates" element={<Dates />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 University College. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
