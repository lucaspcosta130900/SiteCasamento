import React from 'react';
import '../styles/Pages.css';
import '../styles/Presentes.css';

function Presentes() {
  const presentes = [
    {
      id: 1,
      nome: '1 ano de academia para os noivos se recuperarem da lua de mel',
      preco: 'R$ 1.263,25',
      imagem: require('../assets/images/academia-pos-lua-de-mel.jpg')
    },
    {
      id: 2,
      nome: 'Almoço no primeiro mês de casamento',
      preco: 'R$ 315,48',
      imagem: require('../assets/images/almoco-primeiro-mes.jpg')
    },
    {
      id: 3,
      nome: 'Contribuição para a aposentadoria dos noivos',
      preco: 'R$ 199,99',
      imagem: require('../assets/images/aposentadoria-noivos.jpg')
    },
    {
      id: 4,
      nome: 'Café da manhã pós noite de núpcias',
      preco: 'R$ 132,15',
      imagem: require('../assets/images/cafe-hotel.jpg')
    },
    {
      id: 5,
      nome: 'Churras para noivo e padrinhos',
      preco: 'R$ 346,56',
      imagem: require('../assets/images/churras-noivo.jpg')
    },
    {
      id: 6,
      nome: 'Primeiro mês de casamento com comida japonesa',
      preco: 'R$ 251,63',
      imagem: require('../assets/images/comida-japonesa.jpg')
    },
    {
      id: 7,
      nome: 'Cortador de unha para o noivo',
      preco: 'R$ 159,71',
      imagem: require('../assets/images/cortador-unha-noivo.jpg')
    },
    {
      id: 8,
      nome: 'Curso de pizzaiolo do noivo para não precisarmos mais pedir pizza',
      preco: 'R$ 145,89',
      imagem: require('../assets/images/curso-pizzaiolo-noivo.jpg')
    },
    {
      id: 9,
      nome: 'Drinks da lua de mel',
      preco: 'R$ 162,76',
      imagem: require('../assets/images/drinks-lua-de-mel.jpg')
    },
    {
      id: 10,
      nome: 'Ataques ao frigobar do hotel liberados para os noivos',
      preco: 'R$ 114,38',
      imagem: require('../assets/images/frigobar-hotel.jpg')
    },
    {
      id: 11,
      nome: 'Jantar romântico na lua de mel',
      preco: 'R$ 276,79',
      imagem: require('../assets/images/jantar-romantico.jpg')
    },
    {
      id: 12,
      nome: 'Kit utensílios de limpeza para a casa nova',
      preco: 'R$ 173,12',
      imagem: require('../assets/images/kit-limpeza.jpg')
    },
    {
      id: 13,
      nome: 'Kit poker para as noites de jogatina com os amigos',
      preco: 'R$ 214,57',
      imagem: require('../assets/images/maleta-poker.jpg')
    },
    {
      id: 14,
      nome: 'Equipamento de proteção para a noiva sobreviver aos vazamentos de gás do noivo',
      preco: 'R$ 113,16',
      imagem: require('../assets/images/mascara-gas.jpg')
    },
    {
      id: 15,
      nome: 'Massagem de casal para relaxar após o casamento',
      preco: 'R$ 284,38',
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
      preco: 'R$ 315,41',
      imagem: require('../assets/images/noite-nupcias.jpg')
    },
    {
      id: 18,
      nome: 'Para não dizer que não dei nada',
      preco: 'R$ 56,85',
      imagem: require('../assets/images/para-nao-dizer-que-nao-dei-nada.jpg')
    },
    {
      id: 19,
      nome: 'Primeira viagem casados',
      preco: 'R$ 1.329,54',
      imagem: require('../assets/images/primeira-viagem-casal.jpg')
    },
    {
      id: 20,
      nome: 'Deus te iluminou para agraciar esse casal com',
      preco: 'R$ 7337,33',
      imagem: require('../assets/images/providencia-divina.jpg')
    },
    {
      id: 21,
      nome: 'Para curtir a lua de mel com os noivos',
      preco: 'R$ 68.457,29',
      imagem: require('../assets/images/quarto-hotel.jpg')
    },
    {
      id: 22,
      nome: 'Para a noiva não descontar no noivo quando ele esquecer a toalha em cima da cama',
      preco: 'R$ 247,28',
      imagem: require('../assets/images/saco-boxe.jpg')
    },
    {
      id: 23,
      nome: 'Drinks para diminuir o nervosismo da noiva',
      preco: 'R$ 86,85',
      imagem: require('../assets/images/drink-noiva-nervosa.jpg')
    },
    {
      id: 24,
      nome: 'Garantindo que no dia do casamento não vai chover',
      preco: 'R$ 312,87',
      imagem: require('../assets/images/sol-casamento.jpg')
    },
    {
      id: 25,
      nome: 'Curso de culinária básica para a noiva',
      preco: 'R$ 409,51',
      imagem: require('../assets/images/curso-culinaria-noiva.jpg')
    },
    {
      id: 26,
      nome: 'Dia de Spa para o noivo após ver a conta do casamento',
      preco: 'R$ 153,97',
      imagem: require('../assets/images/spa-noivo-conta.jpg')
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