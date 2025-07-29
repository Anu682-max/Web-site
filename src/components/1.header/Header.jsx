import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="Header__left">
        <a href="#home" className="logo">
          <img src="/vite.svg" alt="Vite logo" className="Header__logo" />
          <span className="Header__brand">ABS Констракшн</span>
        </a>
      </div>
      <nav className="Header__nav">
        <ul>
          <li>
            <a href="#home">Нүүр</a>
          </li>
          <li>
            <a href="#about">Бидний тухай</a>
          </li>
          <li>
            <a href="#service">Үйлчилгээ</a>
          </li>
          <li>
            <a href="#project">Төслүүд</a>
          </li>
          <li>
            <a href="#contact">Холбоо барих</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
