import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';

import imagem from '../assets/images/logonoticias.svg'
import '../assets/css/components/Cabecalho.css'

export default function Cabecalho() {
    return (
        <div className="container">
            <Link className="cabecalho__logo" to="/">
                <image src={imagem} alt="Logo Noticia"/>
                <h1>oi</h1>
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