import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Link from 'next/link'

export default function Home({posts}) {
  //TEMPORARILY COMMENTED OUT posts.sort((post1, post2) => post2.frontMatter.id - post1.frontMatter.id)
  return (
    <div className='article-index'>
      <p className='articles-comment'>There are no articles yet.</p>
      {/*TEMPORARILY COMMENTED OUT {posts.map((post, index) => (
        <div className='article-index-entry'>
          <div className='article-index-date'>{post.frontMatter.date}, {post.frontMatter.year}</div>
          <div className='article-index-title'>
            <Link href={'/articles/'+post.slug} passHref key={index}>
              {post.frontMatter.title}
            </Link>
          </div>
          
        </div>
      ))} */}
    </div>
  )
}

/* TEMPORARILY COMMENTED OUT
export async function getStaticProps() {
  const files = fs.readdirSync(path.join('articles', 'en'))
  
  const posts = files.map(filename => {
    const slug = filename.replace('.md','')
    const markdownWithMeta = fs.readFileSync(
      path.join('articles','en', filename), 'utf-8'
    )
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      slug,
      frontMatter,
    }
  })

  return {
    props: {
      posts
    }
  }
} */
