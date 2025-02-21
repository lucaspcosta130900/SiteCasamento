import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import '../styles/Pages.css';
import '../styles/Confirmacao.css';

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
  { value: '1', label: 'Ailton', grupo: 'Família' },
  { value: '2', label: 'Alexandre', grupo: 'Família' },
  { value: '3', label: 'Alice', grupo: 'Família' },
  { value: '4', label: 'Aline', grupo: 'Família' },
  { value: '5', label: 'Alisson', grupo: 'Família' },
  { value: '6', label: 'Amilton', grupo: 'Família' },
  { value: '7', label: 'Amanda Bispo', grupo: 'Família' },
  { value: '8', label: 'Ana Carolina Clerice', grupo: 'Família' },
  { value: '9', label: 'Anaildes', grupo: 'Família' },
  { value: '10', label: 'Anali', grupo: 'Família' },
  { value: '11', label: 'André', grupo: 'Família' },
  { value: '12', label: 'Andrey', grupo: 'Família' },
  { value: '13', label: 'Araci', grupo: 'Família' },
  { value: '14', label: 'Bruna Azevedo', grupo: 'Família' },
  { value: '15', label: 'Carlos (1)', grupo: 'Família' },
  { value: '16', label: 'Carlos (2)', grupo: 'Família' },
  { value: '17', label: 'Carlos (3)', grupo: 'Família' },
  { value: '18', label: 'Cenusa', grupo: 'Família' },
  { value: '19', label: 'Charles Rocha', grupo: 'Família' },
  { value: '20', label: 'Claudia', grupo: 'Família' },
  { value: '21', label: 'Cláudia', grupo: 'Família' },
  { value: '22', label: 'Clecio', grupo: 'Família' },
  { value: '23', label: 'Daiane', grupo: 'Família' },
  { value: '24', label: 'Daniel', grupo: 'Família' },
  { value: '25', label: 'Daniel de Felipe', grupo: 'Família' },
  { value: '26', label: 'Davi', grupo: 'Família' },
  { value: '27', label: 'Denise', grupo: 'Família' },
  { value: '28', label: 'Dona Carmelita', grupo: 'Família' },
  { value: '29', label: 'Dudu', grupo: 'Família' },
  { value: '30', label: 'Edvaldo', grupo: 'Família' },
  { value: '31', label: 'Enrico', grupo: 'Família' },
  { value: '32', label: 'Eurídice', grupo: 'Família' },
  { value: '33', label: 'Felipe', grupo: 'Família' },
  { value: '34', label: 'Felipe Esposa', grupo: 'Família' },
  { value: '35', label: 'Filipe Spagnuolo', grupo: 'Família' },
  { value: '36', label: 'Franklin José', grupo: 'Família' },
  { value: '37', label: 'Gabriel', grupo: 'Família' },
  { value: '38', label: 'Gabriel Boccanera', grupo: 'Família' },
  { value: '39', label: 'Gabriel Silva', grupo: 'Família' },
  { value: '40', label: 'George', grupo: 'Família' },
  { value: '41', label: 'Gerusa', grupo: 'Família' },
  { value: '42', label: 'Gervan', grupo: 'Família' },
  { value: '43', label: 'Gil', grupo: 'Família' },
  { value: '44', label: 'Gilva', grupo: 'Família' },
  { value: '45', label: 'Gó', grupo: 'Família' },
  { value: '46', label: 'Guilherme', grupo: 'Família' },
  { value: '47', label: 'Gustavo Mattos', grupo: 'Família' },
  { value: '48', label: 'Guto', grupo: 'Família' },
  { value: '49', label: 'Isabel Araújo', grupo: 'Família' },
  { value: '50', label: 'Isaías', grupo: 'Família' },
  { value: '51', label: 'Ismael', grupo: 'Família' },
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
  { value: '75', label: 'Luma Lisley', grupo: 'Família' },
  { value: '76', label: 'Luna', grupo: 'Família' },
  { value: '77', label: 'Marcelo', grupo: 'Família' },
  { value: '78', label: 'Maria Victória Dowling', grupo: 'Família' },
  { value: '79', label: 'Michele', grupo: 'Família' },
  { value: '80', label: 'Munique', grupo: 'Família' },
  { value: '81', label: 'Natália Spagnuolo', grupo: 'Família' },
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
  { value: '92', label: 'Rosa', grupo: 'Família' },
  { value: '93', label: 'Rubem', grupo: 'Família' },
  { value: '94', label: 'Saulo', grupo: 'Família' },
  { value: '95', label: 'Simone', grupo: 'Família' },
  { value: '96', label: 'Sofia', grupo: 'Família' },
  { value: '97', label: 'Sueli', grupo: 'Família' },
  { value: '98', label: 'Tais', grupo: 'Família' },
  { value: '99', label: 'Tatá', grupo: 'Família' },
  { value: '100', label: 'Thomas', grupo: 'Família' },
  { value: '101', label: 'Tia Cleide', grupo: 'Família' },
  { value: '102', label: 'Tio Peu', grupo: 'Família' },
  { value: '103', label: 'Toinho', grupo: 'Família' },
  { value: '104', label: 'Vania', grupo: 'Família' },
  { value: '105', label: 'Virgínia', grupo: 'Família' },
  { value: '106', label: 'Vitor', grupo: 'Família' },
  { value: '107', label: 'Vitória', grupo: 'Família' },
  { value: '108', label: 'Vitória Filho 2', grupo: 'Família' },
  { value: '109', label: 'Vitória Régia', grupo: 'Família' },
  { value: '110', label: 'Zé', grupo: 'Família' }
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
      const outrosConvidados = convidados
        .filter(c => c.value !== selectedGuest.value)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmarGrupo && !todasConfirmacoesPreenchidas()) {
      alert('Por favor, confirme a presença de todos os membros do grupo familiar.');
      return;
    }
    // Lógica de envio do formulário
    console.log({
      convidadoPrincipal: selectedGuest,
      confirmacoesGrupo: confirmarGrupo ? confirmacoes : null
    });
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
            disabled={confirmarGrupo && !todasConfirmacoesPreenchidas()}
          >
            Confirmar Presença
          </button>
        </form>
      </div>
    </div>
  );
}

export default Confirmacao; 