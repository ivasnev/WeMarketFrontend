import React from 'react';

import imageSlider from "../ImageSlider/ImageSlider";

import productSectionStyles from './productSection.module.scss';
import ImageSlider from "../ImageSlider/ImageSlider";

import {images} from "../../mockedData/products";

import DescriptionTab from "../DescriptionTab/index";


function renderProductSection(props, id) {

  console.log(id)

  return (
    <section className={productSectionStyles.productSection}>
      {/* Product details and purchase options */}
      <div className={productSectionStyles.flex_col}>
        <div className={productSectionStyles.flex_row}>
          <figure className={productSectionStyles.imgGallery}>
            <ImageSlider images={images} />
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

                <div className={productSectionStyles.text4}>4.7 Star Rating</div>
                <div className={productSectionStyles.text2}>(21,671 User feedback)</div>
              </div>

              <h3 className={productSectionStyles.subtitle}>
                2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray
              </h3>

              <div className={productSectionStyles.flex_row3}>
                <div className={productSectionStyles.flex_col3}>
                  <div className={productSectionStyles.text5_box}>
                    <span className={productSectionStyles.text5}>
                      <span className={productSectionStyles.text5_span0}>Sku: </span>
                      <span className={productSectionStyles.text5_span1}>A264671</span>
                    </span>
                  </div>
                  <div className={productSectionStyles.text5_box1}>
                    <span className={productSectionStyles.text5}>
                      <span className={productSectionStyles.text5_span0}>Brand: </span>
                      <span className={productSectionStyles.text5_span1}>Apple</span>
                    </span>
                  </div>
                </div>

                <div className={productSectionStyles.flex_col4}>
                  <div className={productSectionStyles.text5_box}>
                    <span className={productSectionStyles.text5}>
                      <span className={productSectionStyles.text5_span0}>Availability: </span>
                      <span className={productSectionStyles.text5_span11}>In Stock</span>
                    </span>
                  </div>
                  <div className={productSectionStyles.text5_box}>
                    <span className={productSectionStyles.text5}>
                      <span className={productSectionStyles.text5_span0}>Category: </span>
                      <span className={productSectionStyles.text5_span1}>Electronics Devices</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className={productSectionStyles.wrapper15}>
                <h3 className={productSectionStyles.wrapper151}>$1699</h3>
              </div>
            </div>

            <hr className={productSectionStyles.line} size={1} />

            <div className={productSectionStyles.flex_col5}>
              <div className={productSectionStyles.productOptionsGrid}>
                {/* Product configuration options */}

                <div className={productSectionStyles.item}>
                  <div className={productSectionStyles.text6}>Color</div>

                  <div className={productSectionStyles.flex_row4}>
                    <img
                      className={productSectionStyles.image27}
                      src={'/assets/a0c75c1b588bde3741f53be89979b7dd.svg'}
                      alt="alt text"
                    />
                    <img
                      className={productSectionStyles.image28}
                      src={'/assets/ec4c80e5496ab189a46b1e53d048d3b3.svg'}
                      alt="alt text"
                    />
                  </div>
                </div>

                <div className={productSectionStyles.item}>
                  <div className={productSectionStyles.text6}>Size</div>

                  <div className={productSectionStyles.content_box}>
                    <div className={productSectionStyles.flex_row5}>
                      <div className={productSectionStyles.text7}>14-inch Liquid Retina XDR display</div>
                      <img
                        className={productSectionStyles.image6}
                        src={'/assets/7c98ca9f23e776c5297cdc6d848d7420.svg'}
                        alt="alt text"
                      />
                    </div>
                  </div>
                </div>

                <div className={productSectionStyles.item}>
                  <div className={productSectionStyles.text6}>Memory</div>

                  <div className={productSectionStyles.content_box}>
                    <div className={productSectionStyles.flex_row5}>
                      <div className={productSectionStyles.text71}>16GB unified memory</div>
                      <img
                        className={productSectionStyles.image6}
                        src={'/assets/7c98ca9f23e776c5297cdc6d848d7420.svg'}
                        alt="alt text"
                      />
                    </div>
                  </div>
                </div>

                <div className={productSectionStyles.item}>
                  <div className={productSectionStyles.text6}>Storage</div>

                  <div className={productSectionStyles.content_box}>
                    <div className={productSectionStyles.flex_row5}>
                      <div className={productSectionStyles.text71}>1TV SSD Storage</div>
                      <img
                        className={productSectionStyles.image6}
                        src={'/assets/7c98ca9f23e776c5297cdc6d848d7420.svg'}
                        alt="alt text"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={productSectionStyles.purchaseActions}>
                <div className={productSectionStyles.content_box3}>
                  <div className={productSectionStyles.flex_row6}>
                    <img
                      className={productSectionStyles.image61}
                      src={'/assets/19333eeca49d049301757a12f1bd9153.svg'}
                      alt="alt text"
                    />
                    <p className={productSectionStyles.highlight}>01</p>
                    <img
                      className={productSectionStyles.image61}
                      src={'/assets/feec131e3b4177524aabbc1a4a9e82d0.svg'}
                      alt="alt text"
                    />
                  </div>
                </div>

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
                <div className={productSectionStyles.flex_row8}>
                  <img
                    className={productSectionStyles.image9}
                    src={'/assets/3efc3535fde89a848ca9519446ace743.svg'}
                    alt="alt text"
                  />
                  <div className={productSectionStyles.text72}>Add to Wishlist</div>
                </div>

                <div className={productSectionStyles.flex_row9}>
                  <img
                    className={productSectionStyles.image9}
                    src={'/assets/2f17f958ab6a361be9c018eb4c25e6f6.svg'}
                    alt="alt text"
                  />
                  <div className={productSectionStyles.text72}>Add to Compare</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DescriptionTab />

      </div>
    </section>
  );
}

export default renderProductSection;
