import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'

import Link from 'next/link'

export default function NoteIndex({notes}) {
  return (
    <div className='notes-index'>
      <p className='notes-comment'>Notes and insights taken from the content I consume.</p>
      {notes.map((note, index) => (
        <div className='notes-index-entry'>
          <hr/>  
          <h2 className='notes-index-title'><Link href={'/notes/'+note.slug} passHref key={index}>{note.frontMatter.title}</Link></h2>
          <div className='notes-index-date'>{note.frontMatter.date}, {note.frontMatter.year}</div>
          <div className='notes-index-body'>
              <div dangerouslySetInnerHTML={{__html: note.html_content}}></div>
          </div>
            
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('notes'))
  
  const notes = files.map(filename => {
    const slug = filename.replace('.md','')
    const markdownWithMeta = fs.readFileSync(
      path.join('notes',filename), 'utf-8'
    )
    const {data: frontMatter, content} = matter(markdownWithMeta)
    const html_content = marked(content)

    return {
      slug,
      frontMatter,
      html_content
    }
  })

  return {
    props: {
      notes ////TODO: posts.sort(sortByDate)
    }
  }
}