import React, { useState } from "react";

// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("Namık");
  const [isError, setIsError] = useState(false);
  //   const firstValue = text || "hello world";
  //   const secondValue = text && "hello world";
  //   console.log(secondValue);

  return (
    <>
      {/* {if() {console.log("hello world")}} does not work */}
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}

      <h1>{text || "Mehmet"}</h1>
      <button className="btn" onClick={() => setIsError((s) => !s)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>hata var...</p>
      ) : (
        <div>
          <h2>hata yok</h2>
        </div>
      )}

      {/* {text && <h1>hello world</h1>} */}
      {/* {!text && <h1>hello world</h1>} */}
    </>
  );
};

export default ShortCircuit;
