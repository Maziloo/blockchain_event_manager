// src/pages/HomePage.js
import EventCard from '../components/EventCard';
import useMockEvents from '../hooks/useMockEvents';
import EventCardSkeleton from '../components/EventCardSkeleton';

const HomePage = () => (
  <div>
    <HeroSection />
    <EventList />
  </div>
);

const HeroSection = () => (
  <section className="bg-purple-500 text-white py-20">
    <div className="container mx-auto text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to the Decentralized Event Marketplace</h1>
      <p className="text-xl">Discover and join events securely on the blockchain.</p>
    </div>
  </section>
);

const EventList = () => {
  const { events, loading } = useMockEvents(); // We'll create this hook
  
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <EventCardSkeleton count={3} />
        ) : (
          events.map(event => <EventCard key={event.id} {...event} />)
        )}
      </div>
    </section>
  );
};

export default HomePage;