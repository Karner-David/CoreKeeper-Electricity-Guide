import React, { useState, useEffect} from 'react';
import "../fonts.css";
import './aside-toc.css';


export default function AsideTOC({page, headings }) {
    const [activeId, setActiveId] = useState();

    const asideStyle = {
        display: "flex",
        flexDirection: "column",
        fontFamily: "GBB",
        color: "#5B5A5A",
        paddingTop: "0vh",
        alignSelf: "flex-end",
    }

  useEffect(() => {
    if (page === "basics") {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let newActive = activeId;

      for (let id of headings) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        // If the viewport’s midpoint falls inside this section…
        if (top <= mid && bottom >= mid) {
          newActive = id;
          break;
        }
      }

      if (newActive !== activeId) {
        setActiveId(newActive);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // set initial state
    return () => window.removeEventListener('scroll', onScroll);
  }
  }, [headings, activeId]);

  return (
    <nav className="aside-container" style={asideStyle}>
      {headings.map((item, i) => (
        <a
          key={i}
          href={`#${item}`}
          className={`aside-text${activeId === item ? ' active' : ''}`}
          // onClick={() => setActiveId(item)}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}