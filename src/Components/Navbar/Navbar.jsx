import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {
  const navRef=useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navRef.current.classList.add("nav-dark")
      }
    else{
      navRef.current.classList.remove("nav-dark");
    }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left"> 
        <img src={logo} className='big-logo' alt="logo-img" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Populor</li>
          <li>My list</li>
          <li>Browse by language</li>
        </ul>
      </div>
      <div className="navbar-right">
          <img src={search} className='icons' alt="search icons" />
          <p>Children</p>
          <img src={bell} className='icons' alt="bell icons" />
          <div className="navbar-profile">

          <img src={profile} className='profile' alt="profile image" />
          <img src={caret} className='arrow' alt="down arrow" />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign out of netflix</p>
          </div>
          </div>

      </div>  
    </div>
  )
}

export default Navbar