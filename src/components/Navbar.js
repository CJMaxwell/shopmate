import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/"><img src="img/SHOPMATE.png" alt="Shop Mate Logo"/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/Women">Women <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Men">Men</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Kids">Kids</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Shoes">Shoes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Brands">Brands</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <img src="img/icons-bag-white.png" alt="Icons Bag"/><span className="badge badge-white">2</span>
        </form>
      </div>
  </nav>
  )
}
