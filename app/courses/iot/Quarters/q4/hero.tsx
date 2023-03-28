import Botton from '../../botton'
import Wrapper from "@/app/wrapper"
import Image from "next/image"
import Pic from "public/Picc.png"

function Hero() {
  return (
    <div className="relative">
        <div className="w-full bg-slate-800 absolute top-0 h-[950px] md:h-[970px] lg:h-[650px] -z-10"></div>
        <Wrapper>
          <div>
            <div className="flex flex-col lg:flex-row justify-between items-center">
              {/* Content */}
              <div className='mt-10 lg:mt-0'>
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