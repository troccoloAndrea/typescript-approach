import React from 'react'
import { Link } from 'react-router-dom'
import './css/Navbar.css'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body">
      <div className="container">
        <a className="navbar-brand" href="#">Products<span className="purple-text">Store</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className='nav-link'>Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/categories" className='nav-link'>Categories</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;