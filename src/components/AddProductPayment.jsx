import React from 'react';
import styles from './AddProductPayment.module.css';
import { FaArrowLeft, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function AddProductPayment() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/add-product-types');
  };

  const handleCreditCard = () => {
    navigate('/add-product-cardreader');
  };

  const handleCash = () => {
    navigate('/add-product-cash');
  };

  return (
    <div className={styles.formBox}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={handleBack}>
          <FaArrowLeft className={styles.backIcon} />
          Back
        </button>
        <h2 className={styles.title}>Payment Method</h2>
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.paymentButton} onClick={handleCash}>Cash</button>
        <button className={styles.paymentButton} onClick={handleCreditCard}>Credit / Debit Card</button>
      </div>
    </div>
  );
}

export default AddProductPayment; 