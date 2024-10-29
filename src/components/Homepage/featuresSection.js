import React from 'react';

import featuresSectionStyles from './featuresSection.module.scss';

function renderFeaturesSection(props) {
  return (
    <section className={featuresSectionStyles.featuresSection}>
      {/* Service features showcase */}

      <div className={featuresSectionStyles.section3}>
        <div className={featuresSectionStyles.flex_row}>
          <div className={featuresSectionStyles.content_box2}>
            <div className={featuresSectionStyles.flex_row1}>
              <img
                className={featuresSectionStyles.image17}
                src={'/assets/63b7c94f0a838d42b0eeba2218889d99.svg'}
                alt="alt text"
              />

              <div className={featuresSectionStyles.flex_col}>
                <div className={featuresSectionStyles.text1}>Fasted Delivery</div>
                <div className={featuresSectionStyles.text2}>Delivery in 24/H</div>
              </div>
            </div>
          </div>

          <div className={featuresSectionStyles.color12} />

          <div className={featuresSectionStyles.content_box2}>
            <div className={featuresSectionStyles.flex_row2}>
              <img
                className={featuresSectionStyles.image17}
                src={'/assets/485369d53d58288c500c24fc331e72ec.svg'}
                alt="alt text"
              />

              <div className={featuresSectionStyles.flex_col1}>
                <div className={featuresSectionStyles.text1}>24 Hours Return</div>
                <div className={featuresSectionStyles.text21}>100% money-back guarantee</div>
              </div>
            </div>
          </div>

          <div className={featuresSectionStyles.color12} />

          <div className={featuresSectionStyles.content_box2}>
            <div className={featuresSectionStyles.flex_row3}>
              <img
                className={featuresSectionStyles.image17}
                src={'/assets/8ea23fa271b14c3932828a8299feb26c.svg'}
                alt="alt text"
              />

              <div className={featuresSectionStyles.flex_col2}>
                <div className={featuresSectionStyles.text1}>Secure Payment</div>
                <div className={featuresSectionStyles.text22}>Your money is safe</div>
              </div>
            </div>
          </div>

          <div className={featuresSectionStyles.color12} />

          <div className={featuresSectionStyles.content_box2}>
            <div className={featuresSectionStyles.flex_row3}>
              <img
                className={featuresSectionStyles.image17}
                src={'/assets/22e745f665646d75af0c5ef2fe903b56.svg'}
                alt="alt text"
              />

              <div className={featuresSectionStyles.flex_col3}>
                <div className={featuresSectionStyles.text11}>Support 24/7</div>
                <div className={featuresSectionStyles.text23}>Live contact/message</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderFeaturesSection;
