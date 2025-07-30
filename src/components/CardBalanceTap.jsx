import React from 'react';
import styles from './CardBalance.module.css';
import { useNavigate } from 'react-router-dom';
import tapCardImg from './tap-card.jpg';
import { FaArrowRight } from 'react-icons/fa';

function CardBalanceTap() {
  const navigate = useNavigate();
  return (
    <div className={styles.balanceBox}>
      <img src={tapCardImg} alt="Tap your card" className={styles.tapCardImg} />
      <div className={styles.title}>Please tap your card</div>
      <button className={styles.arrowButton} onClick={() => navigate('/card-balance')} aria-label="Next">
        <FaArrowRight style={{ fontSize: '2.6rem', color: '#fff' }} />
      </button>
    </div>
  );
}

export default CardBalanceTap; 