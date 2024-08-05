// Step3.js
import React from "react";

function Step3({
  time,
  setTime,
  date,
  setDate,
  guests,
  setGuests,
  nextStep,
  prevStep,
}) {
  return (
    <div>
      <h2>Step 3: Choose Time</h2>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
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

export default Step3;
