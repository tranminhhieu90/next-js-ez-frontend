import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  console.log('oath', paths)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  console.log('params44444', params)
  const postData = getPostData(params.id)
  console.log('pót praram', postData)
  return {
    props: {
      postData
    }
  }
}