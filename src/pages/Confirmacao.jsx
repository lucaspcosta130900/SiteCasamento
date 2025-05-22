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
  { value: '31', label: 'Denise Spagnuolo', grupo: 'Família A' },
  { value: '40', label: 'Fernanda Spagnuolo Ruston', grupo: 'Família A' },
  { value: '41', label: 'Filipe Spagnuolo', grupo: 'Família A' },
  { value: '72', label: 'Jurandir Silva', grupo: 'Família A' },
  { value: '91', label: 'Natália Spagnuolo', grupo: 'Família A' },
  { value: '102', label: 'Rodrigo Ruston', grupo: 'Família A' },
  { value: '112', label: 'Tânia Lino', grupo: 'Família A' },
  { value: '12', label: 'André Bezerra', grupo: 'Família AA' },
  { value: '24', label: 'Claudia Dominguez', grupo: 'Família AA' },
  { value: '35', label: 'Enrico Dominguez Bezerra', grupo: 'Família AA' },
  { value: '117', label: 'Vitória Dominguez Bezerra', grupo: 'Família AA' },
  { value: '16', label: 'Bruna Azevedo Boccanera', grupo: 'Família B' },
  { value: '43', label: 'Gabriel Boccanera', grupo: 'Família B' },
  { value: '28', label: 'Daniel Lédo', grupo: 'Família BB' },
  { value: '38', label: 'Felipe Campos', grupo: 'Família BB' },
  { value: '101', label: 'Roberta Lédo', grupo: 'Família BB' },
  { value: '7', label: 'Amanda Bispo', grupo: 'Família C' },
  { value: '32', label: 'Eduarda Short', grupo: 'Família C' },
  { value: '95', label: 'Paula Dominguez', grupo: 'Família CC' },
  { value: '56', label: 'Isabel Brito de Lima Araújo', grupo: 'Família D' },
  { value: '60', label: 'Ivana Souza', grupo: 'Família DD' },
  { value: '66', label: 'João Paulo Souza', grupo: 'Família DD' },
  { value: '67', label: 'João Souza', grupo: 'Família DD' },
  { value: '93', label: 'Olívia Souza', grupo: 'Família DD' },
  { value: '88', label: 'Maria Victória Dowling', grupo: 'Família E' },
  { value: '11', label: 'Analy Leal', grupo: 'Família EE' },
  { value: '69', label: 'José do Carmo Leal', grupo: 'Família EE' },
  { value: '44', label: 'Gabriel de Cerqueira e Silva', grupo: 'Família F' },
  { value: '99', label: 'Rebecca Rios', grupo: 'Família FF' },
  { value: '82', label: 'Lucas de Mello Vieira', grupo: 'Família G' },
  { value: '90', label: 'Munique Fróes', grupo: 'Família GG' },
  { value: '106', label: 'Saulo', grupo: 'Família GG' },
  { value: '109', label: 'Sofia Fróes', grupo: 'Família GG' },
  { value: '54', label: 'Gustavo Mattos', grupo: 'Família H' },
  { value: '85', label: 'Luma Lisley', grupo: 'Família H' },
  { value: '100', label: 'Ricardo', grupo: 'Família HH' },
  { value: '116', label: 'Virgínia Dominguez', grupo: 'Família HH' },
  { value: '10', label: 'Ana Carolina de Assis Clerice', grupo: 'Família I' },
  { value: '22', label: 'Charles Rocha', grupo: 'Família I' },
  { value: '75', label: 'Laura Rocha', grupo: 'Família I' },
  { value: '65', label: 'João Hizumi Falcão', grupo: 'Família II' },
  { value: '76', label: 'Leonardo Falcão', grupo: 'Família II' },
  { value: '79', label: 'Lise Hizumi', grupo: 'Família II' },
  { value: '34', label: 'Edvaldo Sampaio', grupo: 'Família J' },
  { value: '36', label: 'Eurídice Fróes', grupo: 'Família J' },
  { value: '103', label: 'Romilda Romualdo', grupo: 'Família J' },
  { value: '19', label: 'Carlos Magalhães', grupo: 'Família JJ' },
  { value: '52', label: 'Giovana Alcântara', grupo: 'Família JJ' },
  { value: '2', label: 'Ailton Leal', grupo: 'Família K' },
  { value: '3', label: 'Alice Almeida', grupo: 'Família K' },
  { value: '21', label: 'Cenusa Almeida', grupo: 'Família K' },
  { value: '50', label: 'Giliard Ribeiro Cavalcante', grupo: 'Família KK' },
  { value: '114', label: 'Twany Vieira Bastos Cavalcante', grupo: 'Família KK' },
  { value: '17', label: 'Carina Fróes', grupo: 'Família L' },
  { value: '63', label: 'Jairo Fróes', grupo: 'Família L' },
  { value: '119', label: 'Vitor Fróes', grupo: 'Família L' },
  { value: '6', label: 'Alysson Almeida', grupo: 'Família LL' },
  { value: '13', label: 'Andrey Almeida', grupo: 'Família LL' },
  { value: '20', label: 'Carmelita Almeida', grupo: 'Família LL' },
  { value: '25', label: 'Clécio Almeida', grupo: 'Família LL' },
  { value: '47', label: 'Gersolita Almeida', grupo: 'Família LL' },
  { value: '48', label: 'Gerusa Almeida', grupo: 'Família LL' },
  { value: '49', label: 'Gervan Almeida', grupo: 'Família LL' },
  { value: '51', label: 'Gilva Almeida', grupo: 'Família LL' },
  { value: '53', label: 'Glorizete Almeida', grupo: 'Família LL' },
  { value: '64', label: 'João Almeida', grupo: 'Família LL' },
  { value: '83', label: 'Luiz Antônio', grupo: 'Família LL' },
  { value: '86', label: 'Luna Almeida', grupo: 'Família LL' },
  { value: '98', label: 'Rafaela Couto', grupo: 'Família LL' },
  { value: '113', label: 'Thomas Almeida', grupo: 'Família LL' },
  { value: '87', label: 'Marcelo Fróes', grupo: 'Família M' },
  { value: '94', label: 'Paloma Fróes', grupo: 'Família M' },
  { value: '105', label: 'Rubem Fróes', grupo: 'Família M' },
  { value: '110', label: 'Suely Fróes', grupo: 'Família M' },
  { value: '37', label: 'Fatima', grupo: 'Família MM' },
  { value: '57', label: 'Isaías Souza', grupo: 'Família N' },
  { value: '104', label: 'Rosângela Suely', grupo: 'Família N' },
  { value: '1', label: 'Agnubia', grupo: 'Família NN' },
  { value: '9', label: 'Amilton Leal', grupo: 'Família O' },
  { value: '62', label: 'Jaciara Leal', grupo: 'Família O' },
  { value: '61', label: 'Ivanice', grupo: 'Família OO' },
  { value: '14', label: 'Augusto Gonçalves', grupo: 'Família P' },
  { value: '73', label: 'Lara Andrade', grupo: 'Família P' },
  { value: '80', label: 'Liz Gonçalves', grupo: 'Família P' },
  { value: '89', label: 'Michele Gonçalves', grupo: 'Família P' },
  { value: '15', label: 'Bárbara Sampaio', grupo: 'Família PP' },
  { value: '59', label: 'Ivan', grupo: 'Família PP' },
  { value: '18', label: 'Carlos Henrique', grupo: 'Família Q' },
  { value: '26', label: 'Cleide Santana', grupo: 'Família Q' },
  { value: '84', label: 'Luiza Souza', grupo: 'Família Q' },
  { value: '96', label: 'Pedro Henrique', grupo: 'Família Q' },
  { value: '8', label: 'Amélia Luz', grupo: 'Família QQ' },
  { value: '4', label: 'Alexandre Souza', grupo: 'Família R' },
  { value: '5', label: 'Aline Costa', grupo: 'Família S' },
  { value: '29', label: 'Daniel Paiva da Costa', grupo: 'Família T' },
  { value: '46', label: 'George Luiz Vieira da Costa', grupo: 'Família T' },
  { value: '115', label: 'Vania Maria Paiva da Costa', grupo: 'Família T' },
  { value: '58', label: 'Ismael Almeida', grupo: 'Família U' },
  { value: '111', label: 'Tais Paiva da Costa Almeida', grupo: 'Família U' },
  { value: '70', label: 'José Inácio Benicio de Paiva', grupo: 'Família V' },
  { value: '118', label: 'Vitória Régia Dias de Paiva', grupo: 'Família V' },
  { value: '27', label: 'Daiane Paiva Mascarenhas', grupo: 'Família W' },
  { value: '39', label: 'Felipe Paiva Mascarenhas', grupo: 'Família W' },
  { value: '45', label: 'Gabriel Paiva Mascarenhas', grupo: 'Família W' },
  { value: '71', label: 'Jose Inácio Benicio de Paiva Filho', grupo: 'Família W' },
  { value: '33', label: 'Eduardo Guimarães Paiva', grupo: 'Família X' },
  { value: '42', label: 'Franklin José Dias de Paiva', grupo: 'Família X' },
  { value: '74', label: 'Laura Guimarães Paiva', grupo: 'Família X' },
  { value: '81', label: 'Luana Guimarães Paiva', grupo: 'Família X' },
  { value: '97', label: 'Pompéia Carvalho', grupo: 'Família X' },
  { value: '23', label: 'Clàudia Rabasso', grupo: 'Família Y' },
  { value: '30', label: 'Davi Penna Mattos Dias de Paiva', grupo: 'Família Y' },
  { value: '55', label: 'Ignasi Rio', grupo: 'Família Y' },
  { value: '68', label: 'José Augusto Dias de Paiva', grupo: 'Família Y' },
  { value: '77', label: 'Leticia Penna Mattos Dias de Paiva', grupo: 'Família Y' },
  { value: '107', label: 'Sergi Vázquez', grupo: 'Família Y' },
  { value: '78', label: 'Lina Bandeira', grupo: 'Família Z' },
  { value: '92', label: 'Nicinha Costa', grupo: 'Família Z' },
  { value: '108', label: 'Simone Vieira da Costa', grupo: 'Família Z' },
  { value: '120', label: 'Junia Bicalho', grupo: 'Família RR' }
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
