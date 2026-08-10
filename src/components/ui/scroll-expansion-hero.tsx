import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion } from 'motion/react';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
  onExpandedChange?: (expanded: boolean) => void;
  onProgressChange?: (progress: number) => void;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
  onExpandedChange,
  onProgressChange,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const showContent = scrollProgress >= 1;

  useEffect(() => {
    setScrollProgress(0);
  }, [mediaType]);

  useEffect(() => {
    onProgressChange?.(scrollProgress);
  }, [scrollProgress, onProgressChange]);

  useEffect(() => {
    onExpandedChange?.(showContent);
  }, [showContent, onExpandedChange]);

  // Progress is derived directly from the real scroll position of the section,
  // so it reacts identically to wheel, trackpad, touch, keyboard, the native
  // scrollbar, and middle-click autoscroll — no input-specific listeners needed.
  useEffect(() => {
    const handleScroll = (): void => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;

      if (scrollableDistance <= 0) {
        setScrollProgress(1);
        return;
      }

      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div className="transition-colors duration-700 ease-in-out">
      <div ref={sectionRef} className="relative h-[calc(100dvh+90vh)]">
        {/* overflow-hidden lives here (on the sticky element itself), never on an
            ancestor — overflow-hidden on an ancestor of a position:sticky element
            breaks its ability to unstick when scrolled past. */}
        <section className="sticky top-0 h-[100dvh] overflow-hidden flex flex-col items-center justify-start bg-[var(--color-primary)]">
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={bgImageSrc}
              alt="Background"
              className="w-screen h-screen object-cover object-center"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/45" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-center relative z-10 h-full">
            <div className="flex flex-col items-center justify-center w-full h-full relative">
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                }}
              >
                {mediaType === 'video' ? (
                  <div className="relative w-full h-full pointer-events-none">
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover rounded-xl"
                      controls={false}
                      disablePictureInPicture
                      disableRemotePlayback
                    />
                    <div
                      className="absolute inset-0 z-10"
                      style={{ pointerEvents: 'none' }}
                    ></div>

                    <motion.div
                      className="absolute inset-0 bg-black/30 rounded-xl"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      className="w-full h-full object-cover rounded-xl"
                      decoding="async"
                    />

                    <motion.div
                      className="absolute inset-0 bg-black/50 rounded-xl"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                <div className="flex flex-col items-center text-center relative z-10 mt-4 transition-none">
                  {date && (
                    <p
                      className="text-2xl text-blue-100"
                      style={{
                        transform: `translateX(-${textTranslateX}vw)`,
                        textShadow: '0 2px 14px rgba(0,0,0,0.6)',
                      }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className="text-blue-100 font-medium text-center"
                      style={{
                        transform: `translateX(${textTranslateX}vw)`,
                        textShadow: '0 2px 14px rgba(0,0,0,0.6)',
                      }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/30 transition-none"
                  style={{
                    transform: `translateX(-${textTranslateX}vw)`,
                    textShadow: '0 4px 20px rgba(0,0,0,0.65)',
                  }}
                >
                  {firstWord}
                </motion.h1>
                <motion.span
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white/30 transition-none"
                  style={{
                    transform: `translateX(${textTranslateX}vw)`,
                    textShadow: '0 4px 20px rgba(0,0,0,0.65)',
                  }}
                >
                  {restOfTitle}
                </motion.span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {children && (
        <motion.section
          className="flex flex-col w-full px-8 py-10 md:px-16 lg:py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          {children}
        </motion.section>
      )}
    </div>
  );
};

export default ScrollExpandMedia;
