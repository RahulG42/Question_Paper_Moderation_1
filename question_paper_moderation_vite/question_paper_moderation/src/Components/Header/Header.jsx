import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo2.png'

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600); // Adjusted threshold to 600 pixels
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
{/*  */}
  return (
    <header className="bg-gray-800 text-white px-4 sm:px-16 py-1 flex justify-between items-center mb-0 border-opacity-40 border border-slate-100">
      <div className="flex items-center ">
    <Link className='nav-link rounded-full border border-orange-600' to="/">
        <img className="size-12" src={logo} alt="Robot" />
    </Link>
    <div className="logo text-lg sm:text-xl font-bold ml-2">
        <Link className='nav-link hover:text-orange-400' to="/">
            Question_Paper_moderation
        </Link>
    </div>
</div>
     
      {isSmallScreen ? (
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      ) : (
        <nav className="menu">
          <ul className="flex flex-wrap">
            <li>
              <Link className='ml-4 nav-link hover:text-orange-400 ' to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className='ml-4 nav-link hover:text-orange-400 ' to="/upload">
                Upload
              </Link>
            </li>
            {/* <li>
              <Link className='ml-4 nav-link hover:text-orange-400 ' to="/details">
                Details
              </Link>
            </li> */}
            <li>
              <Link className='ml-4 nav-link hover:text-orange-400' to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {isSmallScreen && showMenu && (
        <nav className="menu">
          <ul className="flex flex-col">
            <li>
              <Link className='nav-link' to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className='ml-4 nav-link' to="/upload">
                Upload
              </Link>
            </li>
            <li>
              <Link className='ml-4 nav-link' to="/details">
                Details
              </Link>
            </li>
            <li>
              <Link className='ml-4 nav-link' to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
