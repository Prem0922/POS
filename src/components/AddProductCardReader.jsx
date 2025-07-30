import React from 'react';
import styles from './AddProductCardReader.module.css';
import { useNavigate } from 'react-router-dom';
import tapCardImg from './tap-card.jpg';

function AddProductCardReader({ productType, onProceed, onCancel }) {
  return (
    <div className={styles.formBox}>
      <div className={styles.centerContent}>
        <img src={tapCardImg} alt="Tap your card" className={styles.tapCardImg} />
        <div className={styles.slotWrapper}>
          <div className={styles.cardSlotGlow}></div>
          <div className={styles.cardSlot}></div>
          <div className={styles.cardInsert}>
            <div className={styles.chip}></div>
            <div className={styles.stripe}></div>
            <div className={styles.cardText}>CARD DEBIT</div>
          </div>
        </div>
        <div className={styles.instruction}>Insert, Tap, or Swipe Your Card</div>
        <div className={styles.buttonGroup}>
          <button className={styles.actionButton + ' ' + styles.cancelButton} onClick={onCancel}>Cancel</button>
          <button className={styles.actionButton} onClick={onProceed}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default AddProductCardReader; 