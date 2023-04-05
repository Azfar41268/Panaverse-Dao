import Wrapper from "@/app/wrapper"
import Quarters from "../Box"


function Course() {
  return (
    <div>
        <Wrapper>
            <div className="flex gap-x-28">
                {/* Left Side */}
                <div className="lg:w-7/12 lg:order-none order-last">
                    <h2 className="mt-10 text-xl font-semibold text-blue-500 mb-5">W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</h2>
                    <h1 className="text-5xl font-bold mb-7">Course Description:</h1>
                    <p className="text-slate-600 font-medium text-lg mb-10">
                    The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).
                    </p>
                    <div className="flex flex-col lg:flex-row mb-10">
                        <div className="flex flex-col basis-1/2 justify-between p-10 border-4 border-blue-500 rounded-l-lg">
                            <h2 className="text-3xl font-bold mb-2">Core Track</h2>
                            <h3 className="text-blue-500 font-medium text-lg">(Common in all Specializations)</h3>
                        </div>
                        <div className="flex flex-col basis-1/2 justify-between p-10 border-4 border-blue-500 rounded-r-lg bg-blue-500">
                            <h2 className="text-3xl font-bold text-white mb-2">
                                Duration
                            </h2>
                            <h3 className="text-lg text-white font-medium">
                                13 Weeks
                            </h3>
                        </div>
                    </div>
                    <h2 className="text-5xl font-bold mb-6">Course Outline:</h2>
                    <h3 className="text-3xl font-semibold mb-6">Next.js 13 Web Development</h3>
                    <p className="mb-6">
                        <a className="text-blue-500 underline text-lg" href="https://beta.nextjs.org/docs">Next 13 Official Documentation</a>
                        <br />
                        <a className="text-blue-500 underline text-lg" href="https://beta.reactjs.org/learn">Latest Learn React Official Website</a>
                        <br />
                        <a className="text-blue-500 underline text-lg" href="https://github.com/panaverse/learn-nextjs">Learn Next.js 13 Learning Repo</a>
                    </p>
                    <h3 className="text-3xl font-semibold mb-6">Next.js 13 using Chakra UI (Remote Zoom Class)</h3>
                    <p className="mb-6">
                        <a className="text-lg text-blue-500 underline" href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/">CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items</a>
                        <br />
                        <a className="text-lg text-blue-500 underline" href="https://chakra-ui.com/getting-started">Chakra UI Docs</a>
                    </p>
                    <h3 className="text-3xl font-semibold mb-6">UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom Class)</h3>
                    <p className="text-lg text-slate-600 mb-6">
                        Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano
                        <br />
                        <a className="text-blue-500 underline" href='https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa'>https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa</a>
                        <br />
                        <a className="text-blue-500 underline" href='https://www.figma.com/community/file/768809027799962739'>Figma Design Kit for TailwindCSS</a>
                        <br />
                        <a className="text-blue-500 underline" href='https://www.figma.com/community/file/971408767069651759'>Chakra UI Figma Kit</a>
                    </p>
                    <h3 className="text-3xl font-semibold mb-6">API Routes with Next.js (Remote Zoom Class)</h3>
                    <a className="text-lg text-blue-500 underline" href="https://nextjs.org/docs/api-routes/introduction">API Routes</a>
                    <h3 className="text-3xl font-semibold mb-6">APIs with Next.js and tRPC (Remote Zoom Class)</h3>
                    <p className="text-lg mb-6">
                    <a className="text-blue-500 underline" href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/">Build a tRPC CRUD API Example with Next.js</a>
                    <br />
                    <a className="text-blue-500 underline" href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/">Stop building REST APIs for your Next.js apps, use tRPC instead</a>
                    </p>
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
                                <a href="#">
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