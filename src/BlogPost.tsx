import React from "react";
import { useParams } from "react-router-dom";

const BlogPost: React.FC = () => {
  const { title } = useParams<{ title: string }>();

  // Sample posts array
  const posts = [
    {
      title: "NavyaShreya’s Journey into Blogging",
      content:
        "We started this blog to document our thoughts and experiences. It’s been an incredible journey so far, and we can’t wait to share more with you!",
      author: "NavyaShreya",
      date: "October 1, 2023",
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
    },
    {
      title: "A Day in NavyaShreya’s Life",
      content:
        "Join us as we take you through a typical day in our lives, filled with adventures and challenges. Every moment is a new lesson!",
      author: "NavyaShreya",
      date: "October 5, 2023",
      image:
        "https://i1.sndcdn.com/artworks-sPlCbq5G8Zyg-0-t1080x1080.png",
    },
    {
      title: "Travel Diaries with NavyaShreya",
      content:
        "In this post, we share our latest travel adventures, exploring new places and cultures. Travel opens your mind in ways you never imagined.",
      author: "NavyaShreya",
      date: "October 10, 2023",
      image:
        "https://yt3.googleusercontent.com/IwqJlmNarSlks7HWQYmLa1QQaZSqK5aksr1zJh5rRBQXmY6LjKOU7ZSSqturn_2dpLo9X1ADkw=s900-c-k-c0x00ffffff-no-rj",
    },
  ];

  // Find the post by title
  const post = posts.find((p) => p.title.replace(/\s+/g, "-") === title);

  if (!post) {
    return <div>Post not found</div>; // Handle the case where there is no matching post
  }

  return (
    <div
      className="container mx-auto p-6"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/flower-vase-camera-pencil-eyeglasses-laptop-pink-background_23-2148041882.jpg?size=626&ext=jpg&ga=GA1.1.1589467615.1728625183&semt=ais_hybrid')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover mb-4"
        />
        <p className="text-gray-700 mb-2">
          <b>Author:</b> {post.author}
        </p>
        <p className="text-gray-700 mb-2">
          <b>Date:</b> {post.date}
        </p>
        <p className="text-gray-800">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
