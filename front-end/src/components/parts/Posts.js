import React from "react";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import Postitem from "./PostItem";

const Posts = () => {
    return(
        <div className="col-lg-8">
			<div className="blog-box list-style">
                <Postitem />
                <Postitem />
                <Postitem />
                <Postitem />
                
                <Pagination />
			</div>
		</div>
    );
};

export default Posts;