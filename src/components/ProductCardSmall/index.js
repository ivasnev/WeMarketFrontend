import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';

function ProductCardSmall(props) {
  return (
    <section
      className={cn(styles.contentWrapper, props.className, 'product-card-small')}
      style={{ '--color': props.contentBox2 }}>
      <article className={styles.mediaContainer}>
        <img className={styles.featureImg} src={props.image33} alt="alt text" />

        <article className={styles.textContainer}>
          <p className={styles.description}>{props.paragraph}</p>

          <article className={styles.highlightBox}>
            <p className={styles.highlightText}>{props.text3}</p>
          </article>
        </article>
      </article>
    </section>
  );
}

ProductCardSmall.propTypes = {
  className: PropTypes.string,
  contentBox2: PropTypes.string.isRequired,
  image33: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired
};

export default ProductCardSmall;
