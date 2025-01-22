import img from "../../Accets/Images/banner-photo.jpg";
import PrimaryButton from "../../SharedComponent/PrimaryButton";

const Banner = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Vetter Consulting.
          <br />
          Fast. Digital. Competent.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-6">
          Over <span className="font-bold">700 satisfied customers</span> are no
          coincidence; we are the finance and insurance agency for the
          self-employed and entrepreneurs.
        </p>

        {/* Button */}
        <PrimaryButton>Book a Call</PrimaryButton>
      </div>
    </div>
  );
};

export default Banner;
