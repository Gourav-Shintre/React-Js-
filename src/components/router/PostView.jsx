import React from 'react'
import { useParams } from 'react-router-dom'

const PostView = () => {
    const {id} = useParams()
    console.log(id,"id")
  return (
    <div>PostView{id}</div>
  )
}

export default PostView