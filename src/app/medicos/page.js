'use client'
import React, { useState, useEffect } from "react"
import styles from "./medicos.module.css"

const url = "https://api-clinica-2a.onrender.com"

export default function medicos() {
    const [dadosmedicos, setDadosMedicos] = useState([])
    const [dadosmedicospornome, setDadosMedicosPorNome] = useState([])

    async function apresentarTodosMedicos() {
        try {
            const resposta = await fetch(`${url}/medicos`)
            if (!resposta.ok) {
                throw new Error('Erro ao buscar dados' + resposta.statusText)
            }
            const valores = await resposta.json()
            setDadosMedicos(valores)
        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    async function apresentarNomeMedicos(nome) {
        try {
            const resposta = await fetch(`${url}/medicos?nome=${nome}`)
            if (!resposta.ok) {
                throw new Error('Erro ao buscar dados' + resposta.statusText)
            }
            const valores = await resposta.json()
            setDadosMedicosPorNome(valores)
        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    useEffect(()=>{
        apresentarTodosMedicos()
        apresentarNomeMedicos("")
    },[])

    return (
        <div>
            {/* {dadosmedicos.map((medico) => (<p>{medico.nome}</p>))} */}
            <div>
                <input type="text" onChange={(e)=> apresentarNomeMedicos(e.target.value)}/>
                <p>{dadosmedicospornome.map((medicos)=>(
                    medicos.nome
                ))}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>telefone</th>
                        <th>email</th>
                        <th>especialidade</th>
                    </tr>
                </thead>
                <tbody>
                    {dadosmedicos.map((medico)=>(
                        <tr key={medico.id}>
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