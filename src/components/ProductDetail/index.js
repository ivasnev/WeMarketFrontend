import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import renderHeaderSection from '../Header/headerSection';
import renderToolbarSection from '../Toolbar/toolbarSection';
import renderPathSection from './pathSection';
import renderProductSection from './productSection';
import renderSuggestSection from './suggestSection';
import renderFooterSection from '../Footer/footerSection';
import styles from './index.module.scss';

function ProductDetail(props) {
  return (
    <main className={cn(styles.productLayout, props.className, 'product-detail')}>
      {/* Main product detail page layout */}
      {renderHeaderSection(props)}
      {renderToolbarSection(props)}
      {renderPathSection(props)}
      {renderProductSection(props)}
      {renderSuggestSection(props)}
      {renderFooterSection(props)}
    </main>
  );
}

ProductDetail.propTypes = {
  className: PropTypes.string
};

export default ProductDetail;
