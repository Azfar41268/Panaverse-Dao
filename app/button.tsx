'use client';

import React, { FC } from "react";

const Button: FC<{text: string}> = ({text}) => { 
    return(
        <button className="px-3 py-2 mt-3 text-md font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-green-600 hover:scale-105 duration-200 hover:shadow-xl active:scale-100 duration-75 hover:from-green-600 hover:to-blue-600">
            {text}
        </button>
    )
}

export default Button