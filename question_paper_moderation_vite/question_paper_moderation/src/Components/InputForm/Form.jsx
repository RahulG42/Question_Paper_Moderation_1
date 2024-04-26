//RR import React, { useState } from 'react';
//RR import axios from "axios";

//R const Form = () => {
//   const [images, setImages] = useState('');
//   const [name, setName] = useState('');
//   const [file, setFile] = useState(null);
//   const [type, setType] = useState('');
//   const [subject, setSubject] = useState('');
// R  const [errorMessage, setErrorMessage] = useState('');

  // const handleImageChange = (e) => {
  //   const selectedImages = Array.from(e.target.files);
  //   // if (selectedImages.length > 5) {
  //   //   setErrorMessage('You can only upload up to 5 PDF files.');
  //   // } else {
  //   //   setImages(selectedImages);
  //   //   setErrorMessage('');
  //   // }
  // };

  //R const handleSubmit =async (e) => {
  // R  e.preventDefault();

    // Check if the user has selected more than 5 files
    // if (images.length > 5) {
    //   setErrorMessage('You can only upload up to 5 PDF files.');
    //   return;
    // }

    // Create a new FormData object
    // R const formData = new FormData();

    // Append each selected file to the FormData object
    // images.forEach((image, index) => {
    //   formData.append(`pdf${index + 1}`, image);
    // });

    // Append other form data fields
    //R formData.append('name', name);
    //R formData.append('file', file);
    // formData.append('type', type);
    // formData.append('subject', subject);
    //R console.log(name,images)

    //R try {
    //   const response = await axios.post("http://localhost:5000/upload-files", formData, {
    //     headers: { "Content-Type": "multipart/form-data" }
    //   });
    //   console.log(response.data);
    // } catch (error) {
    //   console.error('Failed to upload:', error);
    //R }

    // console.log(result);
    // Make a fetch request to the server endpoint to handle the file upload and data submission
    // fetch('/api/upload', {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Upload successful:', data);
    //   // Clear form fields after successful upload
    //   setImages([]);
    //   setName('');
    //   setType('');
    //   setSubject('');
    //   setErrorMessage('');
    // })
    // .catch(error => {
    //   console.error('Upload failed:', error);
    //   setErrorMessage('Failed to upload. Please try again later.');
    // });
  // R};

  //RR return (
  //   <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 p-8 bg-gray-100 rounded-lg shadow-xl">
  //      <div className="mb-6">
  //       <label htmlFor="name" className="block text-xl font-medium text-gray-700">Name:</label>
  //       <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-xl border-gray-300 rounded-md h-8 pl-4" />
  // R R   </div>
      {/*
      <div className="mb-6">
        <label htmlFor="type" className="block text-xl font-medium text-gray-700">Type of Question Paper:</label>
        <input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-xl border-gray-300 rounded-md h-8 pl-4" />
      </div>
      <div className="mb-8">
        <label htmlFor="subject" className="block text-xl font-medium text-gray-700">Subject:</label>
        <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl">
          <option value="">Select Subject</option>
          <option value="English">English</option>
          <option value="Math">Math</option>
          <option value="Marathi">Marathi</option>
        </select>
      </div> */}
      {/* <div className="mb-8">
        <label htmlFor="images" className="block text-xl font-medium text-gray-700">PDF Upload (Max 5):</label>
        <input type="file" id="images" onChange={handleImageChange} multiple accept="application/pdf" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-xl border-gray-300 rounded-md" />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div> */}
      
      
//RR       <div className="mb-8">
//         <label htmlFor="images" className="block text-xl font-medium text-gray-700">PDF Upload (Max 5):</label>
//         <input type="file" id="images" onChange={(e)=>{setFile(e.target.files[0])}} multiple accept="application/pdf" className="form-control mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-xl border-gray-300 rounded-md"  />
        
//       </div>
//       <button type="submit" className="w-full py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//         Submit
//       </button>
//     </form>
//   );
// };

//RR export default Form;


// RRR22222
//import React, { useState } from 'react';
// import axios from "axios";

