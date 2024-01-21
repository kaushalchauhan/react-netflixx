import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="flex justify-between z-40 w-full p-4">
        <Link to="'/" className="uppercase text-red-600 font-nsans-bold cursor-pointer text-4xl">netflix</Link>

        <div>
        <Link to={'/login'}>
            <button className="capitalize pr-4">login</button>
        </Link>
        <Link to={'/signup'}>
            <button className="capitalize bg-red-600 px-6  rounded py-2 cursor-pointer">signup</button>
        </Link>
        </div>

    </div>
  )
}

export default Navbar