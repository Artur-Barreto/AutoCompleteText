import React from "react";
import "./App.css";
import AutoCompleteText from "./AutoCompleteText";
import countries from "./countries";


function App() {
  return (
    <div className="App">
      <div className="App-Component">
        <div>
          <AutoCompleteText items={countries} />
          <wbr></wbr>
          <AutoCompleteText items={['Adam', 'Peter', 'Sara']} />

        </div>
      </div>
    </div>
  );
}

export default App;
