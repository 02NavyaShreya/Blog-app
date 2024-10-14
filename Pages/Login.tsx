import React from "react";
import "../index.css"; // Ensure this is correctly pointed to your CSS file

const Login: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-cover bg-center h-screen px-10 py-5"
      style={{
        backgroundImage: `url(https://i.pinimg.com/736x/af/ce/af/afceaff1e64d2c22a4cfc18d36299f6f.jpg)`,
      }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        <div className="text-center text-black mb-6 text-xl font-semibold">
          Welcome To Journey & Joy
        </div>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border rounded"
          />
          <input
            type="submit"
            value="Login"
            style={{ backgroundColor: "#a1eafb" }}
            className="p-2 rounded cursor-pointer"
          />
          <a href="/signup" className="text-blue-500 underline">
            Sign Up
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
