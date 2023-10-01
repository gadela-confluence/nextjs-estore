import React from 'react'
import UsersTable from './UsersTable'

interface Props {
    searchParams: {sortOrder:string}
}

const UsersPage = ({searchParams: {sortOrder}}:Props) => {
console.log(sortOrder)
    return (
    <>
        <h1> Users </h1>
        <UsersTable sortOrder={sortOrder}></UsersTable>
    </>
  )
}

export default UsersPage