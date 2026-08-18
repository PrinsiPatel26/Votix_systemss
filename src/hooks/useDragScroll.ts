import { useCallback, useEffect, useRef, useState } from 'react';

/** Mouse drag-to-scroll for horizontal editorial rails (touch uses native scrolling). */
export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const state = useRef({ down: false, startX: 0, startScroll: 0 });
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onDown = (e: MouseEvent) => {
      state.current = { down: true, startX: e.pageX, startScroll: el.scrollLeft };
    };
    const onMove = (e: MouseEvent) => {
      if (!state.current.down) return;
      el.scrollLeft = state.current.startScroll - (e.pageX - state.current.startX);
    };
    const onUp = () => {
      state.current.down = false;
    };

    el.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    el.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => {
      el.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      el.removeEventListener('scroll', updateProgress);
    };
  }, [updateProgress]);

  const scrollByPanel = useCallback((direction: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const panel = el.querySelector<HTMLElement>('[data-panel]');
    const amount = panel ? panel.offsetWidth + 32 : el.clientWidth * 0.8;
    el.scrollBy({ left: amount * direction, behavior: 'smooth' });
  }, []);

  return { ref, progress, scrollByPanel };
}