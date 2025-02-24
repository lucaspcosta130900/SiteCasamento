import React, { useState } from 'react';
import '../styles/Pages.css';
import '../styles/StatusConfirmacoes.css';
import { confirmacoes, removerConfirmacao } from '../data/confirmacoes';
import Toast from '../components/Toast';

function StatusConfirmacoes() {
  const [toast, setToast] = useState(null);
  const [, forceUpdate] = useState({});

  const totalConfirmados = confirmacoes.confirmados.length;
  const totalNaoConfirmados = confirmacoes.naoConfirmados.length;
  const totalGeral = totalConfirmados + totalNaoConfirmados;

  // Agrupa confirmações por família
  const confirmacoesGrupo = confirmacoes.confirmados.reduce((acc, curr) => {
    acc[curr.grupo] = acc[curr.grupo] || [];
    acc[curr.grupo].push(curr);
    return acc;
  }, {});

  const naoConfirmacoesGrupo = confirmacoes.naoConfirmados.reduce((acc, curr) => {
    acc[curr.grupo] = acc[curr.grupo] || [];
    acc[curr.grupo].push(curr);
    return acc;
  }, {});

  const handleDesfazer = async (nome, grupo, tipo) => {
    try {
      await removerConfirmacao(nome);
      setToast({
        message: `Confirmação de ${nome} removida com sucesso!`,
        type: 'success'
      });
      forceUpdate({});
    } catch (error) {
      console.error('Erro ao remover confirmação:', error);
      setToast({
        message: 'Erro ao remover confirmação. Por favor, tente novamente.',
        type: 'error'
      });
    }
  };

  return (
    <div className="page-container status-page">
      <div className="background-overlay"></div>
      <div className="content status-content">
        <h1>Status das Confirmações</h1>
        
        <div className="status-resumo">
          <div className="status-card">
            <h3>Total de Confirmados</h3>
            <span className="numero confirmados">{totalConfirmados}</span>
          </div>
          <div className="status-card">
            <h3>Não Poderão Comparecer</h3>
            <span className="numero nao-confirmados">{totalNaoConfirmados}</span>
          </div>
          <div className="status-card">
            <h3>Total de Respostas</h3>
            <span className="numero total">{totalGeral}</span>
          </div>
        </div>

        <div className="status-detalhado">
          <div className="status-section confirmados-section">
            <h2>Confirmados</h2>
            {Object.entries(confirmacoesGrupo).map(([grupo, membros]) => (
              <div key={grupo} className="grupo-familiar">
                <h3>{grupo}</h3>
                <div className="membros-lista">
                  {membros.map((membro, index) => (
                    <div key={index} className="membro-item">
                      <span className="membro-nome">{membro.nome}</span>
                      <span className="membro-data">
                        Confirmado em: {new Date(membro.data).toLocaleDateString()}
                      </span>
                      <button 
                        className="desfazer-button"
                        onClick={() => handleDesfazer(membro.nome, membro.grupo, 'confirmado')}
                      >
                        Desfazer
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="status-section nao-confirmados-section">
            <h2>Não Poderão Comparecer</h2>
            {Object.entries(naoConfirmacoesGrupo).map(([grupo, membros]) => (
              <div key={grupo} className="grupo-familiar">
                <h3>{grupo}</h3>
                <div className="membros-lista">
                  {membros.map((membro, index) => (
                    <div key={index} className="membro-item">
                      <span className="membro-nome">{membro.nome}</span>
                      <span className="membro-data">
                        Respondido em: {new Date(membro.data).toLocaleDateString()}
                      </span>
                      <button 
                        className="desfazer-button"
                        onClick={() => handleDesfazer(membro.nome, membro.grupo, 'nao-confirmado')}
                      >
                        Desfazer
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </div>
  );
}

export default StatusConfirmacoes; 