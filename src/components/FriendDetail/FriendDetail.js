import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    }, [])
    return (
        <div>
            <p>This is Friend Detail component: {friendId}</p>
            <h3> {friend.name} </h3>
            <h3>Email: {friend.email}</h3>
            <p>Phone: {friend.phone}</p>
            <p>Website: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;