// import React, { useState } from 'react';
// import axios from 'axios';
// import pdfimage from '../Images/pdfImage.png';

// const CardDownload = ({ pdf, similarityScores, index }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     // const imagePath = 'images/pdfImage.png';

//     const handleDownloadClick = async () => {
//         if (!pdf) {
//             console.error('PDF filename is undefined');
//             return;
//         }

//         try {
//             const response = await axios.get(`http://localhost:4000/uploads/download-pdf/${pdf}`, {
//                 responseType: 'blob',
//             });

//             const url = window.URL.createObjectURL(new Blob([response.data]));
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', pdf);
//             document.body.appendChild(link);
//             link.click();
//             link.parentNode.removeChild(link);
//             console.log(`Downloading PDF: ${pdf}`);
//         } catch (error) {
//             console.error('Error downloading PDF:', error);
//         }
//     };

//     const similarityScore = similarityScores[index] !== undefined ? similarityScores[index].toFixed(3) : '';

//     const handleSlideClick = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="relative flex flex-wrap ml-8 bg-orange-400 py-4 px-1 rounded-xl mr-20">
//             <div className="border border-gray-300 p-2 rounded-md shadow-md relative" style={{ maxWidth: '250px', height: '230px', backgroundColor: '#fff' }}>
//                 <div className="flex flex-col items-center ">
//                     <h2 className="text font-semibold text-center overflow-hidden px-1 " style={{ maxWidth: '100%', wordWrap: 'break-word' }}>{pdf}</h2>
//                     <span className="text-gray-900 text-center overflow-hidden mt-2" style={{ maxWidth: '100%', wordWrap: 'break-word' }}>Similarity Score: {similarityScore}</span>
//                 </div>
//                 <div className="flex justify-center mt-2">
//                     <img className="size-12" src={pdfimage} alt="Robot" />
//                 </div>
//                 <div className="flex justify-center mt-4">
//                     <button onClick={handleDownloadClick} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 ">
//                         Download PDF
//                     </button>
//                 </div>
                
//                 {/* <button onClick={handleSlideClick} className="absolute bottom-2 right-2 transform translate-y-1/2 bg-blue-500 text-white rounded-md w-8 h-8 flex items-center justify-center">
//                     {isOpen ? (
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                         </svg>
//                     ) : (
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                     )}
//                 </button> */}
//             </div>
//             {/* <div className={`border border-gray-300 p-2 rounded-md shadow-md ${isOpen ? 'w-36' : 'w-0'}`} style={{ height: '230px', backgroundColor: '#fff', overflow: 'hidden', transition: 'width 0.5s ease-out' }}>
//                 <h1>jnefjsnlfnklsm</h1>
//             </div> */}
//         </div>
//     );
    
    
// };

// export default CardDownload;




import React, { useState } from 'react';
import axios from 'axios';
import pdfimage from '../Images/pdfImage.png';

const CardDownload = ({ pdf, similarityScores, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDownloadClick = async () => {
        if (!pdf) {
            console.error('PDF filename is undefined');
            return;
        }

        try {
            const response = await axios.get(`http://localhost:4000/uploads/download-pdf/${pdf}`, {
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', pdf);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            console.log(`Downloading PDF: ${pdf}`);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

    const similarityScore = similarityScores[index] !== undefined ? similarityScores[index].toFixed(3) : '';

    const handleSlideClick = () => {
        setIsOpen(!isOpen);
    };

    if (parseFloat(similarityScore) >= 7) {
        return null; // Do not render the component if similarity score is above 0.7
    }

    return (
        <div className="relative flex flex-wrap ml-8 bg-orange-400 py-4 px-1 rounded-xl mr-20">
            <div className="border border-gray-300 p-2 rounded-md shadow-md relative" style={{ maxWidth: '250px', height: '230px', backgroundColor: '#fff' }}>
                <div className="flex flex-col items-center ">
                    <h2 className="text font-semibold text-center overflow-hidden px-1 " style={{ maxWidth: '100%', wordWrap: 'break-word' }}>{pdf}</h2>
                    <span className="text-gray-900 text-center overflow-hidden mt-2" style={{ maxWidth: '100%', wordWrap: 'break-word' }}>Similarity Score: {similarityScore}</span>
                </div>
                <div className="flex justify-center mt-2">
                    <img className="size-12" src={pdfimage} alt="Robot" />
                </div>
                <div className="flex justify-center mt-4">
                    <button onClick={handleDownloadClick} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 ">
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardDownload;
