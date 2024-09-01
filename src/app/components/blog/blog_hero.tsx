"use client";

import Link from 'next/link';
import Image from 'next/image';
import AnimatedDivision from '../animated_div';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const BlogHero = ({ title,  date, excerpt,  slug }: Props) => {
  return (
    <AnimatedDivision className="mb-8 p-6 lg:p-14 lg:max-w-6xl 2xl:max-w-7xl self-center justify-center flex flex-col rounded-sm border-t-2 border-red-1">

      <Link href={`/blog/${slug}`}  className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-6 md:mb-10">
        <div>
          <h3 className="my-4 hover:text-neutral-500 text-3xl lg:text-5xl leading-tight">
              {title}
          </h3>
          <div className="my-4 md:mb-0 text-lg">
            <time dateTime={date}>{date}</time>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-neutral-400 my-4">{excerpt}</p>
          <div className="flex items-center">
            <div className="text-xl font-bold"></div>
          </div>
        </div>
      </Link>
    </AnimatedDivision>
  );
};

export default BlogHero;
