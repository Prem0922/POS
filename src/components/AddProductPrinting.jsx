import React from 'react';
import styles from './AddProductPrinting.module.css';
import { useNavigate } from 'react-router-dom';

function AddProductPrinting() {
  const navigate = useNavigate();

  const handleDone = () => {
    navigate('/');
  };

  // Example data
  const cardId = '012$209720';
  const product = 'Over Time Toskett';
  const date = '15.25';
  const time = '14:40';
  const receiptId = '000733';

  return (
    <div className={styles.formBox}>
      <div className={styles.printingTitle}>Printing...</div>
      <div className={styles.receiptWrapper}>
        <div className={styles.receipt}>
          <div className={styles.receiptRow}><span>Card ID</span><span>{cardId}</span></div>
          <div className={styles.receiptRow}><span>Product</span><span>{product}</span></div>
          <div className={styles.receiptRow}><span>Date</span><span>{date}</span></div>
          <div className={styles.receiptRow}><span>Time</span><span>{time}</span></div>
          <div className={styles.receiptRow}><span>Receipt ID</span><span>{receiptId}</span></div>
        </div>
      </div>
      <button className={styles.doneButton} onClick={handleDone}>Done</button>
    </div>
  );
}

export default AddProductPrinting; 