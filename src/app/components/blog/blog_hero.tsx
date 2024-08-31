import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const BlogHero = ({ title,  date, excerpt,  slug }: Props) => {
  return (
    <div className="mb-8 p-14 rounded-sm border-t-2 border-red-1">

      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-6 md:mb-10">
        <div>
          <h3 className="my-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/blog/${slug}`} className="hover:text-neutral-500">
              {title}
            </Link>
          </h3>
          <div className="my-4 md:mb-0 text-lg">
            <time dateTime={date}>{date}</time>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed my-4">{excerpt}</p>
          <div className="flex items-center">
            <div className="text-xl font-bold"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
