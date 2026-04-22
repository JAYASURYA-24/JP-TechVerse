import { useEffect, useRef } from 'react';

/**
 * AnimatedSection — wraps children with Intersection Observer
 * Adds "in-view" class when element enters viewport for CSS animations.
 */
export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up', // 'fade-up' | 'fade-left' | 'fade-right' | 'fade-in'
  delay = 0,
  threshold = 0.15,
  tag: Tag = 'div',
}) {
  const ref = useRef(null);

  const animClass = {
    'fade-up': 'animate-on-scroll',
    'fade-left': 'animate-on-scroll-left',
    'fade-right': 'animate-on-scroll-right',
    'fade-in': 'animate-on-scroll',
  }[animation] || 'animate-on-scroll';

  const delayClass = delay ? `animate-delay-${delay}` : '';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} className={`${animClass} ${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}
