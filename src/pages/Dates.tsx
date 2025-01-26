import React from 'react';
import { Calendar } from 'lucide-react';

interface ImportantDate {
  id: number;
  event: string;
  date: string;
}

const importantDates: ImportantDate[] = [
  { id: 1, event: "Summer Semester Registration", date: "April 15, 2024" },
  { id: 2, event: "Final Examinations", date: "May 20, 2024" },
  { id: 3, event: "Graduation Ceremony", date: "June 30, 2024" },
  { id: 4, event: "Fall Semester Begins", date: "September 1, 2024" },
];

export function Dates() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <Calendar size={32} className="text-blue-900" />
        <h1 className="text-3xl font-bold text-blue-900">Important Dates</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {importantDates.map((date) => (
          <div
            key={date.id}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">{date.event}</h3>
            <div className="flex items-center text-gray-600">
              <Calendar size={16} className="mr-2" />
              <p>{date.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}