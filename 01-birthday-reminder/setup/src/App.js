import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [showList, setShowList] = useState(true);

  const seeList = () => {
    setShowList(false);
  };
  return (
    <main>
      <section className='container'>
        <div></div>
        {showList && <List />}
        <button onClick={seeList}>clear all</button>
      </section>
    </main>
  );
}

export default App;
