import React, {useState} from 'react';
import {Link} from 'react-router-dom'; // Для переходов
import headerSectionStyles from './headerSection.module.scss';

function RenderHeaderSection(props) {
    const [searchQuery, setSearchQuery] = useState(''); // Для состояния поиска

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value); // Обновляем поисковый запрос
    };

    return (
        <section className={headerSectionStyles.headerSection}>
            {/* Main header section with logo and search */}
            <div className={headerSectionStyles.topWrapper}>
                <Link to="/Homepage" className={headerSectionStyles.link}>
                    <div className={headerSectionStyles.logoContainer}>
                        {/* Переход на главную страницу по клику на логотип или название магазина */}
                        <div className={headerSectionStyles.logoAccent}/>
                        <p className={headerSectionStyles.brandName}>WeMarket</p>
                    </div>
                </Link>

                <div className={headerSectionStyles.searchBox}>
                    <div className={headerSectionStyles.searchInputWrapper}>
                        {/* Поле поиска с вводом текста */}
                        <input
                            type="text"
                            className={headerSectionStyles.searchInput}
                            placeholder="Search for anything..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <img
                            className={headerSectionStyles.searchIcon}
                            src={'/assets/38dd0c027b8f2f5b43f08b077f691267.svg'}
                            alt="search icon"
                        />
                    </div>
                </div>

                <div className={headerSectionStyles.unnamed}>
                    <Link to="/wishlist">
                        <img
                            className={headerSectionStyles.image4}
                            src={'/assets/cart_8t6kp9u3x5i4.svg'}
                            alt="alt text"
                        />
                    </Link>
                    <Link to="/wishlist">
                        <img
                            className={headerSectionStyles.image4}
                            src={'/assets/cd71653f0af1c44308b7c42d9ca6dcc7.svg'}
                            alt="alt text"
                        />
                    </Link>
                    <Link to="/wishlist"> {/* Переход на страницу списка желаемого */}
                        <img
                            className={headerSectionStyles.image41}
                            src={'/assets/0c2124c485f095a02f9384dd4f348c06.svg'}
                            alt="alt text"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default RenderHeaderSection;

