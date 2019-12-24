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
          Kjære Elin. Vi ønsker deg en riktig god jul og inviterer deg herved på en helgetur til Oslo. Klem fra onkel Ole, tante Jana, onkel Even og onkel Ørjan  
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
