import React from 'react';

import latestNewsSectionStyles from './latestNewsSection.module.scss';

function renderLatestNewsSection(props) {
  return (
    <section className={latestNewsSectionStyles.latestNewsSection}>
      {/* News and updates section */}

      <div className={latestNewsSectionStyles.wrapper17}>
        <article className={latestNewsSectionStyles.newsContainer}>
          <h2 className={latestNewsSectionStyles.title1}>Latest News</h2>

          <div className={latestNewsSectionStyles.newsGrid}>
            {/* Grid layout for news articles */}

            <div className={latestNewsSectionStyles.content_box6}>
              <div className={latestNewsSectionStyles.unnamed}>
                <img
                  className={latestNewsSectionStyles.image34}
                  src={'/assets/4f3ac76bf3b2d0bcd3e3ada9d465791b.png'}
                  alt="alt text"
                />

                <div className={latestNewsSectionStyles.unnamed1}>
                  <div className={latestNewsSectionStyles.unnamed2}>
                    <div className={latestNewsSectionStyles.unnamed3}>
                      <div className={latestNewsSectionStyles.unnamed4}>
                        <img
                          className={latestNewsSectionStyles.image9}
                          src={'/assets/5b5a7f5f76e6413b6742bc210fde4881.svg'}
                          alt="alt text"
                        />
                        <div className={latestNewsSectionStyles.text4}>Kristin</div>
                      </div>

                      <div className={latestNewsSectionStyles.unnamed5}>
                        <img
                          className={latestNewsSectionStyles.image91}
                          src={'/assets/7068fedc84d45febb66c68f1ca01164d.svg'}
                          alt="alt text"
                        />
                        <div className={latestNewsSectionStyles.text41}>19Dec, 2013</div>
                      </div>

                      <div className={latestNewsSectionStyles.unnamed6}>
                        <img
                          className={latestNewsSectionStyles.image92}
                          src={'/assets/66453a96f099da67eea941e15c314339.svg'}
                          alt="alt text"
                        />
                        <div className={latestNewsSectionStyles.text42}>453</div>
                      </div>
                    </div>

                    <p className={latestNewsSectionStyles.highlight2}>
                      Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.
                    </p>
                    <p className={latestNewsSectionStyles.highlight3}>
                      Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada
                      arcu metus posuere metus.
                    </p>
                  </div>

                  <button className={latestNewsSectionStyles.btn}>
                    {/* TODO */}
                    <div className={latestNewsSectionStyles.btn_text}>Read more</div>
                    <img
                      className={latestNewsSectionStyles.btn_icon}
                      src={'/assets/1abcff9515ac8f3a1d2e7f4469f3749a.svg'}
                      alt="alt text"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default renderLatestNewsSection;
