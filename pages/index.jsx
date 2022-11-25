import React, { useState } from "react";
import Link from "next/link";
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-bootstrap/Carousel';

const Page = () => {
const [comment, setComment] = useState([]);
    function postData(){
        fetch('http://localhost:3000/api/note/', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: Date.now(), title: comment }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }
    
    
    
    return (
        <main>
            <h1>Todo List</h1>
            <input type="text" value={comment} onChange={e => setComment(e.target.value)}  />
            <button onClick={e =>{e.preventDefault(); postData()}}>Submit</button>
            <Alert variant="success">Hello Bootstrap</Alert>
            <Link href='/notes'> <a> To Note Page </a> </Link>
            <Carousel>
                <Carousel.Item>
                    <picture>
                    <img
                        className="d-block w-25"
                        src="1.jpg"
                        alt="First slide"
                    />
                    </picture>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <picture>
                    <img
                        className="d-block w-25"
                        src="2.jpg"
                        alt="Second slide"
                    />
</picture>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <picture>
                    <img
                        className="d-block w-25"
                        src="3.jpg"
                        alt="Third slide"
                    />
</picture>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </main>

    )
}

export default Page;

