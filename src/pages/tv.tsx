import React, { useState } from 'react';
import FileUploadForm from '../components/FileUploadForm';
//import MyComponent from '../components/UploadPage';
import UploadPage from '../components/UploadPage';
import Char from '../components/Char';
import Tv from '../components/Tv';

const HomePage: React.FC = () => {
  const [jsonData, setJsonData] = useState<any | null>(null); // Adjust the type according to your JSON structure

  const handleFileUpload = (data: any) => {
    setJsonData(data);
  };

  return (
    <div>
      {!jsonData ? <FileUploadForm onFileUpload={handleFileUpload} /> : <Tv data={jsonData} />}
    </div>
  );
};

export default HomePage;
