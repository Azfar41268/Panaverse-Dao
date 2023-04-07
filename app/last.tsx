import Wrapper from "./wrapper"
import Image from "next/image"
import Lat from "public/End.png"
import Lit from "public/List.png"


const Last = () => {
    const text = "The Outcome for Participants of \nthe Program"
  return (
    <section>
        <Wrapper>
            <div className="flex flex-wrap justify-around mb-20 items-center">
                {/* Left Side */}
                <div className="hover:scale-105 duration-300">
                    <Image src={Lat} alt="" />
                </div>
                {/* Right Side */}
                <div className="max-w-screen-md relative">
                    <h1 className="text-4xl font-bold whitespace-pre-line">{text}</h1>
                    <h4 className="text-slate-500 font-medium text-base mb-20 mt-10">As a graduate of this program, you will own valuable products such as Full-Stack App Templates, 
                        AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have 
                        the opportunity to offer your services at a rate of $50 per hour, providing a path to financial 
                        stability while contributing to the growth of Pakistan's software exports.</h4>
                    <ul className="flex flex-wrap justify-between items-center gap-y-10">
                        <li className="flex items-center gap-x-3">
                            <Image src={Lit} alt="" />
                            <h2 className="font-semibold text-lg">Product Ownership</h2>
                        </li>
                        <li className="flex items-center gap-x-3">
                            <Image src={Lit} alt="" />
                            <h2 className="font-semibold text-lg mr-16">Freelancing</h2>
                        </li>
                    </ul>
                    <br />
                    <br />
                    <ul className="flex flex-wrap justify-between items-center gap-y-10">
                        <li className="flex items-center gap-x-3">
                            <Image src={Lit} alt="" />
                            <h2 className="font-semibold text-lg">Global Marketing by DAO</h2>
                        </li>
                        <li className="flex items-center gap-x-3">
                            <Image src={Lit} alt="" />
                            <h2 className="font-semibold text-lg">Boosting Economy.</h2>
                        </li>
                    </ul>
                    <div className="rounded-full bg-blue-700 blur-3xl absolute p-52 sm:p-80 -right-52 top-0 opacity-10"></div>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Last