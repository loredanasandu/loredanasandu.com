import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link'


export default function NotePage({frontMatter, slug, content}) {
    return (
        <div className='note-page'>
            <h1>{frontMatter.title}</h1>
            <div className='note-date'>Note taken on {frontMatter.date}, {frontMatter.year}</div>
            <div className='note-body'>
                <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
            </div>
        </div>
    )

}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('notes'))
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
    const markdownWithMeta = fs.readFileSync(path.join('notes', slug + '.md'), 'utf-8')
    const {data: frontMatter, content} = matter(markdownWithMeta)
    
    return {
        props:{
            frontMatter,
            slug,
            content
        }
    }
} 