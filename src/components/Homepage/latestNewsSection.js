import React from 'react';
import NewsCard from '../NewsCard/index';
import latestNewsSectionStyles from './latestNewsSection.module.scss';
import newsData from "../../mockedData/news"

function renderLatestNewsSection(props) {

  return (
      <section className={latestNewsSectionStyles.latestNewsSection}>
        <div className={latestNewsSectionStyles.wrapper17}>
          <article className={latestNewsSectionStyles.newsContainer}>
            <h2 className={latestNewsSectionStyles.title1}>Latest News</h2>

            <div className={latestNewsSectionStyles.newsGrid}>
              {newsData.slice(0, 3).map((news, index) => (
                  <NewsCard
                      key={index}
                      className={latestNewsSectionStyles.content_box6}
                      contentBox3={news.contentBox3}
                      image34={news.image34}
                      text4={news.text4}
                      text41={news.text41}
                      text42={news.text42}
                      highlight2={news.highlight2}
                      highlight3={news.highlight3}
                      btn={news.btn}
                      btnText={news.btnText}
                      link={news.link}
                  />
              ))}
            </div>
          </article>
        </div>
      </section>
  );
}

export default renderLatestNewsSection;
