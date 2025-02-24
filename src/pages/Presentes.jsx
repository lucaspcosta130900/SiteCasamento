import React, { useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import '../styles/Pages.css';
import '../styles/Presentes.css';
import { createPayment } from '../services/api';

// Importar todas as imagens
import academiaImg from '../assets/images/academia-pos-lua-de-mel.jpg';
import almocoImg from '../assets/images/almoco-primeiro-mes.jpg';
import aposentadoriaImg from '../assets/images/aposentadoria-noivos.jpg';
import cafeImg from '../assets/images/cafe-hotel.jpg';
import churrasImg from '../assets/images/churras-noivo.jpg';
import japonesaImg from '../assets/images/comida-japonesa.jpg';
import cortadorImg from '../assets/images/cortador-unha-noivo.jpg';
import pizzaioloImg from '../assets/images/curso-pizzaiolo-noivo.jpg';
import drinksImg from '../assets/images/drinks-lua-de-mel.jpg';
import frigobarImg from '../assets/images/frigobar-hotel.jpg';
import jantarImg from '../assets/images/jantar-romantico.jpg';
import limpezaImg from '../assets/images/kit-limpeza.jpg';
import pokerImg from '../assets/images/maleta-poker.jpg';
import mascaraImg from '../assets/images/mascara-gas.jpg';
import massagemImg from '../assets/images/massagem-casal.jpg';
import banheiraImg from '../assets/images/noite-nupcias-banheira.jpg';
import nupciasImg from '../assets/images/noite-nupcias.jpg';
import nadaImg from '../assets/images/para-nao-dizer-que-nao-dei-nada.jpg';
import viagemImg from '../assets/images/primeira-viagem-casal.jpg';
import providenciaImg from '../assets/images/providencia-divina.jpg';
import quartoImg from '../assets/images/quarto-hotel.jpg';
import sacoBoxeImg from '../assets/images/saco-boxe.jpg';
import drinkNoivaImg from '../assets/images/drink-noiva-nervosa.jpg';
import solImg from '../assets/images/sol-casamento.jpg';
import culinariaImg from '../assets/images/curso-culinaria-noiva.jpg';
import spaImg from '../assets/images/spa-noivo-conta.jpg';

// Inicializa o Mercado Pago com sua public key
initMercadoPago('APP_USR-a7a1bf1a-c7eb-40df-9d70-1fd1da3fdb9c');

function Presentes() {
  const [selectedPresentes, setSelectedPresentes] = useState([]);
  const [loading, setLoading] = useState(false);

  const presentes = [
    {
      id: 1,
      nome: '1 ano de academia para os noivos se recuperarem da lua de mel',
      preco: 'R$ 1.263,25',
      imagem: academiaImg
    },
    {
      id: 2,
      nome: 'Almoço no primeiro mês de casamento',
      preco: 'R$ 315,48',
      imagem: almocoImg
    },
    {
      id: 3,
      nome: 'Contribuição para a aposentadoria dos noivos',
      preco: 'R$ 399,99',
      imagem: aposentadoriaImg
    },
    {
      id: 4,
      nome: 'Café da manhã pós noite de núpcias',
      preco: 'R$ 532,15',
      imagem: cafeImg
    },
    {
      id: 5,
      nome: 'Churras para noivo e padrinhos',
      preco: 'R$ 446,56',
      imagem: churrasImg
    },
    {
      id: 6,
      nome: 'Primeiro mês de casamento com comida japonesa',
      preco: 'R$ 351,63',
      imagem: japonesaImg
    },
    {
      id: 7,
      nome: 'Cortador de unha para o noivo',
      preco: 'R$ 259,71',
      imagem: cortadorImg
    },
    {
      id: 8,
      nome: 'Curso de pizzaiolo do noivo para não precisarmos mais pedir pizza',
      preco: 'R$ 645,89',
      imagem: pizzaioloImg
    },
    {
      id: 9,
      nome: 'Drinks da lua de mel',
      preco: 'R$ 362,76',
      imagem: drinksImg
    },
    {
      id: 10,
      nome: 'Ataques ao frigobar do hotel liberados para os noivos',
      preco: 'R$ 444,38',
      imagem: frigobarImg
    },
    {
      id: 11,
      nome: 'Jantar romântico na lua de mel',
      preco: 'R$ 576,79',
      imagem: jantarImg
    },
    {
      id: 12,
      nome: 'Kit utensílios de limpeza para a casa nova',
      preco: 'R$ 273,12',
      imagem: limpezaImg
    },
    {
      id: 13,
      nome: 'Kit poker para as noites de jogatina com os amigos',
      preco: 'R$ 214,57',
      imagem: pokerImg
    },
    {
      id: 14,
      nome: 'Equipamento de proteção para a noiva sobreviver aos vazamentos de gás do noivo',
      preco: 'R$ 497,16',
      imagem: mascaraImg
    },
    {
      id: 15,
      nome: 'Massagem de casal para relaxar após o casamento',
      preco: 'R$ 439,38',
      imagem: massagemImg
    },
    {
      id: 16,
      nome: 'Garantindo upgrade de quarto com banheira para a noite de núpcias',
      preco: 'R$ 399,90',
      imagem: banheiraImg
    },
    {
      id: 17,
      nome: 'Noite de núpcias',
      preco: 'R$ 315,41',
      imagem: nupciasImg
    },
    {
      id: 18,
      nome: 'Para não dizer que não dei nada',
      preco: 'R$ 169,69',
      imagem: nadaImg
    },
    {
      id: 19,
      nome: 'Primeira viagem casados',
      preco: 'R$ 1.329,54',
      imagem: viagemImg
    },
    {
      id: 20,
      nome: 'Deus te iluminou para agraciar esse casal com',
      preco: 'R$ 5228,33',
      imagem: providenciaImg
    },
    {
      id: 21,
      nome: 'Para curtir a lua de mel com os noivos',
      preco: 'R$ 68.457,29',
      imagem: quartoImg
    },
    {
      id: 22,
      nome: 'Para a noiva não descontar no noivo quando ele esquecer a toalha em cima da cama',
      preco: 'R$ 247,28',
      imagem: sacoBoxeImg
    },
    {
      id: 23,
      nome: 'Drinks para diminuir o nervosismo da noiva',
      preco: 'R$ 386,85',
      imagem: drinkNoivaImg
    },
    {
      id: 24,
      nome: 'Garantindo que no dia do casamento não vai chover',
      preco: 'R$ 312,87',
      imagem: solImg
    },
    {
      id: 25,
      nome: 'Curso de culinária básica para a noiva',
      preco: 'R$ 409,51',
      imagem: culinariaImg
    },
    {
      id: 26,
      nome: 'Dia de Spa para o noivo após ver a conta do casamento',
      preco: 'R$ 553,97',
      imagem: spaImg
    }
  ];

  const handleSelectPresente = (presente) => {
    setSelectedPresentes(prev => {
      const isSelected = prev.some(p => p.id === presente.id);
      if (isSelected) {
        return prev.filter(p => p.id !== presente.id);
      } else {
        return [...prev, presente];
      }
    });
  };

  const calcularSubTotal = () => {
    return selectedPresentes.reduce((total, presente) => {
      const valor = parseFloat(presente.preco.replace('R$ ', '').replace('.', '').replace(',', '.'));
      return total + valor;
    }, 0);
  };

  const handlePresentear = async () => {
    if (selectedPresentes.length === 0) {
      alert('Selecione pelo menos um presente');
      return;
    }

    try {
      setLoading(true);
      
      const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer APP_USR-8011123736245051-021921-e0df928af2ad2b774c8a3351a604de36-257463821',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          notification_url: "https://eoayahg05qasmb3.m.pipedream.net",
          external_reference: "123456789",
          items: selectedPresentes.map(presente => ({
            title: presente.nome,
            quantity: 1,
            currency_id: "BRL",
            unit_price: parseFloat(presente.preco.replace('R$ ', '').replace('.', '').replace(',', '.')),
            picture_url: presente.imagem
          })),
          back_urls: {
            success: window.location.origin + "/presentes",
            failure: window.location.origin + "/presentes",
            pending: window.location.origin + "/presentes"
          },
          auto_return: "approved"
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erro ao criar preferência');
      }
      
      window.location.href = data.init_point;
      
    } catch (error) {
      alert('Erro ao processar pagamento. Tente novamente.');
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container presentes-page">
      <div className="background-overlay"></div>
      <div className="content presentes-content">
        <h1>Lista de Presentes</h1>
        
        <div className="carrinho-flutuante">
          <div className="carrinho-info">
            <p>Presentes Selecionados: {selectedPresentes.length}</p>
          </div>

          {selectedPresentes.length > 0 && (
            <div className="presentes-selecionados">
              {selectedPresentes.map(presente => (
                <div key={presente.id} className="presente-selecionado-item">
                  <div className="presente-selecionado-info">
                    <div className="presente-selecionado-nome">{presente.nome}</div>
                    <div className="presente-selecionado-preco">{presente.preco}</div>
                  </div>
                  <button 
                    className="remover-presente"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectPresente(presente);
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <p className="subtotal">
            Subtotal: R$ {calcularSubTotal().toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>

          <button 
            className="btn-presentear"
            onClick={handlePresentear}
            disabled={selectedPresentes.length === 0 || loading}
          >
            {loading ? 'Processando...' : 'Presentear'}
          </button>
        </div>

        <div className="presentes-grid">
          {presentes.map((presente, index) => (
            <div 
              key={presente.id} 
              className={`presente-card ${selectedPresentes.some(p => p.id === presente.id) ? 'selected' : ''}`}
              onClick={() => handleSelectPresente(presente)}
              style={{"--card-index": index}}
            >
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
                <div className="presente-checkbox">
                  <input 
                    type="checkbox"
                    checked={selectedPresentes.some(p => p.id === presente.id)}
                    readOnly
                  />
                </div>
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