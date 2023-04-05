import Wrapper from "@/app/wrapper"
import Quarters from "../Box"
import Link from "next/link"

function Course() {
  return (
    <div>
        <Wrapper>
            <div className="flex flex-wrap gap-x-28">
                {/* Left Side */}
                <div className="lg:w-7/12">
                    <h2 className="text-blue-500 text-lg font-bold mb-3">CS-101: Object-Oriented Programming using TypeScript</h2>
                    <h1 className="text-5xl font-bold mb-4">Course Description: </h1>
                    <h4 className="text-slate-600 text-lg font-medium mb-3">We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.</h4>
                    <div className="flex flex-col lg:flex-row mb-10">
                        <div className="flex flex-col basis-1/2 border-4 border-blue-500 rounded-l-lg pt-12 px-12 pb-10 items-start justify-between">
                            <h2 className="font-bold text-4xl mb-2">Core Track</h2>
                            <h3 className="text-blue-500 text-lg">(Specialized Tracks)</h3>
                        </div>
                        <div className="flex flex-col basis-1/2 border-4 bg-blue-500 border-blue-500 rounded-r-lg pt-12 px-12 pb-10 justify-between">
                            <h2 className="text-3xl font-bold text-white mb-2">Duration</h2>
                            <h3 className="text-lg text-white">13 weeks</h3>
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold mb-7">Course Outline:</h1>
                    <h2 className="font-semibold text-3xl mb-6">HTML and CSS (Homework)</h2>
                    <p><a className="text-blue-500 underline text-lg" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6">Learn HTML by Hira Khan (Watch Recorded Videos)</a>
                    <br />
                    <a className="text-blue-500 underline text-lg" href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob">Learn CSS Intro by Hira Khan (Watch Recorded Videos)</a></p>
                    <h2 className="text-3xl font-semibold mt-6 mb-6">Web 3.0 and Metaverse Theory</h2>
                    <p className="text-lg font-slate-600 mb-6"><a className="text-lg text-blue-500 underline" href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing">Introduction to Panaverse DAO</a>
                    <br />
                    <a className="text-lg text-blue-500 underline" href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing">Web 3.0 User Guide</a>
                    <br />
                    Complete Web 3 Assignments included in the Web 3 User Guide
                    <br />
                    <a className="text-lg text-blue-500 underline" href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing">Virtual and Augmented Metaverse User Guide</a></p>
                    <h2 className="text-[27px] font-semibold mb-6">Fundamentals of JavaScript (ECMAScript 2022 Language Specification)</h2>
                    <p className="mb-6"><a className="text-lg text-blue-500 underline">Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)</a>
                    <br />
                    <a className="text-lg text-blue-500 underline">Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages</a>
                    <br />
                    <a className="text-lg text-blue-500 underline">JavaScript Book Code</a>
                    <br />
                    <a className="text-lg text-blue-500 underline">Getting Started Exercises with JavaScript and Node.js</a></p>
                    <h2 className="text-3xl font-semibold mb-5">Fundamentals of JavaScript and Node.js Quiz</h2>
                    <h3 className="text-xl font-semibold mb-4">Topics Covered in the Quiz:</h3>
                    <p className="text-lg mb-6 text-slate-600 font-medium">1. Background of JavaScript and How to use JavaScript in Browser<br />
                    2. Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)<br />
                    3. <a className="text-blue-500 underline">Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm.</a> How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. <a className="text-blue-500 underline">The last example in this presentation shows you how to use prompt-sync library in your Node.js programs.</a> Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.<br />
                    4. Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)<br />
                    5. Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)<br />
                    6. Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)<br />
                    7. Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)<br />
                    8. Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)<br />
                    9. JavaScript promises, mastering the asynchronous<br />
                    <a className="text-blue-500 font-normal underline">Javascript Promises by Codingame.</a>
                    <br />
                    <a className="text-blue-500 font-normal underline">New JavaScript Features in ECMAScript 2022 and 2021.</a></p>
                    <h2 className="text-3xl font-semibold mb-6">Object-Oriented Programming with TypeScript</h2>
                    <p className="text-lg font-medium mb-6"><a className="text-blue-500 underline font-normal" href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1">Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript</a>
                    <br />
                    <a className="text-blue-500 underline font-normal" href="https://github.com/panaverse/learn-typescript">Learning Repository</a>
                    <br />
                    <a className="text-blue-500 underline font-normal" href="https://www.learningtypescript.com/">In Class Companion projects and articles for Learning TypeScript</a>
                    <br />
                    Homework Project
                    <br />
                    <a className="text-blue-500 underline font-normal" href="https://github.com/panaverse/typescript-node-projects">typescript-node-projects.</a></p>
                    <h2 className="text-3xl font-semibold mb-6">TypeScript Quizzes</h2>
                    <p className="text-lg text-slate-600 mb-6">Fundamentals of TypeScript Quiz
                    <br />
                    TypeScript Professional Proficiency Quiz</p>
                    <h2 className="text-3xl font-semibold mb-6">TypeScript for React</h2>
                    <p className="text-lg text-slate-600 mb-2"><a className="text-lg text-blue-500 underline" href="https://profy.dev/article/react-typescript">Minimal TypeScript Crash Course For React</a>
                    <br />
                    <a className="text-lg text-blue-500 underline" href="https://profy.dev/article/react-typescript">With Interactive Code Exercises</a>
                    <br />
                    <br />
                    <b className="text-xl text-black">Quarter Break Assignments and Quizzes</b>
                    <br />
                    <br />
                    During the Quarter Break, we do the following Assignments:</p>
                    <p className="text-lg text-slate-600 ml-7 mb-1">1. https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge
                    <br />
                    2. https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app
                    <br />
                    3. https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui
                    <br />
                    4. Build a Panaverse DAO Syllabus Website using Next.js 13 given the content from the following document: <a className="text-blue-500 underline" href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing">https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing</a></p>
                    <h4 className="text-lg text-slate-600 mb-1">The best-developed Website will be hosted on www.panaverse.co domain.</h4>
                    <p className="text-slate-600 text-lg ml-7 mb-2">5. Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document: <a className="text-blue-500 underline" href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing">https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing</a></p>
                    <p className="text-lg text-slate-600 mb-6">The best-developed Website will be hosted on <a className="text-blue-500 underline" href="www.piaic.org">www.piaic.org</a> domain.
                    <br />
                    After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:</p>
                    <h2 className="text-3xl font-semibold mb-6">Fundamentals of Version Control with Git (Recorded Videos)</h2>
                    <p className="text-lg text-slate-600 mb-20"><a className="text-blue-500 underline" href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF">Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)</a>
                    <br />
                    Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther
                    <br />
                    <br />
                    <b className="text-black">We will also cover these readings:</b>
                    <br />
                    <a className="text-blue-500 underline" href="https://help.github.com/articles/markdown-basics/">Markdown Basics</a>
                    <br />
                    <a className="text-blue-500 underline" href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github">Difference between fork and branch on github</a>
                    <br />
                    <a className="text-blue-500 underline" href="http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences">Git branch, fork, fetch, merge, rebase and clone what are the differences</a>
                    <br />
                    <a className="text-blue-500 underline" href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing">Git Branching Rebasing</a>
                    <br />
                    <a className="text-blue-500 underline" href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches">Git Branching Remote Branches</a>
                    <br />
                    <a className="text-blue-500 underline" href="https://try.github.io/levels/1/challenges/1">For practice.</a>
                    <br />
                    <b className="text-black">Homework:</b>
                    <br />
                    <a className="text-blue-500 underline" href="https://www.datacamp.com/courses/introduction-to-git-for-data-science">introduction to git for data science</a>
                    <br />
                    <b className="text-black">Git Cheatsheet</b>
                    <br />
                    <a className="text-blue-500 underline" href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html">Git data science cheatsheet.html</a>
                    <br />
                    <br />
                    TypeScript Proficiency Quiz
                    <br />
                    Total Questions: 63
                    <br />
                    Duration: 120 minutes
                    <br />
                    <br />
                    <b className="text-black">Study Material:</b>
                    <br />
                    <a className="text-blue-500 underline" href="https://github.com/panaverse/learn-typescript">learn-typescript</a></p>
                </div>
                {/* Right Side */}
                <div className="lg:w-4/12 z-10 lg:mt-0 mt-10">
                    <div className="sticky">
                        <div className="flex flex-col border shadow-xl rounded-lg py-6 px-6">
                            <h2 className="font-bold text-xl mb-4">Program Structure</h2>
                            <p className="font-medium text-slate-500 text-base mb-5">After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
                            {/* Boxes */}
                            <div>
                                <a href="#">
                                    <Quarters insideBox="Q1" text="Quarter I" /> 
                                </a>
                                <a href="../Quarters/q2">
                                    <Quarters insideBox="Q2" text="Quarter II" />
                                </a>
                                <a href="../Quarters/q3">
                                    <Quarters insideBox="Q3" text="Quarter III" /> 
                                </a>
                                <a href="../Quarters/q4">
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