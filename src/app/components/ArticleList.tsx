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
      <Link href={`articles/${article.id}`} className="hover:opacity-75">
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
          href={`articles/${article.id}`}
          className="text-slate-900 text-3xl hover:text-gray-500 pb-4"
        >
          {article.title}
        </Link>
        <p className="text-sm pb-3 text-slate-900">Published on {article.contentAt}</p>
        <Link href={`articles/${article.id}`} className="text-slate-900 pb-6">
          {article.content}
        </Link>
        <Link href={`articles/${article.id}`} className="text-pink-800 hover:text-black">
          続きを読む
        </Link>
      </div>
    </article>
      ))}

    </div>
  );
};

export default ArticleList;
