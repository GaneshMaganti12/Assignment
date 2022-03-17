import React from 'react'
import "./AppList.css"

export default function AppList(props) {
    const {details} = props
    const {title, imageUrl} = details
    const name = title.toUpperCase()
  return (
    <li className='list-item'>
        <div className='list-card'>
            <img className="logo" src={imageUrl} alt="logo"/>
            <p className='title'>{name}</p>
        </div>
    </li>
  )
}
