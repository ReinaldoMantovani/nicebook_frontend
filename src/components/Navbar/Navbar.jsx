import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css";
import { HiOutlineMenuAlt3 } from 'react-icons/hi';


import LogoImg from '../../images/book-Photoroom.png';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const handlenavbar  = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id='navbar'>
        <div className='container navbar-content flex'>
            <div className='brand-and-toggler flex flex-sb'>
                <Link to="/" className='navbar-brand flex'>
                    <img src={LogoImg} alt="site logo" />
                    <span className='text-uppercase fw-7 fs-24 ls-1'>NiceBook</span>
                </Link>
                <button type='button' className='navbar-toggler-btn' onClick={handlenavbar}>
                  <HiOutlineMenuAlt3 size={35} style={{
                    color: `${toggleMenu ? "#fff" : "rgb(204, 151, 52)"}`
                  }} />
                </button>
                  <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
                      <ul className='navbar-nav'>
                          <li className='nav-item'>
                              <Link to="book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                                Home
                              </Link>
                          </li>
                          <li className='nav-item'>
                              <Link to="about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                                About
                              </Link>
                          </li>
                      </ul>
                  </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
