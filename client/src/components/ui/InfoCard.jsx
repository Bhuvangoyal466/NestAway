import React from 'react';
import { Link } from 'react-router-dom';
import PlaceImg from './PlaceImg';

const InfoCard = ({ place }) => {
  return (
    <Link
      to={`/account/places/${place._id}`}
      className="my-3 flex cursor-pointer flex-col glass-button gap-4 rounded-2xl bg-gray-100 p-4 transition-all  md:flex-row"
      key={place._id}
    >
      <div className="flex w-full shrink-0  sm:h-32 sm:w-32 ">
        <PlaceImg place={place} />
      </div>
      <div className="">
        <h2 className="text-lg  mt-6 text-white md:text-xl">{place.title}</h2>
        <p className="line-clamp-3 text-white mt-2 text-sm">{place.description}</p>
      </div>
    </Link>
  );
};

export default InfoCard;
