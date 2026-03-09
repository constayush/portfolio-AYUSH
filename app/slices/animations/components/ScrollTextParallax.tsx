"use client"

import { motion, useScroll, useTransform, useSpring } from "motion/react"
import { useRef } from "react"

const LINES = [
  { label: "01", text: "I craft digital" },
  { label: "02", text: "experiences that" },
  { label: "03", text: "move people." },
  { label: "04", text: "Deeply." },
]

const IMAGES = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=600&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
]

function ParallaxImage({
  src,
  direction,
  scrollYProgress,
}: {
  src: string
  direction: "up" | "down"
  scrollYProgress: any
}) {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? ["0%", "-22%"] : ["0%", "22%"]
  )
  const smoothY = useSpring(y, { stiffness: 60, damping: 20 })

  return (
    <div className="relative overflow-hidden rounded-xl" style={{ height: "260px" }}>
      <motion.img
        src={src}
        alt=""
        style={{ y: smoothY, scale: 1.3 }}
        className="w-full h-full object-cover"
      />
      {/* subtle vignette */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(4,4,12,0.55) 100%)",
        }}
      />
    </div>
  )
}

export default function ScrollTextParallax() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Each line activates at a different scroll band [0–1]
  const bands = LINES.map((_, i) => {
    const start = i / LINES.length
    const mid = start + 0.12
    const end = (i + 1) / LINES.length
    return { start, mid, end }
  })

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "500vh",
        background: "#04040c",
        position: "relative",
      }}
    >
      

      {/* ── STICKY WRAPPER ── */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* ── BACKGROUND: 4 PARALLAX IMAGES ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "12px",
            padding: "12px",
            zIndex: 0,
          }}
        >
          {IMAGES.map((src, i) => (
            <ParallaxImage
              key={i}
              src={src}
              direction={i % 2 === 0 ? "up" : "down"}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* dark overlay so text reads clearly */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(4,4,12,0.52) 0%, rgba(4,4,12,0.58) 50%, rgba(4,4,12,0.52) 100%)",
              zIndex: 1,
            }}
          />
        </div>

        {/* ── FOREGROUND: SCROLL TEXT ── */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "860px",
            padding: "0 48px",
            pointerEvents: "none",
          }}
        >
          {LINES.map((line, i) => {
            const { start, mid, end } = bands[i]

            // opacity: fades in, stays, fades out
            const opacity = useTransform(
              scrollYProgress,
              [start, mid, end - 0.04, end],
              [0, 1, 1, 0]
            )
            // slide up into place
            const y = useTransform(
              scrollYProgress,
              [start, mid],
              ["40px", "0px"]
            )
            // blur clears as it enters
            const filter = useTransform(
              scrollYProgress,
              [start, mid],
              ["blur(12px)", "blur(0px)"]
            )

            const smoothOpacity = useSpring(opacity, { stiffness: 80, damping: 18 })
            const smoothY = useSpring(y, { stiffness: 80, damping: 18 })

            return (
              <motion.div
                key={i}
                style={{
                  opacity: smoothOpacity,
                  y: smoothY,
                  filter,
                  position: "absolute",
                  left: "48px",
                  right: "48px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "20px",
                }}
              >
                {/* line number */}
                <span
                  style={{
    
                    letterSpacing: "0.18em",
                    color: "rgba(255,255,255,0.35)",
                    minWidth: "28px",
                  }}
                >
                  {line.label}
                </span>

                {/* main text */}
                <span
                  style={{
                    fontSize: "clamp(52px, 7vw, 96px)",
                    fontWeight: 300,
                    lineHeight: 1,
                    color: "#f5f0e8",
                    letterSpacing: "-0.02em",
                    fontStyle: i === 3 ? "italic" : "normal",
                    whiteSpace: "nowrap",
                  }}
                >
                  {line.text}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* scroll indicator */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            x: "-50%",
            zIndex: 3,
            opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.4)",
              textTransform: "uppercase",
            }}
          >
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{
              width: "1px",
              height: "36px",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}