// const Form = () => {
//   const [name, setName] = useState('');
//   const [files, setFiles] = useState([]);

//   const handleFileChange = (e) => {
//     const selectedFiles = e.target.files;
//     const filesArray = Array.from(selectedFiles).slice(0, 5); // Limit to 5 files
//     if (selectedFiles.length > 5) {
//       // Display an error message if more than 5 files are selected
//       alert("You can only upload up to 5 PDF files.");
//     } else {
//       // Clear previous files
//       setFiles([]);
  
//       // Append each file with the appropriate field name
//       filesArray.forEach((file, index) => {
//         setFiles((prevFiles) => [
//           ...prevFiles,
//           { field: `file${index + 1}`, file: file },
//         ]);
//       });
//     }
//   };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const formData = new FormData();
//     formData.append('name', name);
  
//     files.forEach((fileObj) => {
//       formData.append(fileObj.field, fileObj.file);
//     });
  
//     try {
//       const response = await axios.post("http://localhost:5000/upload-files", formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error('Failed to upload:', error);
//     }
//   };
  

//   return (
//     <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 p-8 bg-gray-100 rounded-lg shadow-xl">
//       <div className="mb-6">
//         <label htmlFor="name" className="block text-xl font-medium text-gray-700">Name:</label>
//         <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-xl border-gray-300 rounded-md h-8 pl-4" />
//       </div>
//       <div className="mb-8">
//         <label htmlFor="images" className="block text-xl font-medium text-gray-700">PDF Upload (Max 5):</label>
//         <input type="file" name="file" onChange={handleFileChange} multiple accept="application/pdf" className="form-control mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-xl border-gray-300 rounded-md" />

//       </div>
//       <button type="submit" className="w-full py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;





///important becaue send data to bakend


// import React, { useState } from 'react';
// import axios from "axios";
// import { Navigate } from 'react-router-dom';

// const Form = () => {
//   const [name, setName] = useState('');
//   const [type, setType] = useState('');
//   const [files, setFiles] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [redirectToAccuracy, setRedirectToAccuracy] = useState(false);

//   const handleFileChange = (e) => {
//     const selectedFiles = e.target.files;
//     const filesArray = Array.from(selectedFiles).slice(0, 5); // Limit to 5 files

//     // Check if all selected files are of PDF type
//     const isValidFiles = Array.from(selectedFiles).every(file => file.type === 'application/pdf');

//     if (!isValidFiles) {
//       setErrorMessage('Only PDF files are allowed.');
//     } else if (selectedFiles.length > 5) {
//       setErrorMessage('You can only upload up to 5 PDF files.');
//     } else {
//       setFiles(filesArray);
//       setErrorMessage('');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (errorMessage || files.length !== 5) return; // Prevent form submission if there's an error or the file count is not 5

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('type', type);

//     files.forEach((file, index) => {
//       formData.append(`files`, file); // Append files with the same field name 'files'
//     });

//     try {
//       const response = await axios.post("http://localhost:4000/upload/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error('Failed to upload:', error);
//     }
//     setRedirectToAccuracy(true);
//   };

//   return (
//     <div className=" min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="mx-60 bg-white p-8 rounded-lg shadow-lg w-full  ">
//         {redirectToAccuracy && <Navigate to="/Accurracy" />}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block">Name:</label>
//             <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-md py-2 px-3" />
//           </div>
//           <div>
//             <label htmlFor="type" className="block">Type:</label>
//             <select id="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full border rounded-md py-2 px-3">
//               <option value="">Select Type</option>
//               <option value="Math">Math</option>
//               <option value="Marathi">Marathi</option>
//               <option value="English">English</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="files" className="block">PDF Upload (Max 5):</label>
//             <input type="file" id="files" onChange={handleFileChange} multiple accept="application/pdf" className="w-full border rounded-md py-2 px-3" />
//             {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//           </div>
//           <button type="submit" disabled={errorMessage || files.length !== 5} className={`w-full py-2 px-4 rounded-md focus:outline-none ${errorMessage || files.length !== 5 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;



