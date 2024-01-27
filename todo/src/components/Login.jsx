import React from 'react'

export const Login = () => {
  return (
    <>
    <form className="flex flex-row md:flex-col gap-y-2 items-center justify-center  h-40">
    <div>
      <label htmlFor="emailid" className="mx-4">Email ID</label>
      <input type="email" name="email" className="border-8" id="emailid" />
      {/* <label htmlFor="phone" className="mx-4">Phone number</label>
      <input type="number" name="phone" className="border-8" id="phone" /> */}
      <br />
    </div>
    <div>
      <label htmlFor="pass" className="mx-4">Password</label>
      <input type="text" name="password" className="border-8" id="pass" />
      <br />
    </div>
    <div>
        <input type="submit" value="Login" className="border-8 rounded-full p-4 w-36 text-center bg-green-600 text-white-600 cursor-pointer" />
    </div>
    </form>
    </>
  )
}
