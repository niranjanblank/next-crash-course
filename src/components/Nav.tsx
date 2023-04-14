/**
 * 
 * Navigation tab
 */

import Link from "next/link";


const Nav:React.FC = () => {
    return ( 
    <ul className="flex p-4 bg-green-600 text-white ">
        <li className="mr-6">
        <Link className=" hover:text-blue-800" href="/">Active</Link>
        </li>
        <li className="mr-6">
        <Link className=" hover:text-blue-800" href="/about">Link</Link>
        </li>
        
  </ul> );
}
 
export default Nav;