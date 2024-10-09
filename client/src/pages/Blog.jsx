import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import logo from "../assets/file.png";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion } from 'framer-motion';
import { Form } from "../components/form/form";


const blogs = [
  {
    
    id: 1,
    title: 'How to Create a New Bank Account',
    description: 'Learn the steps to create a bank account with ease on our platform.',
    content: 'Creating a new bank account with us is simple. Just provide basic details like your name, address, and identification documents...',
  },
  {
    id: 2,
    title: 'Understanding Transaction Processes',
    description: 'Get insights into how transactions work, from initiation to completion.',
    content: 'A transaction begins when you submit a request through our platform. Whether it’s transferring funds or making a payment, our system ensures secure and instant processing...',
  },
  {
    id: 3,
    title: 'Track Your Transaction History Effortlessly',
    description: 'Our platform offers detailed insights into your transaction history at any time.',
    content: 'To view your transaction history, log into your account and navigate to the “History” section, where you’ll find all transaction details...',
  },
  {
    id: 4,
    title: 'Maximizing Security in Online Banking',
    description: 'Learn about the security measures we employ to keep your money safe.',
    content: 'Our platform uses encryption and two-factor authentication (2FA) to ensure your account is secure...',
  },
  // Other blog items...
];

export const BlogPage = () => {
  const [modal, setModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null); 
  const [currentBlogContent, setCurrentBlogContent] = useState(''); 
  const [showCard, setShowCard] = useState(false);

  const toggleEvent = () => {
    setModal(!modal);   
  };

  const handleClick = (blogId, content) => {
    setCurrentBlogId(blogId); 
    if (blogId === 1) {
      setIsVisible(true); 
    } else {
      setCurrentBlogContent(content); 
      setShowCard(true); 
    }
  };

  const closeCard = () => {
    setShowCard(false); 
    setCurrentBlogContent(''); 
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
  };

  const divVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
  };

  return (
    <div className="relative max-w-7xl mx-auto p-5 flex flex-col md:flex-row gap-8 min-h-screen">     
      {/* Left Side - Blog Posts */}
      <div className="flex-grow">
        <header className="text-center mb-12">
          <motion.h1 
            className="text-4xl font-bold mb-4 text-black-800"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            RAM BANK
          </motion.h1>
          <motion.p 
            className="text-black-800 font-semibold"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          >
            Explore our blog for the latest updates and tips on secure and easy online banking.
          </motion.p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{blog.title}</h2>
              <p className="text-gray-700 mb-6">{blog.description}</p>
              <button
                className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-300" 
                onClick={() => handleClick(blog.id, blog.content)} 
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Instructions and Button */}
      {isVisible && !modal && (
        <div className="absolute inset-x-96 top-28 w-45 p-6 rounded-lg shadow-lg border border-gray-300 backdrop-blur-sm bg-white/30 hover:backdrop-blur-lg transition duration-300">
          <CloseIcon onClick={() => setIsVisible(false)} className="absolute cursor-pointer right-7 top-4 hover:text-red-500 hoverbg-black" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">How to Create Your Account</h2>
          <p className="text-gray-700 mb-6">Follow these steps to create your bank account:</p>
          <ul className="list-disc list-none text-gray-700 mb-6">
            <li>Step 1: Provide your personal details.</li>
            <li>Step 2: Verify your identity with valid documents.</li>
            <li>Step 3: Set up your login credentials securely.</li>
            <li>Step 4: Confirm and complete your account creation.</li>
          </ul>
          <button 
            className="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600 transition duration-300 w-full text-center shadow-md hover:shadow-lg"
            onClick={toggleEvent}
          >
            Create Your Account Now
          </button>
        </div>
      )}

      {/* Modal for Account Creation */}
      {modal && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="relative rounded-lg shadow-lg max-w-md w-full">
            <Form/>
            <CloseIcon onClick={toggleEvent} className="absolute cursor-pointer right-3 top-3 hover:text-red-500 hoverbg-black" />
          </div>
        </div>
      )}

      {/* Popup Card for displaying blog content */}
      {showCard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-70">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="relative flex items-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Blog Content</h2>
              <CloseIcon className="absolute right-3 top-1 cursor-pointer hover:text-red-500" onClick={closeCard} />
            </div>
            <p className="text-gray-700 mb-6">{currentBlogContent}</p>
          </div>
        </div>
      )}

      {/* Bank Info Section */}
      <motion.div className="backdrop-blur-sm bg-white/30 w-1/3 max-w-md p-5 rounded-lg shadow-lg flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={divVariants}
        transition={{ delay: 0.2 }}>
        <img src={logo} alt="logo" className="h-16 w-auto mb-4 object-contain hover:bg-white" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">About RAM Bank</h3>
        <p className="text-gray-700 text-center text-sm mb-4">
          RAM Bank is a leading financial institution committed to providing secure and innovative banking solutions. 
          Our mission is to empower individuals and businesses with the financial tools they need to succeed.
        </p>
        <div className="flex items-center text-gray-700 text-sm mb-2">
          <h4 className="text-md font-semibold text-gray-700 mb-2">Head Office</h4>
          <LocationOnIcon className="mr-2 text-white" />
          <p>1123 Finance Avenue, Capital City, 56789, Country XYZ</p>
        </div>
        <h4 className="text-md font-semibold text-gray-700 mb-2 mt-4">Contact Us</h4>
        <div className="flex items-center text-gray-700 text-sm mb-2">
          <EmailIcon className="mr-2 text-white" />
          <p>support@rambank.com</p>
        </div>
        <div className="flex items-center text-gray-700 text-sm mb-2">
          <PhoneIcon className="mr-2 text-white" />
          <p>+123 456 7890</p>
        </div>
        <p className="text-gray-500 text-xs text-center">
          Banking at your fingertips, anywhere, anytime.
        </p>
      </motion.div>
    </div>
  );
};
