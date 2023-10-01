import Image from 'next/image';
import React from 'react'

const Article = ({params}: {params:{id:string}}) => {
  return (
    <div className='max-w-3xl mx-auto p-5'>
              <Image
          src="https://source.unsplash.com/collection/1346951/1000x500?sig=54"
          alt="記事の写真"
          width={1200}
          height={300}
        />
    </div>
  )
}

export default Article;