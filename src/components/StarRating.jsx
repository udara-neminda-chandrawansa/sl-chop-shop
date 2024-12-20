import React, { useState } from "react";

function StarRating({ onRatingChange }) {
  const [selectedRating, setSelectedRating] = useState(1);

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
    if (onRatingChange) {
      onRatingChange(rating); // Notify the parent
    }
  };
  return (
    <div className="flex flex-col">
      {/* Star Rating Section */}
      <div id="rating" className="flex items-center justify-center gap-3">
        {[1, 2, 3, 4, 5].map((value) => (
          <svg
            key={value}
            className={`w-6 h-6 cursor-pointer ${
              value <= selectedRating ? "text-yellow-400" : "text-gray-400"
            } hover:text-yellow-400`}
            fill="currentColor"
            viewBox="0 0 16 16"
            onClick={() => handleStarClick(value)}
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
        ))}
      </div>
    </div>
  );
}

export default StarRating;
