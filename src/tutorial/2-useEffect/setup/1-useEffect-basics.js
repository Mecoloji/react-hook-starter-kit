import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("useEffect çağrıldı");
    if (value >= 1) {
      document.title = `New Message: (${value})`;
    }
  }, [value]);

  console.log("bileşen işlendi");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue((p) => p + 1)}>
        Click
      </button>
    </>
  );
};

export default UseEffectBasics;
