import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';

function ProductCardGridElement(props) {
  return (
    <section
      className={cn(styles.profileContainer, props.className, 'product-card-grid-element')}
      style={{ '--color': props.contentBox }}>
      {/* User profile section with personal information */}

      <article className={styles.mediaWrapper}>
        <img className={styles.avatarImg} src={props.image24} alt="alt text" />

        <article className={styles.bioContent}>
          <div className={styles.statusWrapper}>
            <img className={styles.statusIcon} src={props.image25} alt="alt text" />
            <p className={styles.statusMsg}>{props.info1}</p>
          </div>

          <p className={styles.userBio}>{props.text7}</p>
          <p className={styles.userStatus}>{props.text9}</p>
        </article>
      </article>
    </section>
  );
}

ProductCardGridElement.propTypes = {
  className: PropTypes.string,
  contentBox: PropTypes.string.isRequired,
  image24: PropTypes.string.isRequired,
  image25: PropTypes.string.isRequired,
  info1: PropTypes.string.isRequired,
  text7: PropTypes.string.isRequired,
  text9: PropTypes.string.isRequired
};

export default ProductCardGridElement;
