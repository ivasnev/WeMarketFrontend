import React from 'react';

import headerSectionStyles from './headerSection.module.scss';

function renderHeaderSection(props) {
  return (
    <section className={headerSectionStyles.headerSection}>
      {/* Main header section with logo and search */}

      <div className={headerSectionStyles.topWrapper}>
        <div className={headerSectionStyles.logoContainer}>
          <div className={headerSectionStyles.logoAccent} />
          <p className={headerSectionStyles.brandName}>WeMarket</p>
        </div>

        <div className={headerSectionStyles.searchBox}>
          <div className={headerSectionStyles.searchInputWrapper}>
            <p className={headerSectionStyles.searchPlaceholder}>Search for anything...</p>
            <img
              className={headerSectionStyles.searchIcon}
              src={'/assets/38dd0c027b8f2f5b43f08b077f691267.svg'}
              alt="alt text"
            />
          </div>
        </div>

        <div className={headerSectionStyles.unnamed}>
          <div className={headerSectionStyles.wrapper1}>
            <div className={headerSectionStyles.unnamed1}>
              <img
                className={headerSectionStyles.image3}
                src={'/assets/19e81928eec4c78424c9b7aa68bd6286.svg'}
                alt="alt text"
              />
              <img
                className={headerSectionStyles.image2}
                src={'/assets/5b5da50bccadf240256a1ddd2eae609f.svg'}
                alt="alt text"
              />
              <img
                className={headerSectionStyles.image21}
                src={'/assets/5b5da50bccadf240256a1ddd2eae609f.svg'}
                alt="alt text"
              />
            </div>

            <div className={headerSectionStyles.block}>
              <div className={headerSectionStyles.info}>2</div>
            </div>
          </div>

          <img
            className={headerSectionStyles.image4}
            src={'/assets/cd71653f0af1c44308b7c42d9ca6dcc7.svg'}
            alt="alt text"
          />
          <img
            className={headerSectionStyles.image41}
            src={'/assets/0c2124c485f095a02f9384dd4f348c06.svg'}
            alt="alt text"
          />
        </div>
      </div>
    </section>
  );
}

export default renderHeaderSection;
