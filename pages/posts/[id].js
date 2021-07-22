import Posts from '../../lib/posts'
import { getAllPostIds, getPostData } from '../../lib/posts'



export async function getStaticPaths() {
    const paths = await getAllPostIds()
    return {    
      paths,
      fallback: false
    }
}
export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id)
    // ...
    return {
        props: {
          postData
        }
      }
  }
export default function Post({postData}) {
    return <><h1>{postData.id}</h1> <h2>{postData.title}</h2> <p>{postData.body}</p></>
  }
