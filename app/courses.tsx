"use client";

import list from "./list.json"
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"
import { useState } from "react"
import Link from "next/link";

function Courses() {
    const [isOpen, setOpen] = useState(false)
  return (
    <div className="relative flex flex-col items-center justify-between">
        <button onClick={() => setOpen((prev) => !prev)} className="flex items-center w-full">
            Courses
            {!isOpen ? (
                <AiOutlineCaretDown className="h-3 ml-2"/>
            ) : (
                <AiOutlineCaretUp className="h-3 ml-2"/>
            )
        }
        </button>

        {isOpen && (
            <div className="absolute top-10 w-96 items-center justify-center bg-gray-50 rounded-xl">
                <Link href="./courses/ai/Quarters/q4">
                    <div className="py-4 px-3 font-normal text-base text-slate-500 hover:text-blue-600 duration-75 overflow-hidden hover:bg-slate-100 duration-400">
                        Artificial Intelligence
                    </div>
                </Link>
                <Link href="./courses/web3/Quarters/q4">
                    <div className="py-4 px-3 font-normal text-base text-slate-500 hover:text-blue-600 duration-75 hover:bg-slate-100 duration-400">
                        Web 3.0 and Metaverse Developer
                    </div>
                </Link>
                <Link href="./courses/iot/Quarters/q4">
                    <div className="py-4 px-3 font-normal text-base text-slate-500 hover:text-blue-600 duration-75 hover:bg-slate-100 duration-400">
                        Internet Of Things
                    </div>
                </Link>
            </div>
        )}
    </div>
  )
}

export default Courses