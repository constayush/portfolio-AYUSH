"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const reviews = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Designer",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Sarah",
    rating: 5,
    text: "Absolutely transformed how our team collaborates. The interface is so intuitive — it's like it reads your mind before you even type.",
    color: "#e8d5ff",
    accent: "#c084fc",
  },
  {
    id: 2,
    name: "Marcus Webb",
    role: "Startup Founder",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Marcus",
    rating: 5,
    text: "Shipped our MVP in half the time. I genuinely don't know how we managed before this existed. Game-changing doesn't cut it.",
    color: "#d5f0ff",
    accent: "#38bdf8",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Lead Engineer",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Priya",
    rating: 5,
    text: "The performance alone sold me. But it's the little details — the micro-interactions, the responsiveness — that make it a joy every single day.",
    color: "#d5ffe8",
    accent: "#4ade80",
  },
  {
    id: 4,
    name: "Jonah Fisk",
    role: "Creative Director",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Jonah",
    rating: 5,
    text: "I've tried everything on the market. Nothing comes close. My whole studio switched within a week of the trial.",
    color: "#fff0d5",
    accent: "#fb923c",
  },
  {
    id: 5,
    name: "Leila Moss",
    role: "UX Researcher",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Leila",
    rating: 5,
    text: "Finally, a tool that respects the user's time and intelligence. Every decision feels considered. Every screen earns its place.",
    color: "#ffd5e8",
    accent: "#f472b6",
  },
];

const StarIcon = ({ size = 10 }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="currentColor">
    <path d="M6 0l1.5 4.5H12L8.25 7.5 9.75 12 6 9 2.25 12l1.5-4.5L0 4.5h4.5z" />
  </svg>
);

// Individual avatar with its own floating testimonial card
function AvatarWithCard({ review, index, total }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      style={{ zIndex: hovered ? 99 : total - index }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Floating testimonial card */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute pointer-events-none"
            style={{
              bottom: "calc(100% + 14px)",
              left: "50%",
              width: "220px",
              borderRadius: "16px",
              background: "rgba(14, 14, 20, 0.98)",
              border: `1px solid ${review.accent}44`,
              boxShadow: `0 -4px 40px ${review.accent}22, 0 8px 32px rgba(0,0,0,0.6)`,
              overflow: "hidden",
            }}
            initial={{
              x: "-50%",
              scaleX: 0.3,
              scaleY: 0.05,
              skewX: -10,
              skewY: 3,
              opacity: 0,
              rotateX: 30,
              y: 10,
            }}
            animate={{
              x: "-50%",
              scaleX: 1,
              scaleY: 1,
              skewX: 0,
              skewY: 0,
              opacity: 1,
              rotateX: 0,
              y: 0,
            }}
            exit={{
              x: "-50%",
              scaleX: 0.4,
              scaleY: 0.05,
              skewX: 6,
              skewY: -2,
              opacity: 0,
              rotateX: 20,
              y: 6,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 26,
              mass: 0.6,
              opacity: { duration: 0.12 },
            }}
          >
            {/* Colored top strip */}
            <div
              style={{
                height: "3px",
                background: `linear-gradient(90deg, ${review.accent}88, ${review.accent})`,
              }}
            />

            <div className="p-3.5">
              {/* Header row */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <div
                  className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0"
                  style={{
                    background: review.color,
                    border: `2px solid ${review.accent}66`,
                  }}
                >
                  <img src={review.avatar} alt={review.name} className="w-full h-full" />
                </div>
                <div>
                  <p className="text-xs font-semibold leading-tight" style={{ color: "#e8e4de", fontFamily: "'DM Sans', sans-serif" }}>
                    {review.name}
                  </p>
                  <p className="text-xs leading-tight" style={{ color: review.accent, opacity: 0.8, fontStyle: "italic", fontFamily: "'DM Sans', sans-serif" }}>
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-2" style={{ color: "#f5c842" }}>
                {[...Array(review.rating)].map((_, j) => <StarIcon key={j} />)}
              </div>

              {/* Quote */}
              <p
                className="text-xs leading-relaxed"
                style={{ color: "#999", fontFamily: "'DM Sans', sans-serif" }}
              >
                "{review.text}"
              </p>
            </div>

            {/* Arrow pointer */}
            <div
              className="absolute"
              style={{
                bottom: "-6px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "12px",
                height: "12px",
                background: "rgba(14,14,20,0.98)",
                border: `1px solid ${review.accent}44`,
                borderTop: "none",
                borderLeft: "none",
                rotate: "45deg",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Avatar circle */}
      <motion.div
        className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 cursor-pointer"
        style={{
          background: review.color,
          border: hovered ? `2px solid ${review.accent}` : "2px solid rgba(22,22,30,1)",
          marginLeft: index === 0 ? 0 : "-10px",
          position: "relative",
          transition: "border-color 0.15s",
          boxShadow: hovered ? `0 0 12px ${review.accent}88` : "none",
        }}
        animate={{
          scale: hovered ? 1.2 : 1,
          y: hovered ? -3 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 22 }}
      >
        <img src={review.avatar} alt={review.name} className="w-full h-full" />
      </motion.div>
    </div>
  );
}

export default function ReviewsToast() {
  return (
    <div className="min-h-screen relative flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #0a0a10 0%, #12121a 100%)" }}
    >
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      {/* Toast */}
      <motion.div
        className=" z-50 select-none"
        style={{
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(18, 18, 26, 0.96)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "999px",
          padding: "8px 18px 8px 10px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
          backdropFilter: "blur(20px)",
          whiteSpace: "nowrap",
          fontFamily: "'DM Sans', sans-serif",
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.2 }}
      >
        {/* Avatars — each manages its own hover card */}
        <div className="flex items-center" style={{ paddingLeft: "4px" }}>
          {reviews.map((r, i) => (
            <AvatarWithCard key={r.id} review={r} index={i} total={reviews.length} />
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.08)" }} />

        {/* Stars & label */}
        <div className="flex items-center gap-1.5">
          <div className="flex gap-0.5" style={{ color: "#f5c842" }}>
            {[...Array(5)].map((_, i) => <StarIcon key={i} size={11} />)}
          </div>
          <span className="text-xs font-medium" style={{ color: "#888" }}>
            {reviews.length} reviews
          </span>
        </div>

        {/* Pulse dot */}
        <motion.div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#4ade80" }}
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}