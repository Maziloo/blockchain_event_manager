// src/hooks/useMockEvents.js
import React, { useEffect, useState } from "react";
import { mockEvents } from '../mocks/events';

const useMockEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { events, loading };
};

export default useMockEvents;