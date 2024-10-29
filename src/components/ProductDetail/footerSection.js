import React from 'react';

import footerSectionStyles from './footerSection.module.scss';

function renderFooterSection(props) {
  return (
    <section className={footerSectionStyles.footerSection}>
      {/* Site footer with company info and links */}

      <div className={footerSectionStyles.footerContent}>
        <div className={footerSectionStyles.unnamed}>
          <div className={footerSectionStyles.unnamed1}>
            <div className={footerSectionStyles.wrapper23}>
              <h2 className={footerSectionStyles.wrapper231}>WeMarket</h2>
            </div>

            <div className={footerSectionStyles.text}>Customer Supports:</div>
            <p className={footerSectionStyles.highlight4}>(629) 555-0129</p>
            <p className={footerSectionStyles.highlight5}>4517 Washington Ave. Manchester, Kentucky 39495</p>
            <p className={footerSectionStyles.highlight6}>info@kinbo.com</p>
          </div>

          <div className={footerSectionStyles.unnamed2}>
            <div className={footerSectionStyles.unnamed3}>
              <p className={footerSectionStyles.highlight61}>Top Category</p>

              <div className={footerSectionStyles.unnamed4}>
                <div className={footerSectionStyles.text6}>{`Computer & Laptop`}</div>
                <div className={footerSectionStyles.text61}>SmartPhone</div>
                <div className={footerSectionStyles.text62}>Headphone</div>
              </div>
            </div>

            <div className={footerSectionStyles.unnamed4}>
              <div className={footerSectionStyles.unnamed5}>
                <hr className={footerSectionStyles.line2} size={1} />
                <div className={footerSectionStyles.text7}>Accessories</div>
              </div>

              <div className={footerSectionStyles.unnamed6}>
                <div className={footerSectionStyles.text63}>{`Camera & Photo`}</div>
                <div className={footerSectionStyles.text64}>{`TV & Homes`}</div>

                <button className={footerSectionStyles.btn}>
                  {/* TODO */}
                  <div className={footerSectionStyles.btn_text}>Browse All Product</div>
                  <img
                    className={footerSectionStyles.btn_icon}
                    src={'/assets/096d4ea324550ecb0fd042e700f56e0f.svg'}
                    alt="alt text"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className={footerSectionStyles.unnamed7}>
            <p className={footerSectionStyles.highlight62}>Quick links</p>

            <div className={footerSectionStyles.unnamed8}>
              <div className={footerSectionStyles.text65}>Shop Product</div>
              <div className={footerSectionStyles.text66}>Shoping Cart</div>
              <div className={footerSectionStyles.text67}>Wishlist</div>
              <div className={footerSectionStyles.text68}>Compare</div>
              <div className={footerSectionStyles.text69}>Track Order</div>
              <div className={footerSectionStyles.text610}>Customer Help</div>
              <div className={footerSectionStyles.text611}>About Us</div>
            </div>
          </div>

          <div className={footerSectionStyles.unnamed9}>
            <p className={footerSectionStyles.highlight63}>Popular Tag</p>

            <div className={footerSectionStyles.list}>
              <div className={footerSectionStyles.unnamed10}>
                <button className={footerSectionStyles.btn1}>{/* TODO */}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderFooterSection;
