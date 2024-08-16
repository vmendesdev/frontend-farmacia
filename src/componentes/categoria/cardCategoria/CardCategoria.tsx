import React from 'react';
import { Link } from 'react-router-dom';
import { Categoria } from '../services/categoriaService';

interface CardCategoriaProps {
  categoria: Categoria;
  onDelete: (id: number) => void; // Função chamada ao deletar a categoria
}

const CardCategoria: React.FC<CardCategoriaProps> = ({ categoria, onDelete }) => {
  const handleDelete = () => {
    if (categoria.id) {
      onDelete(categoria.id);
    }
  };

  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div className='p-4'>
        <h4 className='text-lg font-semibold uppercase'>{categoria.nome}</h4>
        <p>{categoria.descricao}</p>
      </div>
      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <button 
          onClick={handleDelete} 
          className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center py-2'>
          Deletar
        </button>
      </div>
    </div>
  );
};

export default CardCategoria;
