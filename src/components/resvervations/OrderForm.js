import React, { useState, useEffect } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

function OrderForm() {
  const [step, setStep] = useState(1);
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [info, setInfo] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [slotError, setSlotError] = useState("");

  const bookedSlots = {
    "2024-08-10": ["12:00", "14:00"],
  };

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

  const fetchAvailableSlots = (selectedDate) => {
    const bookedTimes = bookedSlots[selectedDate] || [];
    const allSlots = generateTimeSlots();
    const slots = allSlots.filter((time) => !bookedTimes.includes(time));
    setAvailableSlots(slots);
  };

  const nextStep = () => {
    if (step === 3 && !availableSlots.includes(time)) {
      setSlotError(
        "Selected time slot is unavailable. Please choose another time."
      );
      return;
    }
    setSlotError("");
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    fetchAvailableSlots(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitting form data", { guests, date, time, info });
    // Reset form or navigate away, etc.
  };

  useEffect(() => {
    if (date) {
      fetchAvailableSlots(date);
    }
  }, [date]);

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <Step1 guests={guests} setGuests={setGuests} nextStep={nextStep} />
      )}
      {step === 2 && (
        <Step2
          date={date}
          setDate={handleDateChange}
          guests={guests}
          setGuests={setGuests}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Step3
          time={time}
          setTime={setTime}
          date={date}
          setDate={handleDateChange}
          guests={guests}
          setGuests={setGuests}
          nextStep={nextStep}
          prevStep={prevStep}
          slotError={slotError}
        />
      )}
      {step === 4 && (
        <Step4
          time={time}
          setTime={setTime}
          date={date}
          setDate={handleDateChange}
          guests={guests}
          setGuests={setGuests}
          info={info}
          setInfo={setInfo}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 5 && (
        <Step5
          time={time}
          date={date}
          guests={guests}
          info={info}
          prevStep={prevStep}
        />
      )}
    </form>
  );
}

export default OrderForm;
