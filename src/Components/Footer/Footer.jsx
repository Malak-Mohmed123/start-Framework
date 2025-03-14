import { FaFacebook, FaGlobe, FaLinkedinIn, FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (<>
<footer className="bg-[#2C3E50] dark:bg-gray-900  absolute  left-0 right-0 flex flex-col h-60">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
  <div className="text-center flex-col flex ">
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
        <div>
          <h2 className="mb-6 text-2xl font-semibold text-white uppercase dark:text-white">LOCATION</h2>
          <div className="text-gray-500 dark:text-gray-400 font-medium">
            <div className="mb-4">
              <p className="text-white text-sm">2215 John Daniel Drive</p>
            </div>
              <p className="text-white text-sm"> Clark, MO 65243</p>
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-semibold uppercase dark:text-white text-white">AROUND THE WEB</h2>
          <div className="text-gray-500 dark:text-gray-400 font-medium">
            <div className="mb-4">
              <p  className="hover:underline ">
                <div className="icon">
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                <div className="text-white mr-4 "><FaFacebook/></div>
                <div className="text-white mr-4"><FaTwitter/></div>
                <div className="text-white mr-4"><FaLinkedinIn/></div>
                <div className="text-white mr-4 "><FaGlobe/></div>   

       
         
      </div>



                </div>

              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-6 font-semibold uppercase dark:text-white text-white text-2xl">ABOUT FREELANCER</h2>
          <div className="text-gray-500 dark:text-gray-400 font-medium">
            <div className="mb-4">
              <p className="text-white">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#1A252F]  w-auto h-20 left-0 right-0 absolute bottom-0 flex justify-center items-center ">
    <span className="block text-sm sm:text-center dark:text-gray-400 bg-[#1A252F] text-white">Copyright © Your Website 2021</span>
    </div>
  </div>
</footer>
</>
  )
}
