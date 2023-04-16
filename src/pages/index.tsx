import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface HomeProp{
  articles: any
}

const Home:React.FC<HomeProp> = ({articles}) => {
 

  return (
  <div>
    <Head>
      <title>Recipe API</title>
      <meta name='keywords' content='web'></meta>
    </Head>
    <div className="flex  flex-col justify-center items-center">
      {articles.map((article:any)=> {
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
      })}
    </div>
    
  </div>
  )
}

// Pre renders a page at build time
// HTML for the page is generated at build time and served as a static file when the page is requested, rather than being generated on the fly for eaach request
export const getStaticProps = async() => {
  const res = await fetch(`https:/jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      // this is passed to the component above
      articles
    }
  }
}

export default Home