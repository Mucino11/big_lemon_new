// OrderForm.js
import React, { useState } from "react";
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

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return (
        <Step1 guests={guests} setGuests={setGuests} nextStep={nextStep} />
      );
    case 2:
      return (
        <Step2
          date={date}
          setDate={setDate}
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
          setDate={setDate}
          guests={guests}
          setGuests={setGuests}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <Step4
          time={time}
          setTime={setTime}
          date={date}
          setDate={setDate}
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
