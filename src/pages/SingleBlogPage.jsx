import { NavBar } from "../components/navbar/NavBar";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";
import { BlogContext } from "../providers/blog-providers";
import { ListOfBlogs } from "../components/listOfBlogs/ListOfBlogs";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { SingleBlogPageHeader } from "../components/singleBlogPageHeader/singleBlogPageHeader";

export const SingleBlogPage = () => {
  const { data, deleteBlogById } = useContext(BlogContext);

  // using params to get blog's id, and with the id we get the right blog from the data.
  const params = useParams();
  const id = parseInt(params.id);

  // get a specific blog by id to send the blog properties to (SingleBlogPageHeader) component
  const blog = data.find((item) => {
    return item.id === id;
  });

  // in the return i used slice method to sent the last 3 blogs (not the hole blogs)
  return (
    <>
      <NavBar />
      <SingleBlogPageHeader
        id={blog.id}
        img={blog.img}
        description={blog.description}
        title={blog.title}
        deleteBlogById={deleteBlogById}
      />
      <ListOfBlogs data={data.slice(0, 3)} />
      <Contacts />
      <CopyRight />
    </>
  );
};
