import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapScroll() {
  useEffect(() => {
    // Refresh ScrollTrigger to catch rendered layout
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // 1. Reveal elements with class .gsap-reveal (fade up)
    const revealElements = document.querySelectorAll('.gsap-reveal');
    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // 2. Stagger elements inside containers with .gsap-stagger
    const staggerContainers = document.querySelectorAll('.gsap-stagger');
    staggerContainers.forEach((container) => {
      const children = Array.from(container.children);
      if (children.length > 0) {
        gsap.fromTo(
          children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: container,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    // 3. Slide left / right
    const slideLeftElements = document.querySelectorAll('.gsap-slide-left');
    slideLeftElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    const slideRightElements = document.querySelectorAll('.gsap-slide-right');
    slideRightElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // 4. Scale up
    const scaleElements = document.querySelectorAll('.gsap-scale-up');
    scaleElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.92 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
