import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import '../styles/Countdown.css';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    console.log('Countdown component mounted');
    const weddingDate = new Date('2025-08-30T15:30:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      
      if (now >= weddingDate) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = differenceInDays(weddingDate, now);
      const hours = differenceInHours(weddingDate, now) % 24;
      const minutes = differenceInMinutes(weddingDate, now) % 60;
      const seconds = differenceInSeconds(weddingDate, now) % 60;

      return { days, hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div style={{ color: '#f5f5f5', fontSize: '1.2rem', textAlign: 'center' }}>
        Faltam <span style={{ color: '#808000', fontWeight: 'bold' }}>{timeLeft.days}</span> dias{' '}
        <span style={{ color: '#808000', fontWeight: 'bold' }}>{timeLeft.hours}</span> horas{' '}
        <span style={{ color: '#808000', fontWeight: 'bold' }}>{timeLeft.minutes}</span> minutos e{' '}
        <span style={{ color: '#808000', fontWeight: 'bold' }}>{timeLeft.seconds}</span> segundos
      </div>
    </div>
  );
}

export default Countdown; 