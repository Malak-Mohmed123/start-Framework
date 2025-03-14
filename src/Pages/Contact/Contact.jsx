
import { FaStar } from "react-icons/fa";


export default function Contact() {
  
 
  return (
    <>
       <div className="w-auto  flex flex-col justify-center items-center h-auto portfolio">
           <h1 className="text-[#2C3E50] uppercase text-3xl font-bold my-5">conatct section</h1>
           <div className="flex flex-row items-baseline text-[#2C3E50]">
           <hr className="w-20 h-1 my-8 bg-[#2C3E50] border-0 rounded-sm dark:bg-gray-700 text-[#2C3E50]"></hr>
           <div className=" mx-2"><FaStar/></div>
           <hr className="w-20 h-1 my-8 bg-[#2C3E50] border-0 rounded-sm dark:bg-gray-700 text-[#2C3E50]"></hr>
         </div>


<form className="w-[50%] mx-auto">
  <div className="mb-5">
    <label htmlFor="userName" className="block mb-2 text-[#1ABC9C] text-sm font-medium  dark:text-white">userName:    </label>
    <input type="userName" id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="userName " required />
  </div>
  <div className="mb-5">
    <label htmlFor="userAge" className="block mb-2 text-sm font-medium  dark:text-white text-[#1ABC9C]   ">userAge:    </label>
    <input type="userAge" id="userAge" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="userAge  " required />
  </div>
  <div className="mb-5">
    <label htmlFor="userEmail" className="block mb-2 text-sm font-medium dark:text-white text-[#1ABC9C]  ">userEmail:
    </label>
    <input type="userEmail " id="userEmail " className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="userEmail " required />
  </div>
  <div className="mb-5">
    <label htmlFor="userpassword" className="block mb-2 text-sm font-medium dark:text-white text-[#1ABC9C] "> userpassword: </label>
    <input type="userpassword" id="userpassword " className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="userpassword  " required />
  </div>

  <button type="submit" className="text-white my-3  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-[#1ABC9C] "> userpassword</button>
</form>


         </div>
    </>
  )
}
