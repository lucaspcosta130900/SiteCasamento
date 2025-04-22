import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase';

// Função para fazer upload de uma imagem
export const uploadImage = async (file, path) => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Erro ao fazer upload da imagem:', error);
    throw error;
  }
};

// Função para obter a URL de download de uma imagem
export const getImageUrl = async (path) => {
  try {
    const storageRef = ref(storage, path);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error('Erro ao obter URL da imagem:', error);
    throw error;
  }
};