import { FC } from "react"

const Botton: FC<{text:string}> = ({text}) => {
  return (
    <button className="text-white text-lg font-bold py-4 px-5 bg-sky-600 rounded-full hover:scale-105 duration-500 hover:bg-cyan-500 active:scale-100 duration-100">
        {text}
    </button>
  )
}

export default Botton