import React from "react";
import Navbar from "../Components/Navbar";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center p-6">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to NavyaShreya's Blog!
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Join us on our journey as we share stories, experiences, and tips
          about life, travel, and creativity.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <img
            src="https://media.istockphoto.com/id/922745190/photo/blogging-blog-concepts-ideas-with-worktable.jpg?s=612x612&w=0&k=20&c=xR2vOmtg-N6Lo6_I269SoM5PXEVRxlgvKxXUBMeMC_A="
            alt="Journey"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-lg"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTfiUIzxhWa9dNhVte3RvMeeyA6wfbnoORQ&s"
            alt="Blogging"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
