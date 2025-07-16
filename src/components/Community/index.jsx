import React, { useRef } from 'react';
import './Community.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { FaTelegramPlane, FaInstagram, FaWhatsapp } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Community = () => {
  const container = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.from('.title', {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
    });
  }, { scope: container });

  const handleExploreClick = () => {
    navigate('/Community2');
  };

  return (
    <section id='project' className='community__section' ref={container}>
      <h1 className="title">Join Our <span className="g-text">Community</span></h1>

      <div className="community__content">
        <div className="community__left">
          <h3 className="sub__title">
            Empower your trading journey with live support, collaboration, and expert guidance.
          </h3>
          <p className='text_muted description'>
            Whether you're a beginner or a pro, our community offers everything from 24/7 mentorship, 
            strategy sharing, live webinars, and trade reviews — all in a supportive environment designed 
            to help you grow.
          </p>
        </div>

        <div className="community__right">
          <h3 className="sub__title">What You'll Gain:</h3>
          <ul className="text_muted description benefit__list">
            <li>24/7 live chat</li>
            <li>Market analysis</li>
            <li>Webinars & mentorship</li>
            <li>Trade reviews</li>
            <li>Support system</li>
          </ul>
        </div>
      </div>

      <div className="explore__btn__wrapper">
        <button className="btn btn__primary explore__btn" onClick={handleExploreClick}>
          <strong>Explore Community</strong>
        </button>
      </div>

      <div className="community__socials">
        <p className="text__muted">Or join us directly on:</p>
        <div className="social__icons">
  <a className="social__btn telegram" href="https://t.me/+CyPNlOCXTslmOGE8" target="_blank" rel="noreferrer">
    <FaTelegramPlane /><span>Telegram</span>
  </a>
  <a className="social__btn instagram" href="https://www.instagram.com/quantumpipsseekers?igsh=NTc5bTA2bHFybzJy&utm_source=qr" target="_blank" rel="noreferrer">
    <FaInstagram /><span>Instagram</span>
  </a>
  <a className="social__btn whatsapp" href="https://wa.me/2349120810735" target="_blank" rel="noreferrer">
    <FaWhatsapp /><span>WhatsApp</span>
  </a>
</div>

      </div>
    </section>
  );
};

export default Community;
