import { useState } from 'react';

export const More = () => {
  const [occupation, setOccupation] = useState('');

  const handleOccupationChange = (event) => {
    setOccupation(event.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="space-y-6 p-6 max-w-4xl w-full bg-white shadow-md rounded-lg">
        {/* Aadhaar Section */}
        <div className="flex flex-col">
          <div className="flex space-x-4 ">
          <label htmlFor="aadhaar" className="mb-2 font-semibold ">Aadhaar Number:</label>
            <input
              type="text"
              id="aadhaar"
              placeholder="Aadhaar Number"
              className="border border-gray-300 rounded p-3  focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="file"
              accept="image/*"
              className="border border-gray-300 rounded p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 w-36" // Adjusted width for better visibility
              required
            />
          </div>
        </div>

        {/* PAN Section */}
        <div className="flex flex-col">
          <div className="flex space-x-4">
          <label htmlFor="pan" className="mb-2 font-semibold mr-7">PAN Number:</label>
            <input
              type="text"
              id="pan"
              placeholder="PAN Number"
              className="border border-gray-300 rounded p-3  focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="file"
              accept="image/*"
              className="border border-gray-300 rounded p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 w-36" // Adjusted width for better visibility
              required
            />
          </div>
        </div>

        {/* Occupation Dropdown */}
        <div className="mb-4 flex flex-row">
            
          <label htmlFor="occupation" className="mb-1 font-semibold mr-7 ">Occupation:</label>
          <select
            id="occupation"
            value={occupation}
            onChange={handleOccupationChange}
            className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 flex-grow"
            required
          >
            <option value="" disabled>Select your occupation</option>
            <option value="student">Student</option>
            <option value="salaried">Salaried</option>
            <option value="self-employed">Self-employed</option>
            <option value="none">None</option>
          </select>
        </div>

        {/* Conditional Fields for Students */}
        {occupation === 'student' && (
          <div className="flex flex-row">
            <label htmlFor="parent-name" className="mb-2 font-semibold">Parent Name:</label>
            <input
              type="text"
              id="parent-name"
              placeholder="Parent Name"
              className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <label htmlFor="parent-number" className="mb-2 font-semibold">Parent Number:</label>
            <input
              type="text"
              id="parent-number"
              placeholder="Parent Number"
              className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        )}

        {/* Conditional Fields for Salaried */}
        {occupation === 'salaried' && (
          <div className="flex flex-row">
            <label htmlFor="company-name" className="mb-2 font-semibold mr-5">Company Name:</label>
            <input
              type="text"
              id="company-name"
              placeholder="Company Name"
              className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <label htmlFor="designation" className="mb-2 p-3 font-semibold mr-5">Your Designation:</label>
            <input
              type="text"
              id="designation"
              placeholder="Your Designation"
              className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 left-0"
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
