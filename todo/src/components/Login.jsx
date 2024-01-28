import React,{useState} from 'react'
import { login } from '../services/user'
export const Login = () => {
  const[inputdata,setinputdata] = useState({
    email: "",
    phoneNumber: "",
    password: ""
  })
  const handleChange = (e) => {
    setinputdata({...inputdata,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    login(inputdata)
  }
  return (
    <>
    <form className="flex flex-row md:flex-col gap-y-2 items-center justify-center  h-40"onSubmit={handleSubmit} >
    <div>
      <label htmlFor="emailid" className="mx-4">Email ID</label>
      <input type="email" name="email" className="border-8" id="emailid" value={inputdata.email} onChange={handleChange}/>
      <br />
    </div>
    <div>
      <label htmlFor="phone" className="mx-4">Phone number</label>
      <input type="text" name="phoneNumber" className="border-8" id="phone" value={inputdata.phoneNumber} onChange={handleChange}/>
    </div>
    <div>
    < label htmlFor="pass" className="mx-4">Password</label>
      <input type="text" name="password" className="border-8" id="pass" value={inputdata.password} onChange={handleChange}/>
      <br />
    </div>
    <div>
        <input type="submit" value="Login" className="border-8 rounded-full p-4 w-36 text-center bg-green-600 text-white-600 cursor-pointer" />
    </div>
    </form>
    </>
  )
}
