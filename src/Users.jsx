import { useEffect, useState } from "react"

export default function Users(){

    const [users, setUsers] = useState([]);
// useEffect => () : parameters -> 1. call back function, 2. Dependencies
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return(
        <div>
            <h3>Users : {users.length}</h3>
        </div>
    )
}