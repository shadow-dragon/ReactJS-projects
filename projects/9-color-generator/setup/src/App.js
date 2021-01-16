import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  // 5 => 2 * (100% / 5 values) + 0% value
  // 5 => 41 values
  const [list, setList] = useState(new Values("#0288d1").all(5));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // 5 => 2 * (100% / 5 values) + 0% value
      // 5 => 41 values
      let colors = new Values(color).all(5);
      setList(colors);
    } catch (error) {
      setError(true);
      alert("Please insert a hex value");
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#0288D1"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
