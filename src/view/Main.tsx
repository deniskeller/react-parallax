import React, { useLayoutEffect, useRef } from 'react';
import s from './Main.module.css';

const Main = () => {
  const parallaxListRef = useRef<HTMLUListElement | null>(null);
  const parallaxCircleRef = useRef<HTMLSpanElement | null>(null);

  const handleScroll = () => {
    if (parallaxListRef.current) {
      const targets = parallaxListRef.current.childNodes;

      for (let i = 0; i < targets.length; i++) {
        const elem = targets[i] as HTMLLIElement;
        const rate = Number(elem.getAttribute('data-rate'));

        const pos = window.scrollY * rate;
        elem.style.transform = 'translate3d(0px, ' + pos + 'px, 0px)';
      }
    }

    if (parallaxCircleRef.current) {
      const target = parallaxCircleRef.current;
      const rateX = Number(target.getAttribute('data-ratex'));
      const rateY = Number(target.getAttribute('data-ratey'));

      let posX = window.scrollY * rateX;
      let posY = window.scrollY * rateY;
      target.style.transform =
        'translate3d(' + posX + 'px, ' + posY + 'px, 0px)';
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className={s.main}>
      <section className={s.section1}>
        <ul className={s.Ul} ref={parallaxListRef}>
          <li data-rate="-1" data-direction="vertical">
            par
          </li>
          <li data-rate="0" data-direction="vertical">
            al
          </li>
          <li data-rate="1" data-direction="vertical">
            lax
          </li>
        </ul>

        <span
          className={s.Circle}
          ref={parallaxCircleRef}
          data-direction="gorizontal"
          data-ratey="0"
          data-ratex="2"
        ></span>
      </section>
      <section className={s.section2}></section>
    </main>
  );
};

export default Main;
