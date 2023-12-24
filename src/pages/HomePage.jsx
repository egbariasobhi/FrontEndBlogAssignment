import { NavBar } from "../components/navbar/NavBar";
import { HomePageHeaderContent } from "../components/homePage_header_content/HomePageHeaderContent";
import { ListOfBlogs } from "../components/listOfBlogs/ListOfBlogs";
import { ViewAllButton } from "../components/buttons/Buttons";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";
import { BlogContext } from "../providers/blog-providers";
import { useContext } from "react";

export const HomePage = () => {
  const { data } = useContext(BlogContext);

  return (
    <div id="HomePage">
      <NavBar />
      <HomePageHeaderContent
        title="Minimal blog template for creative expressions"
        description="100% customisable and SEO-friendly blog template for personal and commercial purposes."
      />
      <ViewAllButton title="Daily Digest" />
      <ListOfBlogs data={data.slice(0, 3)} />

      <ViewAllButton title="Design Tools" />
      <ListOfBlogs data={data.slice(3, 6)} />

      <ViewAllButton title="Tutorials" />
      <ListOfBlogs data={data.slice(6, 9)} />
      <Contacts />
      <CopyRight />
    </div>
  );
};