// ///impelemting web socket 
// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import { Navigate } from "react-router-dom";

// const Form = () => {
//   const [name, setName] = useState('');
//   const [type, setType] = useState('');
//   const [files, setFiles] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [redirectToAccuracy, setRedirectToAccuracy] = useState(false);
//   const [ws, setWs] = useState(null);

//   useEffect(() => {
//     // Establish WebSocket connection when component mounts
//     const socket = new WebSocket('ws://localhost:8080');

//     socket.onopen = () => {
//       console.log('WebSocket connected');
//       setWs(socket);
//     };

//     socket.onmessage = (event) => {
//       console.log('Received message from WebSocket:', event.data);
//       if (event.data === 'Processing complete') {
//         setRedirectToAccuracy(true);
//       }
//     };

//     socket.onclose = () => {
//       console.log('WebSocket closed');
//     };

//     return () => {
//       // Close WebSocket connection when component unmounts
//       if (ws) {
//         ws.close();
//       }
//     };
//   }, []); // Run only once when component mounts

//   const handleFileChange = (e) => {
//     const selectedFiles = e.target.files;
//     const filesArray = Array.from(selectedFiles).slice(0, 5); // Limit to 5 files

//     // Check if all selected files are of PDF type
//     const isValidFiles = Array.from(selectedFiles).every(file => file.type === 'application/pdf');

//     if (!isValidFiles) {
//       setErrorMessage('Only PDF files are allowed.');
//     } else if (selectedFiles.length > 5) {
//       setErrorMessage('You can only upload up to 5 PDF files.');
//     } else {
//       setFiles(filesArray);
//       setErrorMessage('');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (errorMessage || files.length !== 5) return; // Prevent form submission if there's an error or the file count is not 5

//     setLoading(true);

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('type', type);

//     files.forEach((file, index) => {
//       formData.append(`files`, file); // Append files with the same field name 'files'
//     });

//     try {
//       // Send form data to backend to start the task
//       const response = await axios.post("http://localhost:4000/upload/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });
//       console.log(response.data);
      
//       // Send a message to the WebSocket server to start the task
//       if (ws) {
//         ws.send('Start task');
//       }
//     } catch (error) {
//       console.error('Failed to upload or start task:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="  items-center justify-center bg-gray-100 bg-gradient-to-br from-blue-800 bg-gra to-red-400 " >
     
//     <div className='pt-5 mb-5 pb-3 content-center mx-10'>
//     </div>
   
   
   
   
//     <div className="grid grid-cols-2 gap-0">
   
   
   
   
//     <div className=" bg-white p-4 rounded-lg shadow-lg max-w-lg mx-1 m-0 justify-self-end grid-cols-1" style={{ backgroundImage: 'url(file:///D:/Programs/React_Collage_Project/question_paper_moderation_vite/question_paper_moderation/src/Images/robophoto.jpg)' }}>


//     <div className="bg-orange-400 py-4 rounded-xl">
//       <h1 className="text-center text-xl font-semibold ">Information</h1>
//     </div>
    
//     {/* Content for the second card */}
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>1. Here You Have Upload 5 pdf     </h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>2. Give Input Name</h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>3. select type Question Papers</h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>4. select 5 Question Papers</h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>5. Submit</h1>

//   </div>


  
//   <div className="bg-white p-4 rounded-lg shadow-lg max-w-xl mx-1 m-0 justify-self-start grid-cols-1">
//     <div className="bg-orange-400 py-4 rounded-xl">
//       <h1 className="text-center text-xl font-semibold">Upload PDFs</h1>
//     </div>
//     {redirectToAccuracy && <Navigate to="/accuracy" />}
//     <form onSubmit={handleSubmit} className="space-y-6 min-h-80 mt-4">
//       <div>
//         <label htmlFor="name" className="block text-xl font-semibold text-gray-700">Name:</label>
//         <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-md py-2 px-3" />
//       </div>
//       <div>
//         <label htmlFor="type" className="block text-xl font-semibold text-gray-700">Type:</label>
//         <select id="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full border rounded-md py-2 px-3">
//           <option className='text-md font-semibold text-gray-700' value="">Select Type</option>
//           <option value="Math">Math</option>
//           <option value="Marathi">Marathi</option>
//           <option value="English">English</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="files" className="block text-xl font-semibold text-gray-700" >PDF Upload (Max 5):</label>
//         <input type="file" id="files" onChange={handleFileChange} multiple accept="application/pdf" className="w-full border rounded-md py-2 px-3" />
//         {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       </div>
//       <button type="submit" disabled={loading || errorMessage || files.length !== 5} className={`w-full py-2 px-4 rounded-md focus:outline-none text-xl font-semibold ${loading || errorMessage || files.length !== 5 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>Submit</button>
//     </form>
//   </div>








  





