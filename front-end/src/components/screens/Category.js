import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Posts from "../parts/Posts";
import BreadCrumb from "../parts/BreadCrumb";
import SideBar from "../parts/SideBar";


const Category = () => {
    return(
        <>
            <Header />
            <BreadCrumb />
            <section className="blog-section">
		    	<div className="container">
			    	<div className="row">
					<Posts />
                    <SideBar />
				    </div>
			    </div>
		    </section>
            <Footer />
        </>
    );
};

export default Category;