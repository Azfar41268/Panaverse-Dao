import Botton from '../../botton'
import Wrapper from "@/app/wrapper"
import Image from "next/image"
import Pic from "public/Picc.png"

function Hero() {
  return (
    <div className="relative">
        <div className="w-full bg-slate-800 absolute top-0 h-[960px] md:h-[1050px] lg:h-[650px] -z-10"></div>
        <Wrapper>
          <div className='relative'>
            <div className="flex flex-col lg:flex-row justify-between items-center">
              {/* Content */}
              <div className='lg:mt-0 mt-10'>
                <h1 className="text-[550px] text-sky-500 font-bold absolute -z-10 -top-32 -left-16 opacity-30">Q4</h1>
                <h2 className="text-2xl font-bold text-sky-500">Specialized Track</h2>
                <h1 className="text-5xl font-bold text-white mt-4">Web 3.0 (Blockchain) and Metaverse Specialization</h1>
                <h4 className="text-white text-lg font-normal mt-5">This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</h4>
                <div className="mt-6">
                  <Botton text="Enroll Now" />
                </div>
              </div>
              {/* Picture */}
              <Image src={Pic} alt="" />
            </div>
          </div>
        </Wrapper>
      </div>
  )
}

export default Hero