// </div>

//     </div>
//   );
// };

// export default Form;


////////////////////////////////////////////////////////////////////// loading function
// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import { Navigate } from "react-router-dom";

// const Form = () => {
//   const [name, setName] = useState('');
//   const [type, setType] = useState('');
//   const [files, setFiles] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [redirectToAccuracy, setRedirectToAccuracy] = useState(false);
//   const [ws, setWs] = useState(null);

//   useEffect(() => {
//     // Establish WebSocket connection when component mounts
//     const socket = new WebSocket('ws://localhost:8080');

//     socket.onopen = () => {
//       console.log('WebSocket connected');
//       setWs(socket);
//     };

//     socket.onmessage = (event) => {
//       console.log('Received message from WebSocket:', event.data);
//       if (event.data === 'Processing complete') {
//         setRedirectToAccuracy(true);
//         setLoading(false); // Turn off loading indicator when processing is complete
//       }
//     };

//     socket.onclose = () => {
//       console.log('WebSocket closed');
//     };

//     return () => {
//       // Close WebSocket connection when component unmounts
//       if (ws) {
//         ws.close();
//       }
//     };
//   }, []); // Run only once when component mounts

//   const handleFileChange = (e) => {
//     const selectedFiles = e.target.files;
//     const filesArray = Array.from(selectedFiles).slice(0, 5); // Limit to 5 files

//     // Check if all selected files are of PDF type
//     const isValidFiles = Array.from(selectedFiles).every(file => file.type === 'application/pdf');

//     if (!isValidFiles) {
//       setErrorMessage('Only PDF files are allowed.');
//     } else if (selectedFiles.length > 5) {
//       setErrorMessage('You can only upload up to 5 PDF files.');
//     } else {
//       setFiles(filesArray);
//       setErrorMessage('');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (errorMessage || files.length !== 5 || loading) return; // Prevent form submission if there's an error, file count is not 5, or loading is true

//     setLoading(true); // Turn on loading indicator

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('type', type);

//     files.forEach((file, index) => {
//       formData.append(`files`, file); // Append files with the same field name 'files'
//     });

//     try {
//       // Send form data to backend to start the task
//       const response = await axios.post("http://localhost:4000/upload/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });
//       console.log(response.data);
      
//       // Send a message to the WebSocket server to start the task
//       if (ws) {
//         ws.send('Start task');
//       }
//     } catch (error) {
//       console.error('Failed to upload or start task:', error);
//       setLoading(false); // Turn off loading indicator on error
//     }
//   };

//   return (
//     <div className="  items-center justify-center bg-gray-100 bg-gradient-to-br from-blue-800 bg-gra to-red-400 " >
     
//     <div className='pt-5 mb-5 pb-3 content-center mx-10'>
//     </div>
   
   
   
   
//     <div className="grid grid-cols-2 gap-0">
   
   
   
   
//     <div className=" bg-white p-4 rounded-lg shadow-lg max-w-lg mx-1 m-0 justify-self-end grid-cols-1" style={{ backgroundImage: 'url(file:///D:/Programs/React_Collage_Project/question_paper_moderation_vite/question_paper_moderation/src/Images/robophoto.jpg)' }}>


//     <div className="bg-orange-400 py-4 rounded-xl">
//       <h1 className="text-center text-xl font-semibold ">Information</h1>
//     </div>
    
