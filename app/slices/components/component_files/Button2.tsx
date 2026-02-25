"use client";

import { useRef } from "react";

type BlobButtonProps = {
  children: React.ReactNode;
};

export default function BlobButton({ children }: BlobButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btn.style.setProperty("--x", `${x}px`);
    btn.style.setProperty("--y", `${y}px`);
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      className="
      border border-white/60
        cursor-pointer
        relative
        h-16 
        rounded-lg
        bg-neutral-800
        p-3
        text-left
        text-base
        font-bold
        text-gray-50
        overflow-hidden
        group
        [--x:50%]
        [--y:50%]
group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 
         before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg
      "
    >
      {/* Reactive border */}
      <span
        className="
          pointer-events-none
          absolute inset-0
          rounded-lg
          p-[1px]
          before:absolute before:inset-0
          before:rounded-lg
          before:bg-[radial-gradient(120px_circle_at_var(--x)_var(--y),rgba(236,72,153,0.6),rgba(168,85,247,0.4),transparent_70%)]
          before:opacity-70
          before:transition-opacity
          before:duration-300
          before:content-['']
          [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]
          [mask-composite:exclude]
        "
      />

      {/* Glow blobs */}
      <div
        className="
          pointer-events-none
          absolute
          left-[var(--x)] top-[var(--y)]
          -translate-x-1/2 -translate-y-1/2
          mix-blend-screen
        "
      >
        {/* Aura */}
        <span
          className="
            absolute
            h-48 w-48
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(236,72,153,0.25),transparent_70%)]
            blur-3xl
          "
        />
        {/* Halo */}
        <span
          className="
            absolute
            h-32 w-32
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(168,85,247,0.4),transparent_65%)]
            blur-2xl
          "
        />
        {/* Core */}
        <span
          className="
            absolute
            h-16 w-16
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(244,114,182,0.8),transparent_90%)]
            blur-lg
          "
        />
      </div>

      <span className="relative z-10">{children}</span>
    </button>
  );
}
