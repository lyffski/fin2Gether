import React, { useState } from 'react';
import FileUploadForm from '../components/FileUploadForm';
//import MyComponent from '../components/UploadPage';
import UploadPage from '../components/UploadPage';

const HomePage: React.FC = () => {
  const [jsonData, setJsonData] = useState<any | null>(null); // Adjust the type according to your JSON structure

  const handleFileUpload = (data: any) => {
    setJsonData(data);
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='bg-blue-500 text-white transition duration-300 block w-full text-center p-5 text-xl mb-10'>Fin2Gether - Dashboard</h1>
  <a href="../../bsv" className="hover:bg-blue-500 hover:text-white transition duration-300 block w-full text-center p-5 text-xl py-2">
    BSV - Liste
  </a>
  <a href="../../fiko" className="hover:bg-blue-500 hover:text-white transition duration-300 block w-full text-center p-5 text-xl py-2">
    Fiko - Report
  </a>
  <a href="../../Mitarbeiter" className="hover:bg-blue-500 hover:text-white transition duration-300 block w-full text-center p-5 text-xl py-2">
    Mitarbeiter - Statistik
  </a>
  <a href="../../dekos" className="hover:bg-blue-500 hover:text-white transition duration-300 block w-full text-center p-5 text-xl py-2">
    Dekos Liste
  </a>
  <a href="../../tv" className="hover:bg-blue-500 hover:text-white transition duration-300 block w-full text-center p-5 text-xl py-2">
    Termin Vereinbarung
  </a>
  <a href="../../abgesagteFikos" className="hover:bg-blue-500 hover:text-white transition duration-300 block w-full text-center p-5 text-xl py-2">
    Absage Liste (Fiko)
  </a>
  <a href="../../abgesagteEGs" className="hover:bg-blue-500 hover:text-white transition duration-300 block w-full text-center p-5 text-xl py-2">
    Absage Liste (EG)
  </a>


    <div className='m-10 hover:bg-blue-500 hover:text-white transition duration-300 block w-full text-center p-5 text-xl py-2'>
      {!jsonData ? <FileUploadForm onFileUpload={handleFileUpload} /> : <UploadPage data={jsonData} />}
    </div>
    </div>
  );
};

export default HomePage;
