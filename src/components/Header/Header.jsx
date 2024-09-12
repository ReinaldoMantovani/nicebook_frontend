import React from 'react'

import Navbar from '../Navbar/Navbar';
import SearchForm from '../SerachForm/SearchForm';

import "./header.css";

 const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex  flex-c text-center text-white'>
                <span className='header-title'><strong className="choise">Descubra histórias que vão transformar sua vida</strong><br></br>
                 No nosso site de recomendações de livros, você encontra as melhores sugestões para inspirar, emocionar e expandir seus horizontes.
                  Explore e deixe-se envolver por cada página. </span>
                <SearchForm/>
            </div>
        </header>
    </div>
  )
}

export default Header;