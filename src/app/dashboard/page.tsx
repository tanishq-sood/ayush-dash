/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import Image from 'next/image'; // Import Image component
import styles from './Dashboard.module.css'; // Import the CSS module
import userp from '@/app/dashboard/imagess/profile.webp';
import section from '@/app/dashboard/imagess/square.jpg';


const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1 className=''>Welcome To Dashboard </h1>
      {/* Profile Section */}
      <div className={styles.profileSection}>
        {/* User Photo */}
        <div className={styles.profileImage}>
          <Image
            src={userp} 
            alt="User Photo"
            width={150}
            height={150}
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* User Name */}
        <h2 className={styles.userName}>John Doe</h2>

        {/* User ID */}
        <p className={styles.userID}>ID: 12345</p>
      </div>

      {/* Boxes with Text and Images */}
      <div className={styles.boxes}>
        <div className={styles.box}>
          <Image src={section} alt="Icon 1" width={50} height={50} className={styles.boxImage} />
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className={styles.box}>
          <Image src={section} alt="Icon 2" width={50} height={50} className={styles.boxImage} />
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className={styles.box}>
          <Image src={section} alt="Icon 3" width={50} height={50} className={styles.boxImage} />
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
