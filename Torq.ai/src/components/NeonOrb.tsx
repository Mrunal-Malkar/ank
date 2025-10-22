
export default function NeonOrb({ heardHotword }: { heardHotword: boolean }) {
  return (
    <div className="h-60 w-60 flex justify-center items-center overflow-visible m-2 relative">
      <div className="relative flex items-center justify-center">
        {/* Glowing background */}
        <div
          className={`absolute rounded-full bg-gradient-to-br from-red-500 via-blue-500 to-green-500 blur-2xl 
          ${
            heardHotword
              ? "w-64 h-64 animate-orbitActive"
              : "w-52 h-52 animate-orbitNormal"
          } 
          mix-blend-screen opacity-90`}
        />

        {/* Inner white core */}
        <div className="absolute w-28 h-28 rounded-full bg-white/90 blur-lg shadow-[0_0_50px_15px_rgba(255,255,255,0.3)] animate-corePulse" />

        {/* Image container — sits above the glow, inside the circle */}
        <div className="relative w-20 h-20  rounded-full overflow-hidden flex items-center justify-center z-20">
          <img
            src="T.png"
            alt="Torq"
            className="object-cover w-full h-full rounded-full animate-scaleNormal transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Halo ring (outer border) */}
        <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow z-10" />
      </div>
    </div>
  );
}