import React from 'react';
import styles from './AddProductSuccess.module.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

function AddProductSuccess() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/add-product-tap-final');
  };

  const handleCancel = () => {
    navigate('/add-product-payment');
  };

  return (
    <div className={styles.formBox}>
      <button className={styles.nextArrow} onClick={handleNext} aria-label="Next">
        <FaArrowRight style={{ fontSize: '2rem', color: '#3476f7', background: '#fff', borderRadius: '50%', padding: '8px' }} />
      </button>
      <div className={styles.contentBox}>
        <FaCheckCircle style={{ fontSize: '4rem', color: '#3476f7', marginBottom: '24px' }} />
        <div className={styles.successTitle}>Success</div>
        <div className={styles.successSubtitle}>One-Time Ticket</div>
        <div className={styles.productCard}>
          <div className={styles.productImage}></div>
          <div className={styles.productInfo}>
            <div className={styles.productName}>Product</div>
            <div className={styles.productPrice}>$2.50</div>
          </div>
        </div>
        <div className={styles.detailsTable}>
          <div className={styles.detailRow}><span>Product</span><span>$2.50</span></div>
          <div className={styles.detailRow}><span>Amount</span><span>$2.50</span></div>
          <div className={styles.detailRow}><span>Total</span><span>$7.50</span></div>
          <div className={styles.detailRow}><span>USD</span><span>$1.60</span></div>
        </div>
        <div className={styles.ticketSection}>
          <div className={styles.ticketLabel}>Your one-time ticket code:</div>
          <div className={styles.ticketCode}>One-Time Ticket SU502</div>
        </div>
        <button className={styles.cancelButton} onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default AddProductSuccess; 