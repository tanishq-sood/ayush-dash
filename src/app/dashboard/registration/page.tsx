"use client";

import React, { useState } from 'react'
import StartupRegistrationForm1 from "@/components/RegistrationForm/StartupRegistrationForm1";
import StartupRegistrationForm2 from "@/components/RegistrationForm/StartupRegistrationForm2";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData1, setFormData1] = useState({});

  const handleNext = (data: any) => {
    setFormData1(data);
    setStep(2);
  };

  const handleFinalSubmit = (formData2: any) => {
    // Combine data from both forms
    const finalData = { ...formData1, ...formData2 };
    console.log("Final Form Data:", finalData);
    // Perform final form submission or API call here
  };

  return (
    <div className="App">
      {step === 1 && <StartupRegistrationForm1 onNext={handleNext} />}
      {step === 2 && <StartupRegistrationForm2 onSubmit={handleFinalSubmit} />}
    </div>
  );
}

export default RegistrationForm