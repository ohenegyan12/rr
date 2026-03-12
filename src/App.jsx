import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Scroll logic for parallax hero
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, -350]);

  // Scroll logic for about image parallax
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  
  // Maps scroll progress 0 -> 1 into a gentle vertical translation
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const categories = [
    {
      title: "Already Retired",
      desc: "Discover how to optimize your existing assets, protect your wealth from inflation, and ensure your legacy. This tailored framework provides actionable steps for maintaining true financial peace of mind without compromising your current lifestyle.",
      bigImg: "/images/retired.jpg",
      smallImg: "/images/retired-2.jpg"
    },
    {
      title: "People About to Retire",
      desc: "Finalize your transition with unshakeable confidence. Learn the critical, last-minute strategies to maximize your retirement accounts, streamline your investments, and seamlessly prepare for the next abundant chapter of your life.",
      bigImg: "/images/already-working.jpg",
      smallImg: "/images/already-working-1.jpg"
    },
    {
      title: "The Youth",
      desc: "Time is your greatest unseen asset. Uncover the magic of compound interest, early aggressive investment strategies, and how to build a rock-solid foundation for a lifetime of automated financial independence.",
      bigImg: "/images/youth.jpg",
      smallImg: "/images/youth-2.jpg"
    }
  ];

  const offers = [
    {
      id: "01",
      title: "Financial Blueprints",
      desc: "Step-by-step masterclasses on asset allocation and wealth preservation. We provide actionable, high-level roadmaps that resonance with your target goals, from legacy planning to complete wealth management."
    },
    {
      id: "02",
      title: "Modern Growth",
      desc: "Unlock the secrets of passive income and high-yield growth in the digital age. Begin and end your financial journey with ease as our strategies provide priority paths to unshakeable independence."
    }
  ];

  return (
    <main className="app-main">
      <motion.div className="hero-container" style={{ y: heroY }}>
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">❉</span>
          <span className="logo-text">Bellovoire</span>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="line long"></div>
          <div className="line short"></div>
        </div>
      </nav>
      
      <div className="hero-content">
        <p className="subtitle">How Not To Retire poor</p>
        <h1 className="title">Retiring Richly</h1>
      </div>

      {/* OVERLAY */}
      <div 
        className={`overlay ${isMenuOpen ? 'visible' : ''}`} 
        onClick={toggleMenu}
      ></div>

      {/* SIDE NAV */}
      <div className={`side-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="side-nav-close" onClick={toggleMenu}>
          <div className="close-line left"></div>
          <div className="close-line right"></div>
        </div>
        
        <div className="side-nav-content">
          <div className="menu-section">
            <span className="menu-label">Menu</span>
            <ul className="menu-links">
              <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about-author" onClick={toggleMenu}>About Author</a></li>
              <li><a href="#about-book" onClick={toggleMenu}>About Book</a></li>
              <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </div>
          
          <div className="bottom-links">
            <div className="stay-connected">
              <span className="bottom-label">Stay Connected</span>
              <a href="mailto:info@author.com" className="email-link">INFO@AUTHOR.COM</a>
            </div>
            <div className="buy-action">
              <a href="#buy" className="buy-link">BUY BOOK</a>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
      
      {/* ABOUT BOOK SECTION */}
      <section className="about-section" id="about-book" ref={aboutRef}>
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="about-title">
            The definitive guide to<br />
            Retiring Richly<br />
            <i>how and what you can do</i>
          </h2>
          <p className="about-desc">
            We provide actionable advice, timeless financial strategies, and heartfelt guidance. 
            Nestled in the realities of modern economics, this book invites readers from around the world 
            to immerse themselves in the principles of retiring with true financial freedom.
          </p>
          <a href="#more-about" className="about-btn">MORE ABOUT BOOK</a>
        </motion.div>
        <div className="about-image-mask">
          <motion.img 
            src="/images/about-book.jpg" 
            alt="About retiring richly" 
            className="about-image"
            style={{ y: imageY }}
          />
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="categories-section" id="audience">
        {categories.map((cat, idx) => (
          <div className="category-row" key={idx}>
            <motion.div 
              className="category-text-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="category-title">{cat.title}</h3>
              <p className="category-desc">{cat.desc}</p>
              
              <div className="category-small-img-wrap">
                <img src={cat.smallImg} alt={`${cat.title} preview`} className="category-small-img" />
              </div>
            </motion.div>

            <motion.div 
              className="category-big-img-wrap"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={cat.bigImg} alt={`${cat.title} detail`} className="category-big-img" />
            </motion.div>
          </div>
        ))}
      </section>

      {/* OFFERS SECTION */}
      <section className="offers-section" id="offers">
        <h2 className="section-header-centered">
          Exclusive<br />
          <i>Insights</i>
        </h2>
        
        <div className="offers-list">
          {offers.map((offer, idx) => (
            <motion.div 
              className="offer-item" 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="offer-id">{offer.id}</div>
              <div className="offer-title-wrap">
                <h3 className="offer-title">{offer.title}</h3>
              </div>
              <div className="offer-desc-wrap">
                <p className="offer-desc">{offer.desc}</p>
              </div>
              <div className="offer-img-wrap">
                <img src={`/images/offers-${idx + 1}.jpeg`} alt={offer.title} className="offer-img" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AUTHOR CTA SECTION */}
      <section className="author-cta-section">
        <motion.div 
          className="cta-container"
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ 
            duration: 1.2, 
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <h2 className="cta-text">
            Your journey to building wealth starts here. 
            Immerse yourself in the philosophy behind the principles of retiring richly.
          </h2>
          <a href="#about-author" className="cta-btn">MEET THE AUTHOR</a>
        </motion.div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="philosophy-section">
        <div className="philosophy-bg-overlay"></div>
        <div className="philosophy-content">
          <div className="words-row">
            <motion.span 
              className="word left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              More
            </motion.span>
            <motion.span 
              className="word center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              than
            </motion.span>
            <motion.span 
              className="word right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              A Book
            </motion.span>
          </div>
          
          <div className="bottom-desc-wrap">
            <motion.p 
              className="philosophy-desc"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              At Retiring Richly, every detail is designed to 
              reframe your future — with the elegance of 
              financial wisdom just beyond your door.
            </motion.p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
