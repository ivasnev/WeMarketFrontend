import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import renderHeaderSection from '../Header/headerSection';
import renderToolbarSection from '../Toolbar/toolbarSection';
import renderBreadcrumbNav from './breadcrumbNav';
import ProductSection from './productSection';
import renderFooterSection from '../Footer/footerSection';

import styles from './index.module.scss';
import {useLocation} from "react-router-dom";

function ShopPage(props) {
  const location = useLocation();

  useEffect(() => {
    // Просмотр переданного состояния
    console.log('Полученное состояние:', location.state);
  }, [location]);
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
