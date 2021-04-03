import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        here is contact
      </main>

    </div>
  )
}

const ListOfMemeber = () => {
  return (
    <div>
      <ul>
        {customers.map((cust, i) => {
          return (
            <li key={i}>{cust.id} : {cust.name}</li>
          )
        })}
      </ul>
    </div>
  )
}