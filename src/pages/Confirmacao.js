import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import '../styles/Pages.css';
import '../styles/Confirmacao.css';
import { useNavigate } from 'react-router-dom';

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
  )?.[0];
};

// Lista de convidados com seus grupos
const convidados = [
  { value: '1', label: 'Ailton Leal de Souza', grupo: 'Família Leal' },
  { value: '2', label: 'Alexandre Porto', grupo: 'Família Souza' },
  { value: '3', label: 'Alice Almeida Leal', grupo: 'Família Leal' },
  { value: '4', label: 'Aline Costa', grupo: 'Família Souza' },
  { value: '5', label: 'Alisson Almeida', grupo: 'Família Almeida' },
  { value: '6', label: 'Amilton Leal', grupo: 'Família Leal' },
  { value: '7', label: 'Amanda Bispo', grupo: 'Família Bispo' },
  { value: '8', label: 'Ana Carolina Clerice', grupo: 'Família Clerice' },
  { value: '9', label: 'Anaildes Leal', grupo: 'Família Leal' },
  { value: '10', label: 'Anali', grupo: 'Família' },
  { value: '11', label: 'André Costa', grupo: 'Família Costa' },
  { value: '12', label: 'Andrey Almeida', grupo: 'Família Almeida' },
  { value: '13', label: 'Araci', grupo: 'Família' },
  { value: '14', label: 'Bruna Azevedo Boccanera', grupo: 'Família Boccanera' },
  { value: '15', label: 'Carlos Henrique Souza', grupo: 'Família Souza' },
  { value: '16', label: 'Carlos Guimarães', grupo: 'Família Carlos' },
  { value: '17', label: 'Carlos (3)', grupo: 'Família' },
  { value: '18', label: 'Cenusa Almeida', grupo: 'Família Leal' },
  { value: '19', label: 'Charles Rocha', grupo: 'Família Clerice' },
  { value: '20', label: 'Cláudia Domingues', grupo: 'Família Costa' },
  { value: '21', label: 'Clàudia', grupo: 'Família Barcelona' },
  { value: '22', label: 'Clécio Almeida', grupo: 'Família Almeida' },
  { value: '23', label: 'Daiane Paiva', grupo: 'Família Paiva Dido' },
  { value: '24', label: 'Daniel Paiva', grupo: 'Família PDC' },
  { value: '25', label: 'Daniel', grupo: 'Família Costa Felipe' },
  { value: '26', label: 'Davi', grupo: 'Família' },
  { value: '27', label: 'Denise Spagnuolo', grupo: 'Família Spagnuolo' },
  { value: '28', label: 'Carmelita Almeida', grupo: 'Família Almeida' },
  { value: '29', label: 'Dudu', grupo: 'Família' },
  { value: '30', label: 'Edvaldo Sampaio Vidal', grupo: 'Família Vidal' },
  { value: '31', label: 'Enrico', grupo: 'Família Costa Vitória' },
  { value: '32', label: 'Eurídice Fróes', grupo: 'Família Fróes Sogrinha' },
  { value: '33', label: 'Felipe', grupo: 'Família Costa Felipe' },
  { value: '34', label: 'Roberta', grupo: 'Família Costa Felipe' },
  { value: '35', label: 'Filipe Spagnuolo', grupo: 'Família Spagnuolo' },
  { value: '36', label: 'Franklin José Dias de Paiva', grupo: 'Família Paiva Franklin' },
  { value: '37', label: 'Gabriel', grupo: 'Família Paiva Dido' },
  { value: '38', label: 'Gabriel Boccanera', grupo: 'Família Boccanera' },
  { value: '39', label: 'Gabriel Silva', grupo: 'Família Barney' },
  { value: '40', label: 'George Luiz Vieira da Costa', grupo: 'Família PDC' },
  { value: '41', label: 'Gerusa Almeida', grupo: 'Família Almeida' },
  { value: '42', label: 'Gervan', grupo: 'Família Almeida' },
  { value: '43', label: 'Gil', grupo: 'Família Carlos' },
  { value: '44', label: 'Gilva Almeida', grupo: 'Família Almeida' },
  { value: '45', label: 'Glorizete Almeida', grupo: 'Família Almeida' },
  { value: '46', label: 'Guilherme', grupo: 'Família' },
  { value: '47', label: 'Gustavo Mattos', grupo: 'Família Mattos' },
  { value: '48', label: 'Guto', grupo: 'Família' },
  { value: '49', label: 'Isabel Araújo', grupo: 'Família' },
  { value: '50', label: 'Isaías Souza', grupo: 'Família Isaias' },
  { value: '51', label: 'Ismael Almeida', grupo: 'Família Paiva Almeida' },
  { value: '52', label: 'Ivana', grupo: 'Família' },
  { value: '53', label: 'Jairo', grupo: 'Família' },
  { value: '54', label: 'Jay', grupo: 'Família' },
  { value: '55', label: 'João (1)', grupo: 'Família' },
  { value: '56', label: 'João (2)', grupo: 'Família' },
  { value: '57', label: 'João (3)', grupo: 'Família' },
  { value: '58', label: 'José Augusto', grupo: 'Família' },
  { value: '59', label: 'José Inácio', grupo: 'Família' },
  { value: '60', label: 'José Inácio Filho', grupo: 'Família' },
  { value: '61', label: 'Karina', grupo: 'Família' },
  { value: '62', label: 'Lara', grupo: 'Família' },
  { value: '63', label: 'Laura', grupo: 'Família' },
  { value: '64', label: 'Laura Rocha', grupo: 'Família' },
  { value: '65', label: 'Leda', grupo: 'Família' },
  { value: '66', label: 'Léo', grupo: 'Família' },
  { value: '67', label: 'Leticia', grupo: 'Família' },
  { value: '68', label: 'Licia', grupo: 'Família' },
  { value: '69', label: 'Lina', grupo: 'Família' },
  { value: '70', label: 'Liz', grupo: 'Família' },
  { value: '71', label: 'Lizzie', grupo: 'Família' },
  { value: '72', label: 'Luana', grupo: 'Família' },
  { value: '73', label: 'Lucas Mello', grupo: 'Família' },
  { value: '74', label: 'Luiza', grupo: 'Família' },
  { value: '75', label: 'Luma Lisley Mattos', grupo: 'Família Mattos' },
  { value: '76', label: 'Luna', grupo: 'Família' },
  { value: '77', label: 'Marcelo', grupo: 'Família' },
  { value: '78', label: 'Maria Victória Dowling', grupo: 'Família' },
  { value: '79', label: 'Michele', grupo: 'Família' },
  { value: '80', label: 'Munique', grupo: 'Família' },
  { value: '81', label: 'Natália Spagnuolo', grupo: 'Família Spagnuolo' },
  { value: '82', label: 'Nicinha', grupo: 'Família' },
  { value: '83', label: 'Olívia', grupo: 'Família' },
  { value: '84', label: 'Paloma', grupo: 'Família' },
  { value: '85', label: 'Paula', grupo: 'Família' },
  { value: '86', label: 'Paulinho', grupo: 'Família' },
  { value: '87', label: 'Rapha', grupo: 'Família' },
  { value: '88', label: 'Rebecca Rios', grupo: 'Família' },
  { value: '89', label: 'Ricardo', grupo: 'Família' },
  { value: '90', label: 'Roberta', grupo: 'Família' },
  { value: '91', label: 'Romilda', grupo: 'Família' },
  { value: '92', label: 'Rosa Souza', grupo: 'Família Isaias' },
  { value: '93', label: 'Rubem', grupo: 'Família' },
  { value: '94', label: 'Saulo', grupo: 'Família' },
  { value: '95', label: 'Simone', grupo: 'Família' },
  { value: '96', label: 'Sofia', grupo: 'Família' },
  { value: '97', label: 'Sueli', grupo: 'Família' },
  { value: '98', label: 'Taís Paiva da Costa Almeida', grupo: 'Família Paiva Almeida' },
  { value: '99', label: 'Gersolita Almeida', grupo: 'Família Almeida' },
  { value: '100', label: 'Thomas Almeida', grupo: 'Família Almeida' },
  { value: '101', label: 'Tia Cleide', grupo: 'Família' },
  { value: '102', label: 'Tio Peu', grupo: 'Família' },
  { value: '103', label: 'Toinho', grupo: 'Família Almeida' },
  { value: '104', label: 'Vânia Maria Paiva da Costa', grupo: 'Família PDC' },
  { value: '105', label: 'Virgínia', grupo: 'Família Costa' },
  { value: '106', label: 'Vitor', grupo: 'Família' },
  { value: '107', label: 'Vitória Régia Dias de Paiva', grupo: 'Família Paiva Zé' },
  { value: '108', label: 'Vitória Filho 2', grupo: 'Família Costa Vitória' },
  { value: '109', label: 'Vitória', grupo: 'Família Costa Vitória' },
  { value: '110', label: 'José Inácio Benício de Paiva', grupo: 'Família Paiva Zé' }
].map(convidado => ({
  ...convidado,
  grupoFamiliar: encontrarGrupoFamiliar(convidado.label)
}));

