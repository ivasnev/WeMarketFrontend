import React, { useState } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import productSectionStyles from './productSection.module.scss';

const categories = [
  { id: 1, name: "Electronics Devices", icon: "/assets/1c144461a9210e6fd925efe40b1266f4.svg" },
  { id: 2, name: "Computer & Laptop" },
  { id: 3, name: "Computer Accessories" },
  { id: 4, name: "SmartPhone" },
  { id: 5, name: "Headphone" },
];


const priceRanges = [
  { label: "All Price", range: [0, 10000] },
  { label: "Under $20", range: [0, 20] },
  { label: "$25 to $100", range: [25, 100] },
  { label: "$100 to $300", range: [100, 300] },
  { label: "$300 to $500", range: [300, 500] },
  { label: "$500 to $1,000", range: [500, 1000] },
  { label: "$1,000 to $10,000", range: [1000, 10000] },
];

function PriceRangeFilter() {
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  const handleRadioChange = (range) => {
    setPriceRange(range);
  };

  return (
      <div className={productSectionStyles.priceFilterGroup}>
        <p className={productSectionStyles.highlight}>Price Range</p>

        <Slider
            range
            min={0}
            max={10000}
            value={priceRange}  // Using value instead of defaultValue for controlled slider
            onChange={handleSliderChange}
            trackStyle={{ backgroundColor: 'yellow', height: 4 }}
            handleStyle={{ borderColor: 'yellow', height: 24, width: 24 }}
            railStyle={{ backgroundColor: '#ddd', height: 4 }}
        />

        <div className={productSectionStyles.flex_row}>
          <div className={productSectionStyles.content_box4}>
            <div className={productSectionStyles.text5}>Min price: ${priceRange[0]}</div>
          </div>
          <div className={productSectionStyles.content_box4}>
            <div className={productSectionStyles.text51}>Max price: ${priceRange[1]}</div>
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
                />
                <span className={productSectionStyles.text4}>{range.label}</span>
              </label>
          ))}
        </div>
      </div>
  );
}

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
      <div className={productSectionStyles.categoryFilterGroup}>
        <p className={productSectionStyles.filterTitle}>Category</p>
        <div className={productSectionStyles.flex_col}>
          {categories.map((category) => (
              <label key={category.id} className={productSectionStyles.unnamed}>
                <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={selectedCategory === category.id}
                    onChange={() => setSelectedCategory(category.id)}
                />
                <span className={productSectionStyles.text4}>{category.name}</span>
              </label>
          ))}
        </div>
      </div>
  );
}

