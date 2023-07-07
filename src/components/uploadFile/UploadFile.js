import React, { useState } from "react";
import AWS from "aws-sdk";

import "./UploadFile.css";

function UploadFile() {
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  async function hanldleFileUploadS3() {
    try {
      const s3 = new AWS.S3({
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_ACCESS_SECRET_KEY,
        region: process.env.REACT_APP_REGION,
      });

      const params = {
        Bucket: process.env.REACT_APP_BUCKET_NAME,
        Key: selectedFile.name,
        Body: selectedFile,
      };
      await s3.upload(params).promise();
      alert("File has been uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file.");
    }
  }

  return (
    <div className="upload-body">
      <h1>Please upload a file</h1>
      <div>
      <input type="file" onChange={handleFileChange} />
      </div>      
      <div className="upload-button_container">
        <button
          className="upload-button"
          onClick={hanldleFileUploadS3}
          disabled={!selectedFile}
        >
          Upload File
        </button>
      </div>
    </div>
  );
}

export default UploadFile;