// Estilo customizado para o react-select
const selectStyles = {
  control: (base, state) => ({
    ...base,
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '8px',
    borderColor: state.isFocused ? '#808000' : '#ccc',
    boxShadow: state.isFocused ? '0 0 0 1px #808000' : 'none',
    '&:hover': {
      borderColor: '#808000'
    }
  }),
  option: (base, state) => ({
    ...base,
    background: state.isSelected ? '#808000' : 
                state.isFocused ? 'rgba(128, 128, 0, 0.1)' : 'white',
    color: state.isSelected ? 'white' : 'black',
    '&:active': {
      background: '#808000'
    }
  }),
  placeholder: (base) => ({
    ...base,
    color: '#666'
  })
};

function Confirmacao() {
  const navigate = useNavigate();
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [confirmarGrupo, setConfirmarGrupo] = useState(null);
  const [membrosFamilia, setMembrosFamilia] = useState([]);
  const [confirmacoes, setConfirmacoes] = useState({});

  useEffect(() => {
    if (selectedGuest) {
      setConfirmarGrupo(null);
      setMembrosFamilia([]);
      setConfirmacoes({});
    }
  }, [selectedGuest]);

  useEffect(() => {
    if (confirmarGrupo === true && selectedGuest) {
      // Pega o grupo do convidado selecionado
      const grupoDoConvidado = selectedGuest.grupo;
      
      // Filtra apenas os convidados do mesmo grupo
      const outrosConvidados = convidados
        .filter(c => c.grupo === grupoDoConvidado && c.value !== selectedGuest.value)
        .map(c => c.label);
      
      setMembrosFamilia(outrosConvidados);
      
      const novasConfirmacoes = {
        [selectedGuest.label]: 'confirmar',
        ...outrosConvidados.reduce((acc, membro) => {
          acc[membro] = '';
          return acc;
        }, {})
      };
      
      setConfirmacoes(novasConfirmacoes);
    } else {
      setMembrosFamilia([]);
      setConfirmacoes({});
    }
  }, [confirmarGrupo, selectedGuest]);

  const handleConfirmacaoMembro = (membro, confirmacao) => {
    setConfirmacoes(prev => ({
      ...prev,
      [membro]: confirmacao
    }));
  };

  const todasConfirmacoesPreenchidas = () => {
    return membrosFamilia.every(membro => confirmacoes[membro] !== '');
  };

  const botaoDesabilitado = () => {
    if (!selectedGuest) return true; // Desabilita se nenhum nome selecionado
    if (confirmarGrupo === null) return true; // Desabilita se não respondeu sobre grupo
    if (confirmarGrupo === false) return false; // Habilita se respondeu não
    return !todasConfirmacoesPreenchidas(); // Desabilita se faltam confirmações
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmarGrupo && !todasConfirmacoesPreenchidas()) {
      alert('Por favor, confirme a presença de todos os membros do grupo familiar.');
      return;
    }
    // Navega para a página de presentes após confirmação
    navigate('/presentes');
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
              options={convidados}
              value={selectedGuest}
              onChange={setSelectedGuest}
              styles={selectStyles}
              placeholder="Selecione seu nome"
              noOptionsMessage={() => "Nome não encontrado"}
              isSearchable={true}
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>

          {selectedGuest && (
            <div className="form-group">
              <label>Você gostaria de confirmar outras pessoas do seu grupo familiar?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="confirmarGrupo"
                    value="sim"
                    checked={confirmarGrupo === true}
                    onChange={() => setConfirmarGrupo(true)}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="confirmarGrupo"
                    value="nao"
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
              {membrosFamilia.map(membro => (
                <div key={membro} className="membro-confirmacao">
                  <span className="nome-membro">{membro}</span>
                  <div className="opcoes-confirmacao">
                    <label>
                      <input
                        type="radio"
                        name={`confirmacao-${membro}`}
                        value="confirmar"
                        checked={confirmacoes[membro] === 'confirmar'}
                        onChange={() => handleConfirmacaoMembro(membro, 'confirmar')}
                      />
                      Confirmar
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`confirmacao-${membro}`}
                        value="nao-confirmar"
                        checked={confirmacoes[membro] === 'nao-confirmar'}
                        onChange={() => handleConfirmacaoMembro(membro, 'nao-confirmar')}
                      />
                      Não Confirmar
                    </label>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button 
            type="submit" 
            className="submit-button"
            disabled={botaoDesabilitado()}
          >
            Avançar para Lista de Presentes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Confirmacao; 