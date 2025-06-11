import Head from 'next/head'
import Layout from '../components/Layout'
import Links from '../components/Links'

export default function LinksPage() {
  return (
    <>
      <Head>
        <title>Links - Chandan Malakar</title>
        <meta name="description" content="Important links and resources from Chandan Malakar." />
      </Head>
      <Layout>
        <Links />
      </Layout>
    </>
  )
}
