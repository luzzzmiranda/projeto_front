'use client'
import React, { useState, useEffect } from "react"
import styles from "./consultas.module.css"
import pacientes from "../pacientes/page"

const url = "https://api-clinica-2a.onrender.com"

export default function consultas() {
    const [dadosconsultas, setDadosconsultas] = useState([])


    async function apresentarconsultas() {
        try {
            const resposta = await fetch(`${url}/consultas`)
            if (!resposta.ok) {
                throw new Error('Erro ao buscar dados' + resposta.statusText)
            }
            const valores = await resposta.json()
            setDadosconsultas(valores)
        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    async function pesquisarMedico(medico) {
        try {
            if (medico == '') {
                const resposta = await fetch(`${url}/consultas`)
                if (!resposta.ok) {
                    throw new Error('Erro ao buscar dados' + resposta.statusText)
                }
                const valores = await resposta.json()
                setDadosconsultas(valores)
            } else {
                const resultadosFiltrados = dadosconsultas.filter(consulta => consulta.medico.toLowerCase().includes(medico.toLowerCase()))
                if (resultadosFiltrados.length > 0) {
                    setDadosconsultas(resultadosFiltrados)
                } else {
                    const resposta = await fetch(`${url}/consultas`)
                    if (!resposta.ok) {
                        throw new Error('Erro ao buscar dados' + resposta.statusText)
                    }
                    const valores = await resposta.json()
                    setDadosconsultas(valores)
                }
            }

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    async function pesquisarPaciente(paciente) {
        try {
            if (paciente == '') {
                const resposta = await fetch(`${url}/consultas`)
                if (!resposta.ok) {
                    throw new Error('Erro ao buscar dados' + resposta.statusText)
                }
                const valores = await resposta.json()
                setDadosconsultas(valores)
            } else {
                const resultadosFiltrados = dadosconsultas.filter(consulta => consulta.paciente.toLowerCase().includes(paciente.toLowerCase()))
                if (resultadosFiltrados.length > 0) {
                    setDadosconsultas(resultadosFiltrados)
                } else {
                    const resposta = await fetch(`${url}/consultas`)
                    if (!resposta.ok) {
                        throw new Error('Erro ao buscar dados' + resposta.statusText)
                    }
                    const valores = await resposta.json()
                    setDadosconsultas(valores)
                }

            }

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    useEffect(() => {
        apresentarconsultas()
        pesquisarMedico('')
        pesquisarPaciente('')
    }, [])

    return (
        <div className="container">
            {/* {dadosconsultas.map((medico) => (<p>{medico.nome}</p>))} */}
            <div className="pesquisa">
                <input type="text" onChange={(e) => pesquisarMedico(e.target.value)} placeholder="Pesquisar médico" />
                <input type="text" onChange={(e) => pesquisarPaciente(e.target.value)} placeholder="Pesquisar paciente" />

            </div>
            <table className="tabela">
                <thead className="cabecalho">
                    <tr className="linha">
                        <th>id</th>
                        <th>especialidade</th>
                        <th>medico</th>
                        <th>paciente</th>
                        <th>tipo</th>
                    </tr>
                </thead>
                <tbody className="corpo">
                    {dadosconsultas.map((consulta) => (
                        <tr key={consulta.id} className="linha_corpo">
                            <td>{consulta.id}</td>
                            <td>{consulta.especialidade}</td>
                            <td>{consulta.medico}</td>
                            <td>{consulta.paciente}</td>
                            <td>{consulta.tipo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}