import Wrapper from "@/app/wrapper"
import Quarters from "../../Box"


function Course() {
    const text= "After completing the first three quarters the\nparticipants will select one or more specializations\nconsisting of two courses each."
  return (
    <section>
        <Wrapper>
            <div className="flex flex-wrap justify-between mt-20 md:mt-10 mb-20">
                <div className="lg:w-7/12 lg:order-none order-last">
                    {/* Course Description */}
                    <div className="">
                        {/* Left Side */}
                        <div className="">
                            <h2 className="font-bold text-lg text-blue-500 mb-3">AC-351: Ambient Computing with Voice Assistants and Matter Devices</h2>
                            <h1 className="font-bold text-5xl mb-5">Course Description:</h1>
                            <p className="text-base text-slate-500 font-medium mb-5">Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. In a multi-device world, people don't want to spend their life fussing with technology. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. It doesn't matter what device you're using, what context you're in, whether you're talking, typing, or tapping. The technology in your life works together seamlessly. Ambient computing uses all aspects of modern-day technology, including voice assistants, artificial intelligence, sensors, connectivity, cloud computing and more.</p>
                            <p className="text-base text-slate-500 font-medium mb-5">If you were thinking that the IoT and ambient computing sound a lot alike, you aren't wrong; the two concepts are intertwined. IoT refers to the vast array of devices that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. Ambient computing focuses on the interaction between these devices once they are connected.</p>
                            <p className="text-base text-slate-500 font-medium mb-5">Matter, the next-generation smart home standard, solves many smart home pain points while bringing all our IoT devices together. Some of the biggest tech companies are working together to make Matter a unified protocol for future smart homes. These companies include Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa, Samsung SmartThings, Google Nest, and Samsung SmartThings will support the Matter standard by default for all new devices.</p>
                            <p className="text-base text-slate-500 font-medium mb-10">In this course we will learn to build smart homes with Amazon Alexa and Matter protocol.</p>

                        </div>
                    </div>
                    {/* Course Outling */}
                    <div className="flex flex-col md:flex-row h-[200px] justify-between mb-52 md:mb-10">
                        <div className="text-3xl font-bold justify-center basis-1/2 border-4 border-blue-500 rounded-t-lg md:rounded-tr-none md:rounded-l-lg p-10 pt-20">
                            Specialized Program
                        </div>
                        <div className="justify-center basis-1/2 p-10 border-4 border-blue-500 rounded-b-lg md:rounded-bl-none md:rounded-r-lg bg-blue-500 pt-16">
                            <h1 className="text-white font-bold text-3xl mb-2">Duration</h1>
                            <h2 className="text-white text-lg">13 Weeks</h2>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold mb-7">Course Outline: </h1>
                        <h2 className="text-3xl font-semibold mb-4">Alexa Skill Developement</h2>
                        <a className="text-lg text-blue-600 underline" href="https://developer.amazon.com/en-US/alexa">https://developer.amazon.com/en-US/alexa</a>
                        <h4 className="text-3xl font-semibold mt-3 mb-4">Alexa with Matter Protocol</h4>
                        <a href="https://developer.amazon.com/en-US/alexa/matter" className="text-base text-blue-600 underline">https://developer.amazon.com/en-US/alexa/matter</a>
                        <br />
                        <a href="https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html" className="text-base text-blue-600 underline">https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html</a>
                    </div>
                </div>
                {/* Right Side */}
                <div className="lg:w-4/12 z-10 lg:mt-0 mt-10">
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