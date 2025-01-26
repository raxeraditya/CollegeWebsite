import { BookOpen } from "lucide-react";
import PapersData from "../Data/Paper";

export function Papers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <BookOpen size={32} className="text-blue-900" />
        <h1 className="text-3xl font-bold text-blue-900">
          Previous Year Papers
        </h1>
      </div>
      <h1 className="text-center text-black text-2xl pb-1.5 bg-blue-700">
        B.sc(Bachelor of Science)
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PapersData.map((paper) => (
          <div
            key={paper.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{paper.subject}</h3>
            <h4 className="text-sm font-semibold mb-1.5">{paper.date}</h4>
            <p className="text-gray-600 mb-4">Year: {paper.year}</p>
            <a
              href={paper.link}
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              <span>Download Paper</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
