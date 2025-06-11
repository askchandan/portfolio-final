import Head from 'next/head'
import Layout from '../components/Layout'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Chandan Malakar</title>
        <meta name="description" content="Get in touch with Chandan Malakar for collaboration opportunities." />
      </Head>
      <Layout>
        <Contact />
      </Layout>
    </>
  )
}
