import React from 'react'

type Props = {
    article: any
}

 const ArticleItem = ({article}: Props) => {
  return (
    <div className="p-4 my-2 rounded-lg w-3/5 border-solid border-2 bg-red-20" key={article.id}>
        <h3 className="font-bold" >
        {article.title}
        </h3>
        <p>
        {article.body}
        </p>
  </div>
  )
  }

  export default ArticleItem