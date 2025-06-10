import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}
