import React, { useState } from 'react'

const Form = (para) => {
    const [uname,setUname] = useState("");
    const [uemail,setUemail] = useState("");
    const [upassword,setUpassword] = useState("");

    const getName = (event)=> {
        setUname(event.target.value);
    }

    const getEmail = (event)=> {
        setUemail(event.target.value);
    }

    const getPassword = (event)=> {
        setUpassword(event.target.value);
    }

    const getUserData = (event)=> {
        event.preventDefault();
        const data = {
            name : uname,
            email : uemail,
            password : upassword
        }
        para.memberInfo(data);
    }

  return (
    <>
     <form onSubmit={getUserData}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onChange={getName}/>
        </div>
        <div>
            <label htmlFor="Email">Email</label>
            <input type="text" name="email" id="email" onChange={getEmail} />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" onChange={getPassword} />
        </div>
        <input type="submit" value="submit" />
     </form>
    </>
  )
}

export default Form