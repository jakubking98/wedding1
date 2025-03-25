"use client";

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  weddingDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (weddingDate: Date): TimeLeft | null => {
  const now = new Date();
  const difference = +weddingDate - +now;

  if (difference <= 0) {
    return null; // Wedding date is in the past
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ weddingDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(weddingDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const timerComponents = [
    { key: "days", label: "dni" },
    { key: "hours", label: "godzin" },
    { key: "minutes", label: "minut" },
    { key: "seconds", label: "sekund" },
  ];

  return (
    <div className="text-black font-marcellus text-xl tracking-widest flex gap-4 justify-center">
      {isClient && timeLeft ? (
        timerComponents.map(({ key, label }) => (
          <span key={key} className="mx-1 text-center">
            <span className="block text-3xl">
              {timeLeft[key as keyof TimeLeft]}
            </span>
            <span className="block text-sm">{label}</span>
          </span>
        ))
      ) : isClient && !timeLeft ? (
        <span>Wesele już się odbyło!</span>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default CountdownTimer;
