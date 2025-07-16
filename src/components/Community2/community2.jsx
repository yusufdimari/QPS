import React from 'react';
import Footer from '../Footer';
import './Community2.css';
import { FaTelegramPlane, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Community2 = () => {
  const navigate = useNavigate();

  return (
    <section id='project' className='community__section'>

      {/* Hero CTA */}
      <h1 className="title">Join Our <span className="g-text">Free Trading Communities</span></h1>
      <p className="sub__title">
        Be part of a growing community of smart traders on your favorite platforms. Get insights, signals, mentorship, and support — all for free.
      </p>

      {/* Social Buttons */}
      <div className="social__icons emphasized-socials">
        <a href="https://t.me/+CyPNlOCXTslmOGE8" target="_blank" rel="noreferrer" className="social__btn">
          <FaTelegramPlane /> Telegram
        </a>
        <a href="https://www.instagram.com/quantumpipsseekers?igsh=NTc5bTA2bHFybzJy&utm_source=qr" target="_blank" rel="noreferrer" className="social__btn">
          <FaInstagram /> Instagram
        </a>
        <a href="https://www.tiktok.com/@quantumpipsseekers?_t=ZP-8xcRoc1StaQ&_r=1" target="_blank" rel="noreferrer" className="social__btn">
          <FaTiktok /> tiktok
        </a>
        <a href="https://youtube.com/@quantumpipsseekers?si=SL1SNWzW9-vC9pV_" target="_blank" rel="noreferrer" className="social__btn">
          <FaYoutube /> YouTube
        </a>
      </div>

      {/* Value List */}
      <div className="modern-grid">
        <div className="modern-card">
          <h3 className="sub__title">💡 What You’ll Gain</h3>
          <ul className="benefit__list">
            <li>Live market insights</li>
            <li>Strategy discussions & markups</li>
            <li>Access to pro mentorship</li>
            <li>Community-driven learning</li>
            <li>Webinars, Q&As, and more</li>
          </ul>
        </div>
      </div>

      {/* Discussions & Events */}
      <div className="modern-grid" style={{ marginTop: '2rem' }}>
        <div className="modern-card">
          <h3 className="sub__title">🗣️ Latest Discussions</h3>
          <ul className="benefit__list">
            <li>How to trade NFP safely?</li>
            <li>GBPJPY markup — breakout or fakeout?</li>
            <li>Coach Leo’s strategy update</li>
          </ul>
        </div>
        <div className="modern-card">
          <h3 className="sub__title">📅 Upcoming Events</h3>
          <ul className="benefit__list">
            <li>Sunday Zoom Forecast – 7PM</li>
            <li>Midweek Q&A – Wed 8PM</li>
            <li>Friday Pro Review – 6PM</li>
          </ul>
        </div>
      </div>

      {/* Downloadables Section */}
      <div className="modern-grid" style={{ marginTop: '2rem' }}>
        <div className="modern-card">
          <h3 className="sub__title">📥 Downloadable Tools</h3>
          <div className="download-buttons">
            <a href="/files/strategy-guide.pdf" className="btn btn__secondary" download>
              📘 Strategy Guide
            </a>
            <a href="/files/lot-size-calculator.xlsx" className="btn btn__secondary" download>
              📊 Lot Size Calculator
            </a>
            <a href="/files/psychology-ebook.pdf" className="btn btn__secondary" download>
              🧠 Psychology eBook
            </a>
            <a href="/files/last-week-session.mp4" className="btn btn__secondary" download>
              🎥 Zoom Replay
            </a>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="explore__btn__wrapper">
        <button className="btn btn__primary explore__btn" onClick={() => navigate(-1)}>
          <strong>← Back</strong>
        </button>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bottom-cta-banner">
        <p>
          🔥 Don’t miss out! Join our FREE trading community on Telegram for daily insights and support.
        </p>
        <a href="https://t.me/+CyPNlOCXTslmOGE8" className="btn btn__primary">Join Telegram</a>
      </div>

      <Footer />
    </section>
  );
};

export default Community2;
