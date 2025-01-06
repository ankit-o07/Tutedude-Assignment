import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [hobbies, setHobbies] = useState([]);
  const [hobbyInput, setHobbyInput] = useState("");

  const handleHobbyAdd = (e) => {
    if (e.key === "Enter" && hobbyInput.trim() !== "") {
      e.preventDefault();
      setHobbies([...hobbies, hobbyInput.trim()]);
      setHobbyInput("");
    }
  };

  const handleHobbyRemove = (index) => {
    setHobbies(hobbies.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form submission logic
    const formData = {
      name,
      email,
      password,
      hobbies,
    };

    console.log("Form Data:", formData);

    // Reset form fields after submission
    setName("");
    setEmail("");
    setPassword("");
    setHobbies([]);
  };

  return (
    <div>
      <Navbar />

      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="#">Connect with you friend</a>
            </div>
            <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Rekindle the bonds that matter most, no matter where life takes you. Stay connected with your friends, anytime, anywhere!
            </p>
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Already have an account?</span>
              <a href="#" className="underline">
               Login
              </a>
            </p>
            <p className="mt-6 text-sm text-center text-gray-300">
              Read our{" "}
              <a href="#" className="underline">
                terms
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                conditions
              </a>
            </p>
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Account Signup
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
              {/* Name Field */}
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-500"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2 text-gray-600"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Hobby Field */}
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="hobby"
                  className="text-sm font-semibold text-gray-500"
                >
                  Hobby
                </label>
                <input
                  type="text"
                  id="hobby"
                  value={hobbyInput}
                  onChange={(e) => setHobbyInput(e.target.value)}
                  onKeyDown={handleHobbyAdd}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  placeholder="Type a hobby and press Enter"
                />
                {/* Hobbies List */}
                <div className="mt-2">
                  {hobbies.map((hobby, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-4 py-2 mt-2 text-sm bg-gray-200 rounded-md"
                    >
                      <span>{hobby}</span>
                      <button
                        type="button"
                        onClick={() => handleHobbyRemove(index)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Signup;
