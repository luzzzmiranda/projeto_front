'use client'
import React, { useState, useEffect } from "react"
import styles from "./pacientes.module.css"

const url = "https://api-clinica-2a.onrender.com"

export default function pacientes() {
    const [dadospacientes, setDadospacientes] = useState([])


    async function apresentarNomepacientes(nome) {
        try {
            if (nome == '') {
                const resposta = await fetch(`${url}/pacientes`)
                if (!resposta.ok) {
                    throw new Error('Erro ao buscar dados' + resposta.statusText)
                }
                const valores = await resposta.json()
                setDadospacientes(valores)
            } else {
                const resposta = await fetch(`${url}/pacientes?nome=${nome}`)
                if (!resposta.ok) {
                    throw new Error('Erro ao buscar dados' + resposta.statusText)
                }
                const valores = await resposta.json()
                setDadospacientes(valores)
            }
        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    useEffect(() => {
        apresentarNomepacientes("")
    }, [])

    return (
        <div className="container">
            {/* {dadospacientes.map((paciente) => (<p>{paciente.nome}</p>))} */}
            <div className="pesquisa">
                <input type="text" onChange={(e) => apresentarNomepacientes(e.target.value)} placeholder="Pesquisar paciente"/>
            </div>
            <table className="tabela">
                <thead className="cabecalho">
                    <tr className="linha">
                        <th>id</th>
                        <th>nome</th>
                        <th>telefone</th>
                        <th>email</th>
                        <th>cpf</th>
                    </tr>
                </thead>
                <tbody className="corpo">
                    {dadospacientes.map((paciente) => (
                        <tr key={paciente.id} className="linha_corpo">
                            <td>{paciente.id}</td>
                            <td>{paciente.nome}</td>
                            <td>{paciente.telefone}</td>
                            <td>{paciente.email}</td>
                            <td>{paciente.cpf}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}