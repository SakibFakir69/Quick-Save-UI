
import { FaBoltLightning } from "react-icons/fa6";
import { FaImage } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoIosInfinite } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export const fearuresData = [

    {
        id:1,
        title:"Lightning Fast",
        description:"Download TikTok videos in seconds with our optimized servers and processing system",
        logo:<FaBoltLightning  className="size-16 border border-violet-400 p-2 rounded-full bg-teal-300/20" /> 

    },
    
    {
        id:2,
        title:"No Watermarks",
        description:"Get clean videos without the TikTok watermark for professional use or sharing.",
        logo:<RxCross2  className="size-16 border text-violet-800  p-2 rounded-full bg-violet-400/20" />

    },

    {
        id:3,
        title:"100% Secure",
        description:"We don't store your videos or personal information. Your privacy is our priority.",
        logo:<MdOutlineSecurity  className="size-16 border text-green-700  p-2 rounded-full bg-green-300/20" />

    },
    {
        
      id:4,
      title:"Mobile Friendly",
      description:"Our website works perfectly on all devices, from smartphones to desktops.",
      logo:<HiOutlineDevicePhoneMobile  className="size-16 text-blue-700 border  p-2 rounded-full bg-blue-400/20" />
    },
    {
        id:5,
        title:"High quality",
        description:"Download High quality video",
        logo:<FaImage  className="size-16 border text-yellow-800  p-2 rounded-full bg-yellow-300/20" />
    }
    ,
    {
        id:6,
        title:"Unlimited Downloads",
        description:"No daily limits or restrictions. Download as many TikTok videos as you need.",
        logo:<IoIosInfinite   className="size-16 text-2xl font-semibold border border-red-400 p-2 text-red-700 rounded-full bg-red-300/20" />
    }


]