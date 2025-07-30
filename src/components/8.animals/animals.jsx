import "./animals.css";

const Animals = () => {
  return (
    <section className="animals" id="animals">
      <div className="animals__container">
        <div className="animals__header">
          <h2 className="gradient-text">Мал Аж Ахуйн Талаар</h2>
          <p className="animals__subtitle">
            Манай компани мал аж ахуйн барилга байгууламжийн талаар мэргэжлийн үйлчилгээ үзүүлдэг
          </p>
        </div>
        
        <div className="animals__grid">
          <div className="animal-card card floating">
            <div className="animal-icon">
              <img src="https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=120&h=120&fit=crop&crop=center" alt="Үхэр" />
            </div>
            <h3>Үхрийн сүрэг</h3>
            <p>Үхрийн хашаа, саалийн газар барих ажил</p>
            <ul>
              <li>Орчин үеийн үхрийн хашаа</li>
              <li>Автомат тэжээлийн систем</li>
              <li>Агаарын солилцооны систем</li>
            </ul>
          </div>

          <div className="animal-card card floating">
            <div className="animal-icon">
              <img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=120&h=120&fit=crop&crop=center" alt="Хонь" />
            </div>
            <h3>Хонь, Ямаа</h3>
            <p>Хонь ямааны хашаа, байшингийн барилга</p>
            <ul>
              <li>Өвөлжөөний байшин</li>
              <li>Хашааны систем</li>
              <li>Тэжээлийн талбай</li>
            </ul>
          </div>

          <div className="animal-card card floating">
            <div className="animal-icon">
              <img src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=120&h=120&fit=crop&crop=center" alt="Адуу" />
            </div>
            <h3>Адуу</h3>
            <p>Адууны жүчээ, хашаа барилгын ажил</p>
            <ul>
              <li>Адууны жүчээ</li>
              <li>Дасгалын талбай</li>
              <li>Тэжээлийн байгууламж</li>
            </ul>
          </div>

          <div className="animal-card card floating">
            <div className="animal-icon">
              <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=120&h=120&fit=crop&crop=center" alt="Ямаа" />
            </div>
            <h3>Ямаа</h3>
            <p>Кашмер ямааны тусгай хашааны барилга</p>
            <ul>
              <li>Кашмер ямааны хашаа</li>
              <li>Ноолуурын агуулах</li>
              <li>Эрүүл мэндийн байгууламж</li>
            </ul>
          </div>

          <div className="animal-card card floating">
            <div className="animal-icon">
              <img src="https://images.unsplash.com/photo-1539681333879-138b4f04c8c6?w=120&h=120&fit=crop&crop=center" alt="Тэмээ" />
            </div>
            <h3>Тэмээ</h3>
            <p>Тэмээний хашаа, байшингийн барилга</p>
            <ul>
              <li>Тэмээний хашаа</li>
              <li>Сүүний боловсруулах газар</li>
              <li>Ноосны агуулах</li>
            </ul>
          </div>

          <div className="animal-card card floating">
            <div className="animal-icon">
              <img src="https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=120&h=120&fit=crop&crop=center" alt="Гахай" />
            </div>
            <h3>Гахай</h3>
            <p>Орчин үеийн гахайн фермийн барилга</p>
            <ul>
              <li>Гахайн фермийн барилга</li>
              <li>Тэжээлийн систем</li>
              <li>Эрүүл ахуйн байгууламж</li>
            </ul>
          </div>
        </div>

        <div className="animals__features glass">
          <h3>Манай онцлог</h3>
          <div className="features__grid">
            <div className="feature__item">
              <div className="feature__icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="20" width="32" height="20" fill="#8B4513" rx="2"/>
                  <rect x="12" y="12" width="24" height="8" fill="#CD853F" rx="1"/>
                  <rect x="16" y="6" width="16" height="6" fill="#DEB887" rx="1"/>
                  <rect x="6" y="38" width="4" height="6" fill="#654321"/>
                  <rect x="38" y="38" width="4" height="6" fill="#654321"/>
                  <circle cx="20" cy="30" r="2" fill="#FFD700"/>
                  <circle cx="28" cy="30" r="2" fill="#FFD700"/>
                </svg>
              </div>
              <h4>Мэргэжлийн барилга</h4>
              <p>Мал аж ахуйн барилгын 15 жилийн туршлага</p>
            </div>
            <div className="feature__item">
              <div className="feature__icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="16" fill="#FF6B6B" stroke="#DC143C" strokeWidth="2"/>
                  <circle cx="24" cy="24" r="10" fill="#FF4444"/>
                  <circle cx="24" cy="24" r="4" fill="#CC0000"/>
                  <path d="M24 8v6M24 34v6M8 24h6M34 24h6" stroke="#DC143C" strokeWidth="2"/>
                  <path d="M16 16l4 4M28 28l4 4M32 16l-4 4M16 32l4-4" stroke="#DC143C" strokeWidth="1"/>
                </svg>
              </div>
              <h4>Дулааны систем</h4>
              <p>Өвлийн улиралд зориулсан дулааны систем</p>
            </div>
            <div className="feature__item">
              <div className="feature__icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4c-2 0-4 2-4 4v4c0 2 2 4 4 4s4-2 4-4V8c0-2-2-4-4-4z" fill="#4A90E2"/>
                  <path d="M20 16c-6 0-12 6-12 12s6 12 12 12h8c6 0 12-6 12-12s-6-12-12-12h-8z" fill="#87CEEB"/>
                  <circle cx="16" cy="28" r="2" fill="#4A90E2"/>
                  <circle cx="20" cy="32" r="1.5" fill="#4A90E2"/>
                  <circle cx="24" cy="30" r="1" fill="#4A90E2"/>
                  <circle cx="28" cy="34" r="1.5" fill="#4A90E2"/>
                  <circle cx="32" cy="28" r="2" fill="#4A90E2"/>
                </svg>
              </div>
              <h4>Усны систем</h4>
              <p>Автомат усны хангамжийн систем</p>
            </div>
            <div className="feature__item">
              <div className="feature__icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="16" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
                  <path d="M24 12l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z" fill="#FF8C00"/>
                  <path d="M16 8l4 8M32 8l-4 8M8 16l8 4M40 16l-8 4M8 32l8-4M40 32l-8-4M16 40l4-8M32 40l-4-8" stroke="#FFD700" strokeWidth="1"/>
                </svg>
              </div>
              <h4>Цахилгаан систем</h4>
              <p>Найдвартай цахилгаан хангамж</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Animals;
