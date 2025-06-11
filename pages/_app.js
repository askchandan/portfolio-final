import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

// Fast and ultra smooth fade transition without theme flashing
const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
}

const pageTransition = {
  type: "tween",
  ease: "easeInOut", // Simple smooth easing for fastest performance
  duration: 0.2 // Fast transition for seamless navigation
}

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>      <Head>        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Optimized image preloading for better performance */}
        <link rel="preload" as="image" href="/my-photo.jpg?v=5&t=20250611155000" />
        <link rel="preload" as="image" href="/my-photo2.jpg" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={true}>        <div className={inter.className}>
          <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
            <motion.div
              key={router.asPath}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen page-transition"
              style={{
                willChange: 'opacity',
                transform: 'translateZ(0)',
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
