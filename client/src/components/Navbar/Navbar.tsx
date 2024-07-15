
import { useState} from "react";
import  "./Navbar.css"
import  Logo  from "../../assets/Greenify.png"
import { Button } from "@/components/ui/button"
import Search from "../Search/Search"
import { Link } from "react-router-dom"
import { CircleUser } from 'lucide-react';
import { ShoppingBasket } from 'lucide-react';
import { ArrowDown } from 'lucide-react';

export default function Navbar() {
  const [isHovered,setHovered] = useState(false)
  return (
    <div className="navbar sticky top-0 z-50 bg-white">
        
        <ul>
          <li>
            <Link to={"/"}>
            <img src={Logo} alt="" className="logo" />
            </Link>
            </li>
          <li><Search></Search></li>
          <li>
            <Button asChild variant="ghost" className="hover:bg-blue-500 hover:text-white hidden-menu group"
           onMouseEnter={()=>setHovered(true)}
           onMouseLeave={()=>setHovered(false)}
            >
            <Link to={"/login"}><CircleUser className="h-4 w-4 stroke-2"/> &nbsp; Login &nbsp; <ArrowDown className="h-3 w-3 transform transition duration-300 ease-in-out group-hover:rotate-180"/></Link>
            
            </Button>
             {isHovered && <ul className="bg-gray-100 h-10 shadow-2xl absolute rounded " onMouseEnter={()=>setHovered(true)}
           onMouseLeave={()=>setHovered(false)}>
              <li className="flex gap-x-8 text-sm py-5 px-5 -translate-y-3">
                <span>New User?</span>
                <span className="text-blue-500" ><Link to={'/signup'}>Sign Up</Link></span>
              </li>
              </ul>} 
            </li>
            <li>
              <Button asChild variant="ghost" className="hover:bg-blue-500 hover:text-white">
              <Link to={"/cart"}><ShoppingBasket className="h-4 w-4 stroke-2"/> &nbsp; Cart</Link>
              </Button>
            </li>
        </ul>
    </div>
  )
}
