import React, { useState } from 'react';
import FileUploadForm from '../components/FileUploadForm';
//import MyComponent from '../components/UploadPage';

//@ts-ignore;
import BSV_Liste from '../components/BSV-Liste';
import AbsagePage from '../components/AbsagePage';

const HomePage: React.FC = () => {
  const [jsonData, setJsonData] = useState<any | null>(null); // Adjust the type according to your JSON structure

  const handleFileUpload = (data: any) => {
    setJsonData(data);
  };

  return (
    <div>
      {!jsonData ? <FileUploadForm onFileUpload={handleFileUpload} /> : <AbsagePage data={jsonData} />}
    </div>
  );
};

export default HomePage;
