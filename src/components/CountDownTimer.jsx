import React, { useEffect, useRef, useState } from 'react';
import CountDownCard from './CountDownCard';

const CountDownTimer = () => {
  // card ref
  const SecondsCardRef = useRef(null);
  const MinutesCardRef = useRef(null);
  const HoursCardRef = useRef(null);
  const DaysCardRef = useRef(null);

  // state
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // คำนวณวันที่ 22 ตุลาคมจากวันนี้
    const targetDate = new Date('2025-10-22T00:00:00'); // วันที่เป้าหมาย
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        clearInterval(interval);
        return;
      }

      const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDays(remainingDays);
      setHours(remainingHours);
      setMinutes(remainingMinutes);
      setSeconds(remainingSeconds);

      // ทำการหมุนการ์ด
      if (remainingSeconds === 0) {
        SecondsCardRef.current.classList.toggle('rotate');
      }
      if (remainingMinutes === 0) {
        MinutesCardRef.current.classList.toggle('rotate');
      }
      if (remainingHours === 0) {
        HoursCardRef.current.classList.toggle('rotate');
      }
      if (remainingDays === 0) {
        DaysCardRef.current.classList.toggle('rotate');
      }
    }, 1000); // อัพเดททุก 1 วินาที

    return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูกลบออก
  }, []);

  return (
    <div className="countdown__container">
      <CountDownCard label=" DAYS " number={days} cardRef={DaysCardRef} />
      <CountDownCard label=" HRS " number={hours} cardRef={HoursCardRef} />
      <CountDownCard label=" MIN " number={minutes} cardRef={MinutesCardRef} />
      <CountDownCard label=" SEC " number={seconds} cardRef={SecondsCardRef} />
    </div>
  );
};

export default CountDownTimer;
