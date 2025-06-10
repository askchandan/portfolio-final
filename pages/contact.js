import Head from 'next/head'
import StandardLayout from '../components/StandardLayout'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Chandan Malakar</title>
        <meta name="description" content="Get in touch with Chandan Malakar for collaboration opportunities." />
      </Head>
      <StandardLayout>
        <Contact />
      </StandardLayout>
    </>
  )
}
