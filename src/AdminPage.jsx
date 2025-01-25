import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadImage } from './backend';
import './adminPage.css';

function AdminPage() {
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const handleUpload = () => {
    if (imageFile) {
      uploadImage(imageFile);
      alert('Image uploaded successfully!');
      setImageFile(null);
    } else {
      alert('Please select an image file.');
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Page - Upload Image</h1>
      <div className="upload-section">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
        <button onClick={handleUpload}>Upload Image</button>
      </div>
      <button className="back-button" onClick={() => navigate('/')}>Back to Login</button>
    </div>
  );
}

export default AdminPage;