import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80&w=2000")'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-bold mb-6 text-center">Welcome to University College</h1>
            <p className="text-xl mb-12 text-center max-w-2xl">
              Empowering minds, shaping futures. Join us in our pursuit of excellence in education.
            </p>
            <div className="flex gap-6">
              <Link
                to="/papers"
                className="flex items-center space-x-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <BookOpen size={20} />
                <span>View Papers</span>
              </Link>
              <Link
                to="/dates"
                className="flex items-center space-x-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Calendar size={20} />
                <span>Important Dates</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Excellence in Education</h2>
            <p className="text-gray-600">
              Our institution is committed to providing world-class education and fostering academic excellence.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Research Opportunities</h2>
            <p className="text-gray-600">
              Engage in cutting-edge research projects and contribute to advancing knowledge in your field.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Student Success</h2>
            <p className="text-gray-600">
              We provide comprehensive support services to ensure every student reaches their full potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}