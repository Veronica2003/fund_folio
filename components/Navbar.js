"use client"
import React,{useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown,setshowdropdown ] = useState(false)
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    <nav className='bg-black text-white flex justify-between items-centre px-4 h-15'>
      <Link href={"/"} className="logo font-bold text-lg flex justify-center item center">
      <img src="/soda-libre.gif" width={44} height={40}alt=""/>
        <span>Fund Folio</span></Link>
      
      <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul>
      <div className='relative'>
        {session && <>
<button onClick={() => setshowdropdown(!showdropdown)} onBlur={()=>{setTimeout(() => { setshowdropdown(false)}, 100); }}  id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>


<div id="dropdown" className= {`z-10 ${showdropdown? "" :"hidden"} absolute left-[180px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`} >
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      <li>
        <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
      </li>
      <li>
        <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
      </li>
      <li>
        <Link onClick={()=> signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
      </li>
    </ul>
</div></>
}
        
      {session && 
      <button  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>{signOut()}}>Logout</button>
      }
      {!session && <Link href={"/login"}>
      <button  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Login</button>
      </Link>}
      </div>
    </nav>
  )
}

export default Navbar
