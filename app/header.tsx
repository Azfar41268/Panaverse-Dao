import Logo from "/public/panaverse.png"
import Image from "next/image"
import Link from "next/link"
import Wrapper from "./wrapper"
import Courses from "./courses"

const Header = () => {
  return (
    <div className="z-50 bg-opacity-50 backdrop-blur-xl bg-white sticky py-3 top-0 right-0 left-0 mb-10">
        <Wrapper>
            <header className="flex flex-wrap justify-between items-center">
                <a href="/">
                    <Image src={Logo} alt="Panaverse" />
                </a>
                <div className="flex space-x-9 font-semibold text-lg order-last flex-[100%] mt-4 md:order-none md:flex-auto md:mt-0 justify-center">
                    <div>
                        <Link href={"/"}>
                            Home
                        </Link>
                    </div>
                    <div>
                        <Courses />
                    </div>
                </div>
                <div className="">
                    <button className="px-4 mx-auto py-3 mt-3 mb-4 text-md font-medium text-white rounded-full bg-blue-700 hover:bg-stone-200 duration-400 hover:text-black duration-400 hover:scale-105 duration-300 hover:shadow-xl active:scale-100 duration-75">
                        <a target="_blank" href="https://portal.piaic.org/signup">
                            Sign Up
                        </a>
                    </button>
                </div>
            </header>
        </Wrapper>
    </div>
  )
}

export default Header