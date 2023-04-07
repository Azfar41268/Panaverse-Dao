import Wrapper from "@/app/wrapper"
import Quarters from "../../Box"


function Course() {
  return (
    <div>
        <Wrapper>
            <div className="flex flex-wrap gap-x-28">
                {/* Left Side */}
                <div className="w-full lg:w-7/12 order-last lg:order-none mt-10 lg:mt-5">
                    <h2 className="text-xl font-semibold text-blue-500 mt-5 mb-6">
                        AI-361: Deep Learning and MLOps
                    </h2>
                    <h1 className="text-5xl font-bold mb-6">
                        Course Description:
                    </h1>
                    <p className="text-lg text-slate-600 mb-10">
                        This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.
                    </p>
                    <div className="flex flex-col lg:flex-row mb-10">
                        <div className="basis-1/2 border-4 border-blue-500 px-10 py-12 justify-between rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg">
                            <h2 className="text-4xl font-bold mt-3">
                                Specialized Track
                            </h2>
                        </div>
                        <div className="basis-1/2 flex flex-col justify-between bg-blue-500 border-4 border-blue-500 rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg px-10 py-12">
                            <h3 className="text-white text-3xl font-semibold">
                                Duration
                            </h3>
                            <h4 className="text-white text-xl mt-3">
                                13 weeks
                            </h4>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold mb-10">
                        Course Outline:
                    </h1>
                    <h2 className="text-3xl font-semibold mb-5">
                        Deep Learning with Tensorflow
                    </h2>
                    <a className="text-lg text-blue-500 underline" href="https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2" target="_blank">
                        Deep Learning with Python, Second Edition 2nd Edition
                    </a>
                    <h2 className="text-3xl font-semibold mt-6 mb-6">
                        Machine Learning Engineering for Production (MLOps) using Terraform for CDK
                    </h2>
                    <p className="text-lg mb-20">
                        <a className="text-blue-500 underline" href="https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351" target="_blank">A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)</a>
                        <br />
                        <a className="text-blue-500 underline" href="https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce" target="_blank">MLOps leveraging AWS SageMaker and Terraform</a>
                    </p>
                </div>
                {/* Right Side */}
                <div className="lg:w-4/12 mt-10">
                    <div className="sticky">
                        <div className="flex flex-col border shadow-xl rounded-lg py-6 px-6">
                            <h2 className="font-bold text-xl mb-4">Program Structure</h2>
                            <p className="font-medium text-slate-500 text-base mb-5">After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
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