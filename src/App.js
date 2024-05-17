import "./styles/App.css";
import { useState } from "react";
import { RiTvLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import Actor from "./Actor";
import Cart from "./Cart";
function App() {
  const [check, setCheck] = useState("");
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [item,setItem]=useState([])
  function handleShow() {
    setShow(!show);
  }
  
  return (
    <>
      {!show && (
        <div className="App">
          <h1>
            <RiTvLine /> E-commerce App
          </h1>
          <h2>Search your favorite Items</h2>

          <input
            type="radio"
            id="actor"
            value={check}
            name="show"
            onClick={() => setCheck("actor")}
          />
          <label htmlFor="actor">Web Series</label>
          <input
            type="radio"
            id="shows"
            value={check}
            name="show"
            onClick={() => setCheck("shows")}
          />
          <label htmlFor="shows">Shows</label>
          <br />
          <br />

          {check !== "actor" && check ? (
            <h4>Enter your Show name</h4>
          ) : check ? (
            <h4>Enter your Web-series name</h4>
          ) : (
            <h4>Choose your favorite</h4>
          )}
          <input
            type="search"
            placeholder="eg: Friends"
            id="in"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Actor check={check} input={input} setItem={setItem}/>
        </div>
      )}
      <div className="cartbtn">
        <button onClick={handleShow}>
          {" "}
          {show ? <>View Items</> : <FaShoppingCart />}
        </button>
      </div>
      {show && (
        <div className="view">
          <Cart items={item} setItem={setItem}/>
        </div>
      )}
    </>
  );
}

export default App;
