import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import usePageMetrics from "../CustomHocks/usePageMetrics";

const RotatingCounter = () => {
  const { scrollPosition, homeComponentHeight } = usePageMetrics();
//   console.log(homeComponentHeight,scrollPosition);

  const [value, setValue] = useState(499); // Initial max value 04:99

  useEffect(() => {
    if (homeComponentHeight > 0) {
      // Calculate the scroll percentage
      const scrollPercentage = Math.min((scrollPosition) / (homeComponentHeight), 1);

      // Calculate the total steps (04:99 = 499, 00:01 = 1, so 499 steps)
      const steps = 499;

      // Calculate the new value based on the scroll percentage
      const newValue = Math.max(1, Math.round(steps - scrollPercentage * (steps - 1))); // From 499 to 1
      setValue(newValue);
    }
  }, [scrollPosition, homeComponentHeight]);

  // Format value into "04:99" format
  const formatValue = (value) => {
    const minutes = Math.floor(value / 100); // Get the "04" part
    const seconds = value % 100; // Get the "99" part
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const formattedValue = formatValue(value);

  // Split the formatted value into digits
  const digits = formattedValue.split("");
  console.log(value, formattedValue,  digits);

  return (
    <div className="flex space-x-0 text-3xl">
      {digits.map((digit, index) => (
        <div 
         key={index} 
          className={`relative w-6 h-12 overflow-hidden text-white rounded-md gap-0  ${ digit === ":" ? "flex items-center justify-center" : "flex items-center justify-center" }`} >
         
          {digit !== ":" ? (



            <div
              className="absolute  pt-1 inset-0 flex flex-col items-center  justify-evenly gap-3 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${(digit * 100)}%)` }}
            >
              {[...Array(10).keys()].map((num) => (
                <span
                  key={num}
                  className="text-3xl font-bold h-10 flex gap-0  items-center justify-center "
                >
                  {num}
                </span>
              ))}
            </div>


          )
          
          : 
          
          (
            <span className="text-lg font-bold">:</span> 
          )}
        </div>
      ))}
    </div>
  );
};

RotatingCounter.propTypes = {
  value: PropTypes.number,
};

export default RotatingCounter;
