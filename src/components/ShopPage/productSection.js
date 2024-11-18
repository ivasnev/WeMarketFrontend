import React, {useEffect, useState} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useLocation } from 'react-router-dom';

import productSectionStyles from './productSection.module.scss';
import ProductCardGridElement from "../ProductCardGridElement";
import Pagination from "../Pagination/pagination"
import productData from "../../mockedData/products"
import categoriesData from "../../mockedData/categories"

import {Link} from "react-router-dom"


const productsPerPage = 16; // Количество продуктов на странице


const priceRanges = [
    {label: "All Price", range: [0, 10000]},
    {label: "Under $20", range: [0, 20]},
    {label: "$25 to $100", range: [25, 100]},
    {label: "$100 to $300", range: [100, 300]},
    {label: "$300 to $500", range: [300, 500]},
    {label: "$500 to $1,000", range: [500, 1000]},
    {label: "$1,000 to $10,000", range: [1000, 10000]},
];

const availableTags = [
    {id: 1, name: 'Game'},
    {id: 2, name: 'iPhone'},
    {id: 3, name: 'TV'},
    {id: 4, name: 'Asus Laptops'},
    {id: 5, name: 'Macbook'},
    {id: 6, name: 'SSD'},
    {id: 7, name: 'Graphics Card'}
];

const brandsData = [
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Google'},
    {id: 3, name: 'Microsoft'},
    {id: 4, name: 'Samsung'},
    {id: 5, name: 'Dell'},
    {id: 6, name: 'HP'},
    {id: 7, name: 'Symphony'},
    {id: 8, name: 'Xiaomi'}
];

