import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getSortedPostsData() {
    const allPostsData =  await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
    console.log("logging response",allPostsData)
    return allPostsData
}
