import { FaStar } from "react-icons/fa"
import avataa from "./../../assets/avataaars.svg"

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center bg-[#1ABC9C]">
      <img className="w-[15%] mt-28" src={avataa} alt=''/>
      <div>
                <h1 className="text-white uppercase text-3xl font-bold my-5">start Framework</h1>
                <div className="flex flex-row items-baseline text-white">
                <hr className="w-32 h-1 my-8  border-0 rounded-sm dark:bg-gray-700 bg-white"></hr>
                <div className=" mx-2"><FaStar/></div>
                <hr className="w-32 h-1 my-8  border-0 rounded-sm dark:bg-gray-700 bg-white"></hr>
              </div>
              <p className="text-white mb-28">Graphic Artist - Web Designer - Illustrator</p>
              
      </div>
    </div>
    
    
    </>
  )
}
