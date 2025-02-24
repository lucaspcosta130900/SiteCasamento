import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://sitecasamentoapi.onrender.com'
});

export const createPayment = async (presentes) => {
  try {
    const response = await api.post('/api/payment', {
      items: presentes.map(presente => ({
        id: presente.id,
        title: presente.nome,
        unit_price: parseFloat(presente.preco.replace('R$ ', '').replace('.', '').replace(',', '.')),
        quantity: 1
      }))
    });
    
    if (response.data && response.data.url) {
      return { init_point: response.data.url };
    }
    
    throw new Error('URL de pagamento não recebida');
  } catch (error) {
    console.error('Erro ao criar pagamento:', error);
    throw error;
  }
}; 