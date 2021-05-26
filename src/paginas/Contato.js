import React from 'react';

import TextField from '@material-ui/core/TextField';

import '../assets/css/paginas/Contato.css'

export default function Contato() {
    return (
        <div className="containercontato">
            {/* <section className="containercampos">
                
                <p className="campos">a</p>
            </section> */}
            <section className="preenchercontato">
                <label className="camposLabel">Nome</label>
                <input className="campoNome"/>

                <label className="camposLabel">Email</label>
                <input className="campoEmail"/>

                <label className="camposLabel">Texto</label>
                <textarea className="campoTexto"/>
            </section>

        </div >
    )
}