import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Categoria, listarCategorias, deletarCategoria } from '../../services/categoriaService';


const DeletarCategoria: React.FC = () => {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();


  async function buscarPorId(id: string) {
    try {
      const resposta = await buscarPorId(`/categorias/${id}`);
      setCategoria //(resposta.data)
    } catch (error) {
      console.error("Erro ao buscar a categoria:", error);
      alert('Erro ao buscar a categoria.'); 
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);


  function retornar() {
    navigate("/categorias");
  }

  async function deletarCategoria() {
    try {
      await DeletarCategoria(`/categorias/${id}`);
      alert('Categoria apagada com sucesso');
      retornar();
    } catch (error) {
      console.error("Erro ao deletar a categoria:", error);
      alert('Erro ao apagar a categoria.');
    }
  }

  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Categoria</header>
        <div className="p-4">
          <p className='text-xl h-full'>{categoria.nome}</p>
          <p>{categoria.descricao}</p>
        </div>
        <div className="flex">
          <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
          <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarCategoria}>
            Sim
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletarCategoria;
