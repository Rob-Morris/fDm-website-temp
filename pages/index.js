import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>funDAOmental</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="funDAOmental" />
        <p className="description">
          <img src="/gravitymap/2048x2048.gif" alt="Gravity Map" className="" />
        </p>
      </main>

      <Footer />
    </div>
  )
}
