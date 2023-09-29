import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-40">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=54"
            alt="記事の写真"
            width={1200}
            height={300}
          />
        </Link>
        <div>
          <Link href="#">technology</Link>
          <Link href="#">Next.jsの勉強中</Link>
          <p>By shincode,Published on 2023/08/29</p>
          <Link href="#">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            sit praesentium quidem ullam nisi illum quam sunt voluptatibus
            facilis, sint debitis necessitatibus velit doloremque repudiandae
            veniam eligendi hic. Repellat, hic?
          </Link>
          <Link href="#">続きを読む</Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
