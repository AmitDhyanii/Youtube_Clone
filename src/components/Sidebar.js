import React from 'react'
import{
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdVideoLibrary,
    MdHistory,
    MdOutlineWatchLater,
} from 'react-icons/md';

import { AiOutlineLike } from "react-icons/ai";

export default function Sidebar() {

    const mainLinks = [
        {
            icon: <MdHomeFilled className='text-xl'/>,
            name: 'Home'
        },
        {
            icon: <MdOutlineSlowMotionVideo className='text-xl'/>,
            name: 'Shorts'
        },
        {
            icon: <MdSubscriptions className='text-xl'/>,
            name: 'Subscriptions'
        },
    ];

    const otherLinks = [
        {
            icon: <MdVideoLibrary className='text-xl'/>,
            name: 'Library'
        },
        {
            icon: <MdHistory className='text-xl'/>,
            name: 'History'
        },
        {
            icon: <MdOutlineWatchLater className='text-xl'/>,
            name: 'Watch Later'
        },
        {
            icon: <AiOutlineLike className='text-xl'/>,
            name: 'Liked Video'
        },
    ]



  return (
    <div className='w-2/12 bg-[#181818]  p-3 overflow-auto pb-8 h-screen'>
        <ul className='flex flex-col pb-4 border-b-[0.1rem] border-zinc-600'>
            {mainLinks.map( ({icon, name}) => {
                return(
                    <li key={name} className={`pl-3 py-3 hover:bg-zinc-700 ${name === "Home" ? "bg-zinc-800" : " "} rounded-xl`}>
                        <a href='#' className='flex items-center gap-5'>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        </a>
                    </li>
                )
            })}
        </ul>

        <ul className='flex flex-col py-4 border-b-[0.1rem] border-zinc-900'>
            {otherLinks.map( ({icon, name}) => {
                return(
                    <li key={name} className={`pl-3 py-3 hover:bg-zinc-700 ${name === "Home" ? "bg-zinc-800" : " "} rounded-xl`}>
                        <a href='#' className='flex items-center gap-5'>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        </a>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
