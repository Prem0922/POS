import React from 'react';
import styles from './AddProduct.module.css';
import { useNavigate } from 'react-router-dom';
import tapCardImg from './tap-card.jpg';
import { addProduct } from './api';

function AddProduct() {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/add-product-types');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className={styles.formBox}>
      <h2 className={styles.title}>Add Product</h2>
      <div className={styles.cardReaderContent}>
        {/* Remove .cardReaderCard wrapper, place contents directly */}
        <img src={tapCardImg} alt="Tap your card" className={styles.tapCardImg} />
        <h3 className={styles.cardReaderTitle}>Tap Card to Read</h3>
        <p className={styles.cardReaderInstruction}>Please tap the card on the reader</p>
        <p className={styles.cardReaderNextStep}>Proceed to select a product.</p>
        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </button>
          <button className={styles.proceedButton} onClick={handleProceed}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct; 