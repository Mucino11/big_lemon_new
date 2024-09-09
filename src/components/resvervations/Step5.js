// // Step5.js
// import React, { useState } from "react";

// function Step5({ time, date, guests, info, prevStep }) {
//   const [isConfirmed, setIsConfirmed] = useState(false);

//   const handleConfirm = () => {
//     setIsConfirmed(true);
//   };

//   return (
//     <div>
//       {!isConfirmed && (
//         <h2>Check your Information and confirm the Reservation</h2>
//       )}
//       {isConfirmed ? (
//         <h2 className="booking-confirmation">Reservation Confirmed</h2>
//       ) : (
//         <>
//           <p>Number of Guests: {guests}</p>
//           <p>Date: {date}</p>
//           <p>Time: {time}</p>
//           <p>Additional Info: {info}</p>
//           <button onClick={prevStep}>Back</button>
//           <button onClick={handleConfirm}>Confirm</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default Step5;
