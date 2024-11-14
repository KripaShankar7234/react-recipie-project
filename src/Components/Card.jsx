import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ image, Name, idMeal }) => {
  return (
    <div className="h-96 border w-72 overflow-hidden rounded-3xl mx-auto">
      <div className="h-4/5 w-full overflow-hidden border border-black">
        <Link to={`/meal/${idMeal}`}>
          <img
            src={image}
            alt={Name}
            className="h-full w-full transition-all hover:scale-110 cursor-pointer"
          />
        </Link>
      </div>
      <div className="h-1/5 w-full text-center flex flex-col justify-evenly text-black italic">
        <div className="text-3xl">{Name}</div>
      </div>
    </div>
  );
};

export default Card;
































// import React from "react";

// const Card = ({ image, Name }) => {
//   return (
//     <>
//       <div className="h-96 border w-72 overflow-hidden rounded-3xl mx-auto">
//         <div className="h-4/5 w-full overflow-hidden border border-black">
//           <img
//             src={image}
//             alt={Name}
//             className="h-full w-full transition-all hover:scale-110 cursor-pointer"
//           />
//         </div>
//         <div className="h-1/5 w-full text-center flex flex-col justify-evenly text-black italic ">
//           <div className="text-3xl">{Name}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;

