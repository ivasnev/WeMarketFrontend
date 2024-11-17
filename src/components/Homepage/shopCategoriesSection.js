// import React from 'react';
//
// import shopCategoriesSectionStyles from './shopCategoriesSection.module.scss';
//
// function renderShopCategoriesSection(props) {
//   return (
//     <section className={shopCategoriesSectionStyles.shopCategoriesSection}>
//       {/* Category showcase section */}
//
//       <div className={shopCategoriesSectionStyles.flex_col}>
//         <h2 className={shopCategoriesSectionStyles.title1}>Shop with Categorys</h2>
//
//         <div className={shopCategoriesSectionStyles.group}>
//           <div className={shopCategoriesSectionStyles.categoryGrid}>
//             {/* Grid layout for category items */}
//
//             <div className={shopCategoriesSectionStyles.contentBox}>
//               <div className={shopCategoriesSectionStyles.unnamed}>
//                 <img
//                   className={shopCategoriesSectionStyles.image29}
//                   src={'/assets/6ab578f2b88f4aacec7840cdd46e174c.png'}
//                   alt="alt text"
//                 />
//                 <p className={shopCategoriesSectionStyles.highlight}>{`Computer & Laptop`}</p>
//               </div>
//             </div>
//
//             <div className={shopCategoriesSectionStyles.contentBox}>
//               <div className={shopCategoriesSectionStyles.unnamed}>
//                 <img
//                   className={shopCategoriesSectionStyles.image29}
//                   src={'/assets/6ab578f2b88f4aacec7840cdd46e174c.png'}
//                   alt="alt text"
//                 />
//                 <p className={shopCategoriesSectionStyles.highlight}>{`Computer & Laptop`}</p>
//               </div>
//             </div>
//           </div>
//
//           <img
//             className={shopCategoriesSectionStyles.image30}
//             src={'/assets/9f88c71e5591194ea93f585174dae36e.svg'}
//             alt="alt text"
//           />
//           <img
//             className={shopCategoriesSectionStyles.image301}
//             src={'/assets/ddf0a4ec2e747f0ff43acfa0da8efab9.svg'}
//             alt="alt text"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
//
// export default renderShopCategoriesSection;


import React from 'react';
import Slider from 'react-slick';
import categoriesData from '../../mockedData/categories'; // Импорт моков
import CategoryCard from '../CategoryCard/index';
import NewArrivals from '../NewArrivals/NewArrivals'

import shopCategoriesSectionStyles from './shopCategoriesSection.module.scss';

function ShopCategoriesSection() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Количество отображаемых карточек
        slidesToScroll: 1, // Сколько карточек пролистывать за раз
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <section className={shopCategoriesSectionStyles.shopCategoriesSection}>
            {/*<Slider {...sliderSettings} className={shopCategoriesSectionStyles.slider}>*/}
            {/*    {categoriesData.map((category) => (*/}
            {/*        <CategoryCard*/}
            {/*            // className={shopCategoriesSectionStyles.card}*/}
            {/*            contentBox1={'#ffffff'} // Можно добавить уникальный стиль для каждой категории*/}
            {/*            image29={category.image || '/assets/default-icon.svg'} // Подставить иконку или дефолтное изображение*/}
            {/*            highlight={category.name}*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*</Slider>*/}
            <NewArrivals />
            <div className={shopCategoriesSectionStyles.flex_col}>
                <h2 className={shopCategoriesSectionStyles.title1}>Shop with Categories</h2>
                {/*<Slider {...sliderSettings} className={shopCategoriesSectionStyles.slider}>*/}
                {/*    {categoriesData.map((category) => (*/}
                {/*        <div key={category.id} className={shopCategoriesSectionStyles.sliderItem}>*/}
                {/*          <CategoryCard*/}
                {/*              className={shopCategoriesSectionStyles.card}*/}
                {/*              contentBox1={'#ffffff'} // Можно добавить уникальный стиль для каждой категории*/}
                {/*              image29={category.icon || '/assets/default-icon.svg'} // Подставить иконку или дефолтное изображение*/}
                {/*              highlight={category.name}*/}
                {/*          />*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</Slider>*/}
            </div>
        </section>
    );
}

export default ShopCategoriesSection;