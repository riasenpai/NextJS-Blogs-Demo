import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getSortedPostsData() {
    const allPostsData =  await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
    console.log("logging response",allPostsData)
    return allPostsData
}
export async function getAllPostIds() {
  let allPostsData =  await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  // const items = [1,2,3,4]
  // items = items.map(function(item){
  //   return item*2
  // })
  // console.log(items)
  allPostsData =  allPostsData.map(postData => {
    return {
      params:{
        id: postData.id.toString()
      }
    }
  })
  console.log(allPostsData)
  return allPostsData;
}

export async function getPostData(id){
    return await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json()
}