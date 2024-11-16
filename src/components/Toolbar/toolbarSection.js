import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для навигации

import toolbarSectionStyles from './toolbarSection.module.scss';

function renderToolbarSection(props) {
  return (
      <section className={toolbarSectionStyles.section2}>
        <div className={toolbarSectionStyles.block1}>
          <div className={toolbarSectionStyles.unnamed}>

            <Link to="/track-order" className={toolbarSectionStyles.link}> {/* Ссылка на страницу Track Order */}
              <div className={toolbarSectionStyles.unnamed1}>
                <img
                    className={toolbarSectionStyles.image9}
                    src={'/assets/ffdd4f94cfacfe595d0223e8ac6d269b.svg'}
                    alt="Track Order"
                />
                <div className={toolbarSectionStyles.text2}>Track Order</div>
              </div>
            </Link>

            <Link to="/compare" className={toolbarSectionStyles.link}> {/* Ссылка на страницу Compare */}
              <div className={toolbarSectionStyles.unnamed2}>
                <img
                    className={toolbarSectionStyles.image91}
                    src={'/assets/0efdc34c0cb0cee0023cb89ac5a9d904.svg'}
                    alt="Compare"
                />
                <div className={toolbarSectionStyles.text21}>Compare</div>
              </div>
            </Link>

            <Link to="/customer-support" className={toolbarSectionStyles.link}> {/* Ссылка на страницу Customer Support */}
              <div className={toolbarSectionStyles.unnamed3}>
                <img
                    className={toolbarSectionStyles.image92}
                    src={'/assets/73d3b1ab63c2bbadd96a1f0b6d6d5c20.svg'}
                    alt="Customer Support"
                />
                <div className={toolbarSectionStyles.text22}>Customer Support</div>
              </div>
            </Link>

            <Link to="/need-help" className={toolbarSectionStyles.link}> {/* Ссылка на страницу Need Help */}
              <div className={toolbarSectionStyles.unnamed4}>
                <img
                    className={toolbarSectionStyles.image93}
                    src={'/assets/ff1701f95a26ff263d661a9648fd5670.svg'}
                    alt="Need Help"
                />
                <div className={toolbarSectionStyles.text23}>Need Help</div>
              </div>
            </Link>

          </div>
        </div>
      </section>
  );
}

export default renderToolbarSection;
