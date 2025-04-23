const CalculatorDisplay = ({ value }) => {
  return (
    <div className="w-full h-32 bg-calculator-display rounded-2xl mb-6 backdrop-blur-md border border-white border-opacity-10">
      <div className="h-full flex items-center justify-end px-6">
        <div className="text-7xl font-mono text-white tracking-wider truncate">
          {value}
        </div>
      </div>
    </div>
  );
};

export default CalculatorDisplay;