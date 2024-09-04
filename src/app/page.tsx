"use client"

import React, { useState } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Programs from '@/components/Programs/Programs'
import Title from '@/components/Title/Title'
import About from '@/components/About/About'
import Sectors from '@/components/Sectors/Sectors'
import FAQs from '@/components/FAQs/faq'
import Contact from '@/components/Contact/Contacts'
import Footer from '@/components/Footer/Footer'
import Videoplayer from '@/components/Videoplayer/Videoplayer'

export default async function Home() {

  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='pl-[5%] pr-[5%]'>


        <About setPlayState={setPlayState} />
        <Title subtitle='AYUSH SECTORS' Title='DESCRIPTION' />
        <Sectors />
        <Title subtitle='OUR PROGRAM' Title='WHAT WE OFFER' />
        <Programs />

        <Title subtitle='FAQs' Title='FIND YOUR ANSWERS' />
        <FAQs />
        <Title subtitle='CONTACT US' Title='GET IN TOUCH' />
        <Contact />
        <Footer />
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />

    </div>
  );
}
