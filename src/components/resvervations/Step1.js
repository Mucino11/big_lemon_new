// Step1.js
import React from "react";

function Step1({ guests, setGuests, nextStep }) {
  return (
    <div>
      <h2>Step 1: Number of Guests</h2>
      <input
        type="number"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default Step1;
