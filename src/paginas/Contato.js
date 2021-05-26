import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

import '../assets/css/paginas/Contato.css'

export default function Contato() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [texto, setTexto] = useState('')

    function enviar(e) {
        e.preventDefault()

    }

    return (
        <form className="containercontato" onSubmit={enviar}>
            {/* <section className="containercampos">
                
            </section> */}
            <section className="preenchercontato">
                <label className="camposLabel">Nome</label>
                <input className="campoNome" />

                <label className="camposLabel">Email</label>
                <input className="campoEmail" />

                <label className="camposLabel">Telefone</label>
                <input className="campoEmail" />

                <label className="camposLabel">Texto</label>
                <textarea className="campoTexto" />

                <button type="submit">Enviar</button>
            </section>

        </form >
    )
}