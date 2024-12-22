import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { usercontext } from '../../providers/userContext'
import axios from 'axios';

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [redirect, setredirect] = useState(false);
  const {setuser,setdp,setisAdmin,setready} = useContext(usercontext);

  async function loginhandler(e){
    e.preventDefault();                
    try{
        const res = await axios.post('/auth/login',{email,password});

        if(res.data.role == 'admin') setisAdmin(true); 
        setredirect(true); setready(true);
    }
    catch(e){alert('login failed'); console.log(e);}
    setemail(""); setpassword("");
  }

  if(redirect) {return <Navigate to={'/'}/>}
  return (
    <>
        <div className='h-screen w-full bg-gray-200 flex justify-center place-items-center'>
            <div className='login bg-white h-[60vh] w-[76vw] rounded-3xl flex flex-col place-items-center justify-center gap-12'>
                <h3 className=' text-3xl font-semibold'>Login / Sign In </h3>
                <form className='flex flex-col justify-center place-items-center gap-7 ' onSubmit={loginhandler}>
                    <input className='Email' placeholder='Enter Your Email' value={email} onChange={(e)=>{
                        setemail(e.target.value);
                    }} type='email' required/>

                    <input className='Pass' placeholder='Enter Your Password' value={password} type='password' onChange={(e)=>{
                        setpassword(e.target.value);
                    }} required/>

                    <button type='submit' className='submit'>Login</button>
                </form>

                <div className='flex flex-row justify-evenly w-[100%]'>
                    <Link to={'/signup'} className=' text-sm text-blue-700'>New User ? Sign Up</Link>
                    <Link to={'/'} className=' text-sm text-blue-700'>Go To Home</Link>
                </div>
            </div>
            
        </div>
    </>
  )
}
export default Login;