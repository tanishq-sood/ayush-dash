import React from 'react';

interface Step3Props {
  formData: {
    [key: string]: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step4: React.FC<Step3Props> = ({ formData, handleChange }) => {
  return (
    <div className="p-4 shadow-lg rounded-lg mb-5 bg-[#e7f6d5] min-h-96 flex flex-col justify-center items-center">

      <p className="text-black text-xl mb-4">
        Pay to finish the registration process
      </p>

      <div className="rounded-xl border-2 border-purple-800 h-60 w-60 flex justify-center items-center">
        To pay: ₹100
      </div>

    </div>
  );
};

export default Step4;
