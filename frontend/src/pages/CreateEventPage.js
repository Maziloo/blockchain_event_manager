// src/pages/CreateEventPage.js
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';

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

  // Handle all text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Image upload handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setForm(prev => ({ ...prev, image: file }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Create New Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Event Title"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
        
        <InputField
          label="Date & Time"
          type="datetime-local"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        
        <InputField
          label="Location"
          name="location"
          value={form.location}
          onChange={handleChange}
          required
        />
        
        <InputField
          label="Ticket Price (ETH)"
          type="number"
          name="price"
          step="0.01"
          min="0"
          value={form.price}
          onChange={handleChange}
          required
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
              {form.image ? 'Change Image' : 'Choose Image'}
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