//     {/* Content for the second card */}
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>1. Here You Have Upload 5 pdf     </h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>2. Give Input Name</h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>3. select type Question Papers</h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>4. select 5 Question Papers</h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>5. Submit</h1>

//   </div>


  
//   <div className="bg-white p-4 rounded-lg shadow-lg max-w-xl mx-1 m-0 justify-self-start grid-cols-1">
//     <div className="bg-orange-400 py-4 rounded-xl">
//       <h1 className="text-center text-xl font-semibold">Upload PDFs</h1>
//     </div>
//     {redirectToAccuracy && <Navigate to="/accuracy" />}
//     <form onSubmit={handleSubmit} className="space-y-6 min-h-80 mt-4">
//       <div>
//         <label htmlFor="name" className="block text-xl font-semibold text-gray-700">Name:</label>
//         <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-md py-2 px-3" disabled={loading} />
//       </div>
//       <div>
//         <label htmlFor="type" className="block text-xl font-semibold text-gray-700">Type:</label>
//         <select id="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full border rounded-md py-2 px-3" disabled={loading}>
//           <option className='text-md font-semibold text-gray-700' value="">Select Type</option>
//           <option value="Math">Math</option>
//           <option value="Marathi">Marathi</option>
//           <option value="English">English</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="files" className="block text-xl font-semibold text-gray-700" >PDF Upload (Max 5):</label>
//         <input type="file" id="files" onChange={handleFileChange} multiple accept="application/pdf" className="w-full border rounded-md py-2 px-3" disabled={loading} />
//         {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       </div>
//       <button type="submit" disabled={loading || errorMessage || files.length !== 5} className={`w-full py-2 px-4 rounded-md focus:outline-none text-xl font-semibold ${loading || errorMessage || files.length !== 5 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>Submit</button>
//     </form>
//     {loading && <div className="absolute inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//       <span className="text-white">Loading...</span>
//     </div>}
//   </div>
// </div>
// </div>

//   );
// };

// export default Form;




//having alert nessage
///20-Apr-2024
// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import robophoto from '../Images/robophoto.jpg';

// const Form = () => {
//   const [name, setName] = useState('');
//   const [type, setType] = useState('');
//   const [files, setFiles] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [ws, setWs] = useState(null);
  

//   useEffect(() => {
//     const socket = new WebSocket('ws://localhost:8080');

//     socket.onopen = () => {
//       console.log('WebSocket connected');
//       setWs(socket);
//     };

//     socket.onmessage = (event) => {
//       console.log('Received message from WebSocket:', event.data);
//       if (event.data === 'Processing complete') {
//         setLoading(false);
//         // showAlert('Execution Completed. You can check in Accuracy tab.');
//       }
//     };

//     socket.onclose = () => {
//       console.log('WebSocket closed');
//     };

//     return () => {
//       if (ws) {
//         ws.close();
//       }
//     };
//   }, []);

//   const handleFileChange = (e) => {
//     const selectedFiles = e.target.files;
//     const filesArray = Array.from(selectedFiles).slice(0, 5); // Limit to 5 files

//     const isValidFiles = Array.from(selectedFiles).every(file => file.type === 'application/pdf');

//     if (!isValidFiles) {
//       setErrorMessage('Only PDF files are allowed.');
//     } else if (selectedFiles.length > 5) {
//       setErrorMessage('You can only upload up to 5 PDF files.');
//     } else {
//       setFiles(filesArray);
//       setErrorMessage('');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (errorMessage || files.length !== 5 || loading) return;

//     setLoading(true);

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('type', type);

//     files.forEach((file, index) => {
//       formData.append(`files`, file);
//     });

//     try {
//       const response = await axios.post("http://localhost:4000/upload/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });
//       console.log(response.data);
      
//       if (ws) {
//         ws.send('Start task');
//       }
//     } catch (error) {
//       console.error('Failed to upload or start task:', error);
//       setLoading(false);
//     }
//   };

