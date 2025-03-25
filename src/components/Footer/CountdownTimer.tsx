"use client";

// src/components/Footer/CountdownTimer.tsx
import React, { useState, useEffect, JSX, useCallback } from "react";

interface CountdownTimerProps {
  weddingDate: Date;
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ weddingDate }) => {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const now = new Date();
    const difference = +weddingDate - +now;
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      timeLeft = {
        days,
        hours,
        minutes,
        seconds,
      };
    }

    return timeLeft;
  });

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [calculateTimeLeft]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const key = interval as keyof TimeLeft;
    if (!timeLeft[key]) {
      return;
    }
    const value = timeLeft[key]!; // Non-null assertion because we checked if it exists
    const label =
      interval === "days"
        ? "dni"
        : interval === "hours"
        ? "godzin"
        : interval === "minutes"
        ? "minut"
        : "sekund";

    timerComponents.push(
      <span key={interval} className="mx-1 text-center">
        <span className="block text-3xl">{value}</span>
        <span className="block text-sm">{label}</span>
      </span>
    );
  });

  return (
    <div className="text-black font-marcellus text-xl tracking-widest flex gap-4 justify-center">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>Wesele już się odbyło!</span>
      )}
    </div>
  );
};

export default CountdownTimer;
