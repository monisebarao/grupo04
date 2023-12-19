import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
  <section>
  <body>
    
      <header className={styles.header} >
        <h1 className={styles.title}>
          Meu currículo
        </h1>
      </header>

      
        <section className={styles.body} >
        <nav className={styles.nav} >
        <div>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/">
              Acadêmico
            </Link>
          </li>
          <li>
            <Link href="/">
              Contato
            </Link>
          </li>
        </ul>
      </div>
        </nav>

        <article className={styles.article} >
          <h2>
            Joana da Silva
          </h2>
          <p>Sexo feminino;
            28 anos;
            Natural de jundiaí-SP;</p>
           <p> Endereço: Rua das Flores, nº 123 - Paulínia-SP</p>
            <p>joana.silva@email.com</p>
            <p>(11) 98765-4321
          </p>
          <br/>
          <br/>
          <p  >Busco uma oportunidade para aplicar meus conhecimentos e habilidades em um ambiente desafiador, contribuindo para o crescimento da empresa e desenvolvimento profissional.</p>
          <p>Além do meu interesse pela área administrativa, sou apaixonada por leitura, viagens e práticas esportivas, que contribuem para meu equilíbrio pessoal e profissional.</p>
        </article>

        <aside className={styles.aside} >
        <div>
      <Image
        src="/fotoperfil-removebg-preview.png"
        alt="Minha Imagem"
        width={200}
        height={150}
        className={styles.img}
    
      />
    </div>
        </aside>
        </section>

        <footer className={styles.footer}>
          <div className={styles.colunas}>
          <Image
        src='/WhatsApp Image 2023-12-19 at 10.56.36 AM.jpeg'
        alt="Minha Imagem"
        width={50}
        height={50}
        className={styles.logo}
    
      />
          
            
         

          <h2 className={styles.coluna} >
            GRUPO 04
          </h2>

          <div className={styles.coluna} >
            <p>Monise Barão</p>
            <p>Maria Ribeiro</p>
            <p>Ângelo</p>
          </div>

          
          </div>
        </footer>


      </body>
    </section>
    
           
          
       
  )
}
