
import Announcement from "../components/Announcement"
import Slider from "../components/Slider"
import Navbar from "../components/navbar/Navbar"
import "./home.scss"
import React from 'react'

const Home = () => {
  return (
    <div
    
     className = "home">
      <Announcement/>
       <Navbar/>
       <Slider/>
       <img 
       width="100%"
       height="100%"
       src="https://www.rd.com/wp-content/uploads/2020/06/GettyImages-182190275.jpg" alt="Logo of my web project"/>
    </div>
  )
}

export default Home