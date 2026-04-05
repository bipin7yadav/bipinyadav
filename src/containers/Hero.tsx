import { motion } from 'framer-motion';
import { Button, Wrapper } from '../components';
import useWindowWidth from '../hooks/use-window-width';
import { getBreakpointsWidth } from '../utils/helper';
import { heroSection } from '../utils/portfolio';
import { slideUp } from '../animations';

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText } =
    heroSection;

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  return (
    <Wrapper
      id="hero"
      className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-center gap-6 xs:gap-7"
    >
      <motion.p
        variants={slideUp({ delay: getAnimationDelay(0) })}
        initial="hidden"
        animate="show"
        className="text-sm md:text-base text-accent font-mono"
      >
        {subtitle}
      </motion.p>

      <div className="text-3xl xs:text-4xl md:text-7xl font-bold tracking-tighter max-w-5xl">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: getAnimationDelay(1),
              },
            },
          }}
          className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 capitalize mb-2 leading-[1.1] flex flex-wrap"
        >
          {title.split(' ').map((word, i) => (
            <span key={i} className="inline-block mr-[0.25em] whitespace-nowrap">
              {word.split('').map((char, j) => (
                <motion.span
                  key={j}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1, transition: { type: 'spring', damping: 12, stiffness: 200 } },
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.03,
                delayChildren: getAnimationDelay(2),
              },
            },
          }}
          className="leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 flex flex-wrap"
        >
          {tagline.split(' ').map((word, i) => (
            <span key={i} className="inline-block mr-[0.25em] whitespace-nowrap">
              {word.split('').map((char, j) => (
                <motion.span
                  key={j}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1, transition: { type: 'spring', damping: 12, stiffness: 200 } },
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
      </div>

      <motion.p
        variants={slideUp({ delay: getAnimationDelay(3) })}
        initial="hidden"
        animate="show"
        className="max-w-xl text-base md:text-lg text-slate-400"
      >
        {description}
      </motion.p>

      <motion.p
        variants={slideUp({ delay: getAnimationDelay(4) })}
        initial="hidden"
        animate="show"
        className="text-xs md:text-sm font-mono text-accent"
      >
        {specialText}
      </motion.p>

      {cta && (
        <Button
          size="lg"
          type="link"
          variants={slideUp({ delay: getAnimationDelay(5) })}
          initial="hidden"
          animate="show"
          href={cta?.url ?? '#'}
          className={`mt-5 xs:mt-8 md:mt-10 ${cta.hideInDesktop ? 'md:hidden' : ''
            }`}
          sameTab={cta?.sameTab}
        >
          {cta.title}
        </Button>
      )}
    </Wrapper>
  );
};

export default Hero;
