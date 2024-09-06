"use client";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Dashboard.module.css';
import userp from '@/app/dashboard/imagess/profile1.jpg';
import section from '@/app/dashboard/imagess/square.jpg';

import { useSearchParams } from 'next/navigation'
import { Toaster, toast as t } from 'react-hot-toast';

const Dashboard = () => {

  const search = useSearchParams()
  const success = search.get("success")
  
  const [isToastShown, setIsToastShown] = useState(false)
  
  useEffect(() => {
    if (!isToastShown && success) {
      if (success === '1') {
        t.success('PAYMENT SUCCESSFUL.', {
          position: "bottom-right"
        })
      } else if (success === '0') {
        t.error("PAYMENT FAILURE", {
          position: "bottom-right"
        })
      }
      setIsToastShown(true) // Prevent future toasts
    }
  }, [success, isToastShown])
  


  return (
    <div>
      <div className={styles.container}>
        
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
            <FaCalendarAlt size={35} className="mb-5 "/>
            <p>My Venture</p>
          </div>
          <div className={styles.box}>
          <FaCheckCircle size={35}  className="mb-5 "  />
            <p>Verification Status</p>
          </div>
          {/* <div className={styles.box}>
            <Image src={section} alt="Icon 3" width={50} height={50} className={styles.boxImage} />
            <p></p>
          </div> */}
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Dashboard;
