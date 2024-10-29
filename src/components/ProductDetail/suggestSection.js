import React from 'react';

import suggestSectionStyles from './suggestSection.module.scss';

function renderSuggestSection(props) {
  return (
    <section className={suggestSectionStyles.suggestSection}>
      {/* Product recommendations */}

      <div className={suggestSectionStyles.productGrid}>
        {/* Grid layout for product recommendations */}

        <div className={suggestSectionStyles.flex_col}>
          <p className={suggestSectionStyles.highlight1}>FLASH SALE TODAY</p>

          <div className={suggestSectionStyles.flex_col1}>
            <div className={suggestSectionStyles.contentBox1}>
              <div className={suggestSectionStyles.unnamed}>
                <img
                  className={suggestSectionStyles.image33}
                  src={'/assets/27bc5e53e5966e1ba78ebda685f6bd8b.png'}
                  alt="alt text"
                />

                <div className={suggestSectionStyles.unnamed1}>
                  <p className={suggestSectionStyles.paragraph}>
                    Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  </p>

                  <div className={suggestSectionStyles.text3}>
                    <div className={suggestSectionStyles.text31}>$1,500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={suggestSectionStyles.flex_col}>
          <p className={suggestSectionStyles.highlight1}>BEST SELLERS</p>

          <div className={suggestSectionStyles.flex_col1}>
            <div className={suggestSectionStyles.contentBox1}>
              <div className={suggestSectionStyles.unnamed2}>
                <img
                  className={suggestSectionStyles.image33}
                  src={'/assets/27bc5e53e5966e1ba78ebda685f6bd8b.png'}
                  alt="alt text"
                />

                <div className={suggestSectionStyles.unnamed1}>
                  <p className={suggestSectionStyles.paragraph}>
                    Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  </p>

                  <div className={suggestSectionStyles.text3}>
                    <div className={suggestSectionStyles.text31}>$1,500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={suggestSectionStyles.flex_col}>
          <p className={suggestSectionStyles.highlight1}>TOP RATED</p>

          <div className={suggestSectionStyles.flex_col1}>
            <div className={suggestSectionStyles.contentBox1}>
              <div className={suggestSectionStyles.unnamed3}>
                <img
                  className={suggestSectionStyles.image33}
                  src={'/assets/27bc5e53e5966e1ba78ebda685f6bd8b.png'}
                  alt="alt text"
                />

                <div className={suggestSectionStyles.unnamed1}>
                  <p className={suggestSectionStyles.paragraph}>
                    Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  </p>

                  <div className={suggestSectionStyles.text3}>
                    <div className={suggestSectionStyles.text31}>$1,500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={suggestSectionStyles.flex_col}>
          <p className={suggestSectionStyles.highlight1}>NEW ARRIVAL</p>

          <div className={suggestSectionStyles.flex_col1}>
            <div className={suggestSectionStyles.contentBox1}>
              <div className={suggestSectionStyles.unnamed2}>
                <img
                  className={suggestSectionStyles.image33}
                  src={'/assets/27bc5e53e5966e1ba78ebda685f6bd8b.png'}
                  alt="alt text"
                />

                <div className={suggestSectionStyles.unnamed1}>
                  <p className={suggestSectionStyles.paragraph}>
                    Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  </p>

                  <div className={suggestSectionStyles.text3}>
                    <div className={suggestSectionStyles.text31}>$1,500</div>
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

export default renderSuggestSection;
