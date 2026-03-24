interface TestimonialType {
  id: number;
  name: string;
  role: string;
  avatarPath: string;
  feedback: string;
  rating: number;
  isCentered: boolean;
}

const TestimonialCard = ({
  testimonialDetails,
}: {
  testimonialDetails: TestimonialType;
}) => {
  const { name, role, feedback, avatarPath, rating, isCentered } =
    testimonialDetails;

  // Helper to render stars based on a 5-star scale
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-xl ${
          index < rating ? "text-yellow-400" : "text-gray-600"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div
      className={`max-w-sm w-full mx-auto p-8 rounded-3xl bg-neutral-gray-900 border border-gray-800 shadow-2xl flex flex-col items-center text-center transition-all ${isCentered && window.innerWidth > 768 ? "scale-110 bg-neutral-gray-800!" : "hover:scale-105 hover:bg-neutral-gray-800/80"}`}
    >
      {/* Avatar Container */}
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full border-2 border-gray-600 p-1">
          <img
            src={avatarPath}
            alt={name}
            className="w-full h-full rounded-full object-cover grayscale"
          />
        </div>
      </div>

      {/* Identity */}
      <h3 className="text-neutral-white-50 text-xl font-medium tracking-tight">
        {name}
      </h3>
      <p className="text-neutral-gray-500 text-sm mt-1 mb-6">{role}</p>

      {/* Feedback Text */}
      <p className="text-gray-300 leading-relaxed text-base mb-8 ">
        {feedback}
      </p>

      {/* Star Rating */}
      <div className="flex gap-1">{renderStars(rating)}</div>
    </div>
  );
};

export default TestimonialCard;
