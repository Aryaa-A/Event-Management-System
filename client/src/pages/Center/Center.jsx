import React from 'react';
import styles from './Center.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const Center = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Center to Contact Us</h1>
      <p className={styles.description}>We are here to assist you. Reach out to us through any of the channels below.</p>
      
      <div className={styles.contactCard}>
        <Phone className={styles.icon} />
        <div>
          <h2 className={styles.title}>Phone</h2>
          <p className={styles.text}>+1 (123) 456-7890</p>
          <p className={styles.text}>+1 (987) 654-3210</p>
        </div>
      </div>

      <div className={styles.contactCard}>
        <Mail className={styles.icon} />
        <div>
          <h2 className={styles.title}>Email</h2>
          <p className={styles.text}>eventoems@example.com</p>
          <p className={styles.text}>eventoemsinfo@example.com</p>
        </div>
      </div>

      <div className={styles.contactCard}>
        <MapPin className={styles.icon} />
        <div>
          <h2 className={styles.title}>Address</h2>
          <p className={styles.text}>123 Business Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Center;