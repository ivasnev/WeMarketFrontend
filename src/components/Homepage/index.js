import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import renderFeaturesSection from './featuresSection';
import renderBestDealsSection from './bestDealsSection';
import renderShopCategoriesSection from './shopCategoriesSection';
import renderProductShowcaseSection from './productShowcaseSection';
import renderLatestNewsSection from './latestNewsSection';
import renderFooterSection from '../Footer/footerSection';
import renderHeaderSection from '../Header/headerSection';
import renderToolbarSection from '../Toolbar/toolbarSection';

import styles from './index.module.scss';

function Homepage(props) {
  return (
    <main className={cn(styles.mainContent, props.className, 'homepage')}>
      {/* Main content container */}
      {renderHeaderSection(props)}
      {renderToolbarSection(props)}
      {renderFeaturesSection(props)}
      {renderBestDealsSection(props)}
      {renderShopCategoriesSection(props)}
      {renderProductShowcaseSection(props)}
      {renderLatestNewsSection(props)}
      {renderFooterSection(props)}
    </main>
  );
}

Homepage.propTypes = {
  className: PropTypes.string
};

export default Homepage;
