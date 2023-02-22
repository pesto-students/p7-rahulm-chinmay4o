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
    // function addEvents() {
      setNewTimeout();

      function handler() {
        clearTimeout(timeoutRef.current);
        setNewTimeout();
        setIsIdle(false);
      }

      window.addEventListener("keydown", handler);

    // }
    // addEvents();

    return () => {
        window.removeEventListener("keydown", handler);
        clearTimeout(timeoutRef.current);
      };
  }, []);

  // return isIdle ? console.log(true) : console.log(false);
  return [isIdle, setIsIdle, setNewTimeout];
};

export default useIdle;
