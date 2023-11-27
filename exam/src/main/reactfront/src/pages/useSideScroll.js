import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
  const elRef = useRef();

  useEffect(() => {
    const el = elRef.current;

    if (el) {
      const onWheel = (e) => {
        e.preventDefault();

        // Calculate the distance to scroll based on deltaY and add 100vw
        const scrollDistance = e.deltaY < 0 ? -1700 : 1700;
        const targetScrollX = el.scrollLeft + scrollDistance;

        // Scroll to the target position
        el.scrollTo({
          left: targetScrollX,
          behavior: "smooth",
        });
      };

      el.addEventListener("wheel", onWheel);

      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return elRef;
}
