import React from 'react';
import { Link } from 'react-router-dom';

import imagem from '../assets/images/bitcoinn.png'
import '../assets/css/components/Cabecalho.css'

export default function Cabecalho() {
    return (

        <div className="container">
            <Link className="container-paginas" to="/">
                <img className="cabecalho__logo" src={imagem} alt="Logo Noticia" />
            </Link>
            <Link className="container-paginas" to="/">
                <p className="texto-paginas">Home</p>
            </Link>
            <Link className="container-paginas" to="/sobre">
                <p className="texto-paginas">Sobre</p>
            </Link>
            <Link className="container-paginas" to="/contato">
                <p className="texto-paginas">Contato</p>
            </Link>
        </div>
    )
}