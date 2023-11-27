import React from "react";
import "./blog-card.scss";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const BlogCard = ({
  thumbnail,
  title,
  shortDesc,
  postDate,
  writerName,
  writerImg,
  linkPath,
}) => {
  return (
    <div className="blog-card">
      <div className="thumbnail">
        <img src={thumbnail} alt="blog-thumbnail" />
        <Link to={linkPath}>
          <div className="icon-box">
            <GoArrowUpRight className="upright-arrow-icon" />
          </div>
        </Link>
      </div>

      <div className="blog-details">
        <Link to={linkPath} className="blog-card-title">
          {title}
        </Link>
        <p className="blog-card-desc">{shortDesc}</p>
      </div>

      <div className="meta-data">
        <div className="writer-info">
          {/* {writerImg} */}
          <img src={writerImg} className="writer-pic" alt="writer-picture" />
          <p>By {writerName}</p>
        </div>

        <p className="date">{postDate}</p>
      </div>
    </div>
  );
};

export default BlogCard;
