import { MdOutlineContentCopy } from "react-icons/md";
import { GoPaste } from "react-icons/go";
import { GoDownload } from "react-icons/go";
export const howItWorkData =  [


    {
        id:1 ,
        title:"Copy Link",
        description:"Copy the video link from the TikTok app or website that you want to download.",
        logo:<MdOutlineContentCopy className="md:size-10 size-4 text-stone-300 dark:text-blue-400"/>
    },
       {
        id:2,
        title:"Paste URL",
        description:"Paste the copied link into the input field on our website and click -> Download",
        logo:<GoPaste className="md:size-10 size-4 text-[#D1D5DB] dark:text-green-500"/>
    },
       {
        id:3 ,
        title:"Download Video",
        description:"Choose your preferred format and quality, then download your video without watermark.",
        logo:<GoDownload className="md:size-10 size-4 text-[#D1D5DB] dark:text-orange-400"/>
    },




]