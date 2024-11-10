import {useState} from 'react';
import productSectionStyles from '../ShopPage/productSection.module.scss';
import paginationStyles from './pagination.module.scss';

const Pagination = ({totalPages, onPageChange}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        onPageChange(pageNumber);  // вызываем функцию для загрузки данных страницы
    };

    const handlePreviousClick = () => {
        if (currentPage > 1) {
            handlePageClick(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            handlePageClick(currentPage + 1);
        }
    };

    // Вычисляем диапазон страниц для отображения
    const pagesToShow = 7;
    let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    let endPage = startPage + pagesToShow - 1;

    // Корректируем, если endPage выходит за пределы totalPages
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - pagesToShow + 1);
    }

    return (
        <nav className={productSectionStyles.paginationBar}>
            {/* Стрелка влево */}
            <img
                className={productSectionStyles.image27}
                src={'/assets/d44fa2e21d61a4c5617434ece23f5cec.svg'}
                alt="Previous"
                onClick={handlePreviousClick}
                style={{cursor: 'pointer'}}
            />

            <div className={productSectionStyles.flex_row8}>
                {/* Отображаем страницы в рассчитанном диапазоне */}
                {Array.from({length: endPage - startPage + 1}, (_, index) => {
                    const pageNumber = startPage + index;
                    return (
                        <div
                            key={pageNumber}
                            className={`${
                                currentPage === pageNumber ? paginationStyles.activePage : paginationStyles.inactivePage
                            }`}
                            onClick={() => handlePageClick(pageNumber)}
                            style={{cursor: 'pointer'}}
                        >
                            <div
                                className={`${
                                    currentPage === pageNumber ? paginationStyles.text81 : paginationStyles.text72
                                }`}
                            >{pageNumber}</div>
                        </div>
                    );
                })}
            </div>

            {/* Стрелка вправо */}
            <img
                className={productSectionStyles.image271}
                src={'/assets/9f22d1670548114363f9990f82eee939.svg'}
                alt="Next"
                onClick={handleNextClick}
                style={{cursor: 'pointer'}}
            />
        </nav>
    );
};

export default Pagination;
