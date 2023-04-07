"use client";

import { FC } from "react"

const Quarters: FC<{insideBox: string, text: string}> = ({insideBox, text}) => {
  return (
    <button className="flex relative mb-5 hover:bg-slate-100 duration-100 w-full h-12 items-center">
        <div className="w-8 h-8 rotate-45 bg-gradient-to-r from-blue-700 to-blue-500 absolute rounded-md top-2 left-2"></div>
        <h2 className="text-white ml-[14px] text-base z-10">{insideBox}</h2>
        <h3 className="font-semibold text-lg ml-7">{text}</h3>
    </button>
  )
}

export default Quarters