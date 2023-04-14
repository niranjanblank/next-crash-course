import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div>
    <Head>
      <title>Recipe API</title>
      <meta name='keywords' content='web'></meta>
    </Head>
    <h1>
      Welcome to recipe API
    </h1>
  </div>
  )
}
