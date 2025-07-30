import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_social">
          <a href="#" aria-label="Facebook">
            <svg width="24" height="24" fill="currentColor">
              <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="24" height="24" fill="currentColor">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1-6.25 6.25A6.25 6.25 0 0 1 12 5.75zm0 1.5a4.75 4.75 0 1 0 4.75 4.75A4.75 4.75 0 0 0 12 7.25zm6.5 1.25a1 1 0 1 1-1 1a1 1 0 0 1 1-1z" />
            </svg>
          </a>
        </div>
        <p className="footer_copyright">
          &copy; {new Date().getFullYear()} Монгол Барилга Групп. Бүх эрх хуулиар
          хамгаалагдсан.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
