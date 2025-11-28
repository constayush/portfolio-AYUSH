import { useRef, useEffect } from 'react';

/**
 * Optimized custom cursor hook with performance improvements
 * - Uses transform instead of left/top for better performance
 * - Implements RAF throttling to reduce unnecessary updates
 * - Proper cleanup to prevent memory leaks
 * - Centers cursor at mouse position using translate(-50%, -50%)
 */
export const useCustomCursor = (targetSelector: string) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const target = document.querySelector(targetSelector);
    if (!target) return;

    let rafId: number | null = null;
    let currentX = 0;
    let currentY = 0;

    // Use RAF to throttle updates - only one update per frame
    const handleMouseMove = (e: MouseEvent) => {
      currentX = e.clientX;
      currentY = e.clientY;

      // Cancel previous frame if it hasn't executed yet
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        if (cursor) {
          // Use translate3d for GPU acceleration + translate(-50%, -50%) to center
          // This combines the centering from your original CSS with the new position
          cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
        }
        rafId = null;
      });
    };

    const handleMouseEnter = () => cursor.classList.add("show");
    const handleMouseLeave = () => cursor.classList.remove("show");

    // Attach listeners
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    target.addEventListener("mouseenter", handleMouseEnter);
    target.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      target.removeEventListener("mouseenter", handleMouseEnter);
      target.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [targetSelector]);

  return cursorRef;
};