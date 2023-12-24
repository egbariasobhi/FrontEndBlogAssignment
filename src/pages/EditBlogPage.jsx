import { NavBar } from "../components/navbar/NavBar";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";
import { AddAndEditBlog } from "../components/addAndEditBlog/addAndEditBlog";
import { BlogContext } from "../providers/blog-providers";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export const EditBlogPage = () => {
  const { data } = useContext(BlogContext);

  const params = useParams();
  const id = parseInt(params.id);

  const blog = data.find((item) => {
    return item.id === id;
  });

  return (
    <>
      <NavBar />
      <AddAndEditBlog
        buttonText={"Edit"}
        title={blog.title}
        description={blog.description}
        hederTitle={"Edit Your Blog"}
        EditedBlogId={blog.id}
      />
      <Contacts />
      <CopyRight />
    </>
  );
};
