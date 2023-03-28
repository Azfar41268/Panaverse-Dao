'use client';

import React, { FC } from "react";

const Button: FC<{text: string}> = ({text}) => { 
    return(
        <button className="px-7 mx-auto py-4 mt-3 mb-4 text-lg font-semibold text-white rounded-full bg-blue-700 hover:bg-stone-200 duration-500 hover:text-black duration-500 hover:scale-105 duration-500 hover:shadow-xl active:scale-100 duration-100">
            {text}
        </button>
    )
}

export default Button