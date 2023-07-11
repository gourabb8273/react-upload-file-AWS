import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UploadFile from './components/uploadFile/UploadFile';

const App = () => {
  return (
    <UploadFile />
  //   <Router  basename="/upload"> 
  //   <Routes>
  //     <Route path="/" element={<UploadFile />} />
  //     {/* <Route path="/" element={<h3>Welcome to Upload APP</h3>} /> */}
  //   </Routes>
  // </Router>
  );
};

export default App;
