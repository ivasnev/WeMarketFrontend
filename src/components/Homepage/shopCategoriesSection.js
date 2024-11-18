import React from 'react';
import Slider from 'react-slick';
import categoriesData from '../../mockedData/categories';
import shopCategoriesSectionStyles from "../Homepage/shopCategoriesSection.module.scss";

import {Link} from "react-router-dom"

function SampleNextArrow(props) {
    const {className, onClick} = props;
    return (
        <div className={className}
             onClick={onClick}
        >
            <img
                className={shopCategoriesSectionStyles.image30}
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
                className={shopCategoriesSectionStyles.image301}
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
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    };
    return (
        <div className={shopCategoriesSectionStyles.sliderContainer}>
            <Slider {...settings}>
                {categoriesData.map((category) => (
                    <div className={shopCategoriesSectionStyles.contentBox}>
                        <Link to={`/ShopPage`}>
                            <div className={shopCategoriesSectionStyles.unnamed}>
                                <img
                                    className={shopCategoriesSectionStyles.image29}
                                    src={category.image}
                                    alt="alt text"
                                />
                                <p className={shopCategoriesSectionStyles.highlight}>{category.name}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

function ShopCategoriesSection() {
    return (
        <section className={shopCategoriesSectionStyles.shopCategoriesSection}>
            <div className={shopCategoriesSectionStyles.flex_col}>
                <h2 className={shopCategoriesSectionStyles.title1}>Shop with Categories</h2>
                <MultipleItems/>
            </div>
        </section>
    );
}

export default ShopCategoriesSection;