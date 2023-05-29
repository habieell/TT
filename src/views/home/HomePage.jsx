import React, { useState, useEffect } from 'react';
import images from '../../utils/images';
import "../../styles/HomePage.scss";
import { Title, ProductList, FilterView, Preloader } from '../../components/common';
import { ProductContext } from '../../context/productContext';
import { FilterContext } from '../../context/filterContext';
import { useContext } from 'react';

import { ToastContainer } from 'react-toastify';

const HomePage = () => {
    const { productsLoading } = useContext(ProductContext);
    const { filtered_products } = useContext(FilterContext);
    console.log(filtered_products);

    const [currentImage, setCurrentImage] = useState(images.banner_1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImage === images.banner_1) {
                setCurrentImage(images.banner_2);
            } else if (currentImage === images.banner_2) {
                setCurrentImage(images.banner_3);
            } else {
                setCurrentImage(images.banner_1);
            }
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [currentImage]);

    return (
        <main className='bg-secondary'>
            <section className='sc-banner'>
                <div className='banner-item'>
                    <img src={currentImage} alt="banner_image" className='img-cover' />
                </div>
            </section>

            <section className='sc-wrapper'>
                <Title title={"Our Products"} />
                {productsLoading ? (
                    <Preloader />
                ) : (
                    <div>
                        <FilterView />
                        <br />
                        <br />
                        <ProductList products={filtered_products} />
                    </div>
                )}
            </section>

            <ToastContainer />
        </main>
    )
}

export default HomePage;
