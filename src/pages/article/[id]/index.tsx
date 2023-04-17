import React from 'react'

// to access the id that is passed through the link
import { useRouter } from 'next/router'

type Props = {}

export default function article({}: Props) {

const router = useRouter()
// get id from the query
const {id} = router.query

  return (
    <div>This is an article {id}</div>
  )
}