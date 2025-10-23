import { BackgroundBeamsWithCollisionLive } from "../components/explodingBeams"
import { GridBackground } from "../components/gridBg"
import { StickyScrollReveal } from "../components/stickyScroll"
import { ThreeDCard } from "../components/ThreeD-card"

const Home = () => {

  return (
    <div className="bg-black w-full flex-col justify-center items-center">
      <GridBackground/>
      <div className="flex-col w-full items-center justify-center mt-28">
        <div className="w-11/12 flex-col items-center justify-center justify-self-center">
          <h1 className="font-bold text-neutral-300 text-center">What does Torq solves??</h1>
          <ThreeDCard/>
        </div>
        <div className="w-full flex-col items-center justify-center justify-self-center mt-34">
          <h1 className="font-bold text-neutral-300 text-center mb-8">Featu<span className="text-purple-600 font-bold">res.</span></h1>
          <StickyScrollReveal/>
        </div>
        <div className="w-full flex-col items-center justify-center justify-self-center mt-34">
        <BackgroundBeamsWithCollisionLive/>
        </div>
      </div>
    </div>
  )
}

export default Home