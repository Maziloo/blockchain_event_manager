// src/pages/CreateEventPage.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateEventPage = () => {
  const [form, setForm] = useState({
    title: '',
    date: '',
    location: '',
    price: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Will be replaced with contract interaction later
    console.log('Creating event:', form);
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Create New Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField 
          label="Event Title" 
          value={form.title}
          onChange={(e) => setForm({...form, title: e.target.value})}
        />
        <InputField 
          label="Date & Time" 
          type="datetime-local"
          value={form.date}
          onChange={(e) => setForm({...form, date: e.target.value})}
        />
        <InputField 
          label="Location" 
          value={form.location}
          onChange={(e) => setForm({...form, location: e.target.value})}
        />
        <InputField 
          label="Ticket Price (ETH)" 
          type="number"
          step="0.01"
          value={form.price}
          onChange={(e) => setForm({...form, price: e.target.value})}
        />
        <button 
          type="submit" 
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

const InputField = ({ label, ...props }) => (
  <div>
    <label className="block text-gray-700 mb-1">{label}</label>
    <input
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      {...props}
    />
  </div>
);

export default CreateEventPage;