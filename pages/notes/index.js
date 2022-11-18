import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'

import Link from 'next/link'

export default function NoteIndex({notes}) {
  notes.sort((note1, note2) => note2.frontMatter.id - note1.frontMatter.id)
  return (
    <div className='notes-index'>
      <p className='notes-comment'>Notes and insights taken from the content I consume.</p>
      {notes.map((note, index) => {
        if (note.frontMatter.translations.length === 0){
          return (
            <div className='notes-index-entry'>
              <hr/>  
              <h2 className='notes-index-title'><Link href={'/notes/'+note.slug} passHref key={index}>{note.frontMatter.title}</Link></h2>
              <div className='notes-index-date'>{note.frontMatter.date}, {note.frontMatter.year}</div>
              <div className='notes-index-body'>
                  <div dangerouslySetInnerHTML={{__html: note.html_content}}></div>
              </div>
            </div>
          )
        } else{
          return (
            <div className='notes-index-entry'>
              <hr/>  
              <h2 className='notes-index-title'><Link href={'/notes/'+note.slug} passHref key={index}>{note.frontMatter.title}</Link></h2>
              <div className='notes-index-date'>{note.frontMatter.date}, {note.frontMatter.year}</div>
              <div className='notes-index-translations'>Translations: {note.frontMatter.translations.map( (translation) => (
                  <Link href={`${translation.url}`} passHref key={translation.language}>{`${translation.language}`}</Link>
                )).reduce((prev, curr) => [prev, " | ", curr])}
              </div>
              <div className='notes-index-body'>
                  <div dangerouslySetInnerHTML={{__html: note.html_content}}></div>
              </div>
            </div>
          )
        }})}
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('notes','en'))
  
  const notes = files.map(filename => {
    const slug = filename.replace('.md','')
    const markdownWithMeta = fs.readFileSync(
      path.join('notes','en',filename), 'utf-8'
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