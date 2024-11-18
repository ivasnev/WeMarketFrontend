import React, { useState } from "react";
import productSectionStyles from "../ProductDetail/productSection.module.scss";

const DescriptionTab = () => {
    const [activeTab, setActiveTab] = useState("description");

    const tabs = [
        { id: "description", label: "Description" },
        { id: "additional", label: "Additional information" },
        { id: "specification", label: "Specification" },
        { id: "review", label: "Review" },
    ];

    const tabContent = {
        description: (
            <>
                <p className={productSectionStyles.highlight2}>Description</p>
                <p className={productSectionStyles.text21}>
                    The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple
                    silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a
                    stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you
                    need.
                </p>
                <p className={productSectionStyles.text21}>
                    Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a
                    16‑core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes
                    codecs.
                </p>
            </>
        ),
        additional: (
            <>
                <p className={productSectionStyles.highlight2}>Additional Information</p>
                <p className={productSectionStyles.text21}>Here you can add additional details about the product.</p>
            </>
        ),
        specification: (
            <>
                <p className={productSectionStyles.highlight2}>Specification</p>
                <p className={productSectionStyles.text21}>Add detailed technical specifications here.</p>
            </>
        ),
        review: (
            <>
                <p className={productSectionStyles.highlight2}>Review</p>
                <p className={productSectionStyles.text21}>Customer reviews and ratings go here.</p>
            </>
        ),
    };

    return (
        <div className={productSectionStyles.content_box5}>
            <div className={productSectionStyles.flex_col6}>
                <div className={productSectionStyles.group}>
                    <hr className={productSectionStyles.line1} size={1} />

                    <div className={productSectionStyles.flex_row10}>
                        {tabs.map((tab) =>
                            tab.id === activeTab ? (
                                <div key={tab.id} className={productSectionStyles.content_box4}>
                                    <div className={productSectionStyles.text1} onClick={() => setActiveTab(tab.id)}>
                                        {tab.label}
                                    </div>
                                </div>
                            ) : (
                                <div key={tab.id} className={productSectionStyles.text8} onClick={() => setActiveTab(tab.id)}>
                                    {tab.label}
                                </div>
                            )
                        )}
                    </div>
                </div>

                <article className={productSectionStyles.productInfo}>
                    {tabContent[activeTab]}
                </article>
            </div>
        </div>
    );
};

export default DescriptionTab;
