import React, { useState } from 'react';
import styles from './CardBalance.module.css';
import { useNavigate } from 'react-router-dom';
import { getCardBalance } from './api';

function CardBalance() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [balance, setBalance] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!cardNumber) return;
    try {
      const data = await getCardBalance(cardNumber);
      if (data && data.balance !== undefined) {
        setBalance(`$${data.balance}`);
      } else if (data && data.id) {
        setBalance(`$${data.balance}`);
      } else {
        setBalance('Card not found');
      }
    } catch (err) {
      setBalance('Card not found');
    }
  };

  const handleDone = () => {
    navigate('/');
  };

  return (
    <div className={styles.balanceBox}>
      <div className={styles.title}>View Balance</div>
      <form className={styles.searchForm} onSubmit={handleSearch} autoComplete="off">
        <label htmlFor="cardNumber" className={styles.label}>Enter Card Number</label>
        <div className={styles.inputRow}>
          <input
            id="cardNumber"
            name="cardNumber"
            type="text"
            placeholder="0000 0000 0000"
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value)}
            className={styles.input}
            autoComplete="off"
            required
          />
          <button type="submit" className={styles.searchButton}>Search</button>
        </div>
      </form>
      {balance && (
        <>
          <div className={styles.transitCardBox}>
            <div className={styles.transitCardStyled}>
              <div className={styles.nfcIcon}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#glow)">
                    <path d="M14 20c0-4.418 3.582-8 8-8" stroke="#00cfff" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M20 20c0-2.209 1.791-4 4-4" stroke="#00cfff" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M24 20c0-1.105.895-2 2-2" stroke="#00cfff" strokeWidth="2.5" strokeLinecap="round"/>
                  </g>
                  <defs>
                    <filter id="glow" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#00cfff"/>
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className={styles.transitCardText}>TRANSIT CARD</div>
            </div>
          </div>
          <div className={styles.balanceLabel}>Balance</div>
          <div className={styles.balanceValue}>{balance}</div>
          <button className={styles.doneButton} onClick={handleDone}>Done</button>
        </>
      )}
    </div>
  );
}

export default CardBalance; 