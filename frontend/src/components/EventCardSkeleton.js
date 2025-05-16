// src/components/EventCardSkeleton.js
const EventCardSkeleton = ({ count = 1 }) => (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white p-6 rounded-lg shadow-lg animate-pulse">
          <div className="h-7 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      ))}
    </>
  );

  export default EventCardSkeleton;