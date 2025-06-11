import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chandan Malakar - Software Engineer</title>
        <meta name="description" content="Passionate software engineer from Nepal, currently pursuing AI and Data Science in Canada." />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  )
}
