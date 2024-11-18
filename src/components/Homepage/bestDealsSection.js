import React from 'react';

import bestDealsSectionStyles from './bestDealsSection.module.scss';
import productData from "../../mockedData/products";
import ProductCard from "../ProductCard";

function renderBestDealsSection(props) {
  return (
    <section className={bestDealsSectionStyles.bestDealsSection}>
      {/* Best deals product grid */}

      <div className={bestDealsSectionStyles.flex_col}>
        <div className={bestDealsSectionStyles.titleWrapper}>
          <div className={bestDealsSectionStyles.wrapper13}>
            <h3 className={bestDealsSectionStyles.wrapper131}>Best Deals</h3>
          </div>

          <button className={bestDealsSectionStyles.browseBtn}>
            {/* TODO */}
            <div className={bestDealsSectionStyles.btn_text}>Browse All Product</div>
            <img
                className={bestDealsSectionStyles.btn_icon}
                src={'/assets/6f85c022597fa57a644395d5915b740f.svg'}
                alt="alt text"
            />
          </button>
        </div>
        <div className={bestDealsSectionStyles.productGrid}>
          {productData.slice(0,10).map((product) => (
              <ProductCard
                  key={product.id}
                  className={bestDealsSectionStyles.contentBox2}
                  contentBox={product.contentBox}
                  image28={product.image24} // Подставляем данные из мока
                  paragraph={product.text7}
                  text3={product.text9}
              />
          ))}
        </div>

        {/*<div className={bestDealsSectionStyles.productGrid}>*/}
        {/*  /!* Grid layout for product cards *!/*/}

        {/*  <div className={bestDealsSectionStyles.contentBox2}>*/}
        {/*    <div className={bestDealsSectionStyles.unnamed}>*/}
        {/*      <img*/}
        {/*          className={bestDealsSectionStyles.image28}*/}
        {/*          src={'/assets/c7ef5bd9dc392f52c81c13d0d3ab5853.png'}*/}
        {/*          alt="alt text"*/}
        {/*      />*/}
        {/*      <p className={bestDealsSectionStyles.paragraph}>4K UHD LED Smart TV with Chromecast Built-in</p>*/}

        {/*      <div className={bestDealsSectionStyles.text3}>*/}
        {/*        <div className={bestDealsSectionStyles.text31}>$1,50</div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}

        {/*  <div className={bestDealsSectionStyles.contentBox2}>*/}
        {/*    <div className={bestDealsSectionStyles.unnamed}>*/}
        {/*      <img*/}
        {/*          className={bestDealsSectionStyles.image28}*/}
        {/*          src={'/assets/c7ef5bd9dc392f52c81c13d0d3ab5853.png'}*/}
        {/*          alt="alt text"*/}
        {/*      />*/}
        {/*      <p className={bestDealsSectionStyles.paragraph}>4K UHD LED Smart TV with Chromecast Built-in</p>*/}

        {/*      <div className={bestDealsSectionStyles.text3}>*/}
        {/*        <div className={bestDealsSectionStyles.text31}>$1,50</div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}

export default renderBestDealsSection;
