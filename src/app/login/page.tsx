"use client"

import React, { useState, useEffect } from 'react';
import { FiRefreshCcw } from "react-icons/fi";

const AyushSignup = () => {
    const [captchaValue, setCaptchaValue] = useState('');
    const [userInput, setUserInput] = useState('');
    const [captchaMessage, setCaptchaMessage] = useState('');
    const fonts = ['cursive', 'sans-serif', 'serif', 'monospace'];

    // Function to generate a random CAPTCHA value
    const generateCaptcha = () => {
        let value = btoa((Math.random() * 1000000000).toString());
        value = value.substr(0, 3 + Math.random() * 3);
        setCaptchaValue(value);
    };

    // Function to set the CAPTCHA in the preview area
    const setCaptcha = () => {
        return captchaValue.split('').map((char, index) => {
            const rotate = -20 + Math.floor(Math.random() * 40);
            const font = Math.floor(Math.random() * fonts.length);
            return (
                <span
                    key={index}
                    style={{
                        display: 'inline-block',
                        transform: `rotate(${rotate}deg)`,
                        fontFamily: fonts[font],
                        fontSize: '20px',
                        margin: '0 5px',
                        color: '#333',
                    }}
                >
                    {char}
                </span>
            );
        });
    };

    // Function to handle CAPTCHA validation
    const handleCaptchaValidation = () => {
        if (userInput === captchaValue) {
            setCaptchaMessage('CAPTCHA is correct!');
        } else {
            setCaptchaMessage('You have entered the wrong CAPTCHA!');
        }
    };

    // Initialize the CAPTCHA when the component is mounted
    useEffect(() => {
        generateCaptcha();
    }, []);

    return (
        <div className='bg-[#e7f6d5] text-[#333] font-sans leading-6 m-0 p-0 h-screen justify-center items-center'>
            <section id="signup-signin" className="flex flex-col md:flex-row md:justify-between items-center py-10 px-5 bg-[#d0eacb]">
                <div className="bg-[#f0f9e9] p-5 rounded-lg w-full md:w-1/2 mb-5 md:mb-0">
                    <h2 className="text-green-600 mb-5 text-center text-2xl">Join AYUSH-AARAMBH</h2>
                    <p className="mb-5 text-center text-lg">Sign up or sign in to explore more opportunities with the AYUSH Startup community.</p>
                    <form>
                        <div className="mb-4">
                            <label htmlFor='username' className="block mb-1 font-bold">EMail</label>
                            <input type="text" id="username" name="username" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor='password' className="block mb-1 font-bold">Password</label>
                            <input type="password" id="password" name="password" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="text-center mt-5">
                            <button type="submit" className="bg-green-600 text-white py-2 px-5 rounded-md mx-2 transition-transform duration-300 hover:bg-green-500 hover:shadow-md">Sign Up</button>
                            <button type="button" className="bg-green-600 text-white py-2 px-5 rounded-md mx-2 transition-transform duration-300 hover:bg-green-500 hover:shadow-md">Sign In</button>
                        </div>
                    </form>
                </div>

                <div className="bg-[#f0f9e9] p-5 rounded-lg ml-0 md:ml-5 w-full md:w-[40%]">
                    <h3 className="text-green-600 mb-4 text-xl">Did You Know?</h3>
                    <p className="mb-2 text-sm text-[#555]">AYUSH startups have seen a growth rate of over 15% annually due to increasing global demand for alternative medicine.</p>
                    <p className="mb-2 text-sm text-[#555]">India is the largest producer of medicinal plants and holds a 6,000-year-old tradition of Ayurvedic practices.</p>
                </div>
            </section>

            <div className="captcha mb-5 px-5">
                <label className="block mb-2 font-bold">Enter Captcha</label>
                <div className="preview h-[50px] bg-gray-200 border border-gray-300 mb-2 text-center leading-[50px] text-lg text-[#333]">12AB3C</div>
                <div className="captcha-form flex items-center">
                    <input type="text" id="captcha-input" placeholder="Enter captcha text" className="flex-1 p-2 border border-gray-300 rounded-md text-sm" />
                    <div className="bg-green-400 text-white p-4 ml-2 rounded-md cursor-pointer">
                        <FiRefreshCcw />
                    </div>
                </div>
                <div className="captcha-message text-center mt-2 text-sm">
                    <p className="text-red-500">Incorrect CAPTCHA. Please try again.</p>
                </div>
            </div>

        </div>

    );
};

export default AyushSignup;