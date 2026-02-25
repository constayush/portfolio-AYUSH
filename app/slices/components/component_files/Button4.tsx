"use client";

type GlowSweepButtonProps = {
  children: React.ReactNode;
};

export default function GlowSweepButton({ children }: GlowSweepButtonProps) {
  return (
    <div className="relative  group inline-block">
      <div
        className="
          relative
          h-14
          overflow-hidden
          rounded-xl
          bg-black
          opacity-90
          z-10
        "
      >
        {/* Light sweep */}
        <div
          className="
            absolute
            inset-y-0
            -translate-x-44
            group-hover:translate-x-[30rem]
            transition-transform duration-700 ease-in
            h-full w-44
            bg-gradient-to-r from-gray-500 to-white/10
            opacity-30
            -skew-x-12
            z-10
          "
        />

        {/* Inner content */}
        <div
          className="
            absolute
            inset-0.5
            z-20
            flex items-center justify-center
            rounded-xl
            bg-black
            text-white
            opacity-90
          "
        >
          <button
            className=" cursor-pointer
              h-full w-full
              rounded-xl
              bg-black
              px-16 py-3
              text-lg font-semibold
              opacity-90
            "
          >
            {children}
          </button>
        </div>

        {/* Glow layer */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[100px]
            w-full
            bg-gradient-to-r from-orange-500 to-yellow-500
            blur-[30px]
            transition-all duration-500
            group-hover:animate-spin
            group-hover:to-yellow-500/10
          "
        />
      </div>
    </div>
  );
}