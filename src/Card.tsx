import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, content, author, date, image }) => {
  return (
    <Link
      to={`/post/${encodeURIComponent(title.replace(/\s+/g, "-"))}`} // Create a unique URL
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{content.slice(0, 100)}...</p>
        <div className="mt-2 text-gray-500 text-sm">
          <span>{author}</span> | <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
