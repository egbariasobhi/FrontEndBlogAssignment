import "./HomePageHeaderContent.css";

// this component of the heder content just for the home page.
export const HomePageHeaderContent = ({ title, description }) => {
  return (
    <>
      <div className="home_Page_Header_Content">
        <div className="home_page_content_frame">
          <div className="title">
            <span className="hi_button">👋 Meet Personally</span>
            <h1>{title}</h1>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
