import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Search from '../components/Search.jsx'
import SuggestFriends from '../components/SuggestFriends.jsx'
import NewUsers from '../components/NewUsers.jsx'

function Home() {
  return (
    <div>
      <Navbar></Navbar>
        <Search></Search>
        <SuggestFriends></SuggestFriends>
        <NewUsers></NewUsers>
      <Footer></Footer>
    </div>
  )
}

export default Home ; 
