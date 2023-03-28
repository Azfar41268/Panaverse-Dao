import Button from "./button"
import Wrapper from "./wrapper"
import Image from "next/image"
import Hro from "public/HeroPoster.png"

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Side */}
          <div className="flex-1">
            <h4 className="text-[#1c1fd6] font-semibold mb-6">
              Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
            </h4>
            <h1 className="font-bold text-4xl md:text-6xl sm:text-5xl mb-4">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <div className="max-w-screen-sm">
              <p className="text-[#4A5B5C] mb-4 text-lg font-medium">
                A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
              </p>
              <p className=" text-[#4A5B5C] mb-4 text-lg font-medium">
                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
              </p>
            </div>
            <a target="_blank" href="https://www.piaic.org/howitworks">
              <Button text="Learn More" />
            </a>
          </div>
          {/* Right Side */}
          <div className="flex hover:scale-105 duration-300">
            <Image src={Hro} alt="Hero Poster"/>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero