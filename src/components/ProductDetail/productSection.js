import React, {useState} from 'react';

import imageSlider from "../ImageSlider/ImageSlider";

import productSectionStyles from './productSection.module.scss';
import ImageSlider from "../ImageSlider/ImageSlider";

import {images} from "../../mockedData/products";

import DescriptionTab from "../DescriptionTab/index";

import productData from "../../mockedData/products"

import {Link} from "react-router-dom";

const mockData = {
    colors: [{name: 'Red', image: '/assets/a0c75c1b588bde3741f53be89979b7dd.svg'},
        {name: 'Blue', image: '/assets/ec4c80e5496ab189a46b1e53d048d3b3.svg'},],
    sizes: ['14-inch Liquid Retina XDR display', '16-inch Liquid Retina XDR display'],
    memoryOptions: ['16GB unified memory', '32GB unified memory'],
    storageOptions: ['512GB SSD', '1TB SSD', '2TB SSD'],
};

const ColorPicker = ({colors}) => {
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className={productSectionStyles.item}>
            <div className={productSectionStyles.text6}>Color</div>

            <div className={productSectionStyles.flex_row4}>
                {colors.map((color, index) => (
                    <img
                        key={index}
                        className={`${productSectionStyles.color_img} ${
                            selectedColor === color ? productSectionStyles.active : ''
                        }`}
                        src={color.image}
                        alt={color.name}
                        onClick={() => handleColorClick(color)}
                    />
                ))}
            </div>
        </div>
    );
};

const QuantityControl = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className={productSectionStyles.content_box3}>
            <div className={productSectionStyles.flex_row6}>
                <img
                    className={productSectionStyles.image61}
                    src={'/assets/19333eeca49d049301757a12f1bd9153.svg'}
                    alt="Decrease quantity"
                    onClick={handleDecrease}
                />
                <p className={productSectionStyles.highlight}>{quantity.toString().padStart(2, '0')}</p>
                <img
                    className={productSectionStyles.image61}
                    src={'/assets/feec131e3b4177524aabbc1a4a9e82d0.svg'}
                    alt="Increase quantity"
                    onClick={handleIncrease}
                />
            </div>
        </div>
    );
};

