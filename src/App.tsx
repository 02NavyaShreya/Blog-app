import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./Card";
import Navbar from "./Components/Navbar"; 
import BlogPost from "./BlogPost";
import Home from "./Pages/Home";
import Login from "./Pages/Login"; 
import Signup from "./Pages/Signup";
import About from "./Pages/About";

interface BlogPostType {
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

const App: React.FC = () => {
  const [posts] = useState<BlogPostType[]>([
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
      image: "https://i1.sndcdn.com/artworks-sPlCbq5G8Zyg-0-t1080x1080.png",
    },
    {
      title: "Travel Diaries ",
      content:
        "In this post, we share our latest travel adventures, exploring new places and cultures. Travel opens your mind in ways you never imagined.",
      author: "NavyaShreya",
      date: "October 10, 2023",
      image:
        "https://yt3.googleusercontent.com/IwqJlmNarSlks7HWQYmLa1QQaZSqK5aksr1zJh5rRBQXmY6LjKOU7ZSSqturn_2dpLo9X1ADkw=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Creative Process of NavyaShreya",
      content:
        "Every artist has a unique approach to creativity. In this post, we share how we find inspiration and turn it into art!",
      author: "NavyaShreya",
      date: "October 15, 2023",
      image:
        "https://img.freepik.com/free-vector/creativity-innovation-concept-illustration_53876-62581.jpg",
    },
    {
      title: "Healthy Living Tips",
      content:
        "We believe in maintaining a balanced lifestyle. Here are some tips and tricks we’ve learned along the way to stay healthy and active.",
      author: "NavyaShreya",
      date: "October 20, 2023",
      image:
        "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/66916511323039001d1da8df.jpg",
    },
    {
      title: "From being a kid",
      content:
        "In this post, my favourite Barbie like from being a kid dreamt to be a barbie. What are your favorites role you dreamt of playing?",
      author: "NavyaShreya",
      date: "October 25, 2023",
      image:
        "https://cdn.kobo.com/book-images/ded525fc-4bce-47be-8d08-27273b739b5b/1200/1200/False/barbie-a-fashion-fairytale-barbie.jpg",
    },
    {
      title: "Our Favorite Recipes",
      content:
        "Cooking together is one of our favorite activities! Here are some of our go-to recipes that we absolutely love.",
      author: "NavyaShreya",
      date: "October 30, 2023",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPwgKPjbBEo_08budVvFswnJWqx5rBrdByg&s",
    },
    {
      title: "Photography Adventures",
      content:
        "Join us as we explore photography and the moments we capture. Here are some of our favorite shots!",
      author: "NavyaShreya",
      date: "November 5, 2023",
      image:
        "https://i.pinimg.com/236x/1a/b1/a7/1ab1a7a04d03d592ec7a18899270ff59.jpg",
    },
    {
      title: "Navigating Challenges",
      content:
        "Life is full of challenges. In this post, we discuss how we navigate tough times and emerge stronger.",
      author: "NavyaShreya",
      date: "November 10, 2023",
      image:
        "https://cdn.outsideonline.com/wp-content/uploads/2021/05/03/rugged-flexibility-chage_s.jpg",
    },
    {
      title: "Celebrating Festivals",
      content:
        "Festivals bring us together! Join us as we share how we celebrate our favorite festivals and traditions.",
      author: "NavyaShreya",
      date: "November 15, 2023",
      image: "https://blog.sankalptaru.org/wp-content/uploads/2023/09/Holi.jpg",
    },
    {
      title: "The Power of Mindfulness",
      content:
        "Mindfulness has transformed our lives. In this post, we explore its benefits and share techniques for incorporating it into daily life.",
      author: "NavyaShreya",
      date: "November 20, 2023",
      image:
        "https://pmworks.b-cdn.net/wp-content/uploads/2024/06/The-power-of-mindfulness.webp",
    },
  ]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container mx-auto p-6">
              <h1 className="text-4xl font-bold text-center mb-6">
                NavyaShreya's Blog
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                  <Card
                    key={index}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    date={post.date}
                    image={post.image}
                  />
                ))}
              </div>
            </div>
          }
        />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:title" element={<BlogPost />} />
      </Routes>
    </Router>
  );
};

export default App;
