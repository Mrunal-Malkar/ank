export default function TorqOrb({ active }: { active: boolean }) {
  // const [cursor,setCursor]=useState(false);
  return (
    <div className="h-60 flex justify-center items-center w-60 overflow-visible m-2">
      <img
        src="T.png"
        alt="Torq"
        className="h-16 z-90 relative left-34 hover:scale-105 animate-scaleNormal"
      />

      <div
        // onMouseOver={()=>{
        //     console.log("mouse entered?")
        //     if(cursor!=true)
        //         console.log("mouseEntered")
        //     setCursor(true);
        // }}
        // onMouseOut={()=>{
        //     console.log("mouse leaved?")
        //     if(cursor!=false)
        //         console.log("mouse leaved")
        //         setCursor(false);
        // }}
        className="flex items-center justify-center h-fit bg-black"
      >
        <div className="relative">
          {/* Main glowing orb */}
          <div
            className={`w-52 h-52 rounded-full bg-gradient-to-br from-red-500 via-blue-500 to-green-500 
                        blur-2xl animate-orbitNormal hover:animate-orbitCursor active:animate-orbitActive ${
                          active ? "animate-orbitActive" : ""
                        } focus:opacity-10 mix-blend-screen opacity-90`}
          />
          {/* ${cursor?"animate-orbitCursor":""} */}

          {/* Bright inner core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center w-28 h-28 rounded-full bg-white/90 blur-lg animate-corePulse shadow-[0_0_50px_15px_rgba(255,255,255,0.3)] text-center text-red-700"></div>
          </div>

          {/* Halo ring */}
          <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow" />
        </div>

        {/* Tailwind keyframes (via custom plugin style syntax) */}
        {/* <style>{`
        @keyframes orbPulse {
            0% { transform: scale(0.85) rotate(0deg); filter: hue-rotate(0deg); }
          25% { transform: scale(1.1) rotate(90deg); filter: hue-rotate(60deg); }
          50% { transform: scale(0.9) rotate(180deg); filter: hue-rotate(120deg); }
          75% { transform: scale(1.15) rotate(270deg); filter: hue-rotate(240deg); }
          100% { transform: scale(0.85) rotate(360deg); filter: hue-rotate(360deg); }
          }

          @keyframes corePulse {
          0%, 100% { transform: scale(0.95); opacity: 0.95; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        
        @keyframes spin-slow {
            0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-orbPulse {
          animation: orbPulse 8s ease-in-out infinite;
        }
        .animate-orbPulseCursor {
          animation: orbPulse 2s ease-in-out infinite;
          }
        .animate-orbPulseAnswer {
          animation: orbPulse 4s ease-in-out infinite;
        }
        
        .animate-corePulse {
            animation: corePulse 2.8s ease-in-out infinite;
        }

        .animate-spin-slow {
            animation: spin-slow 30s linear infinite;
            }
      `}</style> */}
      </div>
    </div>
  );
}
