import React from 'react';

import section2Styles from './section2.module.scss';

function renderSection2(props) {
  return (
    <section className={section2Styles.section2}>
      <div className={section2Styles.block1}>
        <div className={section2Styles.unnamed}>
          <button className={section2Styles.btn}>
            {/* TODO */}
            <div className={section2Styles.btn_text}>All Category</div>
            <img
              className={section2Styles.btn_icon}
              src={'/assets/9282c12d81a35bbc773a07e1d6b309e5.svg'}
              alt="alt text"
            />
          </button>

          <div className={section2Styles.unnamed1}>
            <img
              className={section2Styles.image9}
              src={'/assets/ffdd4f94cfacfe595d0223e8ac6d269b.svg'}
              alt="alt text"
            />
            <div className={section2Styles.text2}>Track Order</div>
          </div>

          <div className={section2Styles.unnamed2}>
            <img
              className={section2Styles.image91}
              src={'/assets/0efdc34c0cb0cee0023cb89ac5a9d904.svg'}
              alt="alt text"
            />
            <div className={section2Styles.text21}>Compare</div>
          </div>

          <div className={section2Styles.unnamed3}>
            <img
              className={section2Styles.image92}
              src={'/assets/73d3b1ab63c2bbadd96a1f0b6d6d5c20.svg'}
              alt="alt text"
            />
            <div className={section2Styles.text22}>Customer Support</div>
          </div>

          <div className={section2Styles.unnamed4}>
            <img
              className={section2Styles.image93}
              src={'/assets/ff1701f95a26ff263d661a9648fd5670.svg'}
              alt="alt text"
            />
            <div className={section2Styles.text23}>Need Help</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection2;
