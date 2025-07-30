import React from 'react';
import styles from './AddProductTapFinal.module.css';
import { useNavigate } from 'react-router-dom';
import tapCardImg from './tap-card.jpg';
import { FaArrowRight } from 'react-icons/fa';

function AddProductTapFinal() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/add-product-tap-success');
  };

  return (
    <div className={styles.formBox}>
      <button className={styles.nextArrow} onClick={handleNext} aria-label="Next">
        <FaArrowRight style={{ fontSize: '2.5rem', color: '#fff', background: 'transparent' }} />
      </button>
      <div className={styles.contentBox}>
        <img src={tapCardImg} alt="Tap your card" className={styles.tapCardImg} />
        <div className={styles.heading}>Tap your card to load the product</div>
        <div className={styles.subtext}>Hold your card near the payment reader</div>
      </div>
    </div>
  );
}

export default AddProductTapFinal; 