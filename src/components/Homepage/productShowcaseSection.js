import React from 'react';

import productShowcaseSectionStyles from './productShowcaseSection.module.scss';

function renderProductShowcaseSection(props) {
  return (
    <section className={productShowcaseSectionStyles.productShowcaseSection}>
      {/* Product highlights and collections */}

      <div className={productShowcaseSectionStyles.productShowcase}>
        <div className={productShowcaseSectionStyles.flex_col}>
          <p className={productShowcaseSectionStyles.highlight1}>FLASH SALE TODAY</p>

          <div className={productShowcaseSectionStyles.flex_col1}>
            <div className={productShowcaseSectionStyles.contentBox1}>
              <div className={productShowcaseSectionStyles.unnamed}>
                <img
                  className={productShowcaseSectionStyles.image33}
                  src={'/assets/27bc5e53e5966e1ba78ebda685f6bd8b.png'}
                  alt="alt text"
                />

                <div className={productShowcaseSectionStyles.unnamed1}>
                  <p className={productShowcaseSectionStyles.paragraph}>
                    Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  </p>

                  <div className={productShowcaseSectionStyles.text3}>
                    <div className={productShowcaseSectionStyles.text31}>$1,500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={productShowcaseSectionStyles.flex_col}>
          <p className={productShowcaseSectionStyles.highlight1}>BEST SELLERS</p>

          <div className={productShowcaseSectionStyles.flex_col1}>
            <div className={productShowcaseSectionStyles.contentBox1}>
              <div className={productShowcaseSectionStyles.unnamed2}>
                <img
                  className={productShowcaseSectionStyles.image33}
                  src={'/assets/27bc5e53e5966e1ba78ebda685f6bd8b.png'}
                  alt="alt text"
                />

                <div className={productShowcaseSectionStyles.unnamed1}>
                  <p className={productShowcaseSectionStyles.paragraph}>
                    Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  </p>

                  <div className={productShowcaseSectionStyles.text3}>
                    <div className={productShowcaseSectionStyles.text31}>$1,500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={productShowcaseSectionStyles.flex_col}>
          <p className={productShowcaseSectionStyles.highlight1}>TOP RATED</p>

          <div className={productShowcaseSectionStyles.flex_col1}>
            <div className={productShowcaseSectionStyles.contentBox1}>
              <div className={productShowcaseSectionStyles.unnamed3}>
                <img
                  className={productShowcaseSectionStyles.image33}
                  src={'/assets/27bc5e53e5966e1ba78ebda685f6bd8b.png'}
                  alt="alt text"
                />

                <div className={productShowcaseSectionStyles.unnamed1}>
                  <p className={productShowcaseSectionStyles.paragraph}>
                    Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  </p>

                  <div className={productShowcaseSectionStyles.text3}>
                    <div className={productShowcaseSectionStyles.text31}>$1,500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={productShowcaseSectionStyles.flex_col}>
          <p className={productShowcaseSectionStyles.highlight1}>NEW ARRIVAL</p>

          <div className={productShowcaseSectionStyles.flex_col1}>
            <div className={productShowcaseSectionStyles.contentBox1}>
              <div className={productShowcaseSectionStyles.unnamed2}>
                <img
                  className={productShowcaseSectionStyles.image33}
                  src={'/assets/27bc5e53e5966e1ba78ebda685f6bd8b.png'}
                  alt="alt text"
                />

                <div className={productShowcaseSectionStyles.unnamed1}>
                  <p className={productShowcaseSectionStyles.paragraph}>
                    Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  </p>

                  <div className={productShowcaseSectionStyles.text3}>
                    <div className={productShowcaseSectionStyles.text31}>$1,500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderProductShowcaseSection;
