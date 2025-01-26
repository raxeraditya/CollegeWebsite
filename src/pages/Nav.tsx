// Nav.tsx
import {
  BookCopy,
  BookOpen,
  Calendar,
  GraduationCap,
  Menu,
  NotebookPen,
  X,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface NavProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const Nav: React.FC<NavProps> = ({ isMenuOpen, toggleMenu, closeMenu }) => {
  return (
    <header className="bg-blue-900 text-white py-6 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 transform hover:scale-105 transition-all duration-300"
            onClick={closeMenu}
          >
            <GraduationCap size={32} className="animate-bounce" />
            <h1 className="text-2xl font-bold">University College</h1>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-blue-800 rounded-lg transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/courses"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300 group"
              onClick={closeMenu}
            >
              <BookCopy
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>Courses</span>
            </Link>
            <Link
              to="/notes"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300 group"
              onClick={closeMenu}
            >
              <NotebookPen
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>Notes</span>
            </Link>
            <Link
              to="/papers"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300 group"
              onClick={closeMenu}
            >
              <BookOpen
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>Papers</span>
            </Link>
            <Link
              to="/dates"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300 group"
              onClick={closeMenu}
            >
              <Calendar
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>Important Dates</span>
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-300 ease-in-out mt-4`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              to="/courses"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300 group py-2"
              onClick={closeMenu}
            >
              <BookCopy
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>Courses</span>
            </Link>
            <Link
              to="/notes"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300 group py-2"
              onClick={closeMenu}
            >
              <NotebookPen
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>Notes</span>
            </Link>
            <Link
              to="/papers"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300 group py-2"
              onClick={closeMenu}
            >
              <BookOpen
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>Papers</span>
            </Link>
            <Link
              to="/dates"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300 group py-2"
              onClick={closeMenu}
            >
              <Calendar
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>Important Dates</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
