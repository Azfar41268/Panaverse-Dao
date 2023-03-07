import Button from "./button"
import Wrapper from "./wrapper"


const Core = () => {
  return (
    <section>
        <Wrapper>
            <div className="mt-20">
                <h4 className="text-base font-medium text-[#00616C]">
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
                <Button text="Learn More" />
            </div>
        </Wrapper>
    </section>
  )
}

export default Core