import Head from 'next/head'
import StandardLayout from '../components/StandardLayout'
import HeroComplete from '../components/HeroComplete'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chandan Malakar - Software Engineer</title>
        <meta name="description" content="Passionate software engineer from Nepal, currently pursuing AI and Data Science in Canada." />
      </Head>
      <StandardLayout>
        <HeroComplete />
      </StandardLayout>
    </>
  )
}
