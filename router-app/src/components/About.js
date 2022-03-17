import React from 'react'
import "./About.css"
import Header from "./Header"

export default function About() {
  return (
    <>
        <Header/>
        <div className='about-card'>
          <img className='about' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpl0GhmH2RCPWh_m_cNVemceoahbsqmrbAVVbFfh0BLhbCTDhYBYOrdGihrmuRHwLALro&usqp=CAU" alt="about"/>
          <h1 className='about-title'>About</h1>
        </div>
    </>
  )
}
