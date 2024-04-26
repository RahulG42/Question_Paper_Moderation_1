import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  // Check if current route is the home page
  const isHomePage = location.pathname === '/';

  // Render the sidebar only if not on the home page
  if (isHomePage) {
    return null;
  }

  // const navLinkData = [
  //   {
  //     id:1,
  //     name:Upload,
  //     redirect:"/upload",
  //     imgUrl :'',
  //     style:'',
      
  //   },
  //   {
  //     id:1,
  //     name:Upload,
  //     redirect:"/upload",
  //     imgUrl :'',
  //     style:'',
      
  //   }
  // ]

  return (
    <div className="bg-gray-800 text-white max-h-screen w-64 flex flex-col shadow-xl border-opacity-40 border border-y-0 border-x-slate-100 ">
      {/* Sidebar Header */}
      <div className="h-16 flex items-center justify-center ">
        <h1 className="text-lg font-semiblod">Options</h1>
      </div>

      {/* Sidebar Links */}
      <div className="flex-grow text-center  font-semibold max-h-2  ">
        <ul>
        <li className='mx-3 bg-gray-700 hover:bg-gradient-to-tr from-blue-800 bg-gra to-red-300 mb-4  rounded-full shadow-md shadow-gray-400 border-opacity-60 border border-blue-500'>
              <Link className='nav-link block px-4 py-2 text-white  ' to="/Upload">
                Upload
              </Link>
            </li>
        <li className='mx-3  bg-gray-700 hover:bg-gradient-to-bl from-blue-800 bg-gra to-red-300 mb-4 rounded-full shadow-md shadow-gray-400 border-opacity-60 border border-blue-500'>
              <Link className='nav-link block px-4 py-2 text-white ' to="/Accurracy">
                Similarity Score
              </Link>
            </li>
        <li className='mx-3 bg-gray-700 hover:bg-gradient-to-tl from-blue-800 bg-gra to-red-300  mb-4 bg-grad rounded-full shadow-md shadow-gray-400 border-opacity-60 border border-blue-500'>
              <Link className='nav-link block px-4 py-2 text-white ' to="/download">
              Download
              </Link>
            </li>
            <li className='mx-3 bg-gray-700 hover:bg-gradient-to-br from-blue-800 bg-gra to-red-300 mb-4 rounded-full shadow-md shadow-gray-400 border-opacity-60 border border-blue-500'>
              <Link className='nav-link block px-4 py-2 text-white ' to="/about">
                About
              </Link>
            </li>
         
        </ul>
      </div>

      {/* Sidebar Footer */}
      {/* <div className="h-16 flex items-center justify-center">
        <p>Footer content</p>
      </div> */}
    </div>
  );
};

export default Sidebar;
