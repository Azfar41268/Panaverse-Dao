import Button from "./button"
import Wrapper from "./wrapper"
import Image from "next/image"
import Hro from "public/HeroPoster.png"

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side */}
          <div className="flex-1">
            <h4 className="text-[#00616C] font-semibold mb-6">
              Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
            </h4>
            <h1 className="font-bold text-6xl mb-4">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mb-4 text-lg font-normal">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
            </p>
            <p className="mb-4 text-lg font-normal">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
            </p>
            <Button text="Learn More" />
          </div>
          {/* Right Side */}
          <div className="flex">
            <Image src={Hro} alt="Hero Poster"/>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero