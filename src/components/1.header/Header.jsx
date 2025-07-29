import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="Header__left">
        <a href="#home" className="logo">
          <img src="/vite.svg" alt="Vite logo" className="Header__logo" />
        </a>
      </div>
      <nav className="Header__nav">
        <ul>
          <li>
            <a href="#home">Home</a>
         </li>
          <li>
            <a href="#service">About</a>
          </li>
          <li>
            <a href="#project">About</a>
          </li>
          <li>
            <a href="#ceo-message">About</a>
            </li>
          <li>
            <a href="#contact">About</a>
            </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

