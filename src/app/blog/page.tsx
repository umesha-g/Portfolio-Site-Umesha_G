import GoToTopButton from '../components/go_to_top_button';
import React from 'react';
import BlogNavbar from '../components/blog/blog_navbar';
import BlogHero from '@/app/components/blog/blog_hero';
import BlogList from '@/app/components/blog/blog_list';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Blog_Footer from '@/app/components/blog/blog_footer';

type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
}

export async function generateStaticParams() {
  return [{}]
}

async function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'public/data/blog_posts')
  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      ...(data as Omit<Post, 'slug'>),
    }
  })

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export default async function BlogPage() {
  const allPosts = await getPosts()
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  
  return (
    <main  className={` bg-neutral-950 font-jost min-h-screen relative text-white` }>
      
      <GoToTopButton/>
      <BlogNavbar/> 

      <section id="BlogHome" className=' text-center items-center justify-center flex m-5 '>
          <div className="my-20 lg:mx-10 justify-center flex flex-col p-5 ">
            {heroPost && (
              <BlogHero
                title={heroPost.title}
                date={heroPost.date}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
            {morePosts.length > 0 && <BlogList posts={morePosts} />}
          </div>
       
      </section>
      <section>
        <Blog_Footer/>
      </section>
    
    </main>
  )
}
    
