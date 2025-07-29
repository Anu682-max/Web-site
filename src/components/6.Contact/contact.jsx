import "./contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact_content">
        <h2 className="contact_title">Холбоо барих</h2>
        <p className="contact_description">
          Та асуулт, санал хүсэлт, хамтын ажиллагааны талаар бидэнтэй
          холбогдоорой. Бид танд хурдан шуурхай хариу өгөх болно!
        </p>
        <form className="contact_form">
          <div className="form_group">
            <label htmlFor="name">Нэр</label>
            <input
              type="text"
              id="name"
              placeholder="Таны нэр"
              className="contact_input"
              required
            />
          </div>
          <div className="form_group">
            <label htmlFor="email">Имэйл</label>
            <input
              type="email"
              id="email"
              placeholder="Таны имэйл"
              className="contact_input"
              required
            />
          </div>
          <div className="form_group">
            <label htmlFor="message">Зурвас</label>
            <textarea
              id="message"
              placeholder="Таны зурвас"
              className="contact_textarea"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact_button">
            Илгээх
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
