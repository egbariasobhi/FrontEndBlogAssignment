import "./BlogCard.css";
import { Link } from "react-router-dom";

export const BlogCard = ({ img, title, description, date, id }) => {
  const scrollWin = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="card">
        <div className="content">
          <p className="date">{date}</p>
          <h3 className="title">{title}</h3>
          <p className="description">
            {description}
            <span>
              <Link onClick={scrollWin} className="cardLink" to={`/${id}`}>
                &nbsp; Read More<i class="fa-solid fa-angles-right"></i>
              </Link>
            </span>
          </p>
        </div>
        <img src={img} alt="Avatar" />
      </div>
    </>
  );
};
