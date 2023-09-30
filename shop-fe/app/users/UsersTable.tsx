import React from 'react';


interface User {
    id: number;
    name: string;
}

const UsersTable = async () => {

    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {cache: 'no-store'} 
        // {next: {revalidate: 10}} - cache for 10 seconds
        );
    const users:User[] = await res.json();

    return (
    <ul> 
    {users.map(user => <li key={user.id}> {user.name}</li>)}
    </ul>
  )
}

export default UsersTable