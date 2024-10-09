

const Button = ({ onClick, label, className ='', disabled }) => {
  return (
    <button 
      onClick={onClick} 
      className={`${className} text-white py-3 px-6 rounded  transition duration-300 w-full text-center shadow-md hover:shadow-lg`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
