import React, { useState } from "react";
import "./ImageSlider.scss"; // Стили для слайдера
import productSectionStyles from "../ProductDetail/productSection.module.scss";

const ImageSlider = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    const handleThumbnailClick = (image) => {
        setCurrentImage(image);
    };

    return (
        <div className="image-slider">
            {/* Главное изображение */}
            <div className={"main-image"}>
                <img src={currentImage} alt="Selected" className={"img"} />
            </div>

            {/* Галерея миниатюр */}
            <div className="thumbnails">
                {images.slice(0,10).map((image, index) => (
                    <div
                        key={index}
                        className={`thumbnail ${
                            currentImage === image ? "active" : "inactive"
                        }`}
                        onClick={() => handleThumbnailClick(image)}
                    >
                        <img src={image} alt={`Thumbnail ${index}`} className={"img"} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
