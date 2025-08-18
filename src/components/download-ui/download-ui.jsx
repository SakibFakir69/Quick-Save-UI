

import React from 'react'
import { FcDownload } from "react-icons/fc";

function DownloadUI() {


    


  return (
    <div className='bg-[#FFFFFF] dark:bg-black  shadow-2xl p-10 rounded '>

        <section className='flex md:flex-row flex-col'>

            <input className='px-12 py-2 border gap-y-2 gap-x-2 ' placeholder='Enter your link'/>

            <button 

            onClick={()=> alert("on creation phase")}
            
            className='flex justify-center items-center bg-gradient-to-b from-[#5E63F0] to-[#9453E2] text-white px-6 rounded gap-x-2 py-3'> <FcDownload/>Download</button>
        </section>



    </div>
  )

}
export default DownloadUI;