import React from "react";

const Card = ({ title, description, imgSource, source, url, category}) => {
        let categoryImage
        switch (category) {
                case 'technology':
                        categoryImage = 'http://www.nato.int/nato_static_fl2014/assets/pictures/images_mfu/2020/5/stock/200504-AI1.jpg'
                        break;
                case 'business':
                        categoryImage = 'http://treelogic.com/es/assets/images/business-intelligence-1-1280x853.jpg'
                        break;
                case 'science':
                        categoryImage = 'https://epi-rsc.rsc-cdn.org/globalassets/05-journals-books-databases/our-journals/chemical-science/chemical-science-header-image.jpg?version=8a759ae3'
                        break;
                default:
                        break;
        }
        return (
                <div className="bg-white w-4/5 min-h-60 rounded-lg my-3 overflow-hidden p-1">
                        <a href={url} target="_blank">
                                <img
                                        src={
                                                imgSource ||
                                                categoryImage
                                        }
                                        alt={title}
                                />
                                <h2 className="font-bold">{title}</h2>
                                <p className="p-1">{description || 'Sin descripción'}</p>
                                <p className="italic">Fuente: {source}</p>
                        </a>
                </div>
        );
};

export default Card;
