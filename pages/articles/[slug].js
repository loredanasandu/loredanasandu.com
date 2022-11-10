import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link'


export default function ArticlePage({frontMatter, slug, content}) {
    return (
        <div className='article-page'>
            <h1>{frontMatter.title}</h1>
            <div className='article-date'>{frontMatter.date}, {frontMatter.year}</div>
            <div className='article-body'>
                <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
            </div>
        </div>
    )

}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('articles'))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md','')
        }
    }))
    

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: {slug}}) {
    const markdownWithMeta = fs.readFileSync(path.join('articles', slug + '.md'), 'utf-8')
    const {data: frontMatter, content} = matter(markdownWithMeta)
    
    return {
        props:{
            frontMatter,
            slug,
            content
        }
    }
} 