import { AnimatedTooltipPreview } from "@/components/animatedToolTip";
import { BackgroundBeamsWithCollisionLive } from "@/components/explodingBeams";

const About = () => {
  return (
    <div className="flex flex-col items-center mt-25 w-full">
        <div className="md:w-1/3 sm:w-2/3 flex flex-col gap-y-3.5 w-11/12">
      <h1 className="sm:text-2xl text-xl">About</h1>
      <p>
        Torq is a cutting-edge AI solution designed to revolutionize the way
        individuals and businesses interact with technology. Our mission is to
        provide personalized AI services that cater to a wide range of needs,
        from automating routine tasks to delivering insightful.This platform was
        created as a part of India's BUILDATHON of 2025 as a college student, we
        were glad to be part of it.
      </p>
      <h2 className="sm:text-2xl text-xl mt-1.5">How to use?</h2>
      <p>Torq is ready to take down questions only when the color of the object below torq turns gray, if the object is invisible that means you haven't activated it. How to activate? just utter the words like "torq","hey torq","Hello torq","torq" once done, torq will respond you and you are good to go!!</p>
      <h1 className="sm:text-2xl text-xl mt-1.5">Our Team</h1>
      <div className="flex justify-center w-full">
        <AnimatedTooltipPreview />
      </div>
        </div>
      <div className="w-full flex-col items-center justify-center justify-self-center mt-34">
        <BackgroundBeamsWithCollisionLive />
      </div>
    </div>
  );
};

export default About;
