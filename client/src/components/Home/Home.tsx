import "./Home.css"
import { ArrowDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-slate-100 pt-3">
      <div className="bg-white m-4 h-20 py-7  ">
        <ul className="flex items-center  ">
          <li className="group">Fashion
          </li>
          <ArrowDown className="h-3 w-3 transform transition duration-300 ease-in-out group-hover:rotate-180"/>
          <li className="group">Electronics
       
          </li>   <ArrowDown className="h-3 w-3 transform transition duration-300 ease-in-out group-hover:rotate-180"/>
          <li className="group">Home&furniture
          </li>
          <ArrowDown className="h-3 w-3 transform transition duration-300 ease-in-out group-hover:rotate-180"/>
        </ul>
      </div>
    </div>
  )
}
