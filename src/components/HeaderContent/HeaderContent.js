import "./HeaderContent.css";
import { useContext, useState } from "react";
import { BlogContext } from "../../providers/blog-providers";

export const HeaderContent = ({ title, description }) => {
  const [term, setTerm] = useState("");
  const { searchBlog } = useContext(BlogContext);

  const handleSearchInput = (e) => {
    setTerm(e.target.value);
    searchBlog(e.target.value);
  };

  return (
    <>
      <div className="HeaderContent">
        <div className="content_frame">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
          <input
            value={term}
            className="searchInput"
            type="text"
            placeholder="Search for a Blog"
            onChange={handleSearchInput}
          />
        </div>
      </div>
    </>
  );
};
