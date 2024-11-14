import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom'


const MealDetails = () => {

    const {id}=useParams();
    const[MealDetails,setMealdetails]=useState("");
     
    // console.log(MealDetails);
    

    const fetchDetails=async()=>{
      console.log(id);
      
        const response =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data =await response.json();
        setMealdetails(data.meals[0]);
        console.log(data);
        
        
    }
    useEffect(()=>{
        if(id)
            fetchDetails(id);
          
    },[])

 return (
    <>
    <div className='w-full h-4/5c mt-auto overflow-hidden'>
    <img className='mt-5' src={MealDetails.strMeal} width="200"  />
    <h2 className='font-semibold text-xl'>{MealDetails.strMeal}</h2>
    
    <h2 className='mt-4 font-bold text-2xl'>
    Ingreadient:-
</h2>
<ul>
{MealDetails.strIngredient1 &&(
    <li>{MealDetails.strIngredient1} {MealDetails.strMeasure1}</li>
  )}
  {MealDetails.strIngredien2 &&(
    <li>{MealDetails.strIngredient2} {MealDetails.strMeasure2}</li>
  )}
{MealDetails.strIngredient3 &&(
    <li>{MealDetails.strIngredient3} {MealDetails.strMeasure3}</li>
  )}
{MealDetails.strIngredient4 &&(
    <li>{MealDetails.strIngredient4} {MealDetails.strMeasure4}</li>
  )}
{MealDetails.strIngredient5 &&(
    <li>{MealDetails.strIngredient5} {MealDetails.strMeasur5}</li>
  )}
{MealDetails.strIngredient6 &&(
    <li>{MealDetails.strIngredient6} {MealDetails.strMeasur6}</li>
  )}
{MealDetails.strIngredient7 &&(
    <li>{MealDetails.strIngredient7} {MealDetails.strMeasure7}</li>
  )}
{MealDetails.strIngredient8 &&(
    <li>{MealDetails.strIngredient8} {MealDetails.strMeasure8}</li>
  )}
{MealDetails.strIngredient9 &&(
    <li>{MealDetails.strIngredient9} {MealDetails.strMeasure9}</li>
  )}
{MealDetails.strIngredient10 &&(
    <li>{MealDetails.strIngredient10} {MealDetails.strMeasure10}</li>
  )}
{MealDetails.strIngredient11 &&(
    <li>{MealDetails.strIngredient11} {MealDetails.strMeasure11}</li>
  )}
{MealDetails.strIngredient12 &&(
    <li>{MealDetails.strIngredient12} {MealDetails.strMeasure12}</li>
  )}
{MealDetails.strIngredient13 &&(
    <li>{MealDetails.strIngredient13} {MealDetails.strMeasure13}</li>
  )}
{MealDetails.strIngredient14 &&(
    <li>{MealDetails.strIngredient14} {MealDetails.strMeasure14}</li>
  )}
{MealDetails.strIngredient15 &&(
    <li>{MealDetails.strIngredient15} {MealDetails.strMeasure15}</li>
  )}
{MealDetails.strIngredient16 &&(
    <li>{MealDetails.strIngredient16} {MealDetails.strMeasure16}</li>
  )}
{MealDetails.strIngredient17 &&(
    <li>{MealDetails.strIngredient17} {MealDetails.strMeasure17}</li>
  )}
{MealDetails.strIngredient18 &&(
    <li>{MealDetails.strIngredient18} {MealDetails.strMeasure18}</li>
  )}
{MealDetails.strIngredient19 &&(
    <li>{MealDetails.strIngredient19} {MealDetails.strMeasure19}</li>
  )}
{MealDetails.strIngredient20 &&(
    <li>{MealDetails.strIngredient20} {MealDetails.strMeasure20}</li>
  )}


</ul>
<h2 className='text-2xl mt-4 font-bold'>INSTRUCTIONS:-</h2>
      <h4>{MealDetails.strInstructions}</h4>


    

    </div>
      
    </>
  )
}

export default MealDetails






// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const MealDetails = () => {
//   const { id } = useParams(); 
//   const [MealDetails, setMealDetails] = useState(null);

//   const fetchDetails = async () => {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
//     const data = await response.json();
//     setMealDetails(data.meals[0]);
//   };

//   useEffect(() => {
//     if (id) {
//       fetchDetails();
//     }
//   }, [id]);

//   if (!MealDetails) return <div>Loading...</div>;

//   return (
//     <div className="w-full h-full mt-auto overflow-hidden">
//       <img className="mt-5" src={MealDetails.strMealThumb} alt={MealDetails.strMeal} width="200" />
//       <h2 className="font-semibold text-xl">{MealDetails.strMeal}</h2>

//       <h2 className="mt-4 font-bold text-2xl">Ingredients:</h2>
//       <ul>
//         {Array.from({ length: 20 }).map((_, index) => {
//           const ingredientKey = `strIngredient${index + 1}`;
//           const measureKey = `strMeasure${index + 1}`;
//           if (MealDetails[ingredientKey]) {
//             return (
//               <li key={index}>
//                 {MealDetails[ingredientKey]} - {MealDetails[measureKey]}
//               </li>
//             );
//           }
//           return null;
//         })}
//       </ul>

//       <h2 className="text-2xl mt-4 font-bold">Instructions:</h2>
//       <p>{MealDetails.strInstructions}</p>
//     </div>
//   );
// };

// export default MealDetails;
  