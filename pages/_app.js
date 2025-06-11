import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

// Ultra minimal smooth fade transition - no movement
const pageVariants = {
  initial: {
    opacity: 0.95
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0.95
  }
}

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.15 // Slightly longer for smoother feel
}

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
        <div className={inter.className}>          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={router.asPath}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen page-transition"
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </div>
      </ThemeProvider>
    </>
  )
}
