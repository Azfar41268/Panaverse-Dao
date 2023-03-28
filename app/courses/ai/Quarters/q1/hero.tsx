import Wrapper from "@/app/wrapper"
import Image from "next/image"
import Botton from "../../botton"
import Pic from "public/Picc.png"

function Hero() {
  return (
    <div className="relative">
        <div className="w-full bg-slate-800 absolute top-0 h-[950px] md:h-[970px] lg:h-[650px] -z-10"></div>
        <Wrapper>
          <div className="relative">
            <div className="flex flex-wrap flex-col lg:flex-row justify-between items-center">
              {/* Content */}
              <div className='mt-10 lg:mt-0'>
                <h1 className="text-[550px] text-sky-500 font-bold absolute -z-10 -top-32 -left-16 opacity-30">Q1</h1>
                <h2 className="text-xl font-bold text-sky-500">Core Track</h2>
                <h1 className="text-7xl font-bold text-white mt-4 max-w-lg">Common In All Specializations</h1>
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