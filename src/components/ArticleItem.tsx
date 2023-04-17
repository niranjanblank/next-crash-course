import Link from 'next/link'
import React from 'react'

type Props = {
    article: any
}

 const ArticleItem = ({article}: Props) => {
  return (
    
   
        <Link href="/article/[id]" as={`/article/${article.id}`} className="p-4 my-2 rounded-lg w-3/5 border-solid border-2 bg-red-20">
            <h3>
                {article.title}
            </h3>
            <p>
                {article.body}
            </p>
        </Link>

  
  )
  }

  export default ArticleItem