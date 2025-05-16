// src/pages/CreateEventPage.js
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateEventPage = () => {
  const [form, setForm] = useState({
    title: '',
    date: '',
    location: '',
    price: '',
    image: null
  });
  const [preview, setPreview] = useState('');
  const fileInputRef = useRef();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({...form, image: file});
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mock event with image (will be replaced with blockchain later)
    const newEvent = {
      ...form,
      id: Date.now(),
      imageUrl: preview, // Store the preview URL for now
      organizer: "You (local)"
    };
    
    console.log('Creating event:', newEvent);
    navigate('/');
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
        
        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 mb-1">Event Image</label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="px-4 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200"
            >
              Choose Image
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
            {preview && (
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500">
                <img 
                  src={preview} 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

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
export default CreateEventPage;