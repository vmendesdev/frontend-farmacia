import React from "react";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Home from "./componentes/home/Home";
import Navbar from "./componentes/navbar/Navbar";
import Footer from "./componentes/footer/Footer";
import './App.css';
import ListarCategorias from "./componentes/categoria/listarCategoria/ListarCategorias";
import FormCategoria from "./componentes/categoria/formCategoria/FormCategoria";

function App () {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<ListarCategorias />} /> 
            <Route path="/" element={<FormCategoria />} />

        </Routes>
        </div>
        <Footer />
        </BrowserRouter>
    </>

  );
}
export default App;