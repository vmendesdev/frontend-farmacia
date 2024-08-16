import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {

  return (
             
    <div className= 'w-full bg-green-900 text-white flex justify-center py-4'>
                <div className='container flex justify-between text-lg'>
                <div className='text-2xl font-bold uppercase'> Farmacia </div>
                <div className='flex gap-4'>
                                <div className='hover:underline'>Categorias</div>
                                <div className='hover:underline'>Produtos</div>
                </div>
    </div>
    </div>
    
  )
}
  


export default Navbar
