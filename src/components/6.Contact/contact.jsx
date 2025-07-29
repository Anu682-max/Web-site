
import "./contact.css";
const Contact = () => {
    return (
        <section className="contact">
            <div className="contact_content">
                <h2 className="contact_title">Contact Us</h2>
                <p className="contact_description">
                    We would love to hear from you! Whether you have a question about our services, need assistance with a project, or just want to say hello, feel free to reach out to us.
                </p>
                <form className="contact_form">
                    <div className="form_group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your Name" className="contact_input" required />
                    </div>
                    <div className="form_group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Your Email" className="contact_input" required />
                    </div>
                    <div className="form_group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Your Message" className="contact_textarea" required></textarea>
                    </div>
                    <button type="submit" className="contact_button">Send Message</button>
                </form>
                </div>
                </section>
    );
};
export default Contact;


                
          