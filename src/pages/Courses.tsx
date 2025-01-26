import React from 'react';
import { BookCopy, Users, Clock, Trophy } from 'lucide-react';

interface Course {
  id: number;
  name: string;
  duration: string;
  students: number;
  description: string;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    name: "Computer Science",
    duration: "4 Years",
    students: 250,
    description: "Comprehensive program covering programming, algorithms, and software development.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    name: "Business Administration",
    duration: "3 Years",
    students: 200,
    description: "Learn business management, marketing, and entrepreneurship skills.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    name: "Mechanical Engineering",
    duration: "4 Years",
    students: 180,
    description: "Study mechanics, thermodynamics, and machine design.",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000"
  }
];

export function Courses() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <BookCopy size={32} className="text-blue-900 animate-pulse" />
        <h1 className="text-3xl font-bold text-blue-900">Our Courses</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <div 
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${course.image})` }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">{course.name}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Clock size={16} className="mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users size={16} className="mr-2" />
                  <span>{course.students} Students</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transform hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center space-x-2">
                <Trophy size={16} />
                <span>Enroll Now</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}