//   const showAlert = (message) => {
//     window.alert(message);
//     setTimeout(() => {
//       // Close the alert after 5 seconds
//       window.close();
//     }, 1000);
//   };

//   return (
//     <div className="  items-center justify-center bg-gray-100 bg-gradient-to-br from-blue-800 bg-gra to-red-400 " >
     
//     <div className='pt-5 mb-5 pb-3 content-center mx-10'>
      
//     </div>
   
   
   
   
//     <div className="grid grid-cols-2 gap-0">
   
   
   
   

// <div className="bg-white p-4  rounded-lg shadow-lg  w-3xl  mx-1  ml-40 grid-cols-1 relative" >{/*style={{ backgroundImage: `url(${robophoto})`, backgroundSize: '300px',backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}*/ }
//   <div className="bg-orange-400 py-4 px-1 rounded-xl">
//     <h1 className="text-center text-xl font-semibold">Collection of PDFs</h1>
//     <div>
//       <img className=" size-80  w-96" src={robophoto} alt="Robot" />
//     </div>
//     <h1 className="text-center text-xl font-semibold">Upload 5 PDFs</h1>

//   </div>
//   {/* Your other content goes here */}
//      {/* <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>1. Here You Have Upload 5 pdf</h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>2. Upload file only pdf type</h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>3. Give Input Name</h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>4. select type Question Papers</h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>5. select 5 Question Papers</h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>6. Submit</h1> */}
// </div>

// {/* Content for the second card */}
 

  
//   <div className="bg-white p-4 rounded-lg shadow-lg  mx-1 mr-36 grid-cols-1">
//     <div className="bg-orange-400 py-4 rounded-xl">
//       <h1 className="text-center text-xl font-semibold">Upload PDFs</h1>
//     </div>
//     <form onSubmit={handleSubmit} className="space-y-6 min-h-80 mt-4">
//       <div>
//         <label htmlFor="name" className="block text-xl font-semibold text-gray-700">Name:</label>
//         <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-md py-2 px-3" disabled={loading} />
//       </div>
//       {/* <div>
//         <label htmlFor="type" className="block text-xl font-semibold text-gray-700">Type:</label>
//         <select id="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full border rounded-md py-2 px-3" disabled={loading}>
//           <option className='text-md font-semibold text-gray-700' value="">Select Type</option>
//           <option value="Math">Math</option>
//           <option value="Marathi">Marathi</option>
//           <option value="English">English</option>
//         </select>
//       </div> */}
//       <div>
//         <label htmlFor="files" className="block text-xl font-semibold text-gray-700" >PDF Upload (Max 5):</label>
//         <input type="file" id="files" onChange={handleFileChange} multiple accept="application/pdf" className="w-full border rounded-md py-2 px-3" disabled={loading} />
//         {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       </div>
//       <button type="submit" disabled={loading || errorMessage || files.length !== 5} className={`w-full py-2 px-4 rounded-md focus:outline-none text-xl font-semibold ${loading || errorMessage || files.length !== 5 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>Submit</button>
//     </form>
//     {loading && <div className="absolute inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//       {/* <span className=" text-center text-3xl text-orange-400 "><h1>Loading...</h1> </span> */}
//       <div className="flex justify-center items-center h-screen">
//   <div className="border-4 border-black border-opacity-10 rounded-full w-12 h-12 animate-spin transition-colors duration-1000" style={{ borderColor: 'transparent transparent black black' }}></div>
// </div>



//     </div>}
//   </div>
// </div>
// </div>

//   );
// };

// export default Form;



// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import robophoto from '../Images/robophoto.jpg';
// // import Popup from './popup';

// const Form = () => {
//   const [name, setName] = useState('');
//   const [type, setType] = useState('');
//   const [files, setFiles] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [ws, setWs] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

  

//   useEffect(() => {
//     const socket = new WebSocket('ws://localhost:8080');

//     socket.onopen = () => {
//       console.log('WebSocket connected');
//       setWs(socket);
//     };

