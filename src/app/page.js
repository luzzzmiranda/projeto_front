import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container} >
      <div className={styles.conteudo}>
        <h2>
          Bem-vindo a clínica!
        </h2> 
        <Image className={styles.imagem} src='/administracao-clinica-medica.jpg' width={200} height={150} alt="imagem clinica"/>
      </div>
    </div>
  );
}
