import React, { useState } from 'react';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-semibold">
        <h1>Logo</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4">
        {isLoggedIn ? (
          <button className="px-4 py-2 bg-gray-600 rounded">Profile</button>
        ) : (
          <>
            <button
              className="px-4 py-2 bg-gray-600 rounded"
              onClick={toggleLogin}
            >
              Login
            </button>
            <button
              className="px-4 py-2 bg-gray-600 rounded"
              onClick={toggleLogin}
            >
              Sign Up
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden px-4 py-2 bg-gray-600 rounded"
      >
        Menu
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 bg-gray-800 w-full md:hidden flex flex-col items-center space-y-4 py-4">
          {isLoggedIn ? (
            <button className="px-4 py-2 bg-gray-600 rounded">Profile</button>
          ) : (
            <>
              <button
                className="px-4 py-2 bg-gray-600 rounded"
                onClick={toggleLogin}
              >
                Login
              </button>
              <button
                className="px-4 py-2 bg-gray-600 rounded"
                onClick={toggleLogin}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
