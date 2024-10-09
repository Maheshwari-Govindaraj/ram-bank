// import { useState } from "react";
// import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
// import CloseIcon from '@mui/icons-material/Close';
// import { More } from "../moredetails/moredetails";


// export const Form = () => {
//   const initialvalue = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     country: "",
//     state:""
//   };

  
//   const [form, setForm] = useState(initialvalue);
//   const [modal, setModal] = useState(false);

//   const toggleEvent = () => {
//     setModal(!modal);   
//   };
 

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleCountryChange = (country) => {
//     setForm({ ...form, country, state: "" }); // Reset state on country change
//   };
//   const handleStateChange = (state) => {
//     setForm({ ...form, state });
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
    
//   };


//   const reset = () => {
//     setForm(initialvalue);
    
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-10 bg-gray-100 rounded-lg shadow-lg backdrop-blur-sm bg-white/5">
//       <h1 className="text-3xl font-bold text-center mb-6 text-black">Create Your Account</h1>
//       <form onSubmit={handleSubmit}>
//         {/* First Name and Last Name in a single row */}
//         <div className="flex mb-4">
//           {[
//             { label: "First Name", type: "text", name: "firstName", placeholder: "Enter your first name" },
//             { label: "Last Name", type: "text", name: "lastName", placeholder: "Enter your last name" },
//           ].map((input, index) => (
//             <div className="flex-grow mr-3" key={index}>
//               <label className="block text-black font-semibold mb-1">{input.label}:</label>
//               <input
//                 type={input.type}
//                 name={input.name}
//                 value={form[input.name]}
//                 onChange={handleChange}
//                 placeholder={input.placeholder}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
//                 required
//               />
//             </div>
//           ))}
//         </div>
        
//         {/* Other input fields */}
//         {[
//           { label: "Email", type: "email", name: "email", placeholder: "Enter your email" },
//           { label: "Phone", type: "tel", name: "phone", placeholder: "123-456-7890" },
//           { label: "Address", type: "text", name: "address", placeholder: "Enter your address" },
//         ].map((input, index) => (
//           <div className="flex items-center mb-4 " key={index}>
//             <label className="block text-black font-semibold mr-6 w-20">{input.label}:</label>
//             <input
//               type={input.type}
//               name={input.name}
//               value={form[input.name]}
//               onChange={handleChange}
//               placeholder={input.placeholder}
//               className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
//               required
//             />
//           </div>
//         ))}
        
//         <div className="flex items-center mb-4">
//           <label className="block text-black font-semibold mr-4 w-24">Country:</label>
//           <CountryDropdown
//             value={form.country}
//             onChange={handleCountryChange}
//             classes="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300" 
//             required
//             style={{ width:'80%' }}
//           />
//         </div>

//         <div className="flex items-center mb-4">
//           <label className="block text-black font-semibold mr-4 w-20">State:</label>
//           <RegionDropdown
//             country={form.country} // Pass the selected country to filter states
//             value={form.state}
//             onChange={handleStateChange}
//             classes="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
//             required
//           />
//         </div>
        
//         <div className="flex justify-between mb-4 gap-2">
//           <button type="submit" className="w-1/2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-300 transition duration-300 shadow-md">
//             Continue
//           </button>
//           {modal && (
//           <div className={`absolute inset-0 flex items-center justify-center z-50  `}>
//             <div className="relative rounded-lg shadow-lg max-w-md w-full ">
//               <More/>
//               <CloseIcon onClick={toggleEvent} className="absolute cursor-pointer right-3 top-3 hover:text-red-500 hoverbg-black" />
//             </div>
//           </div>
//         )}
//           <button type="button" onClick={reset} className="w-1/2 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-black transition duration-300 shadow-md">
//             Reset
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

import { useState } from "react";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import CloseIcon from '@mui/icons-material/Close';
import { More } from "../more/more";

export const Form = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    state: ""
  };

  const [form, setForm] = useState(initialValue);
  const [modal, setModal] = useState(false);

  const toggleEvent = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCountryChange = (country) => {
    setForm({ ...form, country, state: "" }); // Reset state on country change
  };

  const handleStateChange = (state) => {
    setForm({ ...form, state });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    toggleEvent();  // Open modal on successful submit
  };

  const reset = () => {
    setForm(initialValue);
  };

  return (
    <div className="relative max-w-4xl mx-auto p-10 bg-gray-100 rounded-lg shadow-lg backdrop-blur-sm bg-white/5">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">Create Your Account</h1>
      <form 
        onSubmit={handleSubmit} 
        className={`${modal ? 'hidden' : ''}`}  // Hide form when modal is open
      >
        {/* First Name and Last Name in a single row */}
        <div className="flex mb-4">
          {[
            { label: "First Name", type: "text", name: "firstName", placeholder: "Enter your first name" },
            { label: "Last Name", type: "text", name: "lastName", placeholder: "Enter your last name" },
          ].map((input, index) => (
            <div className="flex-grow mr-3" key={index}>
              <label className="block text-black font-semibold mb-1">{input.label}:</label>
              <input
                type={input.type}
                name={input.name}
                value={form[input.name]}
                onChange={handleChange}
                placeholder={input.placeholder}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                required
              />
            </div>
          ))}
        </div>

        {/* Other input fields */}
        {[ 
          { label: "Email", type: "email", name: "email", placeholder: "Enter your email" },
          { label: "Phone", type: "tel", name: "phone", placeholder: "123-456-7890" },
          { label: "Address", type: "text", name: "address", placeholder: "Enter your address" },
        ].map((input, index) => (
          <div className="flex items-center mb-4" key={index}>
            <label className="block text-black font-semibold mr-6 w-20">{input.label}:</label>
            <input
              type={input.type}
              name={input.name}
              value={form[input.name]}
              onChange={handleChange}
              placeholder={input.placeholder}
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
              required
            />
          </div>
        ))}

        <div className="flex items-center mb-4">
          <label className="block text-black font-semibold mr-4 w-24">Country:</label>
          <CountryDropdown
            value={form.country}
            onChange={handleCountryChange}
            classes="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
            required
            style={{ width: '80%' }}
          />
        </div>

        <div className="flex items-center mb-4">
          <label className="block text-black font-semibold mr-4 w-20">State:</label>
          <RegionDropdown
            country={form.country} // Pass the selected country to filter states
            value={form.state}
            onChange={handleStateChange}
            classes="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
            required
          />
        </div>

        <div className="flex justify-between mb-4 gap-2">
          <button type="submit" className="w-1/2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-300 transition duration-300 shadow-md">
            Continue
          </button>
          <button type="button" onClick={reset} className="w-1/2 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-black transition duration-300 shadow-md">
            Reset
          </button>
        </div>
      </form>

      {/* Modal */}
      {modal && (
        <div className={`relative inset-0 flex w-100 items-center justify-center z-50 bg-black bg-opacity-50`}>
          <div className="absolute rounded-lg shadow-lg max-w-xl w-full">
            <More/>
            <CloseIcon onClick={toggleEvent} className="absolute cursor-pointer right-3 top-3 hover:text-red-500" />
          </div>
        </div>
      )}
    </div>
  );
};
