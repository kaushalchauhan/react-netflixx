import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const Login = () => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [errMsg,setErrMsg] = useState("")
  const {user,login} = UserAuth()
  const navigate = useNavigate()
  const handleFormSubmit = async(e)=>{
    e.preventDefault()
    try {
      await login(email,password)
    } catch (err) {
      console.log(err);
      setErrMsg(err)
    }
    console.log(email,password);
  }

  
  
  return (
    <>
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg" alt="" />
    
    <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'/>

    <div className='fixed w-full px-4 py-24 z-20'>
      <div className='max-w-[450px] h-[600px] mx-auto bg-black/60 rounded-lg'>
        <div className='max-w-[320px] mx-auto py-16'>
          <h1 className='text-3xl font-nsans-bold'>Login</h1>
          <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4'>
            <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='email' autoComplete='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='password' autoComplete='current-password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className='bg-red-600 py-3 my-6 rounded font-nsans-bold'>Login</button>
            {(errMsg ?  (
           <p className=' text-center text-red-600 mb-3'>❗️{errMsg}</p>
           ) : (""))}
            <div className='flex justify-between items-center text-gray-600'>
        <p><input type="checkbox" className='mr-2' checked={rememberLogin} onChange={(e)=> setRememberLogin(!rememberLogin)}/>Remember me</p>
        <a href="https://www.linkedin.com/in/kaushalrchauhan/" target="_blank" rel="noopener noreferrer">
          <p>Need Help?</p>
        </a>
            </div>
            <p className='my-2'><span className='text-gray-600 mr-2'>New to Netflix?</span><Link to={'/signup'}>Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Login