const BrandFilter = ({brands}) => {
    const [selectedBrands, setSelectedBrands] = useState([]);

    const toggleBrand = (brandId) => {
        setSelectedBrands((prevSelected) =>
            prevSelected.includes(brandId)
                ? prevSelected.filter((id) => id !== brandId)
                : [...prevSelected, brandId]
        );
    };

    return (
        <div className={productSectionStyles.brandFilterGroup}>
            <p className={productSectionStyles.highlight}>Popular Brands</p>

            <div className={productSectionStyles.brandGrid}>
                {brands.map((brand) => {
                    const isSelected = selectedBrands.includes(brand.id);
                    return (
                        <div
                            key={brand.id}
                            className={productSectionStyles.unnamed3}
                            onClick={() => toggleBrand(brand.id)}
                        >
                            {isSelected ? (
                                // Код с изображением для выбранного бренда
                                <>
                                    <img
                                        className={productSectionStyles.image22}
                                        src='/assets/6d79c54ae2cd1b08bc46445ff2653074.svg'
                                        alt={brand.name}
                                    />
                                    <div className={productSectionStyles.text4}>{brand.name}</div>
                                </>
                            ) : (
                                // Код с фоном для невыбранного бренда
                                <>
                                    <div className={productSectionStyles.color17}/>
                                    <div className={productSectionStyles.text4}>{brand.name}</div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const TagFilter = ({tags}) => {

    // Храним выбранные теги
    const [selectedTags, setSelectedTags] = useState([]);

    // Функция для обработки кликов по тегам
    const toggleTag = (tagId) => {
        setSelectedTags((prevTags) =>
            prevTags.includes(tagId)
                ? prevTags.filter((id) => id !== tagId) // Удаляем тег, если уже выбран
                : [...prevTags, tagId] // Добавляем тег, если не выбран
        );
    };

    return (
        <div className={productSectionStyles.tagFilterGroup}>
            <p className={productSectionStyles.highlight1}>Popular Tag</p>

            <div className={productSectionStyles.list}>
                {tags.map((tag) => (
                    <div
                        key={tag.id}
                        className={`${productSectionStyles.tagItem} ${
                            selectedTags.includes(tag.id)
                                ? productSectionStyles.selectedTag
                                : productSectionStyles.unselectedTag
                        }`}
                        onClick={() => toggleTag(tag.id)}
                    >
                        <div className={productSectionStyles.text4}>{tag.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProductGrid = ({products}) => (
    <div className={productSectionStyles.productGrid1}>
        {products.map((product) => (
            <Link to={`/ProductDetail/${product.id}`} key={product.id}>
                <ProductCardGridElement
                    key={product.id}
                    contentBox={product.contentBox}
                    image24={product.image24}
                    image25={product.image25}
                    info1={product.num_of_review}
                    text7={product.name}
                    text9={product.price}
                />
            </Link>
        ))}
    </div>
);

function PriceRangeFilter() {
    const [priceRange, setPriceRange] = useState([0, 10000]);

    const handleSliderChange = (value) => {
        setPriceRange(value);
    };

    const handleRadioChange = (range) => {
        setPriceRange(range);
    };

    const handleMinChange = (e) => {
        const newMin = Number(e.target.value);
        if (!isNaN(newMin) && newMin <= priceRange[1]) {
            setPriceRange([newMin, priceRange[1]]);
        }
    };

    const handleMaxChange = (e) => {
        const newMax = Number(e.target.value);
        if (!isNaN(newMax) && newMax >= priceRange[0]) {
            setPriceRange([priceRange[0], newMax]);
        }
    };

    return (
        <div className={productSectionStyles.priceFilterGroup}>
            <p className={productSectionStyles.highlight}>Price Range</p>

            <Slider
                range
                min={0}
                max={10000}
                value={priceRange}
                onChange={handleSliderChange}
                trackStyle={{backgroundColor: 'rgb(252 224 0)', height: 4}}
                handleStyle={{borderColor: 'rgb(252 224 0)', height: 24, width: 24, transform: 'translate(-50%, -25%)'}}
                railStyle={{backgroundColor: '#ddd', height: 4}}
            />

            <div className={productSectionStyles.flex_row}>
                <div className={productSectionStyles.content_box4}>
                    <input
                        type="number"
                        placeholder="Min price"
                        value={priceRange[0]}
                        onChange={handleMinChange}
                        className={productSectionStyles.priceInput}
                        min="0"
                    />
                </div>
                <div className={productSectionStyles.content_box4}>
                    <input
                        type="number"
                        placeholder="Max price"
                        value={priceRange[1]}
                        onChange={handleMaxChange}
                        className={productSectionStyles.priceInput}
                        min="0"
                    />
                </div>
            </div>


            <div className={productSectionStyles.flex_col2}>
                {priceRanges.map((range, index) => (
                    <label key={index} className={productSectionStyles.unnamed}>
                        <input
                            type="radio"
                            name="priceRange"
                            checked={priceRange[0] === range.range[0] && priceRange[1] === range.range[1]}
                            onChange={() => handleRadioChange(range.range)}
                            style={{display: 'none'}} // скрыть стандартный вид радиокнопки
                        />
                        <span>{range.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

function CategoryFilter({selectedCategory, setSelectedCategory}) {
    return (
        <div className={productSectionStyles.categoryFilterGroup}>
            <p className={productSectionStyles.filterTitle}>Category</p>
            <div className={productSectionStyles.flex_col}>
                {categoriesData.map((category) => (
                    <label key={category.id} className={productSectionStyles.unnamed}>
                        <input
                            type="radio"
                            name="category"
                            value={category.id}
                            checked={selectedCategory === category.id}
                            onChange={() => setSelectedCategory(category.id)}
                            style={{display: 'none'}} // скрыть стандартный вид радиокнопки
                        />
                        <span className={productSectionStyles.text4}>{category.name}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

function SortByDropdown() {
    const [selectedSort, setSelectedSort] = useState('Most Popular'); // Состояние для хранения выбранной сортировки

    const handleSortChange = (event) => {
        setSelectedSort(event.target.value); // Обновляем выбранную сортировку
    };

    return (
        <div className={productSectionStyles.flex_row3}>
            <div className={productSectionStyles.text7}>Sort by:</div>
            <select
                className={productSectionStyles.dropdown}
                value={selectedSort}
                onChange={handleSortChange}
            >
                <option value="Most Popular">Most Popular</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="New Arrivals">New Arrivals</option>
            </select>
        </div>
    );
}

function ProductSection(props) {
    const location = useLocation();

    useEffect(() => {
        // Просмотр переданного состояния
        console.log('Полученное состояние:', location.state);
    }, [location]);

    // Получаем переданное состояние
    const initialCategory = location.state?.selectedCategory || null;

    // Хук состояния
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);

    // Расчет общего количества страниц
    const totalPages = Math.ceil(productData.length / productsPerPage);

    // Функция для загрузки продуктов на основе выбранной страницы
    const loadProducts = (page) => {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const newProducts = productData.slice(startIndex, endIndex);
        setProducts(newProducts);
    };

    // Обработчик смены страницы
    const handlePageChange = (page) => {
        setCurrentPage(page);
        loadProducts(page);  // Загрузка новых данных для выбранной страницы
    };

    // Загрузка продуктов при первой отрисовке
    useEffect(() => {
        loadProducts(currentPage);
    }, [currentPage]);

    return (
        <section className={productSectionStyles.productSection}>
            {/* Main product listing area */}

            <div className={productSectionStyles.catalogContainer}>
                <aside className={productSectionStyles.filterSidebar}>
                    {/* Product filters sidebar */}

                    <aside className={productSectionStyles.filterSidebar}>
                        <CategoryFilter
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    </aside>

                    <hr className={productSectionStyles.line} size={1}/>

                    <PriceRangeFilter/>

                    <hr className={productSectionStyles.line} size={1}/>

                    <BrandFilter brands={brandsData}/>

                    <hr className={productSectionStyles.line} size={1}/>

                    <TagFilter tags={availableTags}/>
                </aside>

                <article className={productSectionStyles.productGrid}>
                    {/* Product grid display */}

                    <div className={productSectionStyles.flex_col3}>
                        <div className={productSectionStyles.flex_row1}>
                            {/*<div className={productSectionStyles.content_box3}>*/}
                            {/*    <div className={productSectionStyles.flex_row2}>*/}
                            {/*        <div className={productSectionStyles.text}>Search for anything...</div>*/}
                            {/*        <img*/}
                            {/*            className={productSectionStyles.image}*/}
                            {/*            src={'/assets/38dd0c027b8f2f5b43f08b077f691267.svg'}*/}
                            {/*            alt="alt text"*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <SortByDropdown />
                        </div>

                  {/*      <div className={productSectionStyles.content_box2}>*/}
                  {/*          <div className={productSectionStyles.flex_row4}>*/}
                  {/*              <div className={productSectionStyles.flex_row5}>*/}
                  {/*                  <div className={productSectionStyles.text2}>Active Filters:</div>*/}

                  {/*                  <div className={productSectionStyles.flex_row6}>*/}
                  {/*                      <div className={productSectionStyles.text7}>Electronics Devices</div>*/}
                  {/*                      <img*/}
                  {/*                          className={productSectionStyles.image18}*/}
                  {/*                          src={'/assets/098291982bf12c21e81231df88222d1d.svg'}*/}
                  {/*                          alt="alt text"*/}
                  {/*                      />*/}
                  {/*                  </div>*/}

                  {/*                  <div className={productSectionStyles.flex_row7}>*/}
                  {/*                      <div className={productSectionStyles.text7}>5 Star Rating</div>*/}
                  {/*                      <img*/}
                  {/*                          className={productSectionStyles.image18}*/}
                  {/*                          src={'/assets/098291982bf12c21e81231df88222d1d.svg'}*/}
                  {/*                          alt="alt text"*/}
                  {/*                      />*/}
                  {/*                  </div>*/}
                  {/*              </div>*/}

                  {/*              <div className={productSectionStyles.text8_box}>*/}
                  {/*<span className={productSectionStyles.text8}>*/}
                  {/*  <span className={productSectionStyles.text8_span0}>65,867</span>*/}
                  {/*  <span className={productSectionStyles.text8_span1}> </span>*/}
                  {/*  <span className={productSectionStyles.text8_span2}>Results found.</span>*/}
                  {/*</span>*/}
                  {/*              </div>*/}
                  {/*          </div>*/}
                  {/*      </div>*/}

                        <ProductGrid products={products}/>
                    </div>

                    <Pagination totalPages={totalPages} onPageChange={handlePageChange}/>

                </article>
            </div>
        </section>
    );
}

export default ProductSection;
