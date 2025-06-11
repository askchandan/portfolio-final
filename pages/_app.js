import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

// Minimal sleek fade transition - clean and aesthetic
const pageVariants = {
  initial: {
    opacity: 0.85
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0.85
  }
}

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.12 // Ultra fast and sleek
}

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>      <Head>        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Optimized image preloading for better performance */}
        <link rel="preload" as="image" href="/my-photo.jpg?v=6&t=20250611200000" />
        <link rel="preload" as="image" href="/my-photo2.jpg" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={true}>        <div className={inter.className}>
          <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>            <motion.div
              key={router.asPath}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen page-transition"
              style={{
                willChange: 'opacity',
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </div>
      </ThemeProvider>
    </>
  )
}
