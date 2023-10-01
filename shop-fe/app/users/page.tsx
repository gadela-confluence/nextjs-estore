import React, { Suspense } from 'react'
import UsersTable from './UsersTable'
import Link from 'next/link'

interface Props {
    searchParams: {sortOrder:string}
}

const UsersPage = ({searchParams: {sortOrder}}:Props) => {
console.log(sortOrder)
    return (
    <>
        <h1> Users </h1>
        <Link href="/users/new" className='btn btn-primary'> New User </Link>
        <Suspense fallback={<p>Loading.....</p>}>
            <UsersTable sortOrder={sortOrder}></UsersTable>
        </Suspense>
    </>
  )
}

export default UsersPage