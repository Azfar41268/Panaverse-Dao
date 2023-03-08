import Logo from "/public/panaverse.png"
import Image from "next/image"
import Link from "next/link"
import Wrapper from "./wrapper"

const Header = () => {
  return (
    <Wrapper>
        <header className="flex justify-between bg-white py-3 sticky top-0 mb-10 items-center">
            <div>
                <Image src={Logo} alt="Panaverse" />
            </div>
            <ul className="flex space-x-9 font-semibold text-lg">
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
        </header>
    </Wrapper>
  )
}

export default Header