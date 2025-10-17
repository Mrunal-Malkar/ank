import CircularOrbit from "@/components/circularOrbit"
import NeonOrb from "@/components/torqCircle"
import { useState } from "react";

const Live = () => {
  const [active,setActive]=useState(false);
  const [listening,setListening]=useState(false);
  const hotWord="Hey Torq"

  function AskHandle(){
    
  }

  return (
    <div className="h-[100dvh] w-screen bg-green-200 flex justify-between">
      <div className="w-[15%] bg-yellow-300 h-full">
      </div>
      <div className="w-[60%] h-full flex flex-col bg-black justify-center items-center">
        <NeonOrb active={active}/>
        <button className="font-semibold px-6 py-2 text-white/90 ms-12" onClick={()=>{AskHandle()}}>Ask</button>
      </div>
      <div className="w-[25%] bg-orange-500">

      </div>
    </div>
  )
}

export default Live