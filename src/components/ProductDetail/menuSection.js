import React from 'react';

import menuSectionStyles from './menuSection.module.scss';

function renderMenuSection(props) {
  return (
    <section className={menuSectionStyles.menuSection}>
      {/* Main navigation menu */}

      <div className={menuSectionStyles.block1}>
        <div className={menuSectionStyles.unnamed}>
          <button className={menuSectionStyles.btn}>
            {/* TODO */}
            <div className={menuSectionStyles.btn_text}>All Category</div>
            <img
              className={menuSectionStyles.btn_icon}
              src={'/assets/9282c12d81a35bbc773a07e1d6b309e5.svg'}
              alt="alt text"
            />
          </button>

          <div className={menuSectionStyles.unnamed1}>
            <img
              className={menuSectionStyles.image9}
              src={'/assets/ffdd4f94cfacfe595d0223e8ac6d269b.svg'}
              alt="alt text"
            />
            <div className={menuSectionStyles.text2}>Track Order</div>
          </div>

          <div className={menuSectionStyles.unnamed2}>
            <img
              className={menuSectionStyles.image91}
              src={'/assets/0efdc34c0cb0cee0023cb89ac5a9d904.svg'}
              alt="alt text"
            />
            <div className={menuSectionStyles.text21}>Compare</div>
          </div>

          <div className={menuSectionStyles.unnamed3}>
            <img
              className={menuSectionStyles.image92}
              src={'/assets/73d3b1ab63c2bbadd96a1f0b6d6d5c20.svg'}
              alt="alt text"
            />
            <div className={menuSectionStyles.text22}>Customer Support</div>
          </div>

          <div className={menuSectionStyles.unnamed4}>
            <img
              className={menuSectionStyles.image93}
              src={'/assets/ff1701f95a26ff263d661a9648fd5670.svg'}
              alt="alt text"
            />
            <div className={menuSectionStyles.text23}>Need Help</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderMenuSection;
