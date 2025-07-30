import React from 'react';
import styles from './AddProductCash.module.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaMoneyBillWave } from 'react-icons/fa';

function AddProductCash() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/add-product-payment');
  };

  const handleNext = () => {
    navigate('/add-product-cash-change');
  };

  return (
    <div className={styles.formBox}>
      <button className={styles.nextArrow} onClick={handleNext} aria-label="Next">
        <FaArrowRight style={{ fontSize: '2rem', color: '#3476f7', background: '#fff', borderRadius: '50%', padding: '8px' }} />
      </button>
      <div className={styles.contentBox}>
        <div className={styles.total}>Total: <span>$2.75</span></div>
        <div className={styles.instruction}>Insert cash</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '64px 0' }}>
          <FaMoneyBillWave style={{ fontSize: '12rem', color: '#3476f7', background: '#fff', padding: '48px' }} />
        </div>
        <button className={styles.cancelButton} onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default AddProductCash; 