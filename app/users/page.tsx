import React from 'react'
import Link from "next/link";
import { log } from 'console';

interface User {
    id: number;
    title: string
}

const UsersPage = async () => {
    const response = await fetch("https://jsonplaceholder.org/posts", { next: { revalidate: 10 } });
    const users: User[] = await response.json();
    log(users);


    return (
        <>
            <div className='text-center text-5xl text-slate-800 my-6 font-semibold'>Users Page</div>
            <ul className='mb-4 bg-slate-600 text-white rounded p-5 capitalize'>
                test
                {users.map(user => <li key={user.id}>{user.title}</li>)}
            </ul>
            <Link className='bg-slate-500 hover:bg-slate-700 text-white text-center font-bold py-2 px-4 rounded w-1/3 my-6 inline-block' href="/users/new">+ New User</Link>
        </>
    )
}

export default UsersPage