import Wrapper from "@/app/wrapper"
import Quarters from "./Box"

function Course() {
  return (
    <div>
        <Wrapper>
            <div className="flex gap-x-28">
                {/* Left Side */}
                <div className="lg:w-7/12">
                    <h2 className="text-xl font-bold text-blue-500">
                        $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
                    </h2>
                    <h1 className="text-4xl font-bold mt-6 mb-6">
                        Course Description: 
                    </h1>
                    <p className="text-lg text-slate-600 mb-6">
                        In this course, you will be tasked with building APIs and a template to be sold on the Panaverse DAO Marketplace and Theme Forest. The Panaverse DAO will receive 25% of the sale for platform management and an additional 15% for marketing purposes. 60% of the revenues will be distributed to the developer as Panaverse tokens.
                    </p>
                    <div className="flex mb-10">
                        {/* Core Track */}
                        <div className="flex flex-col basis-1/2 justify-between px-9 py-12 border-4 rounded-l-lg border-blue-500">
                            <h2 className="text-3xl font-bold">
                                Core Track
                            </h2>
                            <h3 className="text-blue-500 text-lg mt-3">
                                (Common in all Specializations)
                            </h3>
                        </div>
                        {/* Duration */}
                        <div className="flex flex-col basis-1/2 justify-between px-9 py-12 border-4 rounded-r-lg bg-blue-500 border-blue-500">
                            <h2 className="text-3xl font-bold text-white">
                                Duration
                            </h2>
                            <h3 className="text-lg text-white mt-3">
                                13 weeks
                            </h3>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold mb-10">
                        Earn While You Learn Projects:
                    </h1>
                    <h2 className="text-4xl font-semibold mb-6">
                        A. Build Full-Stack Next.js 13 Jamstack Templates
                    </h2>
                    <p className="text-lg mb-6 text-slate-600">
                        You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.
                        <br />
                        The Template Standard<br />
                        <a className="text-blue-500 underline" href="https://github.com/panaverse/panaverse-template-standard">https://github.com/panaverse/panaverse-template-standard</a>
                    </p>
                    <h2 className="text-4xl font-semibold mb-6">
                        B. Build QraphQL APIs
                    </h2>
                    <p className="text-lg text-slate-600 mb-20">
                        You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.
                    </p>
                </div>
                {/* Right Side */}
                <div className="lg:w-3/12">
                    <div className="border shadow-xl p-5 h-[360px] rounded-lg sticky">
                        <h2 className="text-2xl font-bold mb-3">Program Structure</h2>
                        <p className="text-lg text-slate-600 font-medium mb-3">Every participant of the program will cover the following 3 qaurters.</p>
                        <a href="#"><Quarters text="Quarter I" insideBox="Q1" /></a>
                        <a href="./q2"><Quarters text="Quarter II" insideBox="Q2" /></a>
                        <a href="./q3"><Quarters text="Quarter III" insideBox="Q3" /></a>
                    </div>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Course