import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Link from 'next/link'

export default function Home({posts}) {
  return (
    <div className='article-index'>
      {posts.map((post, index) => (
        <div className='article-index-entry'>
          <div className='article-index-date'>{post.frontMatter.date}, {post.frontMatter.year}</div>
          <div className='article-index-title'>
            <Link href={'/articles/'+post.slug} passHref key={index}>
              {post.frontMatter.title}
            </Link>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('articles'))
  
  const posts = files.map(filename => {
    const slug = filename.replace('.md','')
    const markdownWithMeta = fs.readFileSync(
      path.join('articles',filename), 'utf-8'
    )
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      slug,
      frontMatter,
    }
  })

  return {
    props: {
      posts ////TODO: posts.sort(sortByDate)
    }
  }
}