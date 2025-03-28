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

  if (difference < 0) {
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

const CountdownTimer2: React.FC<CountdownTimerProps> = ({ weddingDate }) => {
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
    { key: "days", label: "Dni" },
    { key: "hours", label: "Godzin" },
    { key: "minutes", label: "Minut" },
    { key: "seconds", label: "Sekund" },
  ];

  return (
    <div className="flex gap-4 justify-center">
      {isClient && timeLeft ? (
        timerComponents.map(({ key, label }) => (
          <div
            key={key}
            className="bg-white rounded-xl shadow-md p-3 md:p-4 text-center w-24 font-comfortaa"
          >
            <span className="block text-3xl font-bold text-OrcheidDark">
              {timeLeft[key as keyof TimeLeft]}
            </span>
            <span className="block text-sm uppercase text-ColorWeb3">
              {label}
            </span>
          </div>
        ))
      ) : isClient && timeLeft === null ? (
        <span className="text-OrcheidDark font-comfortaa text-xl tracking-widest">
          Wesele już się odbyło!
        </span>
      ) : (
        <span className="text-OrcheidDark font-comfortaa text-xl tracking-widest">
          Loading...
        </span>
      )}
    </div>
  );
};

export default CountdownTimer2;
