import { File, Search, Settings } from "lucide-react"
import { OrbitingCircles } from "./ui/orbiting-circles"

const CircularOrbit = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
  <OrbitingCircles>
    <File />
    <Settings />
    <File />
  </OrbitingCircles>
  <OrbitingCircles radius={100} reverse>
    <File />
    <Settings />
    <File />
    <Search />
  </OrbitingCircles>
</div>
  )
}

export default CircularOrbit