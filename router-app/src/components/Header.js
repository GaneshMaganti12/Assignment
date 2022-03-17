import React from 'react'
import { Link} from 'react-router-dom'
import "./Header.css"

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container">
            <Link className='link' to="/"><h1 className="navbar-title">Navbar</h1></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav margin">
                    <Link className='link' to="/"><li className="item">Home</li></Link>
                    <Link className='link' to="/about"><li className="item">About</li></Link>
                    <Link className='link' to="/login"><li className='item'>Logout</li></Link>
                </ul>
            </div>
        </div>
    </nav>
  )
}
