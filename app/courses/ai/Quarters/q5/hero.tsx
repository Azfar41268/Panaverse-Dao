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
                <h1 className="text-[550px] text-sky-500 font-bold absolute -z-10 -top-32 -left-16 opacity-30">Q5</h1>
                <div className="max-w-screen-md">
                  <h2 className="text-2xl font-bold text-sky-500">Specialized Track</h2>
                  <h1 className="text-5xl font-bold text-white mt-4">Artificial Intelligence (AI) and Deep Learning Specialization</h1>
                  <h4 className="text-white text-lg font-normal mt-5">The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</h4>
                  <div className="mt-6">
                    <Botton text="Enroll Now" />
                  </div>
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