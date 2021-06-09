import React from "react";
import Header from "../parts/Header";
import Slider from "../parts/Slider";
import Footer from "../parts/Footer";
import TreandingPosts from "../parts/TrendingPosts";
import FreshStories from "../parts/FreshStories";

const Home = () => {
    return(
        <>
            <Header />
            <Slider />
            <TreandingPosts />
            <FreshStories />
            <Footer />
        </>
    );
}

export default Home;