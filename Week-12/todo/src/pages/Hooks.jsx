import React, { useState } from "react";
import { useEffect } from "react";

import usePrevious from "../hooks/usePrevious";
import useIdle from "../hooks/useIdle";

const Home = () => {
  const [count, setCount] = useState(1);
  const prev = usePrevious(count);
  const [isIdle] = useIdle();

  // console.log(prev, "p0");
  // console.log(count, "count");

  useEffect(() => {
    console.log(isIdle, "user is inActive");
  }, [isIdle]);

  return (
    <div className="grid w-full h-[100vh] place-items-center">
      <div className="grid w-full h-400px place-items-center">
        {isIdle && <h1 className="text-xl font-bold">User is idle</h1>}
        <h1>Home to record your notes</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>add</button>
        <div>Make todo</div>
      </div>
    </div>
  );
};

export default Home;
