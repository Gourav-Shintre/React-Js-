import React, { useRef } from "react";

const UseRef = () => {
  const nameRef = useRef("");
  console.log(nameRef.current);
  const handleClick = () => {
    nameRef.current.textContent = "Chnaged to use Ref";
    nameRef.current.style.color="white"
    nameRef.current.style.background ="blue"

  }
  return (
    <div>
      <p ref={nameRef}>hey buddy</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default UseRef;
