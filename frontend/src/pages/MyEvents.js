// src/pages/MyEvents.js
import { useEvents } from '../contexts/EventContext';

const MyEvents = () => {
  const { myEvents, loading } = useEvents();

  return (
    <div className="container mx-auto py-8">
      {/* Same UI as before */}
    </div>
  );
};