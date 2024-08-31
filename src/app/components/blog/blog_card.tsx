import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const BlogCard = ({ title,  date, excerpt, slug }: Props) => {
  return (
    <div className="border-neutral-500 my-2 mx-2 lg:mx-3 border-t-2 rounded-sm overflow-hidden hover:border-transparent hover:bg-neutral-700 transition-colors duration-300">
      <Link href={`/blog/${slug}`}>
       {/* <div className="relative h-48 w-full">
           <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            layout="fill"
            objectFit="cover"
          /> 
        </div>*/}
        <div className="p-10">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-neutral-200 text-sm mb-4">{date}</p>
          <p className="text-neutral-300 mb-4">{excerpt}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
