import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend';

export default function Friends(){
 
    // 1.state declaration to hold a data
    const [friends, setFriends] = useState([]);

    // 2.useEffect with dependency array 
    useEffect( ()=>{
        // 3.use fetch to load data
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // 4. set loaded data to the state
        .then(data => setFriends(data))
    },[])
    return(
        <div className='friends'>
            <h3>Hello Friends : {friends.length}</h3>
            {
                friends.map(friend => <Friend friend ={friend}></Friend>)
            }
        </div>
    )
}