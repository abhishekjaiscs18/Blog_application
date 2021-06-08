import React from "react";
import Header from "../parts/Header";
import Slider from "../parts/Slider";
import Footer from "../parts/Footer";
import TreandingPosts from "../parts/TrendingPosts";
import FreashStories from "../parts/FreshStrories";

const Home = () => {
    return(
        <>
            <Header />
            <Slider />
            <TreandingPosts />
            <FreashStories />
            <Footer />
        </>
    );
}

export default Home;