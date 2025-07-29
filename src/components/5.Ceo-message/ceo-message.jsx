import "./ceo-message.css";

const CeoMessage = () => {
  return (
    <section className="ceo-message">
      <div className="ceo-message_content">
        <h2 className="ceo-message_title">Message from the CEO</h2>
        <p className="ceo-message_description">
          Welcome to ABS Construction. With over 20 years of experience, we are committed to delivering high-quality construction projects that meet the needs of our clients. Our team of experts is dedicated to ensuring that every project is completed on time and within budget.
        </p>
        <p className="ceo-message_signature">- John Doe, CEO</p>
      </div>
        <div className="ceo-message_image">
            <img 
            src="/ceo.jpg" 
            alt="CEO" className="ceo-message_photo" 
            />
            <div className="ceo-message_overlay">
              <p className="ceo-message_overlay-text">Our Vision</p>
            </div>
        </div>
    </section>
  );
}
export default CeoMessage;
