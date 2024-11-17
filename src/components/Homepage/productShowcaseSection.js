import React from 'react';

import productShowcaseSectionStyles from './productShowcaseSection.module.scss';
import {productsColumn1, productsColumn2, productsColumn3, productsColumn4} from "../../mockedData/products"
import ProductCardSmall from '../ProductCardSmall/index';

function renderProductShowcaseSection(props) {
    return (
        <section className={productShowcaseSectionStyles.productShowcaseSection}>
            {/* Product highlights and collections */}

            <div className={productShowcaseSectionStyles.productShowcase}>
                <div className={productShowcaseSectionStyles.flex_col}>
                    <p className={productShowcaseSectionStyles.highlight1}>FLASH SALE TODAY</p>

                    <div className={productShowcaseSectionStyles.flex_col1}>
                        {productsColumn1.map((product, index) => (
                            <ProductCardSmall
                                key={index}
                                className={productShowcaseSectionStyles.productCard}
                                contentBox2={product.color}
                                image33={product.imageSrc}
                                paragraph={product.description}
                                text3={product.price}
                            />
                        ))}
                    </div>
                </div>

                <div className={productShowcaseSectionStyles.flex_col}>
                    <p className={productShowcaseSectionStyles.highlight1}>BEST SELLERS</p>

                    <div className={productShowcaseSectionStyles.flex_col1}>
                        {productsColumn2.map((product, index) => (
                            <ProductCardSmall
                                key={index}
                                className={productShowcaseSectionStyles.productCard}
                                contentBox2={product.color}
                                image33={product.imageSrc}
                                paragraph={product.description}
                                text3={product.price}
                            />
                        ))}
                    </div>
                </div>

                <div className={productShowcaseSectionStyles.flex_col}>
                    <p className={productShowcaseSectionStyles.highlight1}>TOP RATED</p>

                    <div className={productShowcaseSectionStyles.flex_col1}>
                        {productsColumn3.map((product, index) => (
                            <ProductCardSmall
                                key={index}
                                className={productShowcaseSectionStyles.productCard}
                                contentBox2={product.color}
                                image33={product.imageSrc}
                                paragraph={product.description}
                                text3={product.price}
                            />
                        ))}
                    </div>
                </div>

                <div className={productShowcaseSectionStyles.flex_col}>
                    <p className={productShowcaseSectionStyles.highlight1}>NEW ARRIVAL</p>

                    <div className={productShowcaseSectionStyles.flex_col1}>
                        {productsColumn4.map((product, index) => (
                            <ProductCardSmall
                                key={index}
                                className={productShowcaseSectionStyles.productCard}
                                contentBox2={product.color}
                                image33={product.imageSrc}
                                paragraph={product.description}
                                text3={product.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default renderProductShowcaseSection;

// function renderProductShowcaseSection() {
//     // Замоканные данные для четырёх колонок продуктов
//
//
//     return (
//         <section className={productShowcaseSectionStyles.productShowcaseSection}>
//             {/* Колонка 1 */}
//             <div className={productShowcaseSectionStyles.productColumn}>
//                 {productsColumn1.map((product, index) => (
//                     <ProductCardSmall
//                         key={index}
//                         className={productShowcaseSectionStyles.productCard}
//                         contentBox2={product.color}
//                         image33={product.imageSrc}
//                         paragraph={product.description}
//                         text3={product.price}
//                     />
//                 ))}
//             </div>
//
//             {/* Колонка 2 */}
//             <div className={productShowcaseSectionStyles.productColumn}>
//                 {productsColumn2.map((product, index) => (
//                     <ProductCardSmall
//                         key={index}
//                         className={productShowcaseSectionStyles.productCard}
//                         contentBox2={product.color}
//                         image33={product.imageSrc}
//                         paragraph={product.description}
//                         text3={product.price}
//                     />
//                 ))}
//             </div>
//
//             {/* Колонка 3 */}
//             <div className={productShowcaseSectionStyles.productColumn}>
//                 {productsColumn3.map((product, index) => (
//                     <ProductCardSmall
//                         key={index}
//                         className={productShowcaseSectionStyles.productCard}
//                         contentBox2={product.color}
//                         image33={product.imageSrc}
//                         paragraph={product.description}
//                         text3={product.price}
//                     />
//                 ))}
//             </div>
//
//             {/* Колонка 4 */}
//             <div className={productShowcaseSectionStyles.productColumn}>
//                 {productsColumn4.map((product, index) => (
//                     <ProductCardSmall
//                         key={index}
//                         className={productShowcaseSectionStyles.productCard}
//                         contentBox2={product.color}
//                         image33={product.imageSrc}
//                         paragraph={product.description}
//                         text3={product.price}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// }

// export default renderProductShowcaseSection;
