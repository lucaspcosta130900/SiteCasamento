import { ref, set, get, remove, onValue } from 'firebase/database';
import { db } from '../config/firebase';

export const confirmacoes = {
  // Confirmados
  confirmados: [],

  // Não Confirmados
  naoConfirmados: []
};

// Carregar confirmações do Firebase
export const carregarConfirmacoes = async () => {
  const confirmacoesRef = ref(db, 'confirmacoes');
  
  onValue(confirmacoesRef, (snapshot) => {
    const dados = snapshot.val();
    if (dados) {
      confirmacoes.confirmados = dados.confirmados || [];
      confirmacoes.naoConfirmados = dados.naoConfirmados || [];
    }
  });
};

// Salvar confirmações no Firebase
export const salvarConfirmacoes = async () => {
  const confirmacoesRef = ref(db, 'confirmacoes');
  await set(confirmacoesRef, confirmacoes);
};

// Carregar dados ao inicializar
carregarConfirmacoes();

export const adicionarConfirmacao = async (dados) => {
  const novaConfirmacao = {
    ...dados,
    data: new Date().toISOString().split('T')[0]
  };
  
  confirmacoes.confirmados.push(novaConfirmacao);
  await salvarConfirmacoes();
};

export const adicionarNaoConfirmacao = async (dados) => {
  const novaNaoConfirmacao = {
    ...dados,
    data: new Date().toISOString().split('T')[0]
  };
  
  confirmacoes.naoConfirmados.push(novaNaoConfirmacao);
  await salvarConfirmacoes();
};

export const removerConfirmacao = async (nome) => {
  confirmacoes.confirmados = confirmacoes.confirmados.filter(c => c.nome !== nome);
  confirmacoes.naoConfirmados = confirmacoes.naoConfirmados.filter(c => c.nome !== nome);
  await salvarConfirmacoes();
}; 