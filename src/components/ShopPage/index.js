import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import renderHeaderSection from './headerSection';
import renderToolbarSection from './toolbarSection';
import renderBreadcrumbNav from './breadcrumbNav';
import ProductSection from './productSection';
import renderFooterSection from './footerSection';

import styles from './index.module.scss';

function ShopPage(props) {
  return (
    <main className={cn(styles.mainContent, props.className, 'shop-page')}>
      {/* Main shopping interface container */}
      {renderHeaderSection(props)}
      {renderToolbarSection(props)}
      {renderBreadcrumbNav(props)}
      {ProductSection(props)}
      {renderFooterSection(props)}
    </main>
  );
}

ShopPage.propTypes = {
  className: PropTypes.string
};

export default ShopPage;
