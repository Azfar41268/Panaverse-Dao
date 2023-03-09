import Logo from "/public/panaverse.png"
import Image from "next/image"
import Link from "next/link"
import Wrapper from "./wrapper"

const Header = () => {
  return (
    <Wrapper>
        <header className="flex flex-wrap bg-opacity-50 justify-between bg-white py-3 sticky top-0 mb-10 items-center">
            <div>
                <Image src={Logo} alt="Panaverse" />
            </div>
            <ul className="flex space-x-9 font-semibold text-lg order-last flex-[100%] mt-4 md:order-none md:flex-auto md:mt-0 justify-center">
                <li>
                    <Link href={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={"/courses"}>
                        Courses
                    </Link>
                </li>
            </ul>
            <div className="">
                <button className="px-3 mx-auto py-2 mt-3 mb-4 text-md font-medium text-white rounded-full bg-blue-800 hover:bg-stone-200 duration-400 hover:text-black duration-400 hover:scale-105 duration-300 hover:shadow-xl active:scale-100 duration-75">
                    <a href="https://portal.piaic.org/signup">
                        Sign Up
                    </a>
                </button>
            </div>
        </header>
    </Wrapper>
  )
}

export default Header