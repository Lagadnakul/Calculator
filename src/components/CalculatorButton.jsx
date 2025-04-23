const CalculatorButton = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`h-14 text-white text-xl font-semibold rounded-xl transition-all duration-200 
                 hover:scale-105 hover:shadow-lg active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default CalculatorButton;