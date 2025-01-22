// eslint-disable-next-line no-unused-vars, react/prop-types
const PrimaryButton = ({ children }) => {
    return (
        <button
            type="button"
            className="bg-[#ff891d] rounded-lg p-2 px-3 text-black overflow-hidden relative group h-10 w-28"
        >
            {/* Top Text */}
            <span
                className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full"
            >
                {children}
            </span>

            {/* Bottom Text */}
            <span
                className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0"
            >
                {children}
            </span>
        </button>
    );
};

export default PrimaryButton;
