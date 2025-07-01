import { useState } from "react";

const StateExample = () => {
  const [age, setAge] = useState({
    firstName: "gourav",
    lastname: "shintre",
    age: 22,
  });

  const handleAge = () => {
    console.log("clicked");
    setAge((prev) => ({
      ...prev,
      age: prev.age + 1,
    }));
  };

  return (
    <>
      <h1>State Handling</h1>
      user Info :<li>firsname : {age.firstName}</li>
      <li>lastname : {age.lastname}</li>
      <li>age : {age.age}</li>
      <button onClick={handleAge}>Increase age </button>
    </>
  );
};

export default StateExample;
