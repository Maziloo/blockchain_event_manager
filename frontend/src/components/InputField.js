
const InputField = ({ label, value, onChange, ...props }) => (
  <div>
    <label className="block text-gray-700 mb-1">{label}</label>
    <input
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      value={value}
      onChange={onChange}
      {...props}
    />
  </div>
);
export default InputField;