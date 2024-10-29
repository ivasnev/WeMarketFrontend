import React from 'react';

import pathSectionStyles from './pathSection.module.scss';

function renderPathSection(props) {
  return (
    <section className={pathSectionStyles.pathSection}>
      <div className={pathSectionStyles.wrapper9}>
        <div className={pathSectionStyles.unnamed}>
          <div className={pathSectionStyles.unnamed1}>
            <img
              className={pathSectionStyles.image}
              src={'/assets/fed74bd139b69cad6154958ad0ad6e68.svg'}
              alt="alt text"
            />
            <div className={pathSectionStyles.text2}>Home</div>
          </div>

          <img
            className={pathSectionStyles.image18}
            src={'/assets/13b42e61eb68e6606e86cc3da492f17b.svg'}
            alt="alt text"
          />
          <div className={pathSectionStyles.text21}>Shop</div>
          <img
            className={pathSectionStyles.image181}
            src={'/assets/13b42e61eb68e6606e86cc3da492f17b.svg'}
            alt="alt text"
          />
          <div className={pathSectionStyles.text22}>Shop Grid</div>
          <img
            className={pathSectionStyles.image182}
            src={'/assets/13b42e61eb68e6606e86cc3da492f17b.svg'}
            alt="alt text"
          />
          <div className={pathSectionStyles.text23}>Electronics Devices</div>
          <img
            className={pathSectionStyles.image183}
            src={'/assets/13b42e61eb68e6606e86cc3da492f17b.svg'}
            alt="alt text"
          />
          <div className={pathSectionStyles.text3}>Macbook Pro</div>
        </div>
      </div>
    </section>
  );
}

export default renderPathSection;
