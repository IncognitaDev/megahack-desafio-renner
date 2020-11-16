import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header button/>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Tendências</h1>

        <div className={styles.slider}>
          <img className={styles.item} src='/option1.png' alt="Roupa Renner" />
          <img className={styles.item} src='/option2.png' alt="Roupa Renner" />
          <img className={styles.item} src='/option3.png' alt="Roupa Renner" />
          <img className={styles.item} src='/option4.png' alt="Roupa Renner" />
          <img className={styles.item} src='/option5.png' alt="Roupa Renner" />
        </div>

        <h1 className={styles.recommendation_title}>Sugestões para você</h1>
        <div className={styles.slider}>
          <img className={styles.recommendation} src='/option6.png' alt="Sugestão Renner" />
          <img className={styles.recommendation} src='/option7.png' alt="Sugestão Renner" />
          <img className={styles.recommendation} src='/option8.png' alt="Sugestão Renner" />
          <img className={styles.recommendation} src='/option9.png' alt="Sugestão Renner" />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Feito com ❤️ pelo Time 14</p>
      </footer>
    </div>
  )
}
