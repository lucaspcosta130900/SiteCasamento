import React from 'react';
import '../styles/Pages.css';
import '../styles/Presentes.css';

function Presentes() {
  const presentes = [
    {
      id: 1,
      nome: '1 ano de academia para os noivos se recuperarem da lua de mel',
      preco: 'R$ 799,90',
      imagem: require('../assets/images/academia-pos-lua-de-mel.jpg')
    },
    {
      id: 2,
      nome: 'Almoço no primeiro mês de casamento',
      preco: 'R$ 299,90',
      imagem: require('../assets/images/almoco-primeiro-mes.jpg')
    },
    {
      id: 3,
      nome: 'Contribuição para a aposentadoria dos noivos',
      preco: 'R$ 199,90',
      imagem: require('../assets/images/aposentadoria-noivos.jpg')
    },
    {
      id: 4,
      nome: 'Café da manhã pós noite de núpcias',
      preco: 'R$ 399,90',
      imagem: require('../assets/images/cafe-hotel.jpg')
    },
    {
      id: 5,
      nome: 'Churras para noivo e padrinhos',
      preco: 'R$ 299,90',
      imagem: require('../assets/images/churras-noivo.jpg')
    },
    {
      id: 6,
      nome: 'Primeiro mês de casamento com comida japonesa',
      preco: 'R$ 399,90',
      imagem: require('../assets/images/comida-japonesa.jpg')
    },
    {
      id: 7,
      nome: 'Cortador de unha para o noivo',
      preco: 'R$ 159,90',
      imagem: require('../assets/images/cortador-unha-noivo.jpg')
    },
    {
      id: 8,
      nome: 'Curso de pizzaiolo do noivo para não precisarmos mais pedir pizza',
      preco: 'R$ 199,90',
      imagem: require('../assets/images/curso-pizzaiolo-noivo.jpg')
    },
    {
      id: 9,
      nome: 'Drinks da lua de mel',
      preco: 'R$ 159,90',
      imagem: require('../assets/images/drinks-lua-de-mel.jpg')
    },
    {
      id: 10,
      nome: 'Ataques ao frigobar do hotel liberados para os noivos',
      preco: 'R$ 129,90',
      imagem: require('../assets/images/frigobar-hotel.jpg')
    },
    {
      id: 11,
      nome: 'Jantar romântico na lua de mel',
      preco: 'R$ 499,90',
      imagem: require('../assets/images/jantar-romantico.jpg')
    },
    {
      id: 12,
      nome: 'Kit utensílios de limpeza para a casa nova',
      preco: 'R$ 199,90',
      imagem: require('../assets/images/kit-limpeza.jpg')
    },
    {
      id: 13,
      nome: 'Kit poker para as noites de jogatina com os amigos',
      preco: 'R$ 399,90',
      imagem: require('../assets/images/maleta-poker.jpg')
    },
    {
      id: 14,
      nome: 'Equipamento de proteção para a noiva sobreviver aos vazamentos de gás do noivo',
      preco: 'R$ 299,90',
      imagem: require('../assets/images/mascara-gas.jpg')
    },
    {
      id: 15,
      nome: 'Massagem de casal para relaxar após o casamento',
      preco: 'R$ 199,90',
      imagem: require('../assets/images/massagem-casal.jpg')
    },
    {
      id: 16,
      nome: 'Garantindo upgrade de quarto com banheira para a noite de núpcias',
      preco: 'R$ 399,90',
      imagem: require('../assets/images/noite-nupcias-banheira.jpg')
    },
    {
      id: 17,
      nome: 'Noite de núpcias',
      preco: 'R$ 199,90',
      imagem: require('../assets/images/noite-nupcias.jpg')
    },
    {
      id: 18,
      nome: 'Para não dizer que não dei nada',
      preco: 'R$ 299,90',
      imagem: require('../assets/images/para-nao-dizer-que-nao-dei-nada.jpg')
    },
    {
      id: 19,
      nome: 'Primeira viagem casados',
      preco: 'R$ 699,90',
      imagem: require('../assets/images/primeira-viagem-casal.jpg')
    },
    {
      id: 20,
      nome: 'Deus te iluminou para agraciar esse casal com',
      preco: 'R$ 7777,77',
      imagem: require('../assets/images/providencia-divina.jpg')
    },
    {
      id: 21,
      nome: 'Suíte da lua de mel',
      preco: 'R$ 299,90',
      imagem: require('../assets/images/quarto-hotel.jpg')
    },
    {
      id: 22,
      nome: 'Para a noiva não descontar no noivo quando ele esquecer a toalha em cima da cama',
      preco: 'R$ 399,90',
      imagem: require('../assets/images/saco-boxe.jpg')
    }
  ];

  return (
    <div className="page-container presentes-page">
      <div className="background-overlay"></div>
      <div className="content presentes-content">
        <h1>Lista de Presentes</h1>
        <div className="presentes-grid">
          {presentes.map(presente => (
            <div key={presente.id} className="presente-card">
              <div className="presente-imagem">
                <img 
                  src={presente.imagem} 
                  alt={presente.nome}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="presente-info">
                <h3>{presente.nome}</h3>
                <p className="presente-preco">{presente.preco}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Presentes; 