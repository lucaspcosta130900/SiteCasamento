import React, { useState } from 'react';
import { uploadImage } from '../services/storage';
import '../styles/ImageUpload.css';

function ImageUpload({ onUploadSuccess, folder }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      // Criar um nome único para o arquivo usando timestamp
      const timestamp = new Date().getTime();
      const fileName = `${timestamp}_${file.name}`;
      const filePath = `${folder}/${fileName}`;

      const downloadURL = await uploadImage(file, filePath);
      onUploadSuccess(downloadURL);
    } catch (error) {
      console.error('Erro no upload:', error);
      setError('Erro ao fazer upload da imagem. Tente novamente.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="image-upload-container">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={uploading}
        className="image-upload-input"
      />
      {uploading && <p className="upload-status">Enviando...</p>}
      {error && <p className="upload-error">{error}</p>}
    </div>
  );
}

export default ImageUpload;