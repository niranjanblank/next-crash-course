/**
 * 
 * Navigation tab
 */

import Link from "next/link";


const Nav:React.FC = () => {
    return ( 
    <ul className="flex p-4 justify-center ">
        <li className="mr-6">
        <Link className=" text-blue-500 hover:text-blue-800" href="/">Active</Link>
        </li>
        <li className="mr-6">
        <Link className=" text-blue-500 hover:text-blue-800" href="/about">About</Link>
        </li>
        
  </ul> );
}
 
export default Nav;