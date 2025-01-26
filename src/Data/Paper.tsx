interface Paper {
  id: number;
  subject: string;
  year: number;
  date: string;
  link: string;
}

const PapersData: Paper[] = [
  { id: 1, subject: "Mathematics", year: 2025, date: "18/01/2025", link: "#" },
  { id: 2, subject: "Physics", year: 2025, date: "18/01/2025", link: "#" },
  {
    id: 3,
    subject: "Computer Science",
    year: 2025,
    date: "18/01/2025",
    link: "#",
  },
  { id: 4, subject: "Chemistry", year: 2025, date: "18/01/2025", link: "#" },
];

export default PapersData;
