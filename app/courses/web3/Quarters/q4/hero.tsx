import Botton from '../../botton'
import Wrapper from "@/app/wrapper"
import Image from "next/image"
import Pic from "public/Picc.png"

function Hero() {
  return (
    <div className="relative h-[970px] md:h-[1050px] lg:h-[650px] bg-slate-800">
        {/* <div className="w-full bg-slate-800 absolute top-0 h-[970px] md:h-[1050px] lg:h-[650px] -z-10"></div> */}
        <Wrapper>
          <div className='relative'>
            <div className="flex flex-col lg:flex-row justify-between items-center">
            <h1 className="lg:text-[430px] md:text-[500px] text-[270px] text-sky-500 font-bold absolute -top-24 lg:-top-20 md:-top-48 -left-12 md:left-10 lg:-left-10 opacity-30 z-10">Q4</h1>
              {/* Content */}
              <div className='lg:mt-0 mt-10 max-w-xl z-20'>
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