function OptionsDropDown({options}) {
    const [selectedSort, setSelectedSort] = useState('Most Popular'); // Состояние для хранения выбранной сортировки

    const handleSortChange = (event) => {
        setSelectedSort(event.target.value); // Обновляем выбранную сортировку
    };

    return (
        <div className={productSectionStyles.dropdown_btn_box}>
            <select
                className={productSectionStyles.dropdown}
                value={selectedSort}
                onChange={handleSortChange}
            >
                {options.map((option, index) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

function renderProductSection(props, id) {

    const foundProduct = productData.find(product => product.id === id) || productData[0];

    return (
        <section className={productSectionStyles.productSection}>
            {/* Product details and purchase options */}
            <div className={productSectionStyles.flex_col}>
                <div className={productSectionStyles.flex_row}>
                    <figure className={productSectionStyles.imgGallery}>
                        <ImageSlider images={images}/>
                    </figure>

                    <div className={productSectionStyles.flex_col1}>
                        <div className={productSectionStyles.flex_col2}>
                            <div className={productSectionStyles.flex_row1}>
                                <div className={productSectionStyles.flex_row2}>
                                    <img
                                        className={productSectionStyles.image}
                                        src={'/assets/d3d94d5e1be125a3d0a9efceab872ada.svg'}
                                        alt="alt text"
                                    />
                                    <img
                                        className={productSectionStyles.image}
                                        src={'/assets/f7fbbee20c3d4701841bb015e26f3edd.svg'}
                                        alt="alt text"
                                    />
                                    <img
                                        className={productSectionStyles.image}
                                        src={'/assets/f7fbbee20c3d4701841bb015e26f3edd.svg'}
                                        alt="alt text"
                                    />
                                    <img
                                        className={productSectionStyles.image}
                                        src={'/assets/c5548c14bff70ab5fccebf186bbd6f3a.svg'}
                                        alt="alt text"
                                    />
                                    <img
                                        className={productSectionStyles.image}
                                        src={'/assets/c5548c14bff70ab5fccebf186bbd6f3a.svg'}
                                        alt="alt text"
                                    />
                                </div>

                                <div className={productSectionStyles.text4}>{foundProduct.rating ?? "N\\A"} Star
                                    Rating
                                </div>
                                <div className={productSectionStyles.text2}>({foundProduct.num_of_review ?? "N\\A"} User
                                    feedback)
                                </div>
                            </div>

                            <h3 className={productSectionStyles.subtitle}>
                                {foundProduct.name ?? "N\\A"}
                            </h3>

                            <div className={productSectionStyles.flex_row3}>
                                <div className={productSectionStyles.flex_col3}>
                                    <div className={productSectionStyles.text5_box}>
                    <span className={productSectionStyles.text5}>
                      <span className={productSectionStyles.text5_span0}>Sku: </span>
                      <span className={productSectionStyles.text5_span1}>{foundProduct.sku ?? "N\\A"}</span>
                    </span>
                                    </div>
                                    <div className={productSectionStyles.text5_box1}>
                    <span className={productSectionStyles.text5}>
                      <span className={productSectionStyles.text5_span0}>Brand: </span>
                      <span className={productSectionStyles.text5_span1}>{foundProduct.brand ?? "N\\A"}</span>
                    </span>
                                    </div>
                                </div>

                                <div className={productSectionStyles.flex_col4}>
                                    <div className={productSectionStyles.text5_box}>
                    <span className={productSectionStyles.text5}>
                      <span className={productSectionStyles.text5_span0}>Availability: </span>
                      <span className={productSectionStyles.text5_span11}>{foundProduct.availability ?? "N\\A"}</span>
                    </span>
                                    </div>
                                    <div className={productSectionStyles.text5_box}>
                    <span className={productSectionStyles.text5}>
                      <span className={productSectionStyles.text5_span0}>Category: </span>
                      <span className={productSectionStyles.text5_span1}>{foundProduct.category ?? "N\\A"}</span>
                    </span>
                                    </div>
                                </div>
                            </div>

                            <div className={productSectionStyles.wrapper15}>
                                <h3 className={productSectionStyles.wrapper151}>{foundProduct.price ?? "N\\A"}</h3>
                            </div>
                        </div>

                        <hr className={productSectionStyles.line} size={1}/>

                        <div className={productSectionStyles.flex_col5}>
                            <div className={productSectionStyles.productOptionsGrid}>
                                {/* Product configuration options */}

                                <ColorPicker colors={mockData.colors}/>

                                <div className={productSectionStyles.item}>
                                    <div className={productSectionStyles.text6}>Size</div>

                                    <OptionsDropDown options={mockData.sizes}/>
                                </div>

                                <div className={productSectionStyles.item}>
                                    <div className={productSectionStyles.text6}>Memory</div>

                                    <OptionsDropDown options={mockData.memoryOptions}/>

                                </div>

                                <div className={productSectionStyles.item}>
                                    <div className={productSectionStyles.text6}>Storage</div>

                                    <OptionsDropDown options={mockData.storageOptions}/>

                                </div>
                            </div>

                            <div className={productSectionStyles.purchaseActions}>

                                < QuantityControl/>

                                <button className={productSectionStyles.cartBtn}>
                                    {/* TODO */}
                                    <p className={productSectionStyles.btn_text}>Add to card</p>
                                    <img
                                        className={productSectionStyles.btn_icon}
                                        src={'/assets/0abbaafb33df3ebd0b21de5552cf0526.svg'}
                                        alt="alt text"
                                    />
                                </button>

                                <button className={productSectionStyles.purchaseBtn}>
                                    {/* TODO */}
                                    Buy now
                                </button>
                            </div>

                            <div className={productSectionStyles.flex_row7}>
                                <Link to={"/Wishlist"}>
                                    <div className={productSectionStyles.flex_row8}>

                                        <img
                                            className={productSectionStyles.image9}
                                            src={'/assets/3efc3535fde89a848ca9519446ace743.svg'}
                                            alt="alt text"
                                        />
                                        <div className={productSectionStyles.text72}>Add to Wishlist</div>

                                    </div>
                                </Link>


                                <Link to={"/Compare"}>
                                    <div className={productSectionStyles.flex_row9}>
                                        <img
                                            className={productSectionStyles.image9}
                                            src={'/assets/2f17f958ab6a361be9c018eb4c25e6f6.svg'}
                                            alt="alt text"
                                        />
                                        <div className={productSectionStyles.text72}>Add to Compare</div>
                                    </div>
                                </Link>


                            </div>
                        </div>
                    </div>
                </div>

                <DescriptionTab/>

            </div>
        </section>
    );
}

export default renderProductSection;
