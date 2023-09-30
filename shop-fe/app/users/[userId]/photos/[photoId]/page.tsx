import React from 'react'

interface Props {
   params: {userId: number, photoId: number}
}

const UserPhotos = ({params: {userId,photoId}}:Props) => {
  return (
    <> 
    <div>User Id : {userId}</div>
    <div>Photo Id : {photoId}</div>
    </>
  )
}

export default UserPhotos