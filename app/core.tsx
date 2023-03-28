import Link from "next/link"
import Button from "./button"
import Wrapper from "./wrapper"


const Core = () => {
  return (
    <section>
        <Wrapper>
            <div className="mt-20 ">
                {/* Content */}
                <div className="relative">
                    <div className="absolute bg-blue-900 blur-2xl py-36 px-48 rounded-full -top-24 -left-52 opacity-10"></div>
                    <h4 className="text-base font-medium text-[#1c1fd6]">
                      Program of Studies
                    </h4>
                    <h1 className="text-3xl mt-2 sm:text-4xl font-bold">
                      Core Courses
                    </h1>
                    <h1 className="text-3xl sm:text-4xl font-bold">
                      (Common in All Specializations):
                    </h1>
                    <p className="font-medium text-lg mt-5 text-[#4A5B5C]">
                      Every participant of the program will start by completing the
                    </p>
                    <p className="font-medium text-lg text-[#4A5B5C]">
                      following three core courses:
                    </p>
                    <a target="_blank" href="https://www.piaic.org/howitworks">
                      <Button text="Learn More" />
                    </a>
                </div>
                {/* Boxes */}
                <div className="flex flex-wrap flex-col md:space-x-3 md:gap-x-0 lg:flex-row lg:justify-between items-center">
                    {/* Box 1 */}
                    <div className="border relative rounded-md w-full lg:w-3/12 pl-2 md:pl-10 py-20 my-20 hover:scale-105 duration-200 active:scale-105 duration-200">
                        <Link href="./courses/ai/Quarters/q1">
                          <h4 className="font-semibold">
                            Quarter I
                          </h4>
                          <h5 className="mt-2 text-[#4A5B5C] font-medium text-base">
                            CS-101: Object-Oriented Programming using TypeScript
                          </h5>
                          <div className="absolute -top-10 right-20 text-[204px] font-semibold opacity-5">1</div>
                        </Link>
                    </div>
                    {/* Box 2 */}
                    <div className="border relative rounded-md w-full lg:w-3/12 pl-2 md:pl-10 py-20 my-20 hover:scale-105 duration-200 active:scale-105 duration-200">
                      <Link href="./courses/ai/Quarters/q2">
                        <h4 className="font-semibold">
                          Quarter II
                        </h4>
                        <h5 className="mt-2 text-[#4A5B5C] font-medium text-base">
                          W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
                        </h5>
                        <div className="absolute -top-10 right-20 text-[204px] font-semibold opacity-5">2</div>
                      </Link>
                    </div>
                    {/* Box 3 */}
                    <div className="border relative rounded-md w-full lg:w-3/12 pl-2 md:pl-10 py-20 my-20 hover:scale-105 duration-200 active:scale-105 duration-200">
                      <Link href="./courses/ai/Quarters/q3">
                        <h4 className="font-semibold">
                          Quarter III
                        </h4>
                        <h5 className="mt-2 text-[#4A5B5C] font-medium text-base">
                          $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
                        </h5>
                        <div className="absolute -top-10 right-20 text-[204px] font-semibold opacity-5">3</div>
                      </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Core