import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function UserProfile() {
  const [activeTab, setActiveTab] = useState(''); // State to track active tab

  return (
    <div>
      <Navbar />
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto border bg-blue-500 rounded-lg p-4">
          <ul className="flex justify-center space-x-8">
            <li
              className="hover:text-blue-1000 hover:underline cursor-pointer"
              onClick={() => setActiveTab('following')}
            >
              Following
            </li>
            <li
              className="hover:text-blue-1000 hover:underline cursor-pointer"
              onClick={() => setActiveTab('followers')}
            >
              Followers
            </li>
            {/* <li
              className="hover:text-blue-1000 hover:underline cursor-pointer"
              onClick={() => setActiveTab('settings')}
            >
              Setting
            </li> */}
          </ul>
        </div>

        {/* Content Sections */}
        <div className="p-4 text-violet-950">
          {activeTab === 'following' && (
            <div className="bg-gray-100 p-4 rounded-lg">1. Content for Following</div>
          )}
          {activeTab === 'followers' && (
            <div className="bg-gray-100 p-4 rounded-lg">2. Content for Followers</div>
          )}
          {activeTab === 'settings' && (
            <div className="bg-gray-100 p-4 rounded-lg">3. Content for Settings</div>
          )}
        </div>
      </nav>
      <Footer />
    </div>
  );
}

export default UserProfile;
