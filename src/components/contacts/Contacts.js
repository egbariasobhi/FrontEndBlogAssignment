import "./Contacts.css";

export const Contacts = () => {
  return (
    <>
      <div className="footer_content">
        <h3 className="footer_title">Personally Newsletter</h3>
        <p className="footer_description">
          A bi-weekly newsletter of design inspiration, resources and anything
          related to career development.
        </p>
        <form
          className="footer_form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="email"
            placeholder="Email Address"
            className="mail_input"
          />

          <input type="submit" value="Submit" className="submit_btn" />
        </form>
      </div>
    </>
  );
};
