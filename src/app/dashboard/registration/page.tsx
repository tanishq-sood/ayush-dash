"use client";

import React, { useState } from 'react'
import Step1 from "@/components/RegistrationForm/S1";
import Step2 from "@/components/RegistrationForm/S2";
import Step3 from "@/components/RegistrationForm/S3";
import Step4 from "@/components/RegistrationForm/S4";

import Script from 'next/script';
import { useRouter } from 'next/navigation'

declare global {
  interface Window {
    Razorpay: any;
  }
}

const RegistrationForm = () => {

  const router = useRouter()

  const [processing, setProcessing] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    phone: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = async () => {

    try {
      setProcessing(true);
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (data.orderId) {
        const options = {
          key: process.env.NEXT_PUBLIC_RP_ID,
          amount: 10 * 100,
          currency: 'INR',
          name: 'Ayush Aarambh',
          description: 'Payment on startup registration portal (Ayush Aarambh)',
          order_id: data.orderId,
          handler: function (response: any) {
            router.push(`/payment-success?paymentId=${response.razorpay_payment_id}&orderId=${response.razorpay_order_id}`);
          },
          theme: {
            color: '#3399cc',
          },
          modal: {
            ondismiss: function () {
              router.push('/payment-failure');
            },
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      }
    } catch (error) { }
    finally {
      setProcessing(false);
    }
  };


  return (
    <div>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <form>
        {step === 1 && (
          <Step1 formData={formData} handleChange={handleChange} />
        )}
        {step === 2 && (
          <Step2 formData={formData} handleChange={handleChange} />
        )}
        {step === 3 && (
          <Step3 formData={formData} handleChange={handleChange} />
        )}
        {step === 4 && (
          <Step4 formData={formData} handleChange={handleChange} />
        )}

        {/* Step Navigation */}
        <div className='items-center justify-center flex'>
          {step > 1 && <button className='bg-[#4CAF50] hover:bg-[#3a9b43] w-1/2 text-white mr-5 rounded h-10' type="button" onClick={prevStep}>Back</button>}
          {step < 4 && <button className='bg-[#4CAF50] hover:bg-[#3a9b43] w-1/2 text-white ml-5 rounded h-10' type="button" onClick={nextStep}>Next</button>}
          {step === 4 && <button disabled={processing} onClick={handlePayment} className='bg-[#4CAF50] hover:bg-[#3a9b43] w-1/2 text-white ml-5 rounded h-10' type="submit">Pay</button>}
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm