import React, { useState } from 'react'
import Form from './Form';
import Student from './Student';

const Users = () => {
  const [getUsers,setUsers] = useState([
    
  ]);

  const userFromForm = (user)=> {
    setUsers([...getUsers,user])
  }
  let content = "No Member Yet";
  if(!getUsers.length < 1){
    getUsers.map((user)=> {
      return(
        <div key={user.name}>
          <Student name={user.name} email = {user.email} password = {user.password}/>
        </div>
      )
    })
  }
  return (
   <>
    <p>{content}</p>
    <Form memberInfo = {userFromForm} />
   </>
    )
}

export default Users