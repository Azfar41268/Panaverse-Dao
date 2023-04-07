import Wrapper from "@/app/wrapper"
import Quarters from "../../Box"
import "./course.css"

function Course() {
  return (
    <div>
        <Wrapper>
            <div className="flex flex-wrap gap-x-28">
                <div className="w-full lg:w-7/12 order-last lg:order-none">
                    <h2 className="text-xl font-semibold text-blue-500 mt-10 mb-4">AC-361: Embedded Programming using C and Rust</h2>
                    <h1 className="text-5xl font-bold mb-6">Course Description: </h1>
                    <p className="text-lg text-slate-600 mb-10">
                        This is an introductory course about using the C and Rust Programming Languages on "Bare Metal" embedded systems, such as Microcontrollers. We will start by introducing 
                        embedded systems and move on to learn the C++ and Rust programming languages. We'll learn about basic programming concepts using C and Rust, then we will explore key concepts 
                        in electronics, microcontrollers, and embedded programming. It is a fast-paced, thorough introduction to programming with C and Rust that will have you writing programs, 
                        solving problems, burning your code on microcontrollers, playing with GPIOs, and making things that work in no time.
                    </p>
                    <div className="flex flex-col lg:flex-row mb-10">
                        <div className="basis-1/2 justify-between border-4 border-blue-500 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg p-10">
                            <h1 className="text-4xl font-bold mt-4 ml-4">Specialized Track</h1>
                        </div>
                        <div className="basis-1/2 flex flex-col justify-between border-4 border-blue-500 rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg p-10 bg-blue-500">
                            <h2 className="text-3xl text-white font-semibold">
                                Duration
                            </h2>
                            <h3 className="text-xl text-white mt-3">
                                13 weeks
                            </h3>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold mb-6">
                        Course Outline:
                    </h1>
                    <h3 className="text-3xl font-semibold mb-3">
                        Introduction to the Internet of Things and Embedded Systems (Week 1 and 2)
                    </h3>
                    <p className="text-lg text-slate-600 mb-1">
                        <a className="text-blue-500 underline" href="https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=sharing">
                            Presentation Link
                        </a>
                    </p>
                    <ul className="mb-2">
                        <li>What is the Fourth Industrial Revolution?</li>
                        <li>What is IoT?</li>
                        <li>Embedded Systems</li>
                        <li>Hardware and Software for IoT</li>
                        <li>Edge and Cloud Computing</li>
                        <li>The future of IoT is AI</li>
                        <li>Blockchain in the Internet of Things?</li>
                        <li>IoT + AI + Blockchain: The Fourth Industrial Revolution has begun</li>
                        <li>How will Matter change the IoT Infrastructure and address issues</li>
                        <li>Metaverse and IoT</li>
                    </ul>
                    <p className="text-slate-600 text-lg mb-6">
                        <b className="text-black">Mid-Term I: Introduction to the Internet of Things (IoT) Quiz in Week 3</b>
                        <br />
                        Total Questions: 46, Total Time: 60 minutes
                    </p>
                    <h2 className="text-3xl font-semibold mb-5">
                        The C Reference Book: The C programming language
                    </h2>
                    <p className="text-lg text-slate-600 mb-6">
                        Embedded Programming book: Internet of things with ESP8266
                        <br />
                        <a className="text-blue-500 underline" href="https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing">Dowload Link:</a>
                    </p>
                    <h2 className="text-3xl font-semibold mb-4">
                        Introduction to C Part 1 (Weeks 3B, 4, and 5)
                    </h2>
                    <p className="text-lg text-slate-600 mb-1">
                        C environment Setup for (Windows, Linux, and Mac OS systems)
                        <br />
                        Chapters 1-2 of “<b>The C programming language</b>”
                    </p>
                    <ul className="mb-3">
                        <li>Variable names types</li>
                        <li>Data types and sizes</li>
                        <li>Constants</li>
                        <li>Arithmetic operations</li>
                        <li>Logical and relational operators</li>
                        <li>Type conversions</li>
                        <li>Bitwise operators</li>
                        <li>Conditional expressions.</li>
                    </ul>
                    <p className="text-lg mb-5">
                        <b>Programming Assignments will also be given.</b>
                    </p>
                    <h2 className="text-3xl font-semibold mb-3">
                        C Programming Part 2 (Weeks 6 and 7)
                    </h2>
                    <p className="text-lg text-slate-600 mb-1">
                        Topics 3 and 4 of “<b>The C programming language</b>”
                    </p>
                    <ul className="mb-2">
                        <li>Control flow statements (else if, loops, switch, break continue)</li>
                        <li>Function and Program structure(Returning and non-returning, scope rules, Recursion)</li>
                    </ul>
                    <p className="text-lg mb-5">
                        <b>Programming Assignments will also be given.</b>
                    </p>
                    <h2 className="text-3xl font-semibold mb-3">
                        Introduction to Embedded systems Part 1 (Weeks 8)
                    </h2>
                    <p className="text-lg text-slate-600 mb-1">
                        Basic Electronics and Introduction to microcontrollers
                        <br />
                        Chapter 1 of “<b>Internet of things with ESP8266</b>”
                    </p>
                    <ul className="mb-3">
                        <li>Arduino IDE installation and env setup for ESP8266</li>
                        <li>Burning your first code on ESP8266</li>
                    </ul>
                    <b className="mb-4 text-lg">Project-based Assignments will also be given</b>
                    <br />
                    <p className="mt-3"></p>
                    <b className="mb-4 text-lg">Mid-Term II: C Programming Quiz 1 in Week 9</b>
                    <p className="text-lg mt-3 mb-5 text-slate-600">
                        Total Questions: 62, Total Time: 75 minutes
                    </p>
                    <h2 className="text-3xl font-semibold mb-3">
                        Introduction to Embedded systems Part 2 (Weeks 9-12)
                    </h2>
                    <p className="text-lg text-slate-600 mb-2">
                        Chapters 2-5 of “<b>Internet of things with ESP8266</b>”
                    </p>
                    <ul className="mb-5">
                        <li><a className="text-blue-500 underline" href="https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/">Connecting your hardware to wifi</a>.</li>
                        <li><a className="text-blue-500 underline" href="https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number">Reading data from GPIOs</a></li>
                        <li>Controlling LEDs.</li>
                        <li><a className="text-blue-500 underline" href="https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/">Reading data from digital sensors.</a></li>
                        <li>Cloud data logging.</li>
                        <ul className="lef50">
                            <li><a className="text-blue-500 underline" href="https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html">ESP8266 ( Beginner's Guide )</a></li>
                            <li><a className="text-blue-500 underline" href="https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform">Micro-Controller Projects</a></li>
                            <li><a className="text-blue-500 underline" href="https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver">Further Projects (Uploading Data to Webserver)</a></li>
                        </ul>
                        <li><a className="text-blue-500 underline" href="https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud">Displaying data on the cloud.</a></li>
                        <li><a className="text-blue-500 underline" href="https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/">Controlling controller remotely.</a></li>
                        <li>Controlling a lamp anywhere in the world.</li>
                        <li>Interacting with different web services.</li>
                    </ul>
                    <h2 className="text-3xl font-semibold mb-4">
                        Embedded Programming using Rust (Extra Weeks in the Course)
                    </h2>
                    <ul>
                        <li>
                            <a className="text-blue-500 underline" href="https://www.rust-lang.org/what/embedded">https://www.rust-lang.org/what/embedded</a>
                        </li>
                        <li>
                            <a className="text-blue-500 underline" href="https://crates.io/crates/esp8266">https://crates.io/crates/esp8266</a>
                        </li>
                    </ul>
                    <h2 className="text-3xl font-semibold mt-5 mb-5">
                        Hardware Requirements:
                    </h2>
                    <ul className="mb-20">
                        <li className="num">Esp8266 (Node MCU)</li>
                        <li className="num">Jumper Wires</li>
                        <li className="num">Bread Board</li>
                        <li className="num">LEDs</li>
                        <li className="num">Sensors: (Dht11, ultrasonic sensor, IR sensor)</li>
                    </ul>
                </div>
                {/* Right Side */}
                <div className="lg:w-3/12 lg:mt-0 mt-10">
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
    </div>
  )
}

export default Course