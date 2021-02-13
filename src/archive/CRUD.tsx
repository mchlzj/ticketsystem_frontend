import React, { FC } from 'react';
import {useState, useEffect} from 'react';

const CRUD: FC = () => {

    //post nimmt das Ergebnis des Get Request entgegen
    const [post, setPost] = useState([]);

    //Hier Localhost setzen
    const url = 'https://www.hetfeld.name/ticket_backend/api/tickets';

    //Get Request funktioniert
    const getData = async() => {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        setPost(jsonResponse);

    }

    //Post Request leider noch nicht :'(
    const sendData = async() => {
        const response = await fetch(url,
        {
            method: 'POST',
            body: JSON.stringify({
                title: 'Test'
            }), 
            mode: 'cors',
            headers: {
                    'Content-Type' : 'application/json'
                }
        })
        .then(res => {
            console.log(res);
        });
    }

    //useEffect bewirkt nur, dass getData und sendData aufgerufen werden, sobald diese Komponente hier gerendert wurde.
    useEffect(() => {
        getData();
        sendData();
    },
        []
    );

    //Das was React dann rendert. Funktioniert soweit. Der Get Request wird in die "post" Variable gespeichert, dann wird iteriert.
    return (
        <div>
            <ul>
                {
                    post.map((post: any) => <li key={post.id}>
                        {post.title}
                    </li>)
                }
            </ul>
        </div>
    );   
};

export default CRUD;
