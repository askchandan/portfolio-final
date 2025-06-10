import Head from 'next/head'
import { useRouter } from 'next/router'
import StandardLayout from '../../components/StandardLayout'
import BlogPost from '../../components/BlogPost'

export default function BlogPostPage() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Head>
        <title>Blog Post - Chandan Malakar</title>
        <meta name="description" content="Read this blog post by Chandan Malakar." />
      </Head>
      <StandardLayout>
        <BlogPost slug={slug} />
      </StandardLayout>
    </>
  )
}
