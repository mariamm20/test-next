import nc from 'next-connect';
import notes from '../../../src/data/data';

// console.log(notes)
const handler =nc() 
.get((req,res) =>{
    // console.log(notes)
    res.json({data:notes})
})
.post((req,res) =>{
    const id = Date.now();
    const note = {...req.body,id}
    notes.push(note)
    res.json({data:note})
})

export default handler;
