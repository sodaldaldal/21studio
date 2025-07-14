import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    // Загрузочный экран
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const FloatingMolecules = () => {
    const molecules = Array.from({ length: 20 }, (_, i) => (
      <motion.div
        key={i}
        className="molecule"
        initial={{ 
          x: Math.random() * window.innerWidth, 
          y: Math.random() * window.innerHeight 
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        transition={{
          duration: Math.random() * 20 + 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
    ));

    return <div className="molecules-container">{molecules}</div>;
  };

  const ModalContent = ({ type }) => {
    const content = {
      rental: {
        title: "Аренда студии",
        sections: [
          {
            title: "🌆 Дневная стоимость (09:00-18:00)",
            items: [
              "🔹 Зал CAST – 650 000 сум/час 🎥",
              "🔹 Зал CYCLO – 500 000 сум/час 🚴‍♂️", 
              "🔹 Зал CONTENT – 800 000 сум/час 📸"
            ]
          },
          {
            title: "🌉 Вечерняя стоимость (18:00-24:00)",
            items: [
              "🔹 Зал CAST – 750 000 сум/час 🎥",
              "🔹 Зал CYCLO – 600 000 сум/час 🚴‍♂️",
              "🔹 Зал CONTENT – 900 000 сум/час 📸"
            ]
          },
          {
            title: "🌃 Ночная стоимость (24:00-06:00)",
            items: [
              "🔹 Зал CAST – 950 000 сум/час 🎥",
              "🔹 Зал CYCLO – 800 000 сум/час 🚴‍♂️",
              "🔹 Зал CONTENT – 1 100 000 сум/час 📸"
            ]
          }
        ],
        included: [
          "✔️ 2 источника света",
          "🎤 Микрофоны Shure или петлички",
          "👥 До 5 человек в зале"
        ],
        image: "https://images.unsplash.com/photo-1654723011674-13e99382511d"
      },
      packages: {
        title: "Пакеты на аренду",
        subtitle: "💸 Выгода до 60% по сравнению с почасовой оплатой!",
        packages: [
          {
            name: "🟢 Базовый",
            hours: "4 часа в месяц",
            prices: {
              day: "1 600 000 сум",
              evening: "2 000 000 сум", 
              night: "2 400 000 сум"
            }
          },
          {
            name: "🔵 Рабочий",
            hours: "8 часов в месяц",
            prices: {
              day: "2 900 000 сум",
              evening: "3 700 000 сум",
              night: "4 500 000 сум"
            }
          },
          {
            name: "⚫ Контент",
            hours: "12 часов в месяц",
            prices: {
              day: "4 000 000 сум",
              evening: "5 300 000 сум",
              night: "6 500 000 сум"
            }
          },
          {
            name: "🟤 Профи",
            hours: "20 часов в месяц",
            prices: {
              day: "5 800 000 сум",
              evening: "7 800 000 сум",
              night: "9 600 000 сум"
            }
          }
        ],
        image: "https://images.unsplash.com/photo-1654723011688-81cfe9039446"
      },
      production: {
        title: "Продакшн",
        services: [
          {
            name: "REELS",
            price: "от 450.000 сум / 1 reels (мин. 5 reels)",
            details: [
              "// Аренда студии: 3 часа",
              "// Услуги оператора: Есть",
              "// Оборудование: 3 источника света/1 камера",
              "// Монтаж: 5 reels"
            ]
          },
          {
            name: "ПОДКАСТ",
            price: "3.500.000 сум",
            description: "Профессиональная запись в течение 3 часов для 2 человек",
            details: [
              "// Аренда студии: 3 часа",
              "// Услуги оператора: 2 часа",
              "// Оборудование: 3 источника света/3 камеры/2 микрофона",
              "// Монтаж: Склейка"
            ]
          },
          {
            name: "YOUTUBE",
            price: "от 2.000.000 сум / 1 шт (по запросу)",
            description: "Отличное решение для блогеров, экспертов и брендов",
            details: [
              "// Аренда студии: 1 час",
              "// Услуги оператора: 1 час",
              "// Оборудование: 3 источника света/1 камера",
              "// Монтаж: 1 ролик"
            ]
          }
        ],
        image: "https://images.unsplash.com/photo-1520717178299-4cf2701a5bc0"
      },
      portfolio: {
        title: "Портфолио",
        videos: [
          {
            title: "Reels проект",
            category: "Instagram Reels",
            thumbnail: "https://images.unsplash.com/photo-1655947714553-77bfe6a4b9ea",
            description: "Современный контент для социальных сетей"
          },
          {
            title: "Подкаст студия",
            category: "Podcast",
            thumbnail: "https://images.unsplash.com/photo-1549882391-b7fb5ac67fcc",
            description: "Профессиональная запись подкастов"
          }
        ],
        image: "https://images.unsplash.com/photo-1655947714553-77bfe6a4b9ea"
      },
      rules: {
        title: "Правила бронирования и аренды STUDIO 21",
        sections: [
          {
            title: "🗓 БРОНИРОВАНИЕ",
            rules: [
              "Бронирование становится действительным только после 100% предоплаты от стоимости услуг",
              "В стоимость аренды входит до 5 человек в зале, включая съёмочную команду",
              "При превышении лимита — доплата 25 000 сум/чел в час",
              "При отмене или переносе бронирования предоплата не возвращается"
            ]
          },
          {
            title: "🏠 АРЕНДА",
            rules: [
              "Подготовка к съёмке и сбор оборудования должны быть завершены в рамках оплаченного времени",
              "Началом брони считается заявленное время, а не фактическое прибытие",
              "Минимальное время аренды — 1 час",
              "Студию необходимо покинуть за 5 минут до окончания аренды для подготовки зала к следующему клиенту",
              "После съёмки необходимо убрать свои вещи и оставить зал в чистом и исходном состоянии"
            ]
          },
          {
            title: "⛔️ В СТУДИИ ЗАПРЕЩЕНО",
            rules: [
              "Находиться в зале в уличной обуви (разрешается только абсолютно чистая сменная обувь)",
              "Курить, распивать спиртные напитки и находиться под воздействием запрещённых веществ",
              "Использовать конфетти, хлопушки, красящие вещества",
              "Повреждать/ломать оборудование и декорации — ущерб оплачивается арендатором",
              "Использовать скотч, клей, сверлить стены, а также иные механические воздействия на оборудование или интерьер"
            ]
          },
          {
            title: "⚠️ ДОПОЛНИТЕЛЬНО",
            rules: [
              "⛔️ В случае нарушения правил администрация оставляет за собой право остановить съёмку без возврата оплаты",
              "🥼 Администрация не несёт ответственности за утерянные вещи",
              "🙂 Бронируя студию, вы автоматически соглашаетесь со всеми правилами"
            ]
          },
          {
            title: "🤖 ИИ-КОНТЕНТ / АВАТАРЫ",
            rules: [
              "Если вы используете съёмочный материал, отснятый в студии, для создания ИИ-аватаров, дипфейков или генеративного контента, студия оставляет за собой право:",
              "• приостановить съёмку без возврата оплаты",
              "• подать претензию на авторские права на использованные фоны/объекты/свет, если они явно распознаются и принадлежат студии",
              "📚 Согласно Закону Республики Узбекистан «Об авторском праве и смежных правах» (статья 5), объектами авторского права признаются:",
              "Произведения архитектуры, дизайна интерьера, декора, и иные произведения, созданные в результате творческой деятельности",
              "📌 Это означает, что использование узнаваемого пространства или элементов студии в коммерческих ИИ-проектах может нарушать авторские права владельца студии, если предварительно не согласовано"
            ]
          }
        ]
      }
    };

    return content[type] || null;
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <FloatingMolecules />
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

  return (
    <div className="app">
      <FloatingMolecules />
      
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
            { key: 'rental', label: 'Аренда студии', icon: '🏠' },
            { key: 'packages', label: 'Пакеты на аренду', icon: '📦', subtitle: 'на 60% выгодно' },
            { key: 'production', label: 'Продакшн', icon: '🎬', subtitle: 'Reels, Podcast, YouTube' },
            { key: 'portfolio', label: 'Портфолио', icon: '🎨' },
            { key: 'rules', label: 'Правила', icon: '📋' }
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
            onClick={() => setActiveModal(null)}
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
                onClick={() => setActiveModal(null)}
              >
                ✕
              </button>
              
              <div className="modal-body">
                {activeModal === 'rental' && (
                  <div className="rental-content">
                    <h2 className="modal-title">Аренда студии</h2>
                    <div className="rental-image">
                      <img src={ModalContent({ type: 'rental' }).image} alt="Студия" />
                    </div>
                    {ModalContent({ type: 'rental' }).sections.map((section, index) => (
                      <div key={index} className="price-section">
                        <h3>{section.title}</h3>
                        <ul>
                          {section.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="included-section">
                      <h3>💡 В стоимость входит:</h3>
                      <ul>
                        {ModalContent({ type: 'rental' }).included.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeModal === 'packages' && (
                  <div className="packages-content">
                    <h2 className="modal-title">Пакеты на аренду</h2>
                    <p className="packages-subtitle">{ModalContent({ type: 'packages' }).subtitle}</p>
                    <div className="packages-grid">
                      {ModalContent({ type: 'packages' }).packages.map((pkg, index) => (
                        <div key={index} className="package-card">
                          <h3>{pkg.name}</h3>
                          <p className="package-hours">{pkg.hours}</p>
                          <div className="package-prices">
                            <div>День (09:00-18:00): {pkg.prices.day}</div>
                            <div>Вечер (18:00-00:00): {pkg.prices.evening}</div>
                            <div>Ночь (00:00-06:00): {pkg.prices.night}</div>
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
                      {ModalContent({ type: 'production' }).services.map((service, index) => (
                        <div key={index} className="service-card">
                          <h3>{service.name}</h3>
                          <p className="service-price">{service.price}</p>
                          {service.description && (
                            <p className="service-description">{service.description}</p>
                          )}
                          <ul className="service-details">
                            {service.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeModal === 'portfolio' && (
                  <div className="portfolio-content">
                    <h2 className="modal-title">Портфолио</h2>
                    <div className="portfolio-grid">
                      {ModalContent({ type: 'portfolio' }).videos.map((video, index) => (
                        <div key={index} className="video-card">
                          <img src={video.thumbnail} alt={video.title} />
                          <div className="video-info">
                            <h3>{video.title}</h3>
                            <p className="video-category">{video.category}</p>
                            <p className="video-description">{video.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeModal === 'rules' && (
                  <div className="rules-content">
                    <h2 className="modal-title">Правила бронирования и аренды</h2>
                    {ModalContent({ type: 'rules' }).sections.map((section, index) => (
                      <div key={index} className="rules-section">
                        <h3>{section.title}</h3>
                        <ul>
                          {section.rules.map((rule, i) => (
                            <li key={i}>{rule}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
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