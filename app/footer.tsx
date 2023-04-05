import Image from "next/image"
import Link from "next/link"
import Panaverse from "public/panaverse.png"
import Wrapper from "./wrapper"
import Face from "public/facebook.png"
import You from "public/youtube.png"
import Git from "public/github.png"
import Twit from "public/twitter.png"

function Footer() {
  return (
    <div className="border-t-2">
        <Wrapper>
            <div className="grid grid-cols-2 gap-x-44 mb-10 mt-10">
                {/* Left Side */}
                <div className="col-span-1">
                    <div className="mb-5">
                        <Link href="/">
                            <Image src={Panaverse} alt="" height={90} />
                        </Link>
                    </div>
                    <p className="text-xl text-slate-600 mb-5">
                        Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
                    </p>
                    <div className="inline-flex gap-x-5">
                        <a href="https://www.facebook.com/groups/panaverse" target="_blank">
                            <div className="px-4 py-3 rounded-full bg-gradient-to-b from-blue-600 to-sky-400 hover:scale-105 duration-200">
                                <Image src={Face} alt="" />
                            </div>
                        </a>
                        <a target="_blank" href="https://www.youtube.com/@panaverse/streams">
                            <div className="px-3 py-4 rounded-full bg-gradient-to-b from-blue-600 to-sky-400 hover:scale-105 duration-200">
                                <Image src={You} alt="" />
                            </div>
                        </a>
                        <a target="_blank" href="https://github.com/panaverse">
                            <div className="p-3 rounded-full bg-gradient-to-b from-blue-600 to-sky-400 hover:scale-105 duration-200">
                                <Image src={Git} alt="" />
                            </div>
                        </a>
                        <a target="_blank" href="https://twitter.com/Panaverse_edu">
                            <div className="p-3 rounded-full bg-gradient-to-b from-blue-600 to-sky-400 hover:scale-105 duration-200">
                                <Image src={Twit} alt="" />
                            </div>
                        </a>
                    </div>
                </div>
                {/* Right Side */}
                <div className="grid grid-cols-2">
                    {/* Programs */}
                    <div className="cols-span-1">
                        <h2 className="font-semibold text-xl">
                            Programs
                        </h2>
                        <div className="hover:text-blue-600 mb-2 mt-4 text-lg">
                            <Link href="./courses/ai/Quarters/q4">Artificial Intelligence</Link>
                        </div>
                        <div className="hover:text-blue-600 mb-2 mt-4 text-lg">
                            <Link href="./courses/web3/Quarters/q4">Web 3.0 and Metaverse Developer</Link>
                        </div>
                        <div className="hover:text-blue-600 mb-2 mt-4 text-lg">
                            <Link href="./courses/iot/Quarters/q4">Ambient Computing and IoT</Link>
                        </div>
                    </div>
                    {/* Pages */}
                    <div>
                        <h2 className="text-xl font-semibold">
                            Pages
                        </h2>
                        <div className="hover:text-blue-600 mb-2 mt-4 text-lg">
                            <Link href="/">Home</Link>
                        </div>
                        <div className="hover:text-blue-600 mb-2 mt-2 text-lg">
                            <Link href="./Quarters/q1">Quarter I</Link>
                        </div>
                        <div className="hover:text-blue-600 mb-2 mt-2 text-lg">
                            <Link href="./Quarters/q2">Quarter II</Link>
                        </div>
                        <div className="hover:text-blue-600 mb-2 mt-2 text-lg">
                            <Link href="./Quarters/q3">Quarter III</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Footer