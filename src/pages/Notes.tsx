import { NotebookPen, Download, Star } from "lucide-react";

import { NotesData } from "../Data/Notes";

export function Notes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <NotebookPen size={32} className="text-blue-900 animate-pulse" />
        <h1 className="text-3xl font-bold text-blue-900">Study Notes</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {NotesData.map((note) => (
          <div
            key={note.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-900">
              {note.subject}
            </h3>
            <p className="text-lg text-gray-700 mb-3">{note.topic}</p>
            <div className="text-gray-600 mb-2">By {note.author}</div>
            <div className="flex items-center mb-4">
              <Star className="text-yellow-500 mr-1" size={16} />
              <span className="text-gray-700">{note.rating}</span>
              <span className="mx-2">•</span>
              <Download size={16} className="mr-1" />
              <span className="text-gray-700">{note.downloads}</span>
            </div>
            <button className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transform hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center space-x-2">
              <Download size={16} />
              <span>Download Notes</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
