interface Note {
  id: number;
  subject: string;
  topic: string;
  author: string;
  rating: number;
  downloads: number;
}

const NotesData: Note[] = [
  {
    id: 1,
    subject: "Mathematics",
    topic: "Calculus Fundamentals",
    author: "Prof. Smith",
    rating: 4.8,
    downloads: 1250,
  },
  {
    id: 2,
    subject: "Physics",
    topic: "Quantum Mechanics",
    author: "Dr. Johnson",
    rating: 4.9,
    downloads: 980,
  },
  {
    id: 3,
    subject: "Computer Science",
    topic: "Data Structures",
    author: "Prof. Williams",
    rating: 4.7,
    downloads: 1500,
  },
  {
    id: 4,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    author: "Dr. Brown",
    rating: 4.6,
    downloads: 850,
  },
];

export { NotesData };
