import React, { useEffect, useState } from 'react';
import { listarCategorias } from '../../services/categoriaService';
import CardCategoria from './CardCategoria';

interface Categoria {
  id: number;
  nome: string;
  descricao: string;
}

const ListarCategorias: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    //listarCategorias('/categorias');
  }, []);

  const handleDelete = (id: number) => {
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Listar Categorias</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {categorias.map(categoria => (
          <CardCategoria key={categoria.id} categoria={categoria} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default ListarCategorias;
