// import React, { useState } from 'react';
// import { Pie } from 'react-chartjs-2';

// const Download = ({ chartName, pdfFile, values }) => {
//   const [chartData, setChartData] = useState({
//     labels: ['Value 1', 'Value 2'],
//     datasets: [
//       {
//         data: [values[0].accuracy, values[1].accuracy],
//         backgroundColor: ['#FF6384', '#36A2EB'],
//       },
//     ],
//   });

//   const downloadPdf = () => {
//     // Function to download PDF file
//     // You can implement this based on your backend logic
//   };

//   return (
//     <div style={{ position: 'relative' }}>
//       <div style={{ position: 'absolute', top: 10, left: 10 }}>{chartName}</div>
//       <div style={{ position: 'absolute', top: 10, right: 10 }}>
//         <Pie data={chartData} />
//       </div>
//       <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
//         <button onClick={downloadPdf}>Download PDF</button>
//       </div>
//     </div>
//   );
// };

// export default Download;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardDownload from './CardDownload'; 

const PDFList = () => {
  const [pdfList, setPDFList] = useState([]);
  const [similarityScores, setSimilarityScores] = useState([]);

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
        const similarityResponse = await axios.get('http://localhost:4000/similarity/similarity_scores');
        // Convert similarity scores to a scale of 1 to 10
        const convertedScores = similarityResponse.data.map(score => score * 10);
        setSimilarityScores(convertedScores);
      } catch (error) {
        console.error('Error fetching similarity scores:', error);
      }
    };

    fetchPDFList();
    fetchSimilarityScores();
  }, []);

  // Define the onDownload function
  const onDownload = () => {
    // Implement the download logic here
    console.log('Downloading PDF...');
  };

  return (
    <div>
      <div className='bg-orange-400 mx-4 py-1 px-1 my-2 rounded-xl shadow-xl shadow-black-300 drop-shadow-sm  '>

      <h1 className='bg-white   text-3xl text-center px-2 mx-2 my-2'>List of PDFs</h1>
      </div>

      <div className='mx-4 my-5 justify-self-center' style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', maxHeight: '470px', overflowY: 'auto' }}>
        {pdfList.map((pdf, index) => (
          <div className='justify-self-center' key={index} style={{ width: '380px' }}> {/* Set a fixed width for each card */}
          <CardDownload pdf={pdf} index={index} similarityScores={similarityScores} onDownload={onDownload} />
        </div>
        ))}
      </div>
    </div>
  );
};  
export default PDFList;
