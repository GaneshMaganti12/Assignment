import React from 'react'
import Header from './Header'
import "./Home.css"

export default function Home() {
  return (
    <>
        <Header/>
        <div className='home-card'>
          <img className='home' src='https://icon-library.com/images/png-home-icon/png-home-icon-15.jpg' alt="home"/>
          <h1 className='home-title'>Home</h1>
        </div>
    </>
  )
}
