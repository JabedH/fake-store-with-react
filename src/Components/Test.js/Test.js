import React, { useState } from "react";

const Test = (props) => {
  const [count, setCount] = useState(0);
  //   const minus = () => {
  //     if (count > 0) {
  //       setCount(count - 1);
  //     }
  //   };
  const plus = () => {
    setCount(count + 1);
  };
  console.log(count);
  return (
    <div>
      <h1>{count}</h1>
      <div className="count mt-5">
        <button onClick={plus} className="p-3">
          +
        </button>
        <button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
          className="ms-3 p-3"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Test;
