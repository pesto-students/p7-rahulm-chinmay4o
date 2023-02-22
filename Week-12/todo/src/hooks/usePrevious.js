import { useEffect, useRef } from "react";

const usePrevious = (val) => {
  const ref = useRef(undefined);

  useEffect(() => {
    ref.current = val;
    console.log(ref.current, "from effect");
  }, [val]);

  return ref.current;
};

export default usePrevious;
