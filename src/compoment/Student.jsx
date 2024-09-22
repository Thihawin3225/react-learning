import React from 'react'

const Student = (user) => {
  return (
    <div>
        <div>username : {user.name}</div>
        <div>userEmail : {user.email}</div>
        <div>userPassword : {user.password}</div>
  </div>
  )
}

export default Student