import React, {useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios'

function SignUp() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [redirect, setredirect] = useState('');

  async function registeruser(e){
    e.preventDefault();   
    try{
        const user = await axios.post('/auth/signup',{name,password,email,phone});
        setname(""); setpassword(""); setemail(""); setphone("");
        alert("Registered Successfuly");

        const res = await axios.post('/auth/login',{email, password});
        setredirect('/');
    }
    catch(err){alert('Registration Failed :',err);}
  }

  if(redirect) return <Navigate to={redirect}/>
  return (
    <>
        <div className='login h-screen w-full bg-gray-200 flex justify-center place-items-center'>
            <div className='bg-white h-[65%] w-[30%] rounded-3xl flex flex-col place-items-center justify-center gap-10'>
                <h3 className=' text-3xl font-semibold'>Register / Sign Up </h3>

                <form className='flex flex-col justify-center place-items-center gap-5'onSubmit={registeruser}>

                    <input className='Name ' value={name} placeholder='Enter Your Full Name' 
                    onChange={(e)=>{
                        setname(e.target.value);
                    }} type='text' required/>

                    <input className='Email ' value={email} onChange={(e)=>{
                        setemail(e.target.value);
                    }} placeholder='Enter Your Email Address' type='email' required/>

                    <input className='password' value={password} onChange={(e)=>{
                        setpassword(e.target.value);
                    }} placeholder='Enter Your passwordword' type='password' required/>

                    <input className='Phone' value={phone} onChange={(e)=>{
                        if(!isNaN(e.target.value)) setphone(e.target.value);
                    }} placeholder='Enter Your Phone Number' type='text' maxLength='10' required/>
                    
                    <button type='submit' className='submit'>Register</button>

                </form>
                
                <div className='flex flex-row gap-8'>
                    <Link to={'/login'} className=' text-sm text-blue-700'>Registered ? Sign In Here</Link>
                    <Link to={'/'} className=' text-sm text-blue-700'>Back To Home</Link>
                </div>
            </div>
            
        </div>
    </>
  )
}
export default SignUp;