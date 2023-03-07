'use client';

import React, { FC } from "react";

const Button: FC<{text: string}> = ({text}) => { 
    return(
        <button className="px-3 mx-auto py-2 mt-3 text-md font-medium text-white rounded-full bg-[#00616C] hover:bg-stone-200 duration-400 hover:text-black duration-400 hover:scale-105 duration-300 hover:shadow-xl active:scale-100 duration-75">
            {text}
        </button>
    )
}

export default Button