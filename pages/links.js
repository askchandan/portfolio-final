import Head from 'next/head'
import StandardLayout from '../components/StandardLayout'
import Links from '../components/LinksSimple'

export default function LinksPage() {
  return (
    <>
      <Head>
        <title>Links - Chandan Malakar</title>
        <meta name="description" content="Important links and resources from Chandan Malakar." />
      </Head>
      <StandardLayout>
        <Links />
      </StandardLayout>
    </>
  )
}
