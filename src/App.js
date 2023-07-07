import React from 'react';

import UploadFile from './components/uploadFile/UploadFile';
import NavBar from './components/navbar/NavBar';

const App = () => {
  return (
    <div>
      <NavBar title="Upload a file to AWS S3 and store the letter count to RDS through Lambda"/>
      <UploadFile />
    </div>
  );
};

export default App;
