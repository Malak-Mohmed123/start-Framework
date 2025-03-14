
import { Link } from "react-router-dom";
import poert1 from "./../../assets/poert1.png";
import port2 from "./../../assets/port2.png";
import port3 from "./../../assets/port3.png";
import click from "./Click.module.css"
export default function Click() {
  return (
    <Link to={'/portfolio'}  >
        <div className={click.child}>
        <img src={poert1} className="h-auto max-w-[80%] rounded-lg" />
            </div>
        <div className="flex flex-row gap-4 py-5  justify-center">
     <div >
      <img src={poert1} className="h-auto max-w-sm rounded-lg" />
        </div>
        <div >
      <img src={port2} className="h-auto max-w-sm rounded-lg" />
        </div>
        <div >
      <img src={port3} className="h-auto max-w-sm rounded-lg" />
        </div>
     
     </div> 
     <div className="flex flex-row gap-4 py-5  justify-center">
     <div >
      <img src={poert1} className="h-auto max-w-sm rounded-lg" />
        </div>
        <div >
      <img src={port2} className="h-auto max-w-sm rounded-lg" />
        </div>
        <div >
      <img src={port3} className="h-auto max-w-sm rounded-lg" />
        </div>
     
     </div> 
     </Link>
    
  )
}
