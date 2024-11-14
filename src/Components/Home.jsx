import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [popularMeals, setPopularMeals] = useState([]);
  const [trendingMeals, setTrendingMeals] = useState([]);

  const getMeals = async () => {
    const response1 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`);
    const response2 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
    const data1 = await response1.json();
    const data2 = await response2.json();

    setPopularMeals(data1.meals);
    setTrendingMeals(data2.meals);
  };

  useEffect(() => {
    getMeals();
  }, []);

  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true ,
  

  responsive: [
    {
      breakpoint: 345,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true

    
  };
  responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

  return (
    <>
      <div className="text-center mt-30">
        <h1 className="text-4xl font-bold">Welcome to Popular Meal </h1>
        {/* <p className="mt-4">Search  your favorite meals</p> */}
      </div>
      
      <div className="slider-container w-4/5 mx-auto h-96">
        <Slider {...settings1}>
          {popularMeals && popularMeals.map((meal) => (
            <div className="h-96 w-full md:h-72" key={meal.idMeal}>
              
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
          ))}
        </Slider>
      </div>


      <div className="text-center mt-auto">
        <h1 className="text-4xl font-bold">Welcome to Trendings meal</h1>
        </div>
      <Slider {...settings2}>
        {trendingMeals && trendingMeals.map((meal) => (
          <div className="h-96 w-full lg:h-2xl" key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Home;
