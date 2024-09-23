// Step2.js
import React from "react";

function Step2({ date, setDate, guests, setGuests, nextStep, prevStep }) {
  return (
    <div>
      <h2>Select Date</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <div>
        <label>Number of Guests:</label>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
        />
      </div>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default Step2;
