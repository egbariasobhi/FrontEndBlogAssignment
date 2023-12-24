import "./addAndEditBlog.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../../providers/blog-providers";
import img from "./Blog.jpg";

export const AddAndEditBlog = ({
  buttonText,
  title,
  description,
  hederTitle,
  EditedBlogId,
}) => {
  const navigate = useNavigate();
  const { addBlog, editBlogById } = useContext(BlogContext);

  const [newBlogTitle, setNewBlogTitle] = useState(title);
  const [newBlogDescription, setNewBlogDescription] = useState(description);

  const scrollWin = () => {
    window.scrollTo(0, 700);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleOnClickAddBlog = () => {
    addBlog({
      id: Date.now(),
      title: newBlogTitle,
      date: new Date().toLocaleDateString("en-ZA"),
      description: newBlogDescription,
      img: img,
    });
    //clear the input and the text area
    setNewBlogTitle("");
    setNewBlogDescription("");
    navigate("/HomePage");
    scrollWin();
  };

  const handleOnClickEditBlog = () => {
    editBlogById(EditedBlogId, newBlogTitle, newBlogDescription);
    navigate("/HomePage");
    scrollWin();
  };

  const handelInput = (event) => {
    setNewBlogTitle(event.target.value);
  };

  const handelText = (event) => {
    setNewBlogDescription(event.target.value);
  };

  return (
    <>
      <div className="BlogHeaderContent">
        <div className="content_frame">
          <div className="title">
            <h1>{hederTitle}</h1>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <input
                className="addBlogInput"
                value={newBlogTitle}
                type="text"
                placeholder="Blog Title"
                onChange={handelInput}
              />
            </div>
            <div>
              <textarea
                value={newBlogDescription}
                className="addBlogText"
                name="describtion"
                id=""
                cols="10"
                rows="10"
                placeholder="Blog Description"
                onChange={handelText}
              ></textarea>
            </div>
            <button
              // to pik create or edit blog
              onClick={
                buttonText === "Create Blog"
                  ? handleOnClickAddBlog
                  : handleOnClickEditBlog
              }
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
