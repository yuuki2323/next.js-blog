import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type ArticleListProps = {
  articles:Article[];
}
const ArticleList = ({articles}:ArticleListProps) => {
  return (
    <div>
      {articles.map((article)=>(
      <article className="shadow my-4 " key={article.id}>
      <Link href="#" className="hover:opacity-75">
        <Image
          src="https://source.unsplash.com/collection/1346951/1000x500?sig=54"
          alt="記事の写真"
          width={1200}
          height={300}
        />
      </Link>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link href="#" className="text-blue-700 pb-4 font-bold">
          technology
        </Link>
        <Link
          href="#"
          className="text-slate-900 text-3xl hover:text-gray-500 pb-4"
        >
          Next.jsの勉強中
        </Link>
        <p className="text-sm pb-3 text-slate-900">Published on 2023/08/29</p>
        <Link href="#" className="text-slate-900 pb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          sit praesentium quidem ullam nisi illum quam sunt voluptatibus
          facilis, sint debitis necessitatibus velit doloremque repudiandae
          veniam eligendi hic. Repellat, hic?
        </Link>
        <Link href="#" className="text-pink-800 hover:text-black">
          続きを読む
        </Link>
      </div>
    </article>
      ))}



    </div>
  );
};

export default ArticleList;
