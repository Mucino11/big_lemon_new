// Step4.js
import React from "react";

function Step4({
  time,
  setTime,
  date,
  setDate,
  guests,
  setGuests,
  info,
  setInfo,
  nextStep,
  prevStep,
}) {
  return (
    <div>
      <h2>Review and Edit</h2>
      <div>
        <label>Number of Guests:</label>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <label>Additional Info:</label>
        <textarea value={info} onChange={(e) => setInfo(e.target.value)} />
      </div>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default Step4;
