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
        <div className="flex items-center flex-wrap gap-4 md:gap-6 mb-2">
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
            className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 capitalize leading-[1.1] flex flex-wrap"
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
          <motion.div
            variants={slideUp({ delay: getAnimationDelay(1.5) })}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm md:text-base text-green-400 bg-green-400/10 border border-green-400/20 rounded-full font-medium tracking-normal"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Open to work
          </motion.div>
        </div>
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
        <div className={`mt-5 xs:mt-8 md:mt-10 flex flex-wrap items-center gap-6 ${cta.hideInDesktop ? 'md:hidden' : ''}`}>
          <Button
            size="lg"
            type="link"
            variants={slideUp({ delay: getAnimationDelay(5) })}
            initial="hidden"
            animate="show"
            href={cta?.url ?? '#'}
            sameTab={cta?.sameTab}
          >
            {cta.title}
          </Button>
          <motion.a
            variants={slideUp({ delay: getAnimationDelay(5.1) })}
            initial="hidden"
            animate="show"
            href="mailto:bipinyadav9769@gmail.com"
            className="text-sm md:text-base text-slate-300 hover:text-accent duration-200 underline underline-offset-4 font-mono"
          >
            bipinyadav9769@gmail.com
          </motion.a>
        </div>
      )}
    </Wrapper>
  );
};

export default Hero;