function ProductSection(props) {
  const [selectedCategory, setSelectedCategory] = useState(null);

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

          <PriceRangeFilter />

          <hr className={productSectionStyles.line1} size={1}/>

          <div className={productSectionStyles.brandFilterGroup}>
            <p className={productSectionStyles.highlight}>popular Brands</p>

            <div className={productSectionStyles.brandGrid}>
              {/* Grid layout for brand selection */}

              <div className={productSectionStyles.unnamed1}>
                <img
                    className={productSectionStyles.image22}
                    src={'/assets/6d79c54ae2cd1b08bc46445ff2653074.svg'}
                    alt="alt text"
                />
                <div className={productSectionStyles.text4}>Apple</div>
              </div>

              <div className={productSectionStyles.unnamed2}>
                <img
                    className={productSectionStyles.image22}
                    src={'/assets/6d79c54ae2cd1b08bc46445ff2653074.svg'}
                    alt="alt text"
                />
                <div className={productSectionStyles.text4}>Google</div>
              </div>

              <div className={productSectionStyles.unnamed3}>
                <img
                    className={productSectionStyles.image22}
                    src={'/assets/6d79c54ae2cd1b08bc46445ff2653074.svg'}
                    alt="alt text"
                />
                <div className={productSectionStyles.text4}>Microsoft</div>
              </div>

              <div className={productSectionStyles.unnamed3}>
                <div className={productSectionStyles.color17}/>
                <div className={productSectionStyles.text4}>Samsung</div>
              </div>

              <div className={productSectionStyles.unnamed3}>
                <div className={productSectionStyles.color17}/>
                <div className={productSectionStyles.text4}>Dell</div>
              </div>

              <div className={productSectionStyles.unnamed4}>
                <img
                    className={productSectionStyles.image22}
                    src={'/assets/6d79c54ae2cd1b08bc46445ff2653074.svg'}
                    alt="alt text"
                />
                <div className={productSectionStyles.text4}>HP</div>
              </div>

              <div className={productSectionStyles.unnamed3}>
                <div className={productSectionStyles.color17}/>
                <div className={productSectionStyles.text4}>Symphony</div>
              </div>

              <div className={productSectionStyles.unnamed3}>
                <div className={productSectionStyles.color17}/>
                <div className={productSectionStyles.text4}>Xiaomi</div>
              </div>
            </div>
          </div>

          <hr className={productSectionStyles.line2} size={1}/>

          <div className={productSectionStyles.tagFilterGroup}>
            <p className={productSectionStyles.highlight1}>Popular Tag</p>

            <div className={productSectionStyles.list}>
              <div className={productSectionStyles.component14}>
                <div className={productSectionStyles.color18}/>
                <div className={productSectionStyles.text11}>Game</div>
              </div>

              <div className={productSectionStyles.content_box6}>
                <div className={productSectionStyles.text12}>iPhone</div>
              </div>

              <div className={productSectionStyles.content_box7}>
                <div className={productSectionStyles.text13}>TV</div>
              </div>

              <div className={productSectionStyles.content_box8}>
                <div className={productSectionStyles.text13}>Asus Laptops</div>
              </div>

              <div className={productSectionStyles.component17}>
                <div className={productSectionStyles.color22}/>
                <div className={productSectionStyles.text14}>Macbook</div>
              </div>

              <div className={productSectionStyles.component141}>
                <div className={productSectionStyles.color18}/>
                <div className={productSectionStyles.text11}>SSD</div>
              </div>

              <div className={productSectionStyles.component15}>
                <div className={productSectionStyles.color24}/>
                <div className={productSectionStyles.text6}>Graphics Card</div>
              </div>
            </div>
          </div>
        </aside>

        <article className={productSectionStyles.productGrid}>
          {/* Product grid display */}

          <div className={productSectionStyles.flex_col3}>
            <div className={productSectionStyles.flex_row1}>
              <div className={productSectionStyles.content_box3}>
                <div className={productSectionStyles.flex_row2}>
                  <div className={productSectionStyles.text}>Search for anything...</div>
                  <img
                      className={productSectionStyles.image}
                      src={'/assets/38dd0c027b8f2f5b43f08b077f691267.svg'}
                      alt="alt text"
                  />
                </div>
              </div>

              <div className={productSectionStyles.flex_row3}>
                <div className={productSectionStyles.text7}>Sort by:</div>

                <button className={productSectionStyles.btn}>
                  {/* TODO */}
                  <div className={productSectionStyles.btn_text}>Most Popular</div>
                  <img
                    className={productSectionStyles.btn_icon}
                    src={'/assets/7c98ca9f23e776c5297cdc6d848d7420.svg'}
                    alt="alt text"
                  />
                </button>
              </div>
            </div>

            <div className={productSectionStyles.content_box2}>
              <div className={productSectionStyles.flex_row4}>
                <div className={productSectionStyles.flex_row5}>
                  <div className={productSectionStyles.text2}>Active Filters:</div>

                  <div className={productSectionStyles.flex_row6}>
                    <div className={productSectionStyles.text7}>Electronics Devices</div>
                    <img
                      className={productSectionStyles.image18}
                      src={'/assets/098291982bf12c21e81231df88222d1d.svg'}
                      alt="alt text"
                    />
                  </div>

                  <div className={productSectionStyles.flex_row7}>
                    <div className={productSectionStyles.text7}>5 Star Rating</div>
                    <img
                      className={productSectionStyles.image18}
                      src={'/assets/098291982bf12c21e81231df88222d1d.svg'}
                      alt="alt text"
                    />
                  </div>
                </div>

                <div className={productSectionStyles.text8_box}>
                  <span className={productSectionStyles.text8}>
                    <span className={productSectionStyles.text8_span0}>65,867</span>
                    <span className={productSectionStyles.text8_span1}> </span>
                    <span className={productSectionStyles.text8_span2}>Results found.</span>
                  </span>
                </div>
              </div>
            </div>

            <div className={productSectionStyles.productGrid1}>
              {/* Grid layout for product cards */}

              <div className={productSectionStyles.contentBox2}>
                <div className={productSectionStyles.unnamed5}>
                  <img
                    className={productSectionStyles.image24}
                    src={'/assets/61c5f0c7aca44b3f5a87801ef78bbeb1.png'}
                    alt="alt text"
                  />

                  <div className={productSectionStyles.unnamed6}>
                    <div className={productSectionStyles.unnamed7}>
                      <img
                        className={productSectionStyles.image25}
                        src={'/assets/f1f54f0b36a156129e0c6337e2e71970.svg'}
                        alt="alt text"
                      />
                      <div className={productSectionStyles.info1}>(738)</div>
                    </div>

                    <p className={productSectionStyles.text71}>TOZO T6 True Wireless Earbuds Bluetooth Headphon...</p>

                    <div className={productSectionStyles.wrapper17}>
                      <div className={productSectionStyles.wrapper171}>$70</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={productSectionStyles.contentBox2}>
                <div className={productSectionStyles.unnamed8}>
                  <img
                    className={productSectionStyles.image24}
                    src={'/assets/61c5f0c7aca44b3f5a87801ef78bbeb1.png'}
                    alt="alt text"
                  />

                  <div className={productSectionStyles.unnamed6}>
                    <div className={productSectionStyles.unnamed7}>
                      <img
                        className={productSectionStyles.image25}
                        src={'/assets/f1f54f0b36a156129e0c6337e2e71970.svg'}
                        alt="alt text"
                      />
                      <div className={productSectionStyles.info1}>(738)</div>
                    </div>

                    <p className={productSectionStyles.text71}>TOZO T6 True Wireless Earbuds Bluetooth Headphon...</p>

                    <div className={productSectionStyles.wrapper17}>
                      <div className={productSectionStyles.wrapper171}>(738)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav className={productSectionStyles.paginationBar}>
            <img
              className={productSectionStyles.image27}
              src={'/assets/d44fa2e21d61a4c5617434ece23f5cec.svg'}
              alt="alt text"
            />

            <div className={productSectionStyles.flex_row8}>
              <div className={productSectionStyles.contentBox}>
                <div className={productSectionStyles.text81}>01</div>
              </div>

              <div className={productSectionStyles.content_box1}>
                <div className={productSectionStyles.text72}>02</div>
              </div>

              <div className={productSectionStyles.content_box1}>
                <div className={productSectionStyles.text72}>03</div>
              </div>

              <div className={productSectionStyles.content_box1}>
                <div className={productSectionStyles.text72}>04</div>
              </div>

              <div className={productSectionStyles.content_box1}>
                <div className={productSectionStyles.text72}>05</div>
              </div>

              <div className={productSectionStyles.content_box1}>
                <div className={productSectionStyles.text72}>06</div>
              </div>
            </div>

            <img
              className={productSectionStyles.image271}
              src={'/assets/9f22d1670548114363f9990f82eee939.svg'}
              alt="alt text"
            />
          </nav>
        </article>
      </div>
    </section>
  );
}

export default ProductSection;
