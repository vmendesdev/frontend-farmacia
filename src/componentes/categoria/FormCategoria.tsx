import React, { useState, useEffect } from 'react';
import { Categoria, cadastrarCategoria, atualizarCategoria } from '../../services/categoriaService';

interface FormCategoriaProps {
  categoriaAtual?: Categoria;
  onSave: () => void; 
}

const FormCategoria: React.FC<FormCategoriaProps> = ({ categoriaAtual, onSave }) => {
  const [categoria, setCategoria] = useState<Categoria>({
    nome: categoriaAtual?.nome || '',
    descricao: categoriaAtual?.descricao || ''
  });

  useEffect(() => {
    if (categoriaAtual) {
      setCategoria({
        nome: categoriaAtual.nome,
        descricao: categoriaAtual.descricao
      });
    }
  }, [categoriaAtual]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (categoriaAtual?.id) {
        await atualizarCategoria(`/categorias/${categoriaAtual.id}`, categoria, (dados) => console.log(dados));
      } else {
        await cadastrarCategoria('/categorias', categoria, (dados) => console.log(dados));
      }
      onSave(); // Chama a função passada como prop para atualizar a lista de categorias
    } catch (error) {
      console.error('Erro ao salvar categoria', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={categoria.nome}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div className="mt-4">
        <label>Descrição:</label>
        <textarea
          name="descricao"
          value={categoria.descricao}
          onChange={handleChange}
          className="border p-2 w-full"
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">
        {categoriaAtual?.id ? 'Atualizar' : 'Cadastrar'}
      </button>
    </form>
  );
};

export default FormCategoria;
