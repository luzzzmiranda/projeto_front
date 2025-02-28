'use client'
import React, { useState, useEffect } from "react"
import styles from "./medicos.module.css"

const url = "https://api-clinica-2a.onrender.com"

export default function medicos() {
    const [dadosmedicos, setDadosMedicos] = useState([])


    async function apresentarNomeMedicos(nome) {
        try {
            if (nome == '') {
                const resposta = await fetch(`${url}/medicos`)
                if (!resposta.ok) {
                    throw new Error('Erro ao buscar dados' + resposta.statusText)
                }
                const valores = await resposta.json()
                setDadosMedicos(valores)
            } else {
                const resposta = await fetch(`${url}/medicos?nome=${nome}`)
                if (!resposta.ok) {
                    throw new Error('Erro ao buscar dados' + resposta.statusText)
                }
                const valores = await resposta.json()
                setDadosMedicos(valores)
            }
        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    useEffect(() => {
        apresentarNomeMedicos("")
    }, [])

    return (
        <div className="container">
            {/* {dadosmedicos.map((medico) => (<p>{medico.nome}</p>))} */}
            <div className="pesquisa">
                <input type="text" onChange={(e) => apresentarNomeMedicos(e.target.value)} placeholder="Pesquisar médico"/>
            </div>
            <table className="tabela">
                <thead className="cabecalho">
                    <tr className="linha">
                        <th>id</th>
                        <th>nome</th>
                        <th>telefone</th>
                        <th>email</th>
                        <th>especialidade</th>
                    </tr>
                </thead>
                <tbody className="corpo">
                    {dadosmedicos.map((medico) => (
                        <tr key={medico.id} className="linha_corpo">
                            <td>{medico.id}</td>
                            <td>{medico.nome}</td>
                            <td>{medico.telefone}</td>
                            <td>{medico.email}</td>
                            <td>{medico.especialidade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}