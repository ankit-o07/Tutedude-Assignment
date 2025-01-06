import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', query);
    // You can replace this with actual search logic, such as making an API call.
  };

  return (
    <>
        <h2 className='p-4 text-3xl font-bold'>Search Friends</h2>
        <div className="flex items-center space-x-4 p-4">
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="p-2 border border-gray-300 rounded-md"
        />
        <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
            Search
        </button>
        </div>
    </>
  );
}

export default Search;
