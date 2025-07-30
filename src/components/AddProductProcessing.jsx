import React from 'react';
import styles from './AddProductProcessing.module.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaMoneyBillWave } from 'react-icons/fa';

function AddProductProcessing() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/add-product-cardreader');
  };

  const handleNext = () => {
    navigate('/add-product-success');
  };

  return (
    <div className={styles.formBox}>
      <button className={styles.nextArrow} onClick={handleNext} aria-label="Next">
        <FaArrowRight style={{ fontSize: '2rem', color: '#3476f7', background: '#fff', borderRadius: '50%', padding: '8px' }} />
      </button>
      <div className={styles.contentBox}>
        <div className={styles.total}>Processing: <span>$2.75</span></div>
        <div className={styles.instruction}>Processing payment...</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '64px 0' }}>
          <FaMoneyBillWave style={{ fontSize: '8rem', color: '#3476f7', background: '#fff', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 24px rgba(52, 118, 247, 0.10)' }} />
        </div>
        <button className={styles.cancelButton} onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default AddProductProcessing; 