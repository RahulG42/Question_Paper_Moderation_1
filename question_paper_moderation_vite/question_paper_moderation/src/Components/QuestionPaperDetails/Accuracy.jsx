// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
// import { Bar } from 'react-chartjs-2';

// import { Chart } from 'chart.js'; // Import Chart.js library

// // Import the required scale(s) from Chart.js
// import { CategoryScale, LinearScale, Title, Legend, Tooltip, BarController, BarElement } from 'chart.js';

// // Register the required scale(s) in Chart.js
// Chart.register(CategoryScale, LinearScale, Title, Legend, Tooltip, BarController, BarElement);

// const Accuracy = ({ similarityScores }) => {
//   // Data for the chart
//   const chartData = {
//     labels: accuracyData.map((_, index) => index + 1),
//     datasets: [
//       {
//         label: 'Accuracy',
//         data: similarityScores,
//         backgroundColor: 'rgba(75, 192, 192, 0.4)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return <Bar data={chartData} />;
// };

// export default Accuracy;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Bar } from 'react-chartjs-2';
// import { Chart } from 'chart.js/auto';
// import robophoto from '../Images/robophoto.jpg';


// import { CategoryScale, LinearScale, Title, Legend, Tooltip, BarController, BarElement } from 'chart.js';
// Chart.register(CategoryScale, LinearScale, Title, Legend, Tooltip, BarController, BarElement);

// const Accuracy = () => {
//   const [similarityScores, setSimilarityScores] = useState([]);
//   const [fetchDataTrigger, setFetchDataTrigger] = useState(false);

//   useEffect(() => {
//     const fetchSimilarityScores = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/similarity/similarity_scores');
//         const convertedScores = response.data.map(score => score * 10);
//         setSimilarityScores(convertedScores);
//       } catch (error) {
//         console.error('Error fetching similarity scores:', error);
//       }
//     };

//     if (fetchDataTrigger) {
//       fetchSimilarityScores();
//       setFetchDataTrigger(false); // Reset the trigger
//     }
//   }, [fetchDataTrigger]); // Trigger effect whenever fetchDataTrigger changes

//   useEffect(() => {
//     // When the component mounts, fetch data immediately
//     setFetchDataTrigger(true);
//   }, []); // Empty dependency array ensures this effect runs only once when the component mounts

//   const chartData = {
//     labels: Array.from({ length: 10 }, (_, index) => index + 1),
//     datasets: [
//       {
//         label: 'Similarity Scores',
//         data: similarityScores,
//         backgroundColor: 'rgba(75, 192, 192, 04)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 2,
//         hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)'
//       },
//     ],
//   };
//   const chartOptions = {
//     scales: {
//       y: {
//         min: 0,
//         max: 10,
//       },
//     },
//   };

//   return (
//     // < className="flex justify-center items-center h-96 mt-12">
      




//       <div className=" mt-4 grid grid-cols-2 gap-0">
   
 
   
   
  
// <div className="bg-white p-4  rounded-lg shadow-lg max-w-xl  mx-1 m-0 justify-self grid-cols-1 relative" >{/*style={{ backgroundImage: `url(${robophoto})`, backgroundSize: '300px',backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}*/ }
 
// <div className=' flex item-center h-fit  'style={{ height: '100%' }}>
//    <Bar className=" hover:cursor-pointer "data={chartData} options={chartOptions} />
//       <style>
//         {
//         `
        
//           canvas { 
//             box-sizing: border-box;
//             display: block;
//             height: 100%;
//             width: 100%; 
//             margin:5px;
//             background-color: #ffffff;
            
            
//           }
//         `}
//       </style>
//    </div>
// </div>



 
//  <div className="bg-white p-4 rounded-lg shadow-lg max-w-xl mx-1 m-0 justify-self-start grid-cols-1">
//    <div className="bg-orange-400 py-4 rounded-xl">
//      <h1 className="text-center text-xl font-semibold">Upload PDFs</h1>
//      <div className="bg-orange-400 py-4 px-1 rounded-xl">
//    <h1 className="text-center text-xl font-semibold">Collection of PDFs</h1>
//    <div>
//      <img className=" size-80" src={robophoto} alt="Robot" />
//    </div>
//    <h1 className="text-center text-xl font-semibold">Upload 5 PDFs</h1>

