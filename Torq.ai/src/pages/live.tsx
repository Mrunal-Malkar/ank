import CircularOrbit from "@/components/circularOrbit"

const Live = () => {
  return (
    <div className="h-[100dvh] w-screen flex">
      <div className="w-min h-full">
        <ul>
          <li>s</li>
        </ul>
      </div>
      <div className="w-max h-full flex justify-center items-center">
        <CircularOrbit/>
      </div>
    </div>
  )
}

export default Live