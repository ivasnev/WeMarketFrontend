import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { useParams } from "react-router-dom";

import renderHeaderSection from '../Header/headerSection';
import renderToolbarSection from '../Toolbar/toolbarSection';
import renderPathSection from './pathSection';
import renderProductSection from './productSection';
import renderProductShowcaseSection from "../Homepage/productShowcaseSection";
import renderFooterSection from '../Footer/footerSection';
import styles from './index.module.scss';

function ProductDetail(props) {
  const { id } = useParams()

  return (
    <main className={cn(styles.productLayout, props.className, 'product-detail')}>
      {/* Main product detail page layout */}
      {renderHeaderSection(props)}
      {renderToolbarSection(props)}
      {renderPathSection(props)}
      {renderProductSection(props, id)}
      {renderProductShowcaseSection(props)}
      {renderFooterSection(props)}
    </main>
  );
}

ProductDetail.propTypes = {
  className: PropTypes.string
};

export default ProductDetail;
