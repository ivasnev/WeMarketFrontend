import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import shopCategoriesSectionStyles from "../Homepage/shopCategoriesSection.module.scss";
import categoriesData from "../../mockedData/categories";
import CategoryCard from "../CategoryCard";
import productSectionStyles from "../ProductDetail/productSection.module.scss";


function SampleNextArrow(props) {
    const {className, onClick} = props;
    return (
        <div className={className}
             onClick={onClick}>
            <img
                className={productSectionStyles.image23}
                src={'/assets/ddf0a4ec2e747f0ff43acfa0da8efab9.svg'}
                alt="alt text"
            />
        </div>
    );
}

function SamplePrevArrow(props) {
    const {className, onClick} = props;
    return (

        <div className={className}
             onClick={onClick}>
            <img
                className={productSectionStyles.image231}
                src={'/assets/9f88c71e5591194ea93f585174dae36e.svg'}
                alt="alt text"
            />
        </div>
    );
}

function MultipleItems() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {categoriesData.map((category) => (
                    <div key={category.id}>
                        <CategoryCard
                            // className={shopCategoriesSectionStyles.card}
                            contentBox1={'#ffffff'} // Можно добавить уникальный стиль для каждой категории
                            image29={category.image || '/assets/6ab578f2b88f4aacec7840cdd46e174c.png'} // Подставить иконку или дефолтное изображение
                            highlight={category.name}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default MultipleItems;