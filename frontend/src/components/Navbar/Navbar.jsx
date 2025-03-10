/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

import './Navbar.css'

const Navbar = ({ setShowLogin }) => {

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const [menu, setMenu] = useState("home");

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className="navbar">
      <Link to={'/'} onClick={() => setMenu("home")}><img src={assets.logo} alt="logo" className='logo' /></Link>

      <ul className="navbar-menu">
        <Link to={'/'} onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <Link to={'/#explore-menu'} onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</Link>
        <a href='#footer' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} />

        <div className="navbar-search_icon">
          <Link to='/cart' onClick={() => setMenu("")}><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}>
          </div>
        </div>

        {!token ? <button onClick={() => setShowLogin(true)}>Sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="profile pic" />
            <ul className='nav-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>}

      </div>
    </div>
  )
}

export default Navbar