import React, { useEffect, useRef, useState } from "react";
import "./Achievement.css";
import Odometer from "react-odometerjs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Icon imports
import {
  FaUsersLine,
  FaDiagramProject,
  FaAward,
} from "react-icons/fa6";
import { GiTeamIdea } from "react-icons/gi";

// Your data file
import { achievements } from "../../data";

// Icon mapping
const iconMap = {
  FaUsersLine: <FaUsersLine />,
  FaDiagramProject: <FaDiagramProject />,
  GiTeamIdea: <GiTeamIdea />,
  FaAward: <FaAward />,
};

// Format number utility (with K/M)
const formatNumber = (num) => {
  if (num >= 1_000_000) return { display: (num / 1_000_000).toFixed(1), suffix: "M" };
  if (num >= 1_000) return { display: (num / 1_000).toFixed(1), suffix: "K" };
  return { display: num, suffix: "" };
};

const Achievement = () => {
  const [stats, setStats] = useState([]);
  const container = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const updated = achievements.map((item) => {
        const { display, suffix } = formatNumber(item.value);
        return {
          ...item,
          displayValue: display,
          suffix: suffix,
        };
      });
      setStats(updated);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  useGSAP(() => {
    gsap.from(".achievement", {
      delay: 1.5,
      x: 100,
      stagger: 0.5,
      opacity: 0,
    });
  }, { scope: container });

  return (
    <div className="achievement__container" ref={container}>
      {stats.map((item, index) => (
        <div className="achievement" key={index}>
          <div className="icon__container">{iconMap[item.icon]}</div>
          <div className="details">
            <div className="count__row">
              <Odometer value={parseFloat(item.displayValue)} className="title" />
              <h1 className="g-text title">{item.suffix}+</h1>
            </div>
            <small className="text__muted">{item.title}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
