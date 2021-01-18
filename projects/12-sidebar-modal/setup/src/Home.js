import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";
const Home = () => {
  const data = useContext(AppContext);
  console.log(data);
  const data2 = useGlobalContext();
  console.log(data2);

  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">show modal</button>
    </main>
  );
};

export default Home;
