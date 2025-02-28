'use client'
import React from "react"
import styles from "./header.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <div className={styles.container}>
            <ul className={styles.ulheader}>
                <li className={styles.liheader}>
                    <Link href="/">Home</Link>
                </li>

                <li className={styles.liheader}><Link href="#">Médicos</Link>
                    <ul className={styles.submenu}>
                        <li>
                            <Link href="medicos">Listar registro</Link>
                        </li>

                        <li><Link href="#">Buscar</Link>
                        </li>

                        <li><Link href="#">Adicionar novo</Link>
                        </li>

                        <li><Link href="#">Editar</Link>
                        </li>

                        <li><Link href="#">Excluir</Link>
                        </li>
                        
                    </ul>
                </li>

                <li className={styles.liheader}><Link href="#">Pacientes</Link>
                <ul className={styles.submenu}>
                        <li>
                            <Link href="pacientes">Listar registro</Link>
                        </li>

                        <li><Link href="#">Buscar</Link>
                        </li>

                        <li><Link href="#">Adicionar novo</Link>
                        </li>

                        <li><Link href="#">Editar</Link>
                        </li>

                        <li><Link href="#">Excluir</Link>
                        </li>
                        
                    </ul>
                </li>

                <li className={styles.liheader}><Link href="#">Agendamentos</Link>
                <ul className={styles.submenu}>
                        <li>
                            <Link href="consultas">Listar consultas</Link>
                        </li>

                        <li><Link href="#">Agendar consulta</Link>
                        </li>

                        <li><Link href="#">Editar agendamento</Link>
                        </li>

                        <li><Link href="#">Cancelar</Link>
                        </li>
                        
                    </ul>
                </li>
            </ul>
        </div>
    )
}