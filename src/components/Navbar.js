import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillYoutube } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { BiVideoPlus } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";


export default function Navbar() {
  return (
    <div className='flex justify-between px-6 h-14 items-center bg-[#181818] opacity-95 sticky'>
        <div className='flex gap-6 items-center text-2xl '>
            <div className='cursor-pointer'>
                <RxHamburgerMenu/>
            </div>
            <div className='flex gap-1 items-center justify-center cursor-pointer'>
                <AiFillYoutube className='text-3xl text-red-600'/>
                <span className='text-2xl '>YouTube</span>
            </div>
        </div>

            <div className='flex gap-5 items-center justify-center'>
                <form>
                    <div className='flex items-center h-10 px-4 pr-0 rounded-3xl border-[0.1rem] border-zinc-800'>
                        {/* <div className='flex gap-5 items-center pr-5'> */}
                            <input type='text' placeholder='Search' className='w-[31rem] px-4 bg-zinc-900 focus:outline-none'>
                            </input>
                        {/* </div> */}
                            <button className='h-10 w-16 flex items-center justify-center bg-zinc-800  rounded-r-3xl'>
                                <CiSearch className='text-2xl'/>
                            </button>
                    </div>
                </form>
                <div className='text-lg p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 cursor-pointer'>
                    <FaMicrophone />
                </div>
            </div>

                <div className='flex gap-8 items-center text-xl'>
                    <BiVideoPlus className='text-2xl cursor-pointer' />
                    <div className='relative cursor-pointer'>
                        <FaRegBell/>
                        <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>9+</span>
                    </div>
                    <img src='data:image/jpeg;base64,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' alt='pfp' className='w-9 h-9 rounded-full cursor-pointer' />
                </div>
    </div>
  )
}
