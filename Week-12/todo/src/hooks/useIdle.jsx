import React, { useState, useEffect, useRef } from "react";

const useIdle = () => {
  const [isIdle, setIsIdle] = useState(false);
  const timeoutRef = useRef();

  function setNewTimeout() {
    timeoutRef.current = setTimeout(() => {
      setIsIdle(true);
    }, 4000);
  }

  useEffect(() => {
      setNewTimeout();

      function handler() {
        clearTimeout(timeoutRef.current);
        setNewTimeout();
        setIsIdle(false);
      }

      document.addEventListener("keydown", handler);
      document.addEventListener("mousemove", handler);

      //edge cases
      // window.addEventListener("onblur", )

    return () => {
        window.removeEventListener("keydown", handler);
        clearTimeout(timeoutRef.current);
      };
  }, []);

  // return isIdle ? console.log(true) : console.log(false);
  return [isIdle, setIsIdle, setNewTimeout];
};

export default useIdle;
