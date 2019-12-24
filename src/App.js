import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App">
      <div className="backDoor">
        <div className="bowtie" />
        <div
          onClick={() => setOpen(!isOpen)}
          className={`door ${isOpen ? "doorOpen" : ""}`}
        ></div>
        <div
          onClick={() => setOpen(!isOpen)}
          className={`secondDoor ${isOpen ? "secondDoorOpen" : ""}`}
        ></div>
        <div className="giftDetails">
          <p>
          Kjære Ørjan. Jeg vet hvor glad i vin du er så i år får du en elektrisk vi åpner av høyeste kvalitet. God jul fra pappa. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
