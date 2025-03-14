import { FaStar } from "react-icons/fa";


export default function About() {
  return (
    <div className="w-auto  bg-[#1ABC9C] flex flex-col justify-center items-center h-[90vh] ">
      <h1 className="text-white uppercase text-2xl">about component</h1>
      <div className="flex flex-row items-baseline">
      <hr className="w-20 h-1 my-8 bg-gray-200 border-0 rounded-sm dark:bg-gray-700"></hr>
      <div className=" text-white mx-2"><FaStar/></div>
      <hr className="w-20 h-1 my-8 bg-gray-200 border-0 rounded-sm dark:bg-gray-700"></hr>
    </div>
    <div className="flex flex-row  justify-between align-baseline text-white">
    <div className="container w-[35%]">
      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization</p>
    </div>
    <div className="container w-[35%]">
      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
    </div>
    </div>

  )
}
