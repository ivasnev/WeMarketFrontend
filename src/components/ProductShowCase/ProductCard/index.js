import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {Link} from "react-router-dom"

import styles from './index.module.scss';

function ProductCard(props) {
    return (
        <section
            className={cn(styles.contentWrapper, props.className, 'product-card')}
            style={{'--color': props.contentBox}}>
            <Link to={`/ProductDetail/${props.id}`} key={props.id}>

                <article className={styles.mediaContainer}>
                    <img className={styles.featureImg} src={props.image28} alt="alt text"/>
                    <p className={styles.description}>{props.paragraph}</p>

                    <div className={styles.textContainer}>
                        <p className={styles.caption}>{props.text3}</p>
                    </div>
                </article>
            </Link>
        </section>
    );
}

ProductCard.propTypes = {
    className: PropTypes.string,
    contentBox: PropTypes.string.isRequired,
    image28: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    text3: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default ProductCard;
