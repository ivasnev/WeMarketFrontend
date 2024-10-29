import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';

function CategoryCard(props) {
  return (
    <article
      className={cn(styles.featureCard, props.className, 'category-card')}
      style={{ '--color': props.contentBox1 }}>
      {/* Feature highlight card with image and text */}

      <div className={styles.featureWrapper}>
        <img className={styles.featureImg} src={props.image29} alt="alt text" />
        <figcaption className={styles.featureText}>{props.highlight}</figcaption>
      </div>
    </article>
  );
}

CategoryCard.propTypes = {
  className: PropTypes.string,
  contentBox1: PropTypes.string.isRequired,
  image29: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired
};

export default CategoryCard;
