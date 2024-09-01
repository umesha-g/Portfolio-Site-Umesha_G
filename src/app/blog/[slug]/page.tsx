import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import markdownStyles from "./markdown-styles.module.css";
import SlugNavbar from './slug_navbar'
import { Calendar, Clock, User } from 'lucide-react';

type Post = {
  slug: string
  title: string
  date: string
  content: string
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'public/data/blog_posts')
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }))
}

async function getPost(slug: string) {
  const fullPath = path.join(process.cwd(), 'public/data/blog_posts', `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    content: contentHtml,
    ...(data as Omit<Post, 'slug' | 'content'>),
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  return (
    <main>
      <SlugNavbar/>
    <section className=" min-h-screen p-6 pt-20 lg:p-20 lg:pt-28 xl:px-52 2xl:px-80 flex flex-col text-neutral-300 bg-neutral-950">

      <article className="container self-center border-l-2 border-red-1 min-h-fit lg:min-h-dvh p-6 flex flex-col lg:p-20 rounded-sm  text-neutral-300 bg-neutral-900">
        <h1 className="xl:text-5xl text-neutral-500 lg:text-3xl text-2xl text-left font-bold mb-4 lg:mb-8">{post.title}</h1>
        <div className="flex items-center text-sssm lg:text-base justify-start space-x-6 mb-10 lg:mb-6 text-neutral-200 ">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            <span>Umesha G</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{post.date}</span>
          </div>
        </div>
        {/* <hr className="mb-5 mx-10 border-neutral-200 sm:mx-auto lg:my-8 z-10"  /> */}
        <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </section>
    </main>
  )
}