import React from 'react';
import styles from './AddProductTapSuccess.module.css';
import { useNavigate } from 'react-router-dom';

function AddProductTapSuccess() {
  const navigate = useNavigate();

  const handlePrintReceipt = () => {
    navigate('/add-product-printing');
  };

  return (
    <div className={styles.formBox}>
      <div className={styles.successTitle}>Success</div>
      <div className={styles.loadedText}>Product successfully loaded onto card.</div>
      <div className={styles.productCard}>
        <div className={styles.ticketInfo}>
          <div className={styles.ticketName}>One-Time Ticket</div>
          <div className={styles.ticketPrice}>$2.50</div>
        </div>
        <div className={styles.cardIdRow}>
          <span>Card ID</span>
          <span className={styles.cardId}>109234</span>
        </div>
      </div>
      <div className={styles.totalRow}><span>Total</span><span>$2.50</span></div>
      <button className={styles.printButton} onClick={handlePrintReceipt}>Print Receipt</button>
    </div>
  );
}

export default AddProductTapSuccess; 