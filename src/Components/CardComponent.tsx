import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
  imgSrc: string;
  buttonText?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imgSrc,
  buttonText = "Learn More",
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link
          to="#"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const cards = [
    {
      id: 1,
      title: "Computer Science",
      description:
        "Explore the fundamentals of algorithms, data structures, and software development.",
      imgSrc: "https://source.unsplash.com/random/800x600?code",
    },
    {
      id: 2,
      title: "Electrical Engineering",
      description:
        "Learn about circuit design, power systems, and modern electrical technologies.",
      imgSrc: "https://source.unsplash.com/random/800x600?electronics",
    },
    {
      id: 3,
      title: "Business Management",
      description:
        "Master the art of leadership, strategy, and organizational development.",
      imgSrc: "https://source.unsplash.com/random/800x600?business",
    },
    {
      id: 4,
      title: "Graphic Design",
      description:
        "Develop creative skills in visual communication and digital design tools.",
      imgSrc: "https://source.unsplash.com/random/800x600?design",
    },
    {
      id: 5,
      title: "Environmental Science",
      description:
        "Study ecosystems, sustainability, and environmental protection strategies.",
      imgSrc: "https://source.unsplash.com/random/800x600?nature",
    },
    {
      id: 6,
      title: "Medical Biology",
      description:
        "Explore human anatomy, physiology, and biomedical research techniques.",
      imgSrc: "https://source.unsplash.com/random/800x600?biology",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Featured Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imgSrc={card.imgSrc}
            buttonText="View Course"
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
