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

  // Example booked slots data
  const bookedSlots = {
    "2024-08-10": ["12:00", "14:00"],
    // Add more dates and times as needed
  };

  // Restricted booking hours
  const restrictedPeriods = [
    { start: "11:00", end: "13:59" },
    { start: "21:00", end: "23:00" },
  ];

  const isWithinRestrictedPeriod = (time) => {
    return restrictedPeriods.some(({ start, end }) => {
      return time >= start && time <= end;
    });
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 11; hour <= 21; hour++) {
      // Ensure we generate till 21:30 only
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${String(hour).padStart(2, "0")}:${String(
          minute
        ).padStart(2, "0")}`;
        if (!isWithinRestrictedPeriod(time)) {
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

  useEffect(() => {
    if (date) {
      fetchAvailableSlots(date);
    }
  }, [date]);

  switch (step) {
    case 1:
      return (
        <Step1 guests={guests} setGuests={setGuests} nextStep={nextStep} />
      );
    case 2:
      return (
        <Step2
          date={date}
          setDate={handleDateChange}
          guests={guests}
          setGuests={setGuests}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
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
      );
    case 4:
      return (
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
      );
    case 5:
      return (
        <Step5
          time={time}
          date={date}
          guests={guests}
          info={info}
          prevStep={prevStep}
        />
      );
    default:
      return <div>Invalid step</div>;
  }
}

export default OrderForm;
