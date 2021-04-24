import { useEffect, useState, useRef } from "react";

function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 350 ? setSticky(true) : setSticky(false);
    };

    // This function handles the scroll performance issue
    const debounce = (func, wait = 20, immediate = true) => {
      let timeOut;
      return () => {
        let context = this,
          args = arguments;
        const later = () => {
          timeOut = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeOut;
        clearTimeout(timeOut);
        timeOut = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    window.addEventListener("scroll", debounce(handleScroll));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [isSticky, setSticky]);

  return { isSticky, element };
}

export default useSticky;
