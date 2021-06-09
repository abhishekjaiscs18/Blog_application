import React from "react";

const PostItem = (props) => {
  return (
    <div className="news-post article-post2">
      <div className="row">
        <div className="col-md-6">
          <div className="image-holder">
            <img src="upload/blog/f1.jpg" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <a className="text-link" href="#">
            Category1
          </a>
          <h2>
            <a href="single-post.html">Post Title</a>
          </h2>
          <ul className="post-tags">
            <li>3 days ago</li>
            <li>
              <a href="#">3 comments</a>
            </li>
            <li>
              by <a href="#">John Smith</a>
            </li>
          </ul>
          <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula <a href="#">sollicitudin laoreet viverra</a>, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
								<p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent <a href="#">elementum hendrerit </a> tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
