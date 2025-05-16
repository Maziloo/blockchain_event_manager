// src/components/EventCard.js
const EventCard = ({ title, date, location, price, imageUrl }) => (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">📅 {new Date(date).toLocaleDateString()}</p>
        <p className="text-gray-600">📍 {location}</p>
        <p className="text-gray-600">💰 {price} ETH</p>
        <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors">
          Buy Ticket
        </button>
      </div>
    </div>
  );
  
  export default EventCard;