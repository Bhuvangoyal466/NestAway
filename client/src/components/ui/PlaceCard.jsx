import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";

const PlaceCard = ({ place }) => {
  const { _id: placeId, photos, address, title, price } = place;
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  return (
    <Link to={`/place/${placeId}`} className="m-4 flex flex-col md:m-2 xl:m-0">
      <div ref={cardRef} className="glass-card">
        {photos?.[0] && (
          <img
            src={`${photos?.[0]}`}
            className="h-4/5 w-full rounded-xl object-cover"
            alt="Place"
          />
        )}
        <div className="item">
          <h2 className="truncate text-white mb-2 mt-2 font-bold">{address}</h2>
          <h3 className="truncate text-sm text-white">{title}</h3>
          <div className="mt-1 text-white">
            <span className="font-semibold">₹{price} </span>
            per night
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
