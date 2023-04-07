import Wrapper from "@/app/wrapper"
import Image from "next/image"
import Botton from "./botton"
import Pic from "public/Picc.png"

function Hero() {
  return (
    <div className="relative h-[780px] md:h-[1050px] lg:h-[650px]">
        <div className="w-full pt-10 md:pt-0 bg-slate-800 absolute top-0 h-[780px] md:h-[1050px] lg:h-[650px] -z-10"></div>
        <Wrapper>
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              {/* Content */}
              <div className='mt-10 lg:mt-0'>
              <h1 className="lg:text-[480px] md:text-[500px] sm:text-[300px] text-[270px] text-sky-500 font-bold absolute -z-10 -top-24 lg:-top-32 md:-top-48 -left-12 md:left-10 lg:-left-16 opacity-30">Q3</h1>
                <h2 className="text-xl font-bold text-sky-500">Core Track</h2>
                <h1 className="text-5xl lg:text-7xl font-bold text-white mt-4 max-w-lg">Common In All Specializations</h1>
                <h4 className="text-white text-lg font-normal mt-5">Every Participant of the program will cover the following 3 quarters</h4>
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