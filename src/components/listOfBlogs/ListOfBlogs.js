import "./ListOfBlogs.css";
import { BlogCard } from "../blogCard/BlogCard";

export const ListOfBlogs = ({ data }) => {
  return (
    <>
      <div className="cards_section">
        <div className="list_container">
          {data.map((data) => (
            <div key={data.id}>
              <BlogCard
                img={data.img}
                title={data.title}
                description={data.description}
                date={data.date}
                id={data.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
