export const confirmacoes = {
  // Confirmados
  confirmados: [],

  // Não Confirmados
  naoConfirmados: []
};

// Carregar confirmações do localStorage
const carregarConfirmacoes = () => {
  const dados = localStorage.getItem('confirmacoes');
  if (dados) {
    const dadosCarregados = JSON.parse(dados);
    confirmacoes.confirmados = dadosCarregados.confirmados;
    confirmacoes.naoConfirmados = dadosCarregados.naoConfirmados;
  }
};

// Salvar confirmações no localStorage
export const salvarConfirmacoes = () => {
  localStorage.setItem('confirmacoes', JSON.stringify(confirmacoes));
};

// Carregar dados ao inicializar
carregarConfirmacoes();

export const adicionarConfirmacao = (dados) => {
  confirmacoes.confirmados.push({
    ...dados,
    data: new Date().toISOString().split('T')[0]
  });
  salvarConfirmacoes();
};

export const adicionarNaoConfirmacao = (dados) => {
  confirmacoes.naoConfirmados.push({
    ...dados,
    data: new Date().toISOString().split('T')[0]
  });
  salvarConfirmacoes();
};

export const removerConfirmacao = (nome) => {
  confirmacoes.confirmados = confirmacoes.confirmados.filter(c => c.nome !== nome);
  confirmacoes.naoConfirmados = confirmacoes.naoConfirmados.filter(c => c.nome !== nome);
  salvarConfirmacoes();
}; 