import React from 'react'
import Card from './Card'
function SuggestFriends() {
  return (
    <div className='bg-blue-100'>
        <h2 className='p-4 text-3xl font-bold'>Sugeest Friends</h2>
        <div className='flex  flex-wrap'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
        
    </div>
  )
}

export default SuggestFriends
