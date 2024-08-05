// Step5.js
import React from "react";

function Step5({ time, date, guests, info, prevStep }) {
  return (
    <div>
      <h2>Step 5: Confirmation</h2>
      <p>Number of Guests: {guests}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Additional Info: {info}</p>
      <button onClick={prevStep}>Back</button>
      <button>Confirm</button>
    </div>
  );
}

export default Step5;
