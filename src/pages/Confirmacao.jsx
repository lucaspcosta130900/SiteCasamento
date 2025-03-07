import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import '../styles/Pages.css';
import '../styles/Confirmacao.css';
import { useNavigate } from 'react-router-dom';
import { confirmacoes, adicionarConfirmacao, adicionarNaoConfirmacao } from '../data/confirmacoes';
import Toast from '../components/Toast';

// Definição dos grupos familiares
const gruposFamiliares = {
  'Família Spagnuolo': ['Natália Spagnuolo', 'Filipe Spagnuolo'],
  'Família Rocha': ['Charles Rocha', 'Laura Rocha'],
  'Família Silva': ['Gabriel Silva', 'Luma Lisley'],
  // ... outros grupos
};

// Função para encontrar o grupo de um convidado
const encontrarGrupoFamiliar = (nome) => {
  return Object.entries(gruposFamiliares).find(([_, membros]) => 
    membros.includes(nome)
  );
};

// Lista de convidados com seus grupos
const convidados = [
  { value: '81', label: 'Natália Spagnuolo', grupo: 'Família A' },
  { value: '35', label: 'Filipe Spagnuolo', grupo: 'Família A' },
  { value: '14', label: 'Bruna Azevedo Boccanera', grupo: 'Família B' },
  { value: '38', label: 'Gabriel Boccanera', grupo: 'Família B' },
  { value: '7', label: 'Amanda Bispo', grupo: 'Família C' },
  { value: '49', label: 'Isabel Brito de Lima Araújo', grupo: 'Família D' },
  { value: '78', label: 'Maria Victória Dowling', grupo: 'Família E' },
  { value: '39', label: 'Gabriel de Cerqueira e Silva', grupo: 'Família F' },
  { value: '73', label: 'Lucas de Mello Vieira', grupo: 'Família G' },
  { value: '75', label: 'Luma Lisley', grupo: 'Família H' },
  { value: '47', label: 'Gustavo Mattos', grupo: 'Família H' },
  { value: '8', label: 'Ana Carolina de Assis Clerice', grupo: 'Família I' },
  { value: '19', label: 'Charles Rocha', grupo: 'Família I' },
  { value: '64', label: 'Laura Rocha', grupo: 'Família I' },
  { value: '91', label: 'Romilda Romualdo', grupo: 'Família J' },
  { value: '30', label: 'Edvaldo Sampaio', grupo: 'Família J' },
  { value: '32', label: 'Eurídice Fróes', grupo: 'Família J' },
  { value: '68', label: 'Lícia Fróes', grupo: 'Família J' },
  { value: '65', label: 'Leda Pena', grupo: 'Família J' },
  { value: '1', label: 'Ailton Leal', grupo: 'Família K' },
  { value: '18', label: 'Cenusa Almeida', grupo: 'Família K' },
  { value: '3', label: 'Alice Almeida', grupo: 'Família K' },
  { value: '53', label: 'Jairo Fróes', grupo: 'Família L' },
  { value: '13', label: 'Araci Fróes', grupo: 'Família L' },
  { value: '61', label: 'Carina Fróes', grupo: 'Família L' },
  { value: '106', label: 'Vitor Fróes', grupo: 'Família L' },
  { value: '93', label: 'Rubem Fróes', grupo: 'Família M' },
  { value: '97', label: 'Sueli Fróes', grupo: 'Família M' },
  { value: '84', label: 'Paloma Fróes', grupo: 'Família M' },
  { value: '77', label: 'Marcelo Fróes', grupo: 'Família M' },
  { value: '92', label: 'Rosângela Suely', grupo: 'Família N' },
  { value: '50', label: 'Isaías Souza', grupo: 'Família N' },
  { value: '6', label: 'Amilton Leal', grupo: 'Família O' },
  { value: '52', label: 'Jaciara Leal', grupo: 'Família O' },
  { value: '11', label: 'Augusto Gonçalves', grupo: 'Família P' },
  { value: '79', label: 'Michele Gonçalves', grupo: 'Família P' },
  { value: '70', label: 'Liz Gonçalves', grupo: 'Família P' },
  { value: '62', label: 'Lara Andrade', grupo: 'Família P' },
  { value: '85', label: 'Pedro Henrique', grupo: 'Família Q' },
  { value: '20', label: 'Cleide Santana', grupo: 'Família Q' },
  { value: '15', label: 'Carlos Henrique', grupo: 'Família Q' },
  { value: '74', label: 'Luiza Souza', grupo: 'Família Q' },
  { value: '2', label: 'Alexandre Souza', grupo: 'Família R' },
  { value: '4', label: 'Aline Costa', grupo: 'Família S' },
  { value: '40', label: 'George Luiz Vieira da Costa', grupo: 'Família T' },
  { value: '104', label: 'Vania Maria Paiva da Costa', grupo: 'Família T' },
  { value: '98', label: 'Tais Paiva da Costa Almeida', grupo: 'Família U' },
  { value: '51', label: 'Ismael Almeida', grupo: 'Família U' },
  { value: '24', label: 'Daniel Paiva da Costa', grupo: 'Família T' },
  { value: '58', label: 'José Inácio Benicio de Paiva', grupo: 'Família V' },
  { value: '107', label: 'Vitória Régia Dias de Paiva', grupo: 'Família V' },
  { value: '60', label: 'Jose Inácio Benicio de Paiva Filho', grupo: 'Família W' },
  { value: '23', label: 'Daiane Paiva Mascarenhas', grupo: 'Família W' },
  { value: '36', label: 'Franklin José Dias de Paiva', grupo: 'Família X' },
  { value: '90', label: 'Roberta Guimarães', grupo: 'Família X' },
  { value: '59', label: 'José Augusto Dias de Paiva', grupo: 'Família Y' },
  { value: '67', label: 'Leticia Penna Mattos Dias de Paiva', grupo: 'Família Y' },
  { value: '33', label: 'Felipe Paiva Mascarenhas', grupo: 'Família W' },
  { value: '37', label: 'Gabriel Paiva Mascarenhas', grupo: 'Família W' },
  { value: '26', label: 'Davi Penna Mattos Dias de Paiva', grupo: 'Família Y' },
  { value: '21', label: 'Clàudia Rabasso', grupo: 'Família Y' },
  { value: '72', label: 'Luana Guimarães Paiva', grupo: 'Família X' },
  { value: '29', label: 'Eduardo Guimarães Paiva', grupo: 'Família X' },
  { value: '63', label: 'Laura Guimarães Paiva', grupo: 'Família X' },
  { value: '69', label: 'Lina Bandeira', grupo: 'Família Y' },
  { value: '95', label: 'Simone Vieira da Costa', grupo: 'Família Y' },
  { value: '82', label: 'Nicinha Costa', grupo: 'Família Y' },
  { value: '27', label: 'Denise Spagnuolo', grupo: 'Família A' },
  { value: '45', label: 'Glorizete Almeida', grupo: 'Família Z' },
  { value: '44', label: 'Gilva Almeida', grupo: 'Família Z' },
  { value: '12', label: 'Andrey Almeida', grupo: 'Família Z' },
  { value: '5', label: 'Alysson Almeida', grupo: 'Família Z' },
  { value: '43', label: 'Gersolita Almeida', grupo: 'Família Z' },
  { value: '76', label: 'Luiz Antônio', grupo: 'Família Z' },
  { value: '41', label: 'Gerusa Almeida', grupo: 'Família Z' },
  { value: '75', label: 'Luna Almeida', grupo: 'Família Z' },
  { value: '100', label: 'Thomas Almeida', grupo: 'Família Z' },
  { value: '42', label: 'Gervan Almeida', grupo: 'Família Z' },
  { value: '16', label: 'Carmelita Almeida', grupo: 'Família Z' },
  { value: '22', label: 'Claudia Dominguez', grupo: 'Família AA' },
  { value: '108', label: 'Vitória Dominguez Bezerra', grupo: 'Família AA' },
  { value: '9', label: 'André Bezerra', grupo: 'Família AA' },
  { value: '31', label: 'Enrico Dominguez Bezerra', grupo: 'Família AA' },
  { value: '34', label: 'Felipe Costa', grupo: 'Família BB' },
  { value: '89', label: 'Roberta Lédo', grupo: 'Família BB' },
  { value: '25', label: 'Daniel Lédo', grupo: 'Família BB' },
  { value: '86', label: 'Paula Dominguez', grupo: 'Família CC' },
  { value: '57', label: 'João Paulo Souza', grupo: 'Família DD' },
  { value: '54', label: 'Ivana Souza', grupo: 'Família DD' },
  { value: '83', label: 'Olívia Souza', grupo: 'Família DD' },
  { value: '56', label: 'João Souza', grupo: 'Família DD' },
  { value: '61', label: 'José do Carmo Leal', grupo: 'Família EE' },
  { value: '10', label: 'Analy Leal', grupo: 'Família EE' },
  { value: '88', label: 'Rebecca Rios', grupo: 'Família FF' },
  { value: '80', label: 'Munique Fróes', grupo: 'Família GG' },
  { value: '94', label: 'Saulo', grupo: 'Família GG' },
  { value: '96', label: 'Sofia Fróes', grupo: 'Família GG' },
  { value: '105', label: 'Virgínia Dominguez', grupo: 'Família HH' },
  { value: '91', label: 'Ricardo', grupo: 'Família HH' },
  { value: '71', label: 'Lise Hizumi', grupo: 'Família II' },
  { value: '66', label: 'Leonardo Falcão', grupo: 'Família II' },
  { value: '55', label: 'João Hizumi Falcão', grupo: 'Família II' },
  { value: '17', label: 'Carlos Magalhães', grupo: 'Família JJ' },
  { value: '46', label: 'Giovana Alcântara', grupo: 'Família JJ' },
  { value: '48', label: 'Guilherme Alcântara', grupo: 'Família JJ' },
  { value: '47', label: 'Giliard Ribeiro Cavalcante', grupo: 'Família KK' },
  { value: '102', label: 'Twany Vieira Bastos Cavalcante', grupo: 'Família KK' },
  { value: '99', label: 'Tânia Lino', grupo: 'Família A' },
  { value: '58', label: 'Jurandir Silva', grupo: 'Família A' },
  { value: '35', label: 'Fernanda Spagnuolo Ruston', grupo: 'Família A' },
  { value: '92', label: 'Rodrigo Ruston', grupo: 'Família A' },
  { value: '64', label: 'Kayla Neves', grupo: 'Família G' }
].map(convidado => ({
  ...convidado,
  grupoFamiliar: encontrarGrupoFamiliar(convidado.label)
}));

