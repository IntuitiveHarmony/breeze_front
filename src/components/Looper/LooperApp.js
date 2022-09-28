import React from "react";
import ReactDOM from "react-dom";
import Sequencer from "./sequencer";
import LooperProvider from "./LooperProvider";



function LooperApp() {
  return (
    <LooperProvider>
      {({ player }) => {
        if (!player) {
          return <p>loading....</p>;
        }
        return <Sequencer player={player} />;
      }}
    </LooperProvider>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<LooperApp />, rootElement);

export default LooperApp
