// import React, { useState, useEffect } from "react";
// import Step1 from "./Step1";
// import Step2 from "./Step2";
// import Step3 from "./Step3";
// import Step4 from "./Step4";
// import Step5 from "./Step5";

// function OrderForm() {
//   const [step, setStep] = useState(1);
//   const [guests, setGuests] = useState(1);
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [info, setInfo] = useState("");
//   const [availableSlots, setAvailableSlots] = useState([]);
//   const [slotError, setSlotError] = useState("");
//   const [validationErrors, setValidationErrors] = useState({});

//   // Restricted booking hours
//   const restrictedHours = [
//     { start: "11:00", end: "13:59" },
//     { start: "21:00", end: "23:00" },
//   ];

//   const isRestrictedHour = (time) => {
//     return restrictedHours.some(({ start, end }) => {
//       return time >= start && time <= end;
//     });
//   };

//   const generateTimeSlots = () => {
//     const slots = [];
//     for (let hour = 14; hour < 21; hour++) {
//       for (let minute = 0; minute < 60; minute += 30) {
//         const time = `${String(hour).padStart(2, "0")}:${String(
//           minute
//         ).padStart(2, "0")}`;
//         if (!isRestrictedHour(time)) {
//           slots.push(time);
//         }
//       }
//     }
//     return slots;
//   };

//   const fetchAvailableSlots = () => {
//     // Directly generate all available slots without filtering booked ones
//     const slots = generateTimeSlots();
//     setAvailableSlots(slots);
//   };

//   const validateStep = () => {
//     let errors = {};
//     if (step === 1) {
//       if (guests < 1) {
//         errors.guests = "Number of guests must be at least 1.";
//       }
//     } else if (step === 2) {
//       if (!date) {
//         errors.date = "Please select a date.";
//       }
//     } else if (step === 3) {
//       if (!time) {
//         errors.time = "Please select a time.";
//       }
//     }

//     setValidationErrors(errors);
//     return Object.keys(errors).length === 0; // Returns true if no errors
//   };

//   const nextStep = () => {
//     if (!validateStep()) {
//       return;
//     }

//     setSlotError("");
//     setStep(step + 1);
//   };

//   const prevStep = () => setStep(step - 1);

//   const handleDateChange = (newDate) => {
//     setDate(newDate);
//     fetchAvailableSlots();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateStep()) {
//       return;
//     }

//     // Form data as an array
//     const formDataArray = [guests, date, time, info];

//     // Log form data to console
//     console.log("Form data as array:", formDataArray);

//     // Handle form submission logic here
//     console.log("Submitting form data", { guests, date, time, info });
//   };

//   useEffect(() => {
//     if (date) {
//       fetchAvailableSlots();
//     }
//   }, [date]);

//   return (
//     <form onSubmit={handleSubmit}>
//       {step === 1 && (
//         <Step1 guests={guests} setGuests={setGuests} nextStep={nextStep} />
//       )}
//       {step === 2 && (
//         <Step2
//           date={date}
//           setDate={handleDateChange}
//           guests={guests}
//           setGuests={setGuests}
//           nextStep={nextStep}
//           prevStep={prevStep}
//         />
//       )}
//       {step === 3 && (
//         <>
//           <Step3
//             time={time}
//             setTime={setTime}
//             date={date}
//             setDate={handleDateChange}
//             guests={guests}
//             setGuests={setGuests}
//             nextStep={nextStep}
//             prevStep={prevStep}
//             slotError={slotError}
//           />
//           <div>
//             <h4>Available Time Slots:</h4>
//             <ul>
//               {availableSlots.map((slot, index) => (
//                 <li key={index}>{slot}</li>
//               ))}
//             </ul>
//           </div>
//         </>
//       )}

//       {step === 4 && (
//         <Step4
//           time={time}
//           setTime={setTime}
//           date={date}
//           setDate={handleDateChange}
//           guests={guests}
//           setGuests={setGuests}
//           info={info}
//           setInfo={setInfo}
//           nextStep={nextStep}
//           prevStep={prevStep}
//         />
//       )}
//       {step === 5 && (
//         <Step5
//           time={time}
//           date={date}
//           guests={guests}
//           info={info}
//           prevStep={prevStep}
//         />
//       )}
//       <div className="errors">
//         {Object.values(validationErrors).map((error, index) => (
//           <div key={index} style={{ color: "red" }}>
//             {error}
//           </div>
//         ))}
//       </div>
//       {step === 5 && (
//         <button type="submit" onClick={handleSubmit}>
//           Submit
//         </button>
//       )}
//     </form>
//   );
// }

// export default OrderForm;

import React, { useState, useEffect } from "react";

function OrderForm() {
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [info, setInfo] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  // const [slotError, setSlotError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  // Restricted booking hours
  const restrictedHours = [
    { start: "11:00", end: "13:59" },
    { start: "21:00", end: "23:00" },
  ];

  const isRestrictedHour = (time) => {
    return restrictedHours.some(({ start, end }) => {
      return time >= start && time <= end;
    });
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 14; hour < 21; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${String(hour).padStart(2, "0")}:${String(
          minute
        ).padStart(2, "0")}`;
        if (!isRestrictedHour(time)) {
          slots.push(time);
        }
      }
    }
    return slots;
  };

  const fetchAvailableSlots = () => {
    // Directly generate all available slots without filtering booked ones
    const slots = generateTimeSlots();
    setAvailableSlots(slots);
  };

  const validateForm = () => {
    let errors = {};

    if (guests < 1) {
      errors.guests = "Number of guests must be at least 1.";
    }
    if (!date) {
      errors.date = "Please select a date.";
    }
    if (!time) {
      errors.time = "Please select a time.";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Form data as an object
    const formData = { guests, date, time, info };

    // Log form data to console
    console.log("Submitting form data", formData);

    // Handle form submission logic here
    alert("Form submitted successfully!");
  };

  useEffect(() => {
    if (date) {
      fetchAvailableSlots();
    }
  }, [date]);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Order Form</h2>
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
        <label>Select Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Select Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <h4>Available Time Slots:</h4>
        <ul>
          {availableSlots.map((slot, index) => (
            <li key={index}>{slot}</li>
          ))}
        </ul>
      </div>
      <div>
        <label>Additional Info:</label>
        <textarea value={info} onChange={(e) => setInfo(e.target.value)} />
      </div>
      <div className="errors">
        {Object.values(validationErrors).map((error, index) => (
          <div key={index} style={{ color: "red" }}>
            {error}
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default OrderForm;
