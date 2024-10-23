import React from 'react'
import Slider from '../Slider/Slider'
import PopularCollections from '../PopularCollections/PopularCollections'
import BestSellerCard from '../BestSellerCard/BestSellerCard'
import LatestBlog from '../LatestBlog/LatestBlog'
import FAQ from '../FAQ/FAQ'

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className='container mx-auto'>
                <PopularCollections></PopularCollections>
                <BestSellerCard></BestSellerCard>
                <LatestBlog></LatestBlog>
                <FAQ></FAQ>
            </div>

        </div>
    )
}

export default Home