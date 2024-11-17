import React from "react";
import Slider from "react-slick";
// import Heading from "../Products/Heading";
// import Product from "../Products/Product";
import categoriesData from '../../mockedData/categories'; // Импорт моков
import CategoryCard from '../CategoryCard/index';


import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    return (
        <div className="w-full pb-16">
            {/*<Heading heading="New Arrivals"/>*/}
            <Slider {...settings}>
                {categoriesData.map((category) => (
                    <div className="px-2">
                        <CategoryCard
                            // className={shopCategoriesSectionStyles.card}
                            contentBox1={'#ffffff'} // Можно добавить уникальный стиль для каждой категории
                            image29={category.image || '/assets/9f88c71e5591194ea93f585174dae36e.svg'} // Подставить иконку или дефолтное изображение
                            highlight={category.name}
                        />
                    </div>
                ))}
                {/*<div className="px-2">*/}
                {/*    <CategoryCard*/}
                {/*        // className={shopCategoriesSectionStyles.card}*/}
                {/*        contentBox1={'#ffffff'} // Можно добавить уникальный стиль для каждой категории*/}
                {/*        image29={'/assets/9f88c71e5591194ea93f585174dae36e.svg'} // Подставить иконку или дефолтное изображение*/}
                {/*        highlight="{category.name}"*/}
                {/*    />*/}
                {/*    <img src={'/assets/9f88c71e5591194ea93f585174dae36e.svg'}/>*/}
                {/*</div>*/}
            </Slider>
        </div>
    );
};

export default NewArrivals;