// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center px-16">
//       <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
//       <p className="text-lg text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
//       <Link className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded' to="/Upload">
//                 Upload
//       </Link>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
// import background from '../Images/background.jpg'; // Replace 'background.jpg' with your desired background image

const Home = () => {
  return (
    <div className=" mt-16 flex flex-col justify-center items-center">
      <div className="bg-gray-900 bg-opacity-50 px-8 py-12 rounded-lg">
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-white mb-8">"Generate unique question papers instantly! Input your questions, and we'll create custom papers with no duplicates. Elevate your study experience today!"</p>
        <Link
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block"
          to="/Upload"
        >
          Get Started
        </Link>
      </div>  
    </div>
  );
};

export default Home;
