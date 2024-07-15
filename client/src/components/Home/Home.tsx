import "./Home.css"
import { ArrowDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-slate-100 pt-3">
      <div className="bg-white m-4 h-20 py-7  ">
        <ul className="flex items-center justify-around ">
          <li className="group cursor-pointer">
            Fashion <ArrowDown className="h-3 w-3 transform transition duration-300 ease-in-out group-hover:rotate-180 ml-16 " style={{"marginTop":"-1.1rem"}}/>
          
          </li>   

          <li className="group cursor-pointer">Home&Furniture
          <ArrowDown className="h-3 w-3 transform transition duration-300 ease-in-out group-hover:rotate-180 ml-16" style={{"marginTop":"-1.1rem","marginLeft":"7.5rem"}}/>
          </li>
          <li className="group cursor-pointer ">Electronics
          <ArrowDown className="h-3 w-3 transform transition duration-300 ease-in-out group-hover:rotate-180 ml-16"style={{"marginTop":"-1.1rem","marginLeft":"5.3rem"}}/>
          </li>
        </ul>
      </div>
    </div>
  )
}
