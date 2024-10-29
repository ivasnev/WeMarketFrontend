import React from 'react';

import breadcrumbNavStyles from './breadcrumbNav.module.scss';

function renderBreadcrumbNav(props) {
  return (
    <section className={breadcrumbNavStyles.breadcrumbNav}>
      {/* Navigation breadcrumb */}

      <div className={breadcrumbNavStyles.wrapper9}>
        <div className={breadcrumbNavStyles.unnamed}>
          <div className={breadcrumbNavStyles.unnamed1}>
            <img
              className={breadcrumbNavStyles.image}
              src={'/assets/fed74bd139b69cad6154958ad0ad6e68.svg'}
              alt="alt text"
            />
            <div className={breadcrumbNavStyles.text2}>Home</div>
          </div>

          <img
            className={breadcrumbNavStyles.image18}
            src={'/assets/13b42e61eb68e6606e86cc3da492f17b.svg'}
            alt="alt text"
          />
          <div className={breadcrumbNavStyles.text21}>Shop</div>
          <img
            className={breadcrumbNavStyles.image181}
            src={'/assets/13b42e61eb68e6606e86cc3da492f17b.svg'}
            alt="alt text"
          />
          <div className={breadcrumbNavStyles.text22}>Shop Grid</div>
          <img
            className={breadcrumbNavStyles.image182}
            src={'/assets/13b42e61eb68e6606e86cc3da492f17b.svg'}
            alt="alt text"
          />
          <div className={breadcrumbNavStyles.text23}>Electronics Devices</div>
          <img
            className={breadcrumbNavStyles.image183}
            src={'/assets/13b42e61eb68e6606e86cc3da492f17b.svg'}
            alt="alt text"
          />
          <div className={breadcrumbNavStyles.text3}>Macbook Pro</div>
        </div>
      </div>
    </section>
  );
}

export default renderBreadcrumbNav;
