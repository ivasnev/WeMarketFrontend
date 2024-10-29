import React from 'react';

import navigationSectionStyles from './navigationSection.module.scss';

function renderNavigationSection(props) {
  return (
    <section className={navigationSectionStyles.navigationSection}>
      {/* Main navigation menu */}

      <div className={navigationSectionStyles.block1}>
        <div className={navigationSectionStyles.unnamed}>
          <button className={navigationSectionStyles.btn}>
            {/* TODO */}
            <div className={navigationSectionStyles.btn_text}>All Category</div>
            <img
              className={navigationSectionStyles.btn_icon}
              src={'/assets/9282c12d81a35bbc773a07e1d6b309e5.svg'}
              alt="alt text"
            />
          </button>

          <div className={navigationSectionStyles.unnamed1}>
            <img
              className={navigationSectionStyles.image9}
              src={'/assets/ffdd4f94cfacfe595d0223e8ac6d269b.svg'}
              alt="alt text"
            />
            <div className={navigationSectionStyles.text2}>Track Order</div>
          </div>

          <div className={navigationSectionStyles.unnamed2}>
            <img
              className={navigationSectionStyles.image91}
              src={'/assets/0efdc34c0cb0cee0023cb89ac5a9d904.svg'}
              alt="alt text"
            />
            <div className={navigationSectionStyles.text21}>Compare</div>
          </div>

          <div className={navigationSectionStyles.unnamed3}>
            <img
              className={navigationSectionStyles.image92}
              src={'/assets/73d3b1ab63c2bbadd96a1f0b6d6d5c20.svg'}
              alt="alt text"
            />
            <div className={navigationSectionStyles.text22}>Customer Support</div>
          </div>

          <div className={navigationSectionStyles.unnamed4}>
            <img
              className={navigationSectionStyles.image93}
              src={'/assets/ff1701f95a26ff263d661a9648fd5670.svg'}
              alt="alt text"
            />
            <div className={navigationSectionStyles.text23}>Need Help</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderNavigationSection;
