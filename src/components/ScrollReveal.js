import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = '', direction = 'up', delay = 0, threshold = 0.15 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('revealed');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const dirClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal';

  return (
    <div ref={ref} className={`${dirClass} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
