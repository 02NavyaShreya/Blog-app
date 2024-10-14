import React from "react";

const About: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/017/776/900/small/top-view-floral-background-with-plenty-of-copy-space-perfect-for-website-backgrounds-social-media-posts-advertising-packaging-etc-vibrant-flowers-lush-greenery-shallow-depth-of-field-photo.jpg)`,
      }}
    >
      <div className="bg-white bg-opacity-70 container mx-auto p-6 rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Welcome to NavyaShreya's blog! I started this journey to share my
          experiences, insights, and passion for various topics. Whether it's
          travel, lifestyle, creativity, or health, we believe in the power of
          sharing stories and connecting with others.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is to inspire, educate, and entertain through engaging
          content. We aim to create a community where everyone feels welcome and
          valued.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Meet the Team</h2>
        <p className="text-lg text-gray-700 mb-6">
          We are Navya and Shreya, two friends who love sharing our thoughts and
          experiences with the world. We hope to bring a smile to your face and
          inspire you on your own journey.
        </p>
      </div>
    </div>
  );
};

export default About;
