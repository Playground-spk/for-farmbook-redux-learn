import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function ShowDiv() {
  const { isShow } = useSelector((state) => state.show);
  // const [isShow, setIsShow] = useState(true);
  const dispatch = useDispatch();

  return (
    <>
      {/* <button onClick={() => setIsShow(false)}>ซ่อน</button> */}
      <button onClick={() => dispatch({ type: "isShow" })}>ซ่อน</button>
      {isShow && <div style={{ width: "700px", height: "700px", backgroundColor: "red" }}></div>}
    </>
  );
}

function App() {
  const { number, text } = useSelector((state) => state.num);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  console.log(useSelector((state) => state));

  const plusNumber = () => {
    dispatch({ type: "plus" });
  };

  const minusNumber = () => {
    dispatch({ type: "minus" });
  };

  const submitValue = () => {
    dispatch({ type: "submit_value", value });
    setValue("");
  };
  return (
    <div className="App">
      <header className="App-header">
        {number}
        <button onClick={plusNumber}>+</button>
        <button onClick={minusNumber}>-</button>
        <input value={value} type="text" placeholder="ใส้จำนวนบวก" onChange={(e) => setValue(e.target.value)} />
        <button onClick={submitValue}>submit</button>
        <ShowDiv />
      </header>
    </div>
  );
}

export default App;
