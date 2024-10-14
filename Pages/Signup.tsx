import React, { useState } from "react";
import "../index.css"; // Ensure this is correctly pointed to your CSS file

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Handle signup logic here
    console.log("Signup Successful", { name, email, password });
    // Reset form
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-cover bg-center h-screen px-10 py-5"
      style={{
        backgroundImage: `url(https://img.freepik.com/premium-photo/11h-pink-aesthetic-wallpaper-lockscreen_1097265-93242.jpg)`,
      }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        <div className="text-center text-black mb-6 text-2xl">SIGN UP</div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your name here"
            className="p-2 text-gray-400 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter your email here"
            className="p-2 text-gray-400 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password here"
            className="p-2 text-gray-400 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm your password"
            className="p-2 text-gray-400 border rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <input
            type="submit"
            value="Sign Up"
            className="p-2 rounded bg-blue-500 text-white cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
