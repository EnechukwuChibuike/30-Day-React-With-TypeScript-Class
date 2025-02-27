// import Button from "./Button";
// import Man from "/man.jpg";

import { useState } from "react";

function App() {
  // let num = 1;
  const [num, setNum] = useState(1);

  const clickedBtn = () => {
    setNum(num + 1);
    console.log("button clicked");
    console.log(num);
  };

  return (
    <>
      <h1 className="">Hello World</h1>
      <h1>{num}</h1>
      <button onClick={clickedBtn}>Click</button>

      {/* <Button btnText="Click Me" color="white" bg="blue" click={clickedBtn} />
      <Button btnText="Sign Up" color="white" bg="green" /> */}
    </>

    // <></> - React Fragment
  );
}

export default App;
