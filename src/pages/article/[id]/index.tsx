import React from 'react'

// to access the id that is passed through the link
import { useRouter } from 'next/router'
import Link from 'next/link'

type Props = {
    article: any
}

export default function article({article}: Props) {
// get id from the query using useRouter
// const router = useRouter()
// const {id} = router.query

  return (
    <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br/>
        <Link href="/" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Go Back</Link>
    </div>
  )
}

// The context parameter in the getServerSideProps function is an object that contains various properties related to the current request and response, such as the request URL, headers, cookies, and query parameters. It is an argument that is passed to the getServerSideProps function automatically by Next.js when the page is requested.

// The context object has the following properties:

// req: the HTTP request object.
// res: the HTTP response object.
// query: an object containing the query parameters from the URL.
// params: an object containing the dynamic route parameters for the page, if the page has a dynamic route.
// resolvedUrl: the actual URL of the page, after resolving any dynamic segments.
// locale: the locale of the page, if the page is internationalized.
// locales: an array of all supported locales, if the page is internationalized.
// defaultLocale: the default locale, if the page is internationalized.
// preview: a boolean value indicating whether the page is being previewed.
// You can use the context object to fetch data based on the query parameters or the dynamic route parameters, or to handle server-side redirection or authentication.

// export const getServerSideProps = async (context: any) => {
//     const res = await fetch(`https:\jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }


export const getStaticProps = async (context: any) => {
    const res = await fetch(`https:\jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}


// In order for getStaticPaths to work, you need to implement getStaticProps in the same file, and return the data for each individual page as props.
export const getStaticPaths = async () => {
    const res = await fetch(`https:/jsonplaceholder.typicode.com/posts?_limit=6`)

    const articles = await res.json()
    console.log(articles)
    // getting ids of each article
    const ids = articles.map((article: any) => article.id)
    const paths = ids.map((id: any) => ({
        params: {id: id.toString()}
    }))
    return {
        paths: paths,
        // returns a 404 page if we go to something that doesnt exist
        fallback: false,

    }
}