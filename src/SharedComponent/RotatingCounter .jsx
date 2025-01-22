import PropTypes from "prop-types"

const RotatingCounter = ({ value }) => {
  if (!Number.isInteger(value) || value < 0 || value > 9999) {
    console.error("Value must be an integer between 0 and 9999.");
    return null; // Do not render if the value is invalid
  }

  // Split the number into digits
  const digits = value.toString().padStart(4, "0").split("");
console.log(value);
  return (
    <div className="flex space-x-2">
      {digits.map((digit, index) => (
        <div
          key={index}
          className="relative w-8 h-12 overflow-hidden bg-black text-white rounded-md"
        >
          <div
            className="absolute inset-0 flex flex-col items-center transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${digit * 100}%)` }}
          >
            {[...Array(10).keys()].map((num) => (
              <span
                key={num}
                className="text-lg font-bold h-12 flex items-center justify-center"
              >
                {num}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

RotatingCounter.propTypes = {
  value: PropTypes.number.isRequired, // Value must be a number
};

export default RotatingCounter;
