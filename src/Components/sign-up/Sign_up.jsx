import React, { useState } from 'react'
import axios from 'axios'

export default function Sign_up() {

const [first_name, setFirst_name] = useState('');
const [last_name, setLast_name] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [rePassowrd, setRePassowrd] = useState('');
const [accept, setAccept] = useState(false);
const [flag, setFlag] = useState(true)

console.log(flag);

// console.log(fisrt_name);
const handel_submit =(e)=>{
  e.preventDefault();
  setAccept(true)

  if( first_name === '' || password.length < 8 || password !== rePassowrd){
    setFlag(false)
  }
  if (flag && first_name !== '' && password.length >= 8 && password === rePassowrd){
    //send data
      axios
    .post('http://127.0.0.1:8000/api/register', {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      password_confirmation: rePassowrd
    })
    .then(t => console.log(t))
    .catch(error => {
      console.log('Response Data:', error.response.data);
    });
    
    
  }

}


  return (
    <div className='container'>
      <form action='' onSubmit={handel_submit} className='my-5'>
      <div className="mb-3">
          <label htmlFor="Inputfname" className="form-label">first name</label>
            <input
              type="text" 
              name="first_name" 
              className="form-control"
              placeholder='first name'
              id="Inputfname" 
              required
              value={first_name}
              onChange={(e)=> setFirst_name(e.target.value)}
              />
              { first_name === '' && accept && <div id="nameHelp" className="form-text text-danger">first name is required</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="Inputlname" className="form-label">last name</label>
            <input
              type="text"
              name="last_name"
              className="form-control"
              placeholder='last name'
              id="Inputlname"
              value={last_name}
              onChange={(e)=> setLast_name(e.target.value)}
              />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder='email'
              id="exampleInputEmail1"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            name='password'
            className="form-control"
            placeholder='password'
            id="exampleInputPassword1"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            {password.length < 8 && accept && <div id="passHelp" className="form-text text-danger">password must be more than 8 character</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputRePassword1" className="form-label">Repeat Password</label>
          <input
            type="password"
            name='re_password'
            className="form-control"
            placeholder='re enter password'
            id="exampleInputRePassword1"
            value={rePassowrd}
            onChange={(e)=> setRePassowrd(e.target.value)}
            />
              {password !== rePassowrd && accept && <div id="pass2Help" className="form-text text-danger">password does not match</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
