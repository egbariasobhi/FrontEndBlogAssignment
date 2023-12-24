import { NavBar } from "../components/navbar/NavBar";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";
import { AddAndEditBlog } from "../components/addAndEditBlog/addAndEditBlog";

export const AddBlogPage = () => {
  return (
    <>
      <NavBar />
      <AddAndEditBlog
        buttonText={"Create Blog"}
        title={""}
        description={""}
        hederTitle={"Share Your Blog With Us"}
      />
      <Contacts />
      <CopyRight />
    </>
  );
};
