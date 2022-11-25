import React from "react";
import { useRouter } from 'next/router'
const Page = ({note}) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <h1>Note {note.id}</h1>
            <p>Note {note.title}  </p>
            <button onClick={e => router.push('/')}>Go Home</button>
            
        </>
    )
}

export default Page;

export async function getServerSideProps({params, req, res}) {
    const response = await fetch(`http://localhost:3000/api/note/${params.id}`)
  
    // so much power!
    if (!response.ok) {
      res.writeHead(302, { Location: '/notes' })
      res.end()
      return {props: {}}
    }
  
    const {data} = await response.json()
    // console.log(data)
    if (data) {
      return {
        props: {note: data}
      }
    }
  }