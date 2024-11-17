import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';

function NewsCard(props) {
  return (
    <section className={cn(styles.featureBox, props.className, 'news-card')} style={{ '--color': props.contentBox3 }}>
      {/* Feature highlights section with benefits and CTA */}

      <article className={styles.contentWrapper}>
        <img className={styles.heroImg} src={props.image34} alt="alt text" />

        <div className={styles.benefitsContainer}>
          <div className={styles.benefitsList}>
            {/* Benefits grid with icons and descriptions */}

            <div className={styles.benefitItem}>
              <img className={styles.benefitIcon} src={'/assets/5b5a7f5f76e6413b6742bc210fde4881.svg'} alt="alt text" />
              <p className={styles.benefitDesc}>{props.text4}</p>
            </div>

            <div className={styles.benefitItem1}>
              <img className={styles.benefitIcon} src={'/assets/7068fedc84d45febb66c68f1ca01164d.svg'} alt="alt text" />
              <p className={styles.benefitDesc1}>{props.text41}</p>
            </div>

            <div className={styles.benefitItem2}>
              <img className={styles.benefitIcon} src={'/assets/66453a96f099da67eea941e15c314339.svg'} alt="alt text" />
              <p className={styles.benefitDesc}>{props.text42}</p>
            </div>
          </div>

          <p className={styles.subHeading}>{props.highlight2}</p>
          <p className={styles.description}>{props.highlight3}</p>
        </div>

        <button className={styles.ctaBtn} style={{ '--color': props.btn }}
                onClick={() => window.location.href = props.link}>
          {/* TODO */}
          <span className={styles.ctaText}>{props.btnText}</span>
          <img className={styles.ctaIcon} src={'/assets/1abcff9515ac8f3a1d2e7f4469f3749a.svg'} alt="alt text" />
        </button>
      </article>
    </section>
  );
}

NewsCard.propTypes = {
  className: PropTypes.string,
  contentBox3: PropTypes.string.isRequired,
  image34: PropTypes.string.isRequired,
  text4: PropTypes.string.isRequired,
  text41: PropTypes.string.isRequired,
  text42: PropTypes.string.isRequired,
  highlight2: PropTypes.string.isRequired,
  highlight3: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NewsCard;
