import Link from "next/link";
import React from "react";

const Page = ({notes}) => {
    // const notes = new Array(15).fill(1).map((e, i) => ({ id: i, title: `Note: ${i}` }))
    return (
        <>
            <h1>Note</h1>

            <ul>
                
                {
                    notes.map(note => (
                        <li key={note.id}>
                            <Link href={'/notes/[id]'} as ={`/notes/${note.id}`}> <a>{note.title} </a> </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Page;

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/note/`)
    const {data} = await res.json()
    return {
      props: {notes: data}
    }
  }