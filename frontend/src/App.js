import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Языковые данные
const languages = {
  uz: {
    title: 'STUDIO 21',
    buttons: {
      rental: 'Studiya ijari',
      packages: 'Ijara paketlari',
      production: 'Prodakshn',
      portfolio: 'Portfolio',
      rules: 'Qoidalar'
    },
    subtitles: {
      packages: '60% gacha tejamkor',
      production: 'Reels, Podcast, YouTube'
    },
    contact: {
      phone: 'Telefon',
      email: 'Email',
      instagram: 'Instagram'
    },
    modals: {
      rental: {
        title: 'Studiya ijari',
        book: 'Bron qilish',
        halls: {
          cast: 'CAST zali',
          content: 'CONTENT zali',
          cyclo: 'CYCLO zali'
        }
      },
      packages: {
        title: 'Ijara paketlari',
        book: 'Bron qilish'
      },
      portfolio: {
        title: 'Portfolio',
        reels: 'Reels',
        youtube: 'YouTube'
      }
    }
  },
  ru: {
    title: 'STUDIO 21',
    buttons: {
      rental: 'Аренда студии',
      packages: 'Пакеты на аренду',
      production: 'Продакшн',
      portfolio: 'Портфолио',
      rules: 'Правила'
    },
    subtitles: {
      packages: 'на 60% выгодно',
      production: 'Reels, Podcast, YouTube'
    },
    contact: {
      phone: 'Телефон',
      email: 'Email',
      instagram: 'Instagram'
    },
    modals: {
      rental: {
        title: 'Аренда студии',
        book: 'Забронировать',
        halls: {
          cast: 'Зал CAST',
          content: 'Зал CONTENT',
          cyclo: 'Зал CYCLO'
        }
      },
      packages: {
        title: 'Пакеты на аренду',
        book: 'Забронировать'
      },
      portfolio: {
        title: 'Портфолио',
        reels: 'Рилсы',
        youtube: 'YouTube'
      }
    }
  },
  en: {
    title: 'STUDIO 21',
    buttons: {
      rental: 'Studio Rental',
      packages: 'Rental Packages',
      production: 'Production',
      portfolio: 'Portfolio',
      rules: 'Rules'
    },
    subtitles: {
      packages: 'up to 60% savings',
      production: 'Reels, Podcast, YouTube'
    },
    contact: {
      phone: 'Phone',
      email: 'Email',
      instagram: 'Instagram'
    },
    modals: {
      rental: {
        title: 'Studio Rental',
        book: 'Book Now',
        halls: {
          cast: 'CAST Hall',
          content: 'CONTENT Hall',
          cyclo: 'CYCLO Hall'
        }
      },
      packages: {
        title: 'Rental Packages',
        book: 'Book Now'
      },
      portfolio: {
        title: 'Portfolio',
        reels: 'Reels',
        youtube: 'YouTube'
      }
    }
  }
};

