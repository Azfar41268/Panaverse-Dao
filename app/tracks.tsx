import Wrapper from "./wrapper"
import Image from "next/image"
import Firsts from "public/First.png"
import Seconds from "public/Second.png"
import Third from "public/Third.png"
import Fourth from "public/Fourth.png"
import Fifth from "public/Fifth.png"
import Sixth from "public/Sixth.png"
import Link from "next/link"


const Tracks = () => {
    const text = "After completing the first three quarters the participants will select \n one or more specializations consisting of two courses each:"
  return (
    <section>
        <Wrapper>
            <div>
                {/* Upper Content */}
                <div>
                    <h1 className="text-4xl font-bold mb-5 mt-20">Specialized Tracks:</h1>
                    <p className="mb-20 whitespace-pre-line text-[#4A5B5C] font-medium text-lg">{text}</p>
                </div>
                {/* Lower Content */}
                <div className="flex flex-wrap sm:space-x-12 md:space-x-6 space-x-0">
                    {/* Left Side */}
                    <div className="w-full md:mr-10 lg:mr-0 lg:w-8/12 border rounded-xl mb-20">
                        <div className="py-12 px-16">
                            <h4 className="text-blue-400 mb-8">Specialized Program</h4>
                            <h3 className="font-semibold text-3xl max-w-lg mb-8">Web 3.0 (Blockchain) and Metaverse Specialization</h3>
                            <p className="text-slate-600 font-medium">This Web 3.0 and Metaverse specialization focuses on developing full-stack 
                                Web 3.0 and Metaverse experiences for the next generation of the internet 
                                by specializing in building worlds that merge the best of cutting-edge decentralized 
                                distributed blockchains with 3D metaverse client experiences.</p>
                            <a href="https://piaic.org" target="_blank">
                                <button className="border-4 border-blue-600 rounded-lg py-3 px-5 mt-8 font-semibold text-lg text-blue-600 hover:scale-105 duration-200">
                                    Leran More
                                </button>
                            </a>
                            {/* Boxes */}
                            <div className="flex flex-wrap justify-between mb-40 items-center">
                                {/* Box 1 */}
                                <div className="mt-40 max-w-sm relative hover:scale-105 duration-200">
                                    <Link href="./courses/web3/Quarters/q4">
                                        <h4 className="text-lg font-bold">Quarter IV</h4>
                                        <p className="font-medium text-base text-slate-600">W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
                                        <div className="absolute text-[204px] -top-32 right-0 sm:right-10 md:right-20 opacity-20 font-semibold">4</div>
                                    </Link>
                                </div>
                                {/* Box 2 */}
                                <div className="mt-40 max-w-sm relative hover:scale-105 duration-200">
                                    <Link href="./courses/web3/Quarters/q5">
                                        <h4 className="text-lg font-bold">Quarter V</h4>
                                        <p className="font-medium text-base text-slate-600">W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
                                        <div className="absolute text-[204px] -top-32 right-0 sm:right-10 md:right-20 opacity-20 font-semibold">5</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Side (6 rows) */}
                    <div className="w-full lg:w-3/12 flex md:flex-col flex-wrap flex-row">
                        {/* 1 */}
                        <div className="flex space-x-5 mb-9 items-center">
                            <div className="hover:scale-105 duration-300">
                                <a target="_blank" href="https://www.piaic.org/block-chain">
                                    <Image src={Firsts} alt="" />
                                </a>
                            </div>
                            <div>
                                <h4 className="text-base font-normal text-blue-500">Specialized Program</h4>
                                <h3 className="text-lg font-semibold max-w-[250px]">Web 3.0 (Blockchain) and Metaverse Specialization</h3>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="flex space-x-5 py-9 sm:px-auto border-y-2 items-center">
                            <div className="hover:scale-105 duration-300">
                                <a target="_blank" href="https://www.piaic.org/artificial-inteligence">
                                <Image src={Seconds} alt="" /> 
                                </a>
                            </div>
                            <div>
                                <h4 className="text-base font-normal text-blue-500">Specialized Program</h4>
                                <h3 className="text-lg font-semibold max-w-[250px]">Artificial Intelligence (AI) and Deep Learning Specialization</h3>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="flex space-x-5 py-9 border-y-2 items-center">
                            <div className="hover:scale-105 duration-300">
                                <a target="_blank" href="https://www.piaic.org/iot">
                                <Image src={Third} alt="" /> 
                                </a>
                            </div>
                            <div>
                                <h4 className="text-base font-normal text-blue-500">Specialized Program</h4>
                                <h3 className="text-lg font-semibold max-w-[250px]">Internet of Things (IoT) and Cloud Network Specialization</h3>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className="flex space-x-5 py-9 border-y-2 items-center">
                            <div className="hover:scale-105 duration-300">
                                <a target="_blank" href="https://www.piaic.org/artificial-inteligence">
                                <Image src={Fourth} alt="" /> 
                                </a>
                            </div>
                            <div>
                                <h4 className="text-base font-normal text-blue-500">Specialized Program</h4>
                                <h3 className="text-lg font-semibold max-w-[250px]">Artificial Intelligence (AI) and Deep Learning Specialization</h3>
                            </div>
                        </div>
                        {/* 5 */}
                        <div className="flex space-x-5 py-9 border-y-2 items-center">
                            <div className="hover:scale-105 duration-300">
                                <a target="_blank" href="https://www.piaic.org/iot">
                                <Image src={Fifth} alt="" /> 
                                </a>
                            </div>
                            <div>
                                <h4 className="text-base font-normal text-blue-500">Specialized Program</h4>
                                <h3 className="text-lg font-semibold max-w-[250px]">Internet of Things (IoT) and Cloud Network Specialization</h3>
                            </div>
                        </div>
                        {/* 6 */}
                        <div className="flex space-x-5 py-9 border-y-2 mb-10 items-center">
                            <div className="hover:scale-105 duration-300">
                                <a target="_blank" href="https://www.piaic.org/block-chain">
                                    <Image src={Sixth} alt="" />
                                </a>
                            </div>
                            <div>
                                <h4 className="text-base font-normal text-blue-500">Specialized Program</h4>
                                <h3 className="text-lg font-semibold max-w-[250px]">Web 3.0 (Blockchain) and Metaverse Specialization</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Tracks