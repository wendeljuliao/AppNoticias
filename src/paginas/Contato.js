import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

import '../assets/css/paginas/Contato.css'

export default function Contato() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [texto, setTexto] = useState('')

    function enviar(e) {
        e.preventDefault()
        console.log({nome,email,telefone,texto})
    }

    return (
        <form className="containercontato" onSubmit={enviar}>
            {/* <section className="containercampos">
                
            </section> */}
            <section className="preenchercontato">
                <label className="camposLabel">Nome</label>
                <input className="campoNome" type="name" onChange={(e) => setNome(e.target.value)} />

                <label className="camposLabel">Email</label>
                <input className="campoEmail" type="email" onChange={(e) => setEmail(e.target.value)} />

                <label className="camposLabel">Telefone</label>
                <input className="campoEmail" type="number" onChange={(e) => setTelefone(e.target.value)} />

                <label className="camposLabel">Texto</label>
                <textarea className="campoTexto" onChange={(e) => setTexto(e.target.value)} />

                <button className="botaoContato" type="submit">Enviar</button>
            </section>

        </form >
    )
}