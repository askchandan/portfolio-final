import Head from 'next/head'
import StandardLayout from '../../components/StandardLayout'
import BlogList from '../../components/BlogList'

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog - Chandan Malakar</title>
        <meta name="description" content="Read articles and insights from Chandan Malakar on data science, machine learning, and technology." />
      </Head>
      <StandardLayout>
        <BlogList />
      </StandardLayout>
    </>
  )
}
