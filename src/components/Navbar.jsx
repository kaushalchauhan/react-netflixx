import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"


const Navbar = () => {
  const {user, logout} = UserAuth();
  const navigate = useNavigate()
  const handleLogout = async()=>{
    try {
      await logout();
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="absolute flex justify-between z-40 w-full p-4">
        <Link to="/" className="uppercase text-red-600 font-nsans-bold cursor-pointer text-4xl">netflix</Link>

      {user?.email ? (
        <div>
        <Link to={'/profile'}>
            <button className="capitalize pr-4">Profile</button>
        </Link>
            <button onClick={()=>handleLogout()} className="capitalize bg-red-600 px-6  rounded py-2 cursor-pointer">logout</button>
        </div>
      ):(
        <div>
        <Link to={'/login'}>
            <button className="capitalize pr-4">login</button>
        </Link>
        <Link to={'/signup'}>
            <button className="capitalize bg-red-600 px-6  rounded py-2 cursor-pointer">signup</button>
        </Link>
        </div>
      )}
        

    </div>
  )
}

export default Navbar