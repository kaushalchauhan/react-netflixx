import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Profile = () => {
  const{user} = UserAuth()
  return (
    <div>{user?.email}</div>
  )
}

export default Profile