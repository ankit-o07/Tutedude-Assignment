import React from 'react'

function Card() {
  return (
    <div>
      <div class="p-20 bg-blue-100">
        
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-2 text-gray-800">Card with no image</h2>
          <p class="text-gray-700">This is my cool new card!</p>
          <div className='flex justify-stretch'>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 border border-blue-700 rounded">
            Button
          </button>

          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