//  </div>
//    </div>
   
  
//  </div>
// </div>
    

  

//   );
// };

// export default Accuracy;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { CategoryScale, LinearScale, Title, Legend, Tooltip, BarController, BarElement } from 'chart.js';
import robophoto from '../Images/robophoto.jpg';
import DisplayInfo from './DisplayIngo';

Chart.register(CategoryScale, LinearScale, Title, Legend, Tooltip, BarController, BarElement);

const Accuracy = () => {
  const [similarityScores, setSimilarityScores] = useState([]);
  const [pdfList, setPDFList] = useState([]);
  const [selectedBarInfo, setSelectedBarInfo] = useState(null);
  const [fetchDataTrigger, setFetchDataTrigger] = useState(false);


  

  useEffect(() => {
    const fetchPDFList = async () => {
      try {
        const response = await axios.get('http://localhost:4000/pdfs');
        setPDFList(response.data.pdfFiles);
        console.log(response.data.pdfFiles);
      } catch (error) {
        console.error('Error fetching PDF list:', error);
      }
    };


    const fetchSimilarityScores = async () => {
      try {
        const response = await axios.get('http://localhost:4000/similarity/similarity_scores');
        const convertedScores = response.data.map(score => (score * 10).toFixed(3));
        setSimilarityScores(convertedScores);
      } catch (error) {
        console.error('Error fetching similarity scores:', error);
      }
    };

    if (fetchDataTrigger) {
      fetchSimilarityScores();
      fetchPDFList();
      setFetchDataTrigger(false); // Reset the trigger
    }
  }, [fetchDataTrigger]);

  useEffect(() => {
    // When the component mounts, fetch data immediately
    setFetchDataTrigger(true);
  }, []);

  const handleBarClick = (event, elements) => {
    if (elements.length > 0) {
      const clickedIndex = elements[0].index;
      const clickedScore = similarityScores[clickedIndex];
      const clickedPDFName = pdfList[clickedIndex];
      setSelectedBarInfo({
        name:  clickedIndex + 1,
        similarity_score: clickedScore,
        pdf_name: clickedPDFName,
        // Add other relevant information here
      });
    }
  };

  const chartData = {
    labels: Array.from({ length: 10 }, (_, index) => index + 1),
    datasets: [
      {
        label: 'Similarity Scores',
        data: similarityScores,
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',pdfList,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      afterDraw: function(chart, easing) {
        // Code for drawing arrows...
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const labelIndex = context.dataIndex;
          const pdfName = pdfList[labelIndex];
          const score = context.parsed.y;
          return [`Score: ${score}`, `PDF: ${pdfName}`];
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Number of pdf',
        },
        ticks: {
          beginAtZero: true,
          font: {
            size: 14,
          },
          mirror: true, // Display ticks on the opposite side
        },
        grid: {
          display: true,
          drawBorder: true,
          drawOnChartArea: false, // Ensure the grid is drawn only outside the chart area
          drawTicks: true,
          tickLength: 10, // Length of the ticks
        },
        reverse: false, // Display the axis in reverse order
        position: 'bottom', // Position the axis at the bottom of the chart
       
      },
      y: {
        title: {
          display: true,
          text: 'Similarity_Score',
        },
      
        
        reverse: false, // Display the axis in reverse order
        position: 'left', // Position the axis on the left side of the chart
        
      },
      
    },
    height: 400,
  
    onClick: handleBarClick,
  };
  
  return (
    <div>
      <div className="bg-orange-400   mx-4 p-2 mt-4 ml-5 rounded-xl shadow-lg max-w-full">
      <div className=" content-between text-center font-bold text-2xl bg-white   justify-self grid-cols-1 relative">
        <h1>Similarity of Question Papers </h1>
      </div>
      </div>
    <div className=" mx-4 mt-2  h-96 grid grid-cols-2 gap-0  shadow-xl">
      
      <div className="bg-white p-4 rounded-lg  max-w-xl mx-1 m-0 justify-self grid-cols-1 relative ">
      <div className='bg-orange-400 py-1 px-1 my-2 rounded-xl shadow-xl shadow-slate-300 drop-shadow-sm  '><h1 className="text-center mx-2  bg-white text-2xl font-semibold"> Graph</h1></div>

      <div className="bg-orange-400 my-2 px-1  rounded-xl shadow-xl  shadow-slate-300 drop-shadow-xl">
        <div className="flex item-center h-fit ">
          <Bar className="hover:cursor-pointer"data={chartData} options={chartOptions} />
          <style>
            {`
              canvas { 
                box-sizing: border-box;
                display: block;
                height: 400;
                width: 100%; 
                margin: 5px;
                padding:px;
                background-color: #ffffff;
                

              }
            `}
          </style>
        </div>
        </div>
      <div className='bg-orange-400 py-1 px-1 my-2 rounded-xl shadow-xl shadow-slate-300 drop-shadow-sm  '>
        <h1 className="text-left mx-2 px-1  bg-white text-md "> X-Axis :- similarity score generated by comaprision of two PDFs</h1>
        <h1 className="text-left mx-2 px-1  bg-white text-md "> Y-Axis :- Range of similarity_score 1 to 10  </h1>
        
      </div>

      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg max-w-xl mx-1 m-0 justify-self-center h-full w-full grid-cols-1">
        {selectedBarInfo ? (
          <div>
            
          <div className='bg-orange-400 my-2 py-1 px-1 rounded-xl shadow-xl shadow-slate-300 drop-shadow-sm  '>
            <h1 className="text-center mx-2  bg-white text-2xl font-semibold"> Details</h1>
          </div>
          <div className='bg-orange-400 my-2 py-1 px-1 rounded-xl shadow-xl shadow-slate-300 drop-shadow-sm  '>
            
            <table className='mx-2' style={{ tableLayout: 'fixed', width: '97%' }}>
              <tbody>
              <tr className='mt-3 bg-white '>
                <td className='font-semibold px-1' style={{width:'20%'}}>Names of PDFs:- </td>
                <td className='text-violet-800 font-semibold' style={{width:'60%', wordWrap: 'break-word' }}> {selectedBarInfo.pdf_name}</td>
              </tr>
              <tr className='mt-3 bg-white '>
                <td className='font-semibold px-1' style={{width:'20%'}}>Scores of PDFs:- </td>
                <td className='font-semibold text-blue-500 block'style={{width:'60%', wordWrap: 'break-word' }}> {selectedBarInfo.similarity_score}</td>
              </tr>


              <tr className='mt-10 bg-white '>
              <td className='font-semibold  px-1' style={{width:'20%'}}>Status of PDFs:- </td>

              <td style={{ width: '50%', wordWrap: 'break-word' }}>
                {selectedBarInfo.similarity_score < 2 || selectedBarInfo.similarity_score > 7 ? (
                  <span className='text-red-700 font-semibold' >Rejected</span>
                ) : selectedBarInfo.similarity_score >= 2 && selectedBarInfo.similarity_score <= 7 ? (
                  <span className='text-green-800 font-semibold' >Pass</span>
                ) : null}
            </td>
              </tr>
              
              
              <tr className=' bg-white  '>
                <td className='font-semibold  px-1' style={{width:'20%'}}> About :-</td>
                <td style={{ width: '50%', wordWrap: 'break-word' }}>
                  {selectedBarInfo.similarity_score < 2 || selectedBarInfo.similarity_score > 7 ? (
                    <span className='text-red-500 font-semibold' >Get Rejected because having most of similar Questions and can't display name</span>
                  ) : selectedBarInfo.similarity_score >= 2 && selectedBarInfo.similarity_score <= 7 ? (
                    <span className='text-green-400 font-semibold' >Get Passed because most of question from both pdf not similar. </span>
                  ) : null}
                </td>
              </tr>


              <tr className=' bg-white '>
                <td className='font-semibold  px-1' style={{width:'20%'}}> </td>
                <td style={{ width: '50%', wordWrap: 'break-word' }}>
                  {selectedBarInfo.similarity_score < 2 || selectedBarInfo.similarity_score > 7 ? (
                    <span className='text-red-500 font-semibold' >Also not generated any pdf , So can't find any pdf in download tab</span>
                  ) : selectedBarInfo.similarity_score >= 2 && selectedBarInfo.similarity_score <= 7 ? (
                    <span className='text-green-400  font-semibold' >And we generated a new question paper taking unique questions you can find it in download tab. </span>
                  ) : null}
                </td>
              </tr>


              </tbody>
            </table>
            </div>
          </div>
        ) :similarityScores.length > 0 ? (
          <div >
              <div className='bg-orange-400 my-2  py-1 px-1 rounded-xl shadow-xl shadow-slate-300 drop-shadow-sm  '><h1 className="text-center mx-2  bg-white text-2xl font-semibold"> Details</h1></div>
              <div className='bg-orange-400 my-2  py-1 px-1 rounded-xl shadow-xl shadow-slate-300 drop-shadow-sm  '>
            <table className='mx-2' style={{ tableLayout: 'fixed', width: '97%' }}>
              <tbody>
              <tr className='mt-3 bg-white'>
                <td className='font-semibold px-1 ' style={{width:'20%'}}>Names of PDFs:- </td>
                <td className='text-violet-800 font-semibold' style={{width:'60%', wordWrap: 'break-word' }}> {pdfList[0]}</td>
              </tr>
              <tr className='mt-3 bg-white'>
                <td className='font-semibold px-1 ' style={{width:'20%'}}>Scores of PDFs:- </td>
                <td className='font-semibold text-blue-500 block' style={{width:'60%', wordWrap: 'break-word' }}> {similarityScores[0]}</td>
              </tr>
              

              <tr className='mt-10 bg-white'>
          <td className='font-semibold bg px-1' style={{ width: '20%' }}>Status of PDFs:- </td>
          <td style={{ width: '50%', wordWrap: 'break-word' }}>
            {similarityScores[0] < 2 || similarityScores[0] > 7 ? (
              <span className='text-red-700 font-bold'>Rejected</span>
            ) : similarityScores[0] >= 2 && similarityScores[0] <= 7 ? (
              <span className='text-green-700 font-semibold'>Pass</span>
            ) : null}
          </td>
        </tr>

        <tr className=' bg-white  '>
                <td className='font-semibold  px-1' style={{width:'20%'}}> About :-</td>
                <td style={{ width: '50%', wordWrap: 'break-word' }}>
                  {similarityScores[0] < 2 || similarityScores[0] > 7 ? (
                    <span className='text-red-500 font-semibold' >Get Rejected because having most of similar Questions and can't display name</span>
                  ) : similarityScores[0] >= 2 && similarityScores[0]<= 7 ? (
                    <span className='text-green-400 font-semibold' >Get Passed because most of question from both pdf not similar. </span>
                  ) : null}
                </td>
              </tr>


              <tr className=' bg-white '>
                <td className='font-semibold  px-1' style={{width:'20%'}}> </td>
                <td style={{ width: '50%', wordWrap: 'break-word' }}>
                  {similarityScores[0] < 2 || similarityScores[0] > 7 ? (
                    <span className='text-red-500 font-semibold' >Also not generated any pdf, So can't find any pdf in download tab</span>
                  ) :similarityScores[0]>= 2 && similarityScores[0] <= 7 ? (
                    <span className='text-green-400  font-semibold' >And we generated a new question paper taking unique questions you can find it in download tab. </span>
                  ) : null}
                </td>
              </tr>
        


              </tbody>
            </table>
            </div>
          </div>
        ) : null}
      </div>
    </div>
    </div>
  );
};

export default Accuracy;
