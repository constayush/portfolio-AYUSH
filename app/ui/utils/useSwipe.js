import { useEffect } from 'react';
    
    const useSwipe = (onSwipeLeft, onSwipeRight, threshold = 50) => {
      useEffect(() => {
        let touchStartY = 0;
        let touchEndY = 0;
    
        const handleTouchStart = (e) => {
          touchStartY = e.changedTouches[0].screenY;
        };
    
        const handleTouchEnd = (e) => {
          touchEndY = e.changedTouches[0].screenY;
          handleSwipe();
        };
    
        const handleSwipe = () => {
          const distance = touchEndY - touchStartY;
          if (distance > threshold) onSwipeRight?.(); // Right swipe
          if (distance < -threshold) onSwipeLeft?.(); // Left swipe
        };
    
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);
    
        return () => {
          window.removeEventListener('touchstart', handleTouchStart);
          window.removeEventListener('touchend', handleTouchEnd);
        };
      }, [onSwipeLeft, onSwipeRight, threshold]);
    };
    export default useSwipe;