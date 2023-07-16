import Wrapper from "@/app/wrapper"
import Link from "next/link"
import Quarters from "../../Box"


function Course() {
    const text= "After completing the first three quarters the\nparticipants will select one or more specializations\nconsisting of two courses each."
  return (
    <section>
        <Wrapper>
            <div className="flex flex-wrap justify-between mt-10 mb-20 max-w-full md:w-auto">
                <div className="lg:w-7/12 order-last lg:order-none">
                    {/* Course Description */}
                    <div className="">
                        {/* Left Side */}
                        <div className="">
                            <h2 className="font-bold text-lg text-blue-500 mb-3">AI-351: Developing Planet-Scale Intelligent APIs and Python Programming</h2>
                            <h1 className="font-bold text-5xl mb-5">Course Description:</h1>
                            <p className="text-base text-slate-500 font-medium mb-5">Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning's potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology.</p>
                            <p className="text-base text-slate-500 font-medium mb-5">We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13.</p>
                            <p className="text-base text-slate-500 font-medium mb-10">We'll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. We'll also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.</p>

                        </div>
                    </div>
                    {/* Course Outling */}
                    <div className="flex flex-col md:flex-row h-[200px] justify-between mb-52 md:mb-10">
                        <div className="text-3xl font-bold flex flex-col justify-center items-center basis-1/2 border-4 border-blue-500 rounded-t-lg md:rounded-tr-none md:rounded-l-lg p-10 pt-20">
                            Specialized Program
                        </div>
                        <div className="justify-center basis-1/2 p-10 border-4 border-blue-500 rounded-b-lg md:rounded-bl-none md:rounded-r-lg bg-blue-500 pt-16">
                            <h1 className="text-white font-bold text-3xl mb-2">Duration</h1>
                            <h2 className="text-white text-lg">13 Weeks</h2>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold mb-7">Course Outline: </h1>
                        <h2 className="text-3xl font-normal mb-4">Introduction to Machine Learning, Data Science, and AI</h2>
                        <a className="text-lg text-blue-600 underline" href="https://www.coursera.org/learn/ai-for-everyone">AI for Everyone</a>
                        <h4 className="text-lg font-medium mt-3 mb-4">AI for Everyone Quiz in Week 3</h4>
                        <h3 className="text-lg text-slate-600">Total Questions: 60, Total Time: 75 minutes</h3>
                        <h3 className="text-lg text-slate-600">Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models</h3>
                        <h3 className="text-lg text-slate-600 mb-3">We will cover GPT-4, ChatGPT, etc. and Next.js 13</h3>
                        <a href="https://openai.com/api/" className="text-base text-blue-600 underline">https://openai.com/api/</a>
                        <br />
                        <a href="https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45" className="text-base text-blue-600 underline">https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45</a>
                        <h2 className="mt-4 font-semibold text-3xl">Python Crash Course for TypeScript Developers</h2>
                        <h3 className="text-xl text-slate-600 mt-5">Python Crash Course, 2nd Edition: <a className="text-lg text-blue-600 underline">A Hands-On, Project-Based Introduction to Programming 2nd Edition</a></h3>
                    </div>
                </div>
                {/* Right Side */}
                <div className="lg:w-4/12 z-10 lg:mt-0 mt-10 sticky">
                    <div className="sticky">
                        <div className="flex flex-col border shadow-xl rounded-lg py-6 px-6">
                            <h2 className="font-bold text-xl mb-4">Program Structure</h2>
                            <p className="font-medium text-slate-500 text-base mb-5">After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
                            {/* Boxes */}
                            <div>
                                <a href="../Quarters/q1">
                                    <Quarters insideBox="Q1" text="Quarter I" /> 
                                </a>
                                <a href="../Quarters/q2">
                                    <Quarters insideBox="Q2" text="Quarter II" />
                                </a>
                                <a href="../Quarters/q3">
                                    <Quarters insideBox="Q3" text="Quarter III" /> 
                                </a>
                                <a href="#">
                                    <Quarters insideBox="Q4" text="Quarter IV" /> 
                                </a>
                                <a href="../Quarters/q5">
                                    <Quarters insideBox="Q5" text="Quarter V" /> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Course