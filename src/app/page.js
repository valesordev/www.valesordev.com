import Head from 'next/head'
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coming Soon - Valesor Development</title>
        <meta name="description" content="Valesor Development is coming soon. Stay tuned!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming Soon
        </h1>
        <p className={styles.description}>
          Our website is under construction. We will be here soon with our new awesome site, subscribe to be notified.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Contact us at <a href="mailto:info@valesordev.com">info@valesordev.com</a></p>
      </footer>
    </div>
  );
}
