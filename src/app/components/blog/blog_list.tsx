import BlogCard from './blog_card';

type Post = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
          slug={post.slug}
        />
      ))}
    </div>
  );
};

export default BlogList;
