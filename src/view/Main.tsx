'use client';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import s from './Main.module.css';

const Main = () => {
  const mainRef = useRef<HTMLElement>(null);
  const parallaxListRef = useRef<HTMLUListElement>(null);

  const handleScroll = () => {
    if (parallaxListRef.current != null) {
      const targets = parallaxListRef.current.childNodes;
      // console.log('targets: ', targets);

      for (let i = 0; i < targets.length; i++) {
        let pos = window.scrollY * targets[i].dataset.rate;
        targets[i].style.transform = 'translate3d(0px, ' + pos + 'px, 0px)';
      }
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className={s.main} ref={mainRef}>
      <section className={s.section1}>
        <ul className={s.Ul} ref={parallaxListRef}>
          <li data-rate="-2" data-direction="vertical">
            par
          </li>
          <li>al</li>
          <li data-rate="2" data-direction="vertical">
            lax
          </li>
        </ul>

        <span
          className={s.Circle}
          data-direction="gorizontal"
          data-ratey="1"
          data-ratex="2"
        ></span>
      </section>
      <section className={s.section2}></section>
    </main>
  );
};

export default Main;
