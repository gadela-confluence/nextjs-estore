import React from 'react'

interface Props {
    params: {userId: number}
}

const UserDetailPage = ({params:{userId}}:Props) => {
  return (
    <div>User ID: {userId} </div>
  )
}

export default UserDetailPage