"use client";

type ElegantButtonProps = {
  children: React.ReactNode;
};

export default function ElegantButton({ children }: ElegantButtonProps) {
  return (
    <button
      className="
        group
        cursor-pointer
        relative
        overflow-hidden
        rounded-full
        border-2 border-[#2c2c2c]
        bg-[#1a1a1a]
        px-8 py-3
        text-lg font-bold text-white
        transition-all duration-400
        hover:border-[#666]
        hover:bg-[#292929]
      "
    >
      {/* center-out radial glow */}
      <span
        className="
          pointer-events-none
          absolute inset-0
          scale-0
          transition-transform duration-500 ease-out
          group-hover:scale-[4]
          bg-[radial-gradient(circle,_rgba(255,255,255,0.25)_0%,_rgba(255,255,255,0)_70%)]
        "
      />

      <span className="relative z-10">{children}</span>
    </button>
  );
}