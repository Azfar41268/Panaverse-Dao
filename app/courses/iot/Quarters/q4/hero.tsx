import Botton from '../../botton'
import Wrapper from "@/app/wrapper"
import Image from "next/image"
import Pic from "public/Picc.png"

function Hero() {
  return (
    <div className="relative h-[780px] md:h-[1050px] lg:h-[650px]">
      <div className="w-full pt-10 md:pt-0 bg-slate-800 absolute top-0 h-[850px] md:h-[1050px] lg:h-[650px] -z-10"></div>
        <Wrapper>
          <div className='relative'>
            <div className="flex flex-col lg:flex-row justify-between items-center">
              {/* Content */}
              <div className='mt-10 lg:mt-0'>
              <h1 className="lg:text-[480px] md:text-[500px] text-[300px] text-sky-500 font-bold absolute -z-10 -top-24 lg:-top-32 md:-top-48 -left-12 md:left-10 lg:-left-16 opacity-30">Q4</h1>
                <h2 className="text-2xl font-bold text-sky-500">Specialized Track</h2>
                <h1 className="text-5xl font-bold text-white mt-4">Ambient Computing and IoT Specialization</h1>
                <h4 className="text-white text-lg font-normal mt-5">The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.</h4>
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