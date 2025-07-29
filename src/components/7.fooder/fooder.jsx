import "./Fooder.css";
const Fooder = () => {
    return (
        <footer className="fooder">
            <div className="fooder_content">
                <h2 className="fooder_title">Contact Us</h2>
                <p className="fooder_description">
                    We would love to hear from you! Whether you have a question about our services, need assistance with a project, or just want to say hello, feel free to reach out to us.
                </p>
                <form className="fooder_form">
                    <div className="form_group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your Name" className="fooder_input" required />
                    </div>
                    <div className="form_group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Your Email" className="fooder_input" required />
                    </div>
                    <div className="form_group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Your Message" className="fooder_textarea" required></textarea>
                    </div>
                    <button type="submit" className="fooder_button">Send Message</button>
                </form>
            </div>
        </footer>
    );
}
export default Fooder;
