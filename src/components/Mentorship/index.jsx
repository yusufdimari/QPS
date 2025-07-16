import React, { useRef } from 'react';
import './Mentorship.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mentorship = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(['.title', '.sub__title'], {
      y: -50,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: container.current,
        start: '20% bottom',
        end: 'bottom top',
      },
    });
  }, { scope: container });

  return (
    <section id="blog" ref={container}>
      <div className="container">
        <h1 className="title">
          <span className="g-text">MentorShip</span>
        </h1>
        <h6 className="sub__title">COMING SOON!</h6>
      </div>
    </section>
  );
};

export default Mentorship;