// Estilo customizado para o react-select
const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    boxShadow: state.isFocused ? '0 0 0 2px rgba(128, 128, 0, 0.2)' : 'none',
    '&:hover': {
      borderColor: '#808000'
    },
    '@media (max-width: 480px)': {
      minHeight: '45px',
      fontSize: '14px'
    }
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    '@media (max-width: 480px)': {
      fontSize: '14px'
    }
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#808000' : 
                    state.isFocused ? 'rgba(128, 128, 0, 0.1)' : 'transparent',
    color: state.isSelected ? 'white' : '#333',
    '&:active': {
      backgroundColor: '#808000'
    },
    '@media (max-width: 480px)': {
      padding: '8px 12px'
    }
  }),
  placeholder: (provided) => ({
    ...provided,
    '@media (max-width: 480px)': {
      fontSize: '14px'
    }
  })
};

function Confirmacao() {
  const navigate = useNavigate();
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [confirmarPresenca, setConfirmarPresenca] = useState(null);
  const [confirmarGrupo, setConfirmarGrupo] = useState(null);
  const [membrosFamilia, setMembrosFamilia] = useState([]);
  const [confirmacoesGrupo, setConfirmacoesGrupo] = useState({});
  const [toast, setToast] = useState(null);

  // Filtra convidados já confirmados e ordena por value
  const convidadosDisponiveis = convidados
    .filter(convidado => {
      const jaConfirmado = confirmacoes.confirmados.some(
        c => c.nome === convidado.label
      );
      const jaNaoConfirmado = confirmacoes.naoConfirmados.some(
        c => c.nome === convidado.label
      );
      return !jaConfirmado && !jaNaoConfirmado;
    })
    .sort((a, b) => parseInt(a.value) - parseInt(b.value)); // Ordena por value numericamente

  useEffect(() => {
    if (selectedGuest) {
      setConfirmarPresenca(null);
      setConfirmarGrupo(null);
      setMembrosFamilia([]);
      setConfirmacoesGrupo({});
    }
  }, [selectedGuest]);

  useEffect(() => {
    if (confirmarPresenca === false) {
      setConfirmarGrupo(null);
      setMembrosFamilia([]);
      setConfirmacoesGrupo({});
    }
  }, [confirmarPresenca]);

  useEffect(() => {
    if (confirmarGrupo === true && selectedGuest) {
      const grupoDoConvidado = selectedGuest.grupo;
      // Filtra apenas membros disponíveis do mesmo grupo (excluindo o selecionado)
      const outrosConvidados = convidadosDisponiveis
        .filter(c => 
          c.grupo === grupoDoConvidado && 
          c.label !== selectedGuest.label
        )
        .map(c => c.label);
      
      setMembrosFamilia(outrosConvidados);
      // Inicializa o estado das confirmações
      const novasConfirmacoes = {};
      outrosConvidados.forEach(membro => {
        novasConfirmacoes[membro] = null;
      });
      setConfirmacoesGrupo(novasConfirmacoes);
    }
  }, [confirmarGrupo, selectedGuest]);

  const handleConfirmacaoMembro = (membro, status) => {
    setConfirmacoesGrupo(prev => ({
      ...prev,
      [membro]: status
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (!selectedGuest) {
        setToast({
          message: 'Por favor, selecione um convidado.',
          type: 'error'
        });
        return;
      }

      if (confirmarPresenca === null) {
        setToast({
          message: 'Por favor, confirme sua presença.',
          type: 'error'
        });
        return;
      }

      // Só exige confirmação de grupo se houver outros membros disponíveis
      if (confirmarPresenca === true && 
          temOutrosMembros(selectedGuest.label) && 
          confirmarGrupo === null) {
        setToast({
          message: 'Por favor, escolha se deseja confirmar outras pessoas do seu grupo familiar?',
          type: 'error'
        });
        return;
      }

      if (confirmarGrupo && !membrosFamilia.every(membro => 
        ['confirmar', 'nao-confirmar', 'confirmar-depois'].includes(confirmacoesGrupo[membro])
      )) {
        setToast({
          message: 'Por favor, selecione uma opção para todos os membros do grupo.',
          type: 'error'
        });
        return;
      }

      // Confirma o convidado principal
      if (confirmarPresenca) {
        await adicionarConfirmacao({
          nome: selectedGuest.label,
          grupo: selectedGuest.grupo
        });
      } else {
        await adicionarNaoConfirmacao({
          nome: selectedGuest.label,
          grupo: selectedGuest.grupo
        });
      }

      // Confirma apenas os membros que tiveram resposta definida (exceto 'confirmar-depois')
      if (confirmarGrupo) {
        for (const membro of membrosFamilia) {
          if (confirmacoesGrupo[membro] === 'confirmar') {
            await adicionarConfirmacao({
              nome: membro,
              grupo: selectedGuest.grupo
            });
          } else if (confirmacoesGrupo[membro] === 'nao-confirmar') {
            await adicionarNaoConfirmacao({
              nome: membro,
              grupo: selectedGuest.grupo
            });
          }
          // Se for 'confirmar-depois', não faz nada com esse membro
        }
      }

      setToast({
        message: 'Presença(s) confirmada(s) com sucesso!',
        type: 'success'
      });
      
      // Limpa o formulário
      setSelectedGuest(null);
      setConfirmarPresenca(null);
      setConfirmarGrupo(null);
      setMembrosFamilia([]);
      setConfirmacoesGrupo({});
    } catch (error) {
      console.error('Erro ao salvar confirmações:', error);
      setToast({
        message: 'Erro ao salvar confirmações. Por favor, tente novamente.',
        type: 'error'
      });
    }
  };

  // Função para verificar se há outros membros disponíveis no grupo além do selecionado
  const temOutrosMembros = (nome) => {
    if (!nome) return false;
    
    // Encontra o grupo do convidado selecionado
    const convidadoSelecionado = convidadosDisponiveis.find(c => c.label === nome);
    if (!convidadoSelecionado) return false;
    
    // Filtra membros disponíveis do mesmo grupo (excluindo o selecionado)
    const membrosDisponiveisDoGrupo = convidadosDisponiveis.filter(
      c => c.grupo === convidadoSelecionado.grupo && c.label !== nome
    );
    
    return membrosDisponiveisDoGrupo.length > 0;
  };

  return (
    <div className="page-container confirmacao-page">
      <div className="background-overlay"></div>
      <div className="content confirmacao-content">
        <h1>Confirme sua Presença</h1>
        <form onSubmit={handleSubmit} className="confirmacao-form">
          <div className="form-group">
            <label>Nome do Convidado</label>
            <Select
              options={convidadosDisponiveis}
              value={selectedGuest}
              onChange={setSelectedGuest}
              styles={selectStyles}
              placeholder="Selecione seu nome"
              noOptionsMessage={() => "Nome não encontrado ou já confirmado"}
              isSearchable={true}
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>

          {selectedGuest && (
            <div className="form-group">
              <label>Você poderá comparecer ao casamento?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="confirmarPresenca"
                    value="sim"
                    checked={confirmarPresenca === true}
                    onChange={() => {
                      setConfirmarPresenca(true);
                      setConfirmarGrupo(null);
                    }}
                  />
                  Confirmo minha presença
                </label>
                <label>
                  <input
                    type="radio"
                    name="confirmarPresenca"
                    value="nao"
                    checked={confirmarPresenca === false}
                    onChange={() => {
                      setConfirmarPresenca(false);
                      setConfirmarGrupo(null);
                      setMembrosFamilia([]);
                      setConfirmacoesGrupo({});
                    }}
                  />
                  Não poderei comparecer
                </label>
              </div>
            </div>
          )}

          {/* Mostrar a pergunta apenas se houver outros membros no grupo */}
          {selectedGuest && confirmarPresenca === true && temOutrosMembros(selectedGuest.label) && (
            <div className="form-group">
              <label>Deseja confirmar a presença de outras pessoas do seu grupo familiar?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="confirmarGrupo"
                    checked={confirmarGrupo === true}
                    onChange={() => setConfirmarGrupo(true)}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="confirmarGrupo"
                    checked={confirmarGrupo === false}
                    onChange={() => setConfirmarGrupo(false)}
                  />
                  Não
                </label>
              </div>
            </div>
          )}

          {confirmarGrupo && (
            <div className="form-group membros-grupo">
              <label>Confirme a presença dos membros do grupo:</label>
              <div className="membros-lista">
                {membrosFamilia.map(membro => (
                  <div key={membro} className="membro-confirmacao">
                    <span className="nome-membro">{membro}</span>
                    <div className="opcoes-confirmacao">
                      <label>
                        <input
                          type="radio"
                          name={`confirmacao-${membro}`}
                          value="confirmar"
                          checked={confirmacoesGrupo[membro] === 'confirmar'}
                          onChange={() => handleConfirmacaoMembro(membro, 'confirmar')}
                        />
                        Confirmar
                      </label>
                      <label>
                        <input
                          type="radio"
                          name={`confirmacao-${membro}`}
                          value="nao-confirmar"
                          checked={confirmacoesGrupo[membro] === 'nao-confirmar'}
                          onChange={() => handleConfirmacaoMembro(membro, 'nao-confirmar')}
                        />
                        Não Confirmar
                      </label>
                      <label>
                        <input
                          type="radio"
                          name={`confirmacao-${membro}`}
                          value="confirmar-depois"
                          checked={confirmacoesGrupo[membro] === 'confirmar-depois'}
                          onChange={() => handleConfirmacaoMembro(membro, 'confirmar-depois')}
                        />
                        Confirmar Depois
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button 
            type="submit" 
            className="submit-button"
            disabled={
              !selectedGuest || 
              confirmarPresenca === null || 
              (confirmarPresenca === true && 
               temOutrosMembros(selectedGuest?.label) && 
               confirmarGrupo === null) || 
              (confirmarGrupo && !membrosFamilia.every(membro => 
                ['confirmar', 'nao-confirmar', 'confirmar-depois'].includes(confirmacoesGrupo[membro])
              ))
            }
          >
            Confirmar
          </button>
        </form>

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

export default Confirmacao; 