//     socket.onmessage = (event) => {
//       console.log('Received message from WebSocket:', event.data);
//       if (event.data === 'Processing complete') {
//         setLoading(false); // Stop loading when processing is complete
//         setShowPopup(true);
//       }
//     };

//     socket.onclose = () => {
//       console.log('WebSocket closed');
//     };

//     return () => {
//       if (ws) {
//         ws.close();
//       }
//     };
//   }, []);

//   const handleFileChange = (e) => {
//     const selectedFiles = e.target.files;
//     const filesArray = Array.from(selectedFiles).slice(0, 5); // Limit to 5 files

//     const isValidFiles = Array.from(selectedFiles).every(file => file.type === 'application/pdf');

//     if (!isValidFiles) {
//       setErrorMessage('Only PDF files are allowed.');
//     } else if (selectedFiles.length > 5) {
//       setErrorMessage('You can only upload up to 5 PDF files.');
//     } else {
//       setFiles(filesArray);
//       setErrorMessage('');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (errorMessage || files.length !== 5 || loading) return;

//     setLoading(true);

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('type', type);

//     files.forEach((file, index) => {
//       formData.append(`files`, file);
//     });

//     try {
//       const response = await axios.post("http://localhost:4000/upload/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });
//       console.log(response.data);
      
//       if (ws) {
//         ws.send('Start task');
//       }
//     } catch (error) {
//       console.error('Failed to upload or start task:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="  items-center justify-center bg-gray-100 bg-gradient-to-br from-blue-800 bg-gra to-red-400 " >
     
//     <div className='pt-5 mb-5 pb-3 content-center mx-10'>
      
//     </div>
   
   
   
//     {showPopup && <Popup />}
//     <div className={`grid grid-cols-2 gap-0 ${loading ? 'blur' : ''}`}>
   
   
   
   

// <div className={`bg-white p-4  rounded-lg shadow-lg  w-3xl  mx-1  ml-40 grid-cols-1 relative `} >{/*style={{ backgroundImage: `url(${robophoto})`, backgroundSize: '300px',backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}*/ }
//   <div className="bg-orange-400 py-4 px-1 rounded-xl">
//     <h1 className="text-center text-xl font-semibold">Collection of PDFs</h1>
//     <div>
//       <img className=" size-80  w-96" src={robophoto} alt="Robot" />
//     </div>
//     <h1 className="text-center text-xl font-semibold">Upload 5 PDFs</h1>

//   </div>
//   {/* Your other content goes here */}
//      {/* <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>1. Here You Have Upload 5 pdf</h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>2. Upload file only pdf type</h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>3. Give Input Name</h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>4. select type Question Papers</h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>5. select 5 Question Papers</h1>
//     <h1 className=' align-middle font-semiblod text-justify text-lg mt-4 px-9'>6. Submit</h1> */}
// </div>

// {/* Content for the second card */}
 

  
//   <div className="bg-white p-4 rounded-lg shadow-lg  mx-1 mr-36 grid-cols-1">
//     <div className="bg-orange-400 py-4 rounded-xl">
//       <h1 className="text-center text-xl font-semibold">Upload PDFs</h1>
//     </div>
//     <form onSubmit={handleSubmit} className="space-y-6 min-h-80 mt-4">
//       <div>
//         <label htmlFor="name" className="block text-xl font-semibold text-gray-700">Name:</label>
//         <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-md py-2 px-3" disabled={loading} />
//       </div>
//       <div>
//         <label htmlFor="type" className="block text-xl font-semibold text-gray-700">Type:</label>
//         <select id="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full border rounded-md py-2 px-3" disabled={loading}>
//           <option className='text-md font-semibold text-gray-700' value="">Select Type</option>
//           <option value="Math">Math</option>
//           <option value="Marathi">Marathi</option>
//           <option value="English">English</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="files" className="block text-xl font-semibold text-gray-700" >PDF Upload (Max 5):</label>
//         <input type="file" id="files" onChange={handleFileChange} multiple accept="application/pdf" className="w-full border rounded-md py-2 px-3" disabled={loading} />
//         {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       </div>
//       <button type="submit" disabled={loading || errorMessage || files.length !== 5} className={`w-full py-2 px-4 rounded-md focus:outline-none text-xl font-semibold ${loading || errorMessage || files.length !== 5 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>Submit</button>
//     </form>
//     {loading && <div className="absolute inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//       {/* <span className=" text-center text-3xl text-orange-400 "><h1>Loading...</h1> </span> */}
//       <div className="flex justify-center items-center h-screen">
//         <div className="border-4 border-black border-opacity-10 rounded-full w-12 h-12 animate-spin transition-colors duration-1000" style={{ borderColor: 'transparent transparent black black' }}></div>
//       </div>
//     </div>}
//   </div>
// </div>
// </div>

