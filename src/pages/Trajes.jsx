import React, { useState, useEffect } from 'react';
import '../styles/Pages.css';
import '../styles/Trajes.css';
import { FaTshirt, FaShoePrints, FaClock, FaCamera, FaGlassCheers } from 'react-icons/fa';
import { getImageUrl } from '../services/storage';
import ImageUpload from '../components/ImageUpload';

function Trajes() {
  const [imageUrls, setImageUrls] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const urls = {};
        const imageFiles = [
          { key: 'image5', path: 'trajes/1745271313753_5.png' },
          { key: 'image6', path: 'trajes/1745271327409_6.png' },
          { key: 'image8', path: 'trajes/1745271366870_8.png' },
          { key: 'image9', path: 'trajes/1745271370742_9.png' }
        ];
        
        for (const file of imageFiles) {
          urls[file.key] = await getImageUrl(file.path);
        }
        setImageUrls(urls);
      } catch (error) {
        console.error('Erro ao carregar imagens:', error);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="page-container trajes-page">
      <div className="background-overlay"></div>
      <div className="content trajes-content">
        <h1>Dress-Code</h1>
        
        <div className="trajes-section">
          <div className="trajes-card">
            <h2>Madrinhas</h2>
            <div className="trajes-info">
              <div className="color-palette">
                <div className="color-circle light-olive"></div>
                <div className="color-circle medium-olive"></div>
                <div className="color-circle olive"></div>
                <div className="color-circle dark-olive"></div>
              </div>
              <div className="trajes-images">
                <div className="traje-image-container">
                  <img src={imageUrls.image5 || "/images/5.png"} alt="Madrinhas com vestidos verde oliva" className="traje-image" />
                  {isAdmin && <ImageUpload onUploadSuccess={(url) => setImageUrls(prev => ({ ...prev, image5: url }))} folder="trajes" />}
                </div>
                <div className="traje-image-container">
                  <img src={imageUrls.image6 || "/images/6.png"} alt="Madrinhas com vestidos verde oliva" className="traje-image" />
                  {isAdmin && <ImageUpload onUploadSuccess={(url) => setImageUrls(prev => ({ ...prev, image6: url }))} folder="trajes" />}
                </div>
              </div>
              <p className="traje-nota">
                <FaShoePrints className="icon" /> PRIORIZE UM CALÇADO BEM CONFORTÁVEL, POIS HÁ GRAMA NO LOCAL.
              </p>
            </div>
          </div>
        </div>

        <div className="trajes-section">
          <div className="trajes-card">
            <h2>Padrinhos</h2>
            <div className="trajes-info">
              <div className="color-palette">
                <div className="color-circle light-gray"></div>
                <div className="color-circle medium-gray"></div>
                <div className="color-circle olive"></div>
                <div className="color-circle dark-olive"></div>
              </div>
              <div className="trajes-images">
                <div className="traje-image-container">
                  <img src={imageUrls.image8 || "/images/8.png"} alt="Terno cinza claro" className="traje-image" />
                  {isAdmin && <ImageUpload onUploadSuccess={(url) => setImageUrls(prev => ({ ...prev, image8: url }))} folder="trajes" />}
                </div>
                <div className="traje-image-container">
                  <img src={imageUrls.image9 || "/images/9.png"} alt="Gravata verde oliva" className="traje-image" />
                  {isAdmin && <ImageUpload onUploadSuccess={(url) => setImageUrls(prev => ({ ...prev, image9: url }))} folder="trajes" />}
                </div>
              </div>
              <p className="traje-nota">
                <FaShoePrints className="icon" /> PRIORIZE UM CALÇADO BEM CONFORTÁVEL, POIS HÁ GRAMA NO LOCAL.
              </p>
            </div>
          </div>
        </div>

        <div className="trajes-section">
          <div className="trajes-card">
            <h2>Para o Grande Dia...</h2>
            <div className="trajes-info recomendacoes">
              <div className="recomendacao-item">
                <FaClock className="icon" />
                <p>CHEGAR ATÉ, NO MÁXIMO, 15H30, OU SEJA, 30 MINUTOS ANTES DO INÍCIO DA CERIMÔNIA</p>
              </div>
              <div className="recomendacao-item">
                <FaCamera className="icon" />
                <p>TIRAR MUITAS FOTOS E GRAVAR MUITOS VÍDEOS PARA NOS AJUDAR A ETERNIZAR OS MOMENTOS.</p>
              </div>
              <div className="recomendacao-item">
                <FaGlassCheers className="icon" />
                <p>SE DIVERTIR MUITO!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="trajes-section">
          <div className="trajes-card">
            <h2>Observações</h2>
            <div className="trajes-info">
              <p>
                Lembre-se que as cores e o estilo dos trajes foram escolhidos para complementar a decoração e o tema do casamento. Sua colaboração é fundamental para a harmonia visual deste dia tão especial.
              </p>
              <p>
                As cores acima deverão ser utilizadas somente por padrinhos e madrinhas. Aos demais convidados, sugerimos que escolham uma cor que se encaixe melhor com seu estilo pessoal, mantendo o traje esporte fino.
              </p>
              <p>
                Para qualquer dúvida adicional sobre os trajes, por favor, entre em contato diretamente com os noivos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trajes;