function App() {
  const [loading, setLoading] = useState(true);
  const [showLanguageSelect, setShowLanguageSelect] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ru');
  const [activeModal, setActiveModal] = useState(null);
  const [selectedHall, setSelectedHall] = useState(null);
  const [portfolioFilter, setPortfolioFilter] = useState('all');

  const t = languages[selectedLanguage];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowLanguageSelect(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setShowLanguageSelect(false);
  };

  const halls = {
    cast: {
      name: t.modals.rental.halls.cast,
      description: 'Профессиональная съемка видео контента',
      price: { day: '650 000', evening: '750 000', night: '950 000' },
      image: 'https://images.unsplash.com/photo-1584985429577-659bd12ed736',
      features: ['Профессиональное освещение', 'Камерное оборудование', 'Звукозапись']
    },
    content: {
      name: t.modals.rental.halls.content,
      description: 'Создание контента для социальных сетей',
      price: { day: '800 000', evening: '900 000', night: '1 100 000' },
      image: 'https://images.unsplash.com/photo-1653937049145-b37f88661a81',
      features: ['Мобильная съемка', 'Инстаграм контент', 'Профессиональный свет']
    },
    cyclo: {
      name: t.modals.rental.halls.cyclo,
      description: 'Специализированный зал для спорт контента',
      price: { day: '500 000', evening: '600 000', night: '800 000' },
      image: 'https://images.unsplash.com/photo-1646667006850-a576c3e9016f',
      features: ['Спорт оборудование', 'Динамичная съемка', 'Тренировочное пространство']
    }
  };

  const packages = [
    {
      name: '🟢 Базовый',
      hours: '4 часа в месяц',
      prices: { day: '1 600 000', evening: '2 000 000', night: '2 400 000' },
      image: 'https://images.unsplash.com/photo-1568235924843-37e6a255fc50'
    },
    {
      name: '🔵 Рабочий',
      hours: '8 часов в месяц',
      prices: { day: '2 900 000', evening: '3 700 000', night: '4 500 000' },
      image: 'https://images.unsplash.com/photo-1653937049145-b37f88661a81'
    },
    {
      name: '⚫ Контент',
      hours: '12 часов в месяц',
      prices: { day: '4 000 000', evening: '5 300 000', night: '6 500 000' },
      image: 'https://images.unsplash.com/photo-1584985429577-659bd12ed736'
    },
    {
      name: '🟤 Профи',
      hours: '20 часов в месяц',
      prices: { day: '5 800 000', evening: '7 800 000', night: '9 600 000' },
      image: 'https://images.unsplash.com/photo-1646667006850-a576c3e9016f'
    }
  ];

  const portfolioItems = {
    reels: [
      { id: 1, type: 'instagram', title: 'Fashion Reels', videoId: 'sample1' },
      { id: 2, type: 'instagram', title: 'Beauty Content', videoId: 'sample2' },
      { id: 3, type: 'instagram', title: 'Lifestyle Reels', videoId: 'sample3' },
      { id: 4, type: 'instagram', title: 'Product Showcase', videoId: 'sample4' },
      { id: 5, type: 'instagram', title: 'Dance Content', videoId: 'sample5' }
    ],
    youtube: [
      { id: 6, type: 'youtube', title: 'Brand Documentary', videoId: 'dQw4w9WgXcQ' },
      { id: 7, type: 'youtube', title: 'Corporate Video', videoId: 'dQw4w9WgXcQ' },
      { id: 8, type: 'youtube', title: 'Product Review', videoId: 'dQw4w9WgXcQ' },
      { id: 9, type: 'youtube', title: 'Interview Series', videoId: 'dQw4w9WgXcQ' },
      { id: 10, type: 'youtube', title: 'Educational Content', videoId: 'dQw4w9WgXcQ' }
    ]
  };

  const getFilteredPortfolio = () => {
    if (portfolioFilter === 'all') {
      return [...portfolioItems.reels, ...portfolioItems.youtube];
    }
    return portfolioItems[portfolioFilter] || [];
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="logo-container"
          initial={{ filter: 'blur(20px)', opacity: 0, scale: 0.8 }}
          animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="logo">21</h1>
        </motion.div>
      </div>
    );
  }

  if (showLanguageSelect) {
    return (
      <div className="language-select-screen">
        <motion.div
          className="language-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="language-title">Choose Language / Til tanlang / Выберите язык</h2>
          <div className="language-buttons">
            <motion.button
              className="language-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect('uz')}
            >
              🇺🇿 O'zbek
            </motion.button>
            <motion.button
              className="language-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect('ru')}
            >
              🇷🇺 Русский
            </motion.button>
            <motion.button
              className="language-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect('en')}
            >
              🇬🇧 English
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app">
      <motion.div
        className="main-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="main-logo-container"
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="main-logo">21</h1>
        </motion.div>

        <motion.div
          className="buttons-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[
            { key: 'rental', label: t.buttons.rental, icon: '🏠' },
            { key: 'packages', label: t.buttons.packages, icon: '📦', subtitle: t.subtitles.packages },
            { key: 'production', label: t.buttons.production, icon: '🎬', subtitle: t.subtitles.production },
            { key: 'portfolio', label: t.buttons.portfolio, icon: '🎨' },
            { key: 'rules', label: t.buttons.rules, icon: '📋' }
          ].map((button, index) => (
            <motion.button
              key={button.key}
              className="glass-button"
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveModal(button.key)}
            >
              <span className="button-icon">{button.icon}</span>
              <span className="button-label">{button.label}</span>
              {button.subtitle && (
                <span className="button-subtitle">{button.subtitle}</span>
              )}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="contact-info"
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span>+998 (90) 333-33-66</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span>vusialstudio@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <span>@21vstudio</span>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveModal(null);
              setSelectedHall(null);
            }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, filter: 'blur(10px)', opacity: 0 }}
              animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
              exit={{ scale: 0.8, filter: 'blur(10px)', opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={() => {
                  setActiveModal(null);
                  setSelectedHall(null);
                }}
              >
                ✕
              </button>
              
              <div className="modal-body">
                {activeModal === 'rental' && !selectedHall && (
                  <div className="rental-content">
                    <h2 className="modal-title">{t.modals.rental.title}</h2>
                    <div className="halls-grid">
                      {Object.entries(halls).map(([key, hall]) => (
                        <motion.div
                          key={key}
                          className="hall-card"
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSelectedHall(key)}
                        >
                          <img src={hall.image} alt={hall.name} />
                          <div className="hall-info">
                            <h3>{hall.name}</h3>
                            <p>{hall.description}</p>
                            <div className="hall-prices">
                              <span>День: {hall.price.day} сум</span>
                              <span>Вечер: {hall.price.evening} сум</span>
                              <span>Ночь: {hall.price.night} сум</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeModal === 'rental' && selectedHall && (
                  <div className="hall-detail">
                    <button 
                      className="back-button"
                      onClick={() => setSelectedHall(null)}
                    >
                      ← Назад
                    </button>
                    <h2 className="modal-title">{halls[selectedHall].name}</h2>
                    <div className="hall-detail-content">
                      <img src={halls[selectedHall].image} alt={halls[selectedHall].name} />
                      <div className="hall-detail-info">
                        <p>{halls[selectedHall].description}</p>
                        <div className="hall-features">
                          <h4>Особенности:</h4>
                          <ul>
                            {halls[selectedHall].features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="hall-pricing">
                          <h4>Стоимость:</h4>
                          <div className="price-list">
                            <div>🌅 День (09:00-18:00): {halls[selectedHall].price.day} сум/час</div>
                            <div>🌆 Вечер (18:00-24:00): {halls[selectedHall].price.evening} сум/час</div>
                            <div>🌃 Ночь (24:00-06:00): {halls[selectedHall].price.night} сум/час</div>
                          </div>
                        </div>
                        <button className="book-button">
                          {t.modals.rental.book}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeModal === 'packages' && (
                  <div className="packages-content">
                    <h2 className="modal-title">{t.modals.packages.title}</h2>
                    <p className="packages-subtitle">💸 Выгода до 60% по сравнению с почасовой оплатой!</p>
                    <div className="packages-grid">
                      {packages.map((pkg, index) => (
                        <div key={index} className="package-card">
                          <img src={pkg.image} alt={pkg.name} />
                          <div className="package-info">
                            <h3>{pkg.name}</h3>
                            <p className="package-hours">{pkg.hours}</p>
                            <div className="package-prices">
                              <div>День: {pkg.prices.day} сум</div>
                              <div>Вечер: {pkg.prices.evening} сум</div>
                              <div>Ночь: {pkg.prices.night} сум</div>
                            </div>
                            <button className="book-button">
                              {t.modals.packages.book}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeModal === 'portfolio' && (
                  <div className="portfolio-content">
                    <h2 className="modal-title">{t.modals.portfolio.title}</h2>
                    <div className="portfolio-filter">
                      <button 
                        className={`filter-button ${portfolioFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setPortfolioFilter('all')}
                      >
                        Все
                      </button>
                      <button 
                        className={`filter-button ${portfolioFilter === 'reels' ? 'active' : ''}`}
                        onClick={() => setPortfolioFilter('reels')}
                      >
                        {t.modals.portfolio.reels}
                      </button>
                      <button 
                        className={`filter-button ${portfolioFilter === 'youtube' ? 'active' : ''}`}
                        onClick={() => setPortfolioFilter('youtube')}
                      >
                        {t.modals.portfolio.youtube}
                      </button>
                    </div>
                    <div className="portfolio-grid">
                      {getFilteredPortfolio().map((item) => (
                        <div key={item.id} className="video-card">
                          {item.type === 'youtube' ? (
                            <iframe
                              src={`https://www.youtube.com/embed/${item.videoId}`}
                              title={item.title}
                              frameBorder="0"
                              allowFullScreen
                            ></iframe>
                          ) : (
                            <div className="instagram-placeholder">
                              <div className="instagram-icon">📱</div>
                              <p>Instagram Reels</p>
                              <p>{item.title}</p>
                            </div>
                          )}
                          <div className="video-info">
                            <h3>{item.title}</h3>
                            <p className="video-type">{item.type === 'youtube' ? 'YouTube' : 'Instagram'}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeModal === 'production' && (
                  <div className="production-content">
                    <h2 className="modal-title">Продакшн</h2>
                    <div className="services-grid">
                      <div className="service-card">
                        <h3>REELS</h3>
                        <p className="service-price">от 450.000 сум / 1 reels (мин. 5 reels)</p>
                        <ul className="service-details">
                          <li>// Аренда студии: 3 часа</li>
                          <li>// Услуги оператора: Есть</li>
                          <li>// Оборудование: 3 источника света/1 камера</li>
                          <li>// Монтаж: 5 reels</li>
                        </ul>
                        <button className="book-button">Заказать</button>
                      </div>
                      <div className="service-card">
                        <h3>ПОДКАСТ</h3>
                        <p className="service-price">3.500.000 сум</p>
                        <p className="service-description">Профессиональная запись в течение 3 часов для 2 человек</p>
                        <ul className="service-details">
                          <li>// Аренда студии: 3 часа</li>
                          <li>// Услуги оператора: 2 часа</li>
                          <li>// Оборудование: 3 источника света/3 камеры/2 микрофона</li>
                          <li>// Монтаж: Склейка</li>
                        </ul>
                        <button className="book-button">Заказать</button>
                      </div>
                      <div className="service-card">
                        <h3>YOUTUBE</h3>
                        <p className="service-price">от 2.000.000 сум / 1 шт (по запросу)</p>
                        <p className="service-description">Отличное решение для блогеров, экспертов и брендов</p>
                        <ul className="service-details">
                          <li>// Аренда студии: 1 час</li>
                          <li>// Услуги оператора: 1 час</li>
                          <li>// Оборудование: 3 источника света/1 камера</li>
                          <li>// Монтаж: 1 ролик</li>
                        </ul>
                        <button className="book-button">Заказать</button>
                      </div>
                    </div>
                  </div>
                )}

                {activeModal === 'rules' && (
                  <div className="rules-content">
                    <h2 className="modal-title">Правила бронирования и аренды STUDIO 21</h2>
                    <div className="rules-section">
                      <h3>🗓 БРОНИРОВАНИЕ</h3>
                      <ul>
                        <li>Бронирование становится действительным только после 100% предоплаты от стоимости услуг</li>
                        <li>В стоимость аренды входит до 5 человек в зале, включая съёмочную команду</li>
                        <li>При превышении лимита — доплата 25 000 сум/чел в час</li>
                        <li>При отмене или переносе бронирования предоплата не возвращается</li>
                      </ul>
                    </div>
                    <div className="rules-section">
                      <h3>🏠 АРЕНДА</h3>
                      <ul>
                        <li>Подготовка к съёмке и сбор оборудования должны быть завершены в рамках оплаченного времени</li>
                        <li>Началом брони считается заявленное время, а не фактическое прибытие</li>
                        <li>Минимальное время аренды — 1 час</li>
                        <li>Студию необходимо покинуть за 5 минут до окончания аренды для подготовки зала к следующему клиенту</li>
                        <li>После съёмки необходимо убрать свои вещи и оставить зал в чистом и исходном состоянии</li>
                      </ul>
                    </div>
                    <div className="rules-section">
                      <h3>⛔️ В СТУДИИ ЗАПРЕЩЕНО</h3>
                      <ul>
                        <li>Находиться в зале в уличной обуви (разрешается только абсолютно чистая сменная обувь)</li>
                        <li>Курить, распивать спиртные напитки и находиться под воздействием запрещённых веществ</li>
                        <li>Использовать конфетти, хлопушки, красящие вещества</li>
                        <li>Повреждать/ломать оборудование и декорации — ущерб оплачивается арендатором</li>
                        <li>Использовать скотч, клей, сверлить стены, а также иные механические воздействия на оборудование или интерьер</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;