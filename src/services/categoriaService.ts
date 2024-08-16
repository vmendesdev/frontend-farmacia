import axios, { AxiosRequestConfig } from 'axios';

// Configura o Axios com a URL base do backend
const api = axios.create({
  baseURL: 'LINK DO DEPLOY - EM DESENVOLVIMENTO' // Substitua pelo link do seu backend
});

// Define a interface Categoria
export interface Categoria {
  id?: number;
  nome: string;
  descricao: string;
}

// Função para listar categorias
export const listarCategorias = async (url: string, setDados: (dados: Categoria[]) => void, config?: AxiosRequestConfig) => {
  try {
    const resposta = await api.get<Categoria[]>(url, config);
    setDados(resposta.data);
  } catch (error) {
    console.error('Erro ao listar categorias', error);
  }
};

// Função para cadastrar uma nova categoria
export const cadastrarCategoria = async (url: string, dados: Categoria, setDados: (dados: Categoria) => void) => {
  try {
    const resposta = await api.post<Categoria>(url, dados);
    setDados(resposta.data);
  } catch (error) {
    console.error('Erro ao cadastrar categoria', error);
  }
};

// Função para atualizar uma categoria existente
export const atualizarCategoria = async (url: string, dados: Categoria, setDados: (dados: Categoria) => void, config?: AxiosRequestConfig) => {
  try {
    const resposta = await api.put<Categoria>(url, dados, config);
    setDados(resposta.data);
  } catch (error) {
    console.error('Erro ao atualizar categoria', error);
  }
};

// Função para deletar uma categoria
export const deletarCategoria = async (url: string, config?: AxiosRequestConfig) => {
  try {
    await api.delete(url, config);
  } catch (error) {
    console.error('Erro ao deletar categoria', error);
  }
};