//   );
// };

// export default Form;











import React, { useState, useEffect } from 'react';
import axios from "axios";
import robophoto from '../Images/robophoto.jpg';

const Form = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [files, setFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');

    socket.onopen = () => {
      console.log('WebSocket connected');
      setWs(socket);
    };

    socket.onmessage = (event) => {
      console.log('Received message from WebSocket:', event.data);
      if (event.data === 'Processing complete') {
        setLoading(false);
      }
    };

    socket.onclose = () => {
      console.log('WebSocket closed');
    };

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const filesArray = Array.from(selectedFiles).slice(0, 5); // Limit to 5 files

    const isValidFiles = Array.from(selectedFiles).every(file => file.type === 'application/pdf');

    if (!isValidFiles) {
      setErrorMessage('Only PDF files are allowed.');
    } else if (selectedFiles.length < 2 || selectedFiles.length > 5) {
      setErrorMessage('Please select between 2 to 5 PDF files.');
    } else {
      setFiles(filesArray);
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errorMessage || loading) return;

    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('type', type);

    files.forEach((file, index) => {
      formData.append(`files`, file);
    });

    try {
      const response = await axios.post("http://localhost:4000/upload/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      console.log(response.data);
      
      if (ws) {
        ws.send('Start task');
      }
    } catch (error) {
      console.error('Failed to upload or start task:', error);
      setLoading(false);
    }
  };

  return (
    <div className="  items-center justify-center bg-gray-100 bg-gradient-to-br from-blue-800 bg-gra to-red-400 " >
      <div className='pt-5 mb-5 pb-3 content-center mx-10'></div>
      <div className="grid grid-cols-2 gap-0">
        <div className="bg-white p-4  rounded-lg shadow-lg  w-3xl  mx-1  ml-40 grid-cols-1 relative">
          <div className="bg-orange-400 py-4 px-1 rounded-xl">
            <h1 className="text-center text-xl font-semibold">Collection of PDFs</h1>
            <div>
              <img className=" size-80  w-96" src={robophoto} alt="Robot" />
            </div>
            <h1 className="text-center text-xl font-semibold">Upload 5 PDFs</h1>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg  mx-1 mr-36 grid-cols-1">
          <div className="bg-orange-400 py-4 rounded-xl">
            <h1 className="text-center text-xl font-semibold">Upload PDFs</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 min-h-80 mt-4">
            <div>
              <label htmlFor="name" className="block text-xl font-semibold text-gray-700">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-md py-2 px-3" disabled={loading} />
            </div>
            <div>
              <label htmlFor="files" className="block text-xl font-semibold text-gray-700" >PDF Upload (2 to 5):</label>
              <input type="file" id="files" onChange={handleFileChange} multiple accept="application/pdf" className="w-full border rounded-md py-2 px-3" disabled={loading} />
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </div>
            <button type="submit" disabled={loading || errorMessage || files.length < 2 || files.length > 5} className={`w-full py-2 px-4 rounded-md focus:outline-none text-xl font-semibold ${loading || errorMessage || files.length < 2 || files.length > 5 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>Submit</button>
          </form>
          {loading && <div className="absolute inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="flex justify-center items-center h-screen">
              <div className="border-4 border-black border-opacity-10 rounded-full w-12 h-12 animate-spin transition-colors duration-1000" style={{ borderColor: 'transparent transparent black black' }}></div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Form;

