import React from 'react'
import { Register } from './Register'
import { Login } from './Login'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <>
    <div className="flex gap-y-2 items-center justify-center  h-40 border-4 border-red-500 gap-x-20">
    <Link className="cursor-pointer"> Home </Link>
    <Link className="cursor-pointer" to = "/register"> Register</Link>
    <Link className="cursor-pointer" to = "/login"> Login </Link>
    </div>
    </>
  )
}