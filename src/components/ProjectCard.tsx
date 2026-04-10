import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ProjectType } from '../types';
import { blurImageURL } from '../utils/config';

const ProjectCard = ({
  name,
  url,
  repo,
  year,
  img,
  tags,
  stats,
  ...rest
}: ProjectType & MotionProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div {...rest} className="w-full max-w-[350px]">
      <button
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) return;
          if (url) window.open(url, '_blank');
        }}
        className="group relative bg-bg-secondary/60 backdrop-blur-md border border-slate-500/20 hover:border-accent/50 block w-full shadow-xl dark:shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-accent/20"
      >
        <div className="overflow-hidden h-[200px]">
          <Image
            src={img}
            alt={name}
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={blurImageURL}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-4 py-3 space-y-1">
          <div className="flex justify-between items-center">
            <p className="text-xs capitalize font-mono">{tags.join(' | ')}</p>
            <div className="flex items-center space-x-1.5">
              {repo && (
                <a
                  href={repo}
                  className="block hover:text-accent duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="tabler:brand-github" width={20} height={20} />
                </a>
              )}
              {url && (
                <a
                  href={url}
                  className="block hover:text-accent duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="ci:external-link" width={22} height={22} />
                </a>
              )}
            </div>
          </div>
          {stats && (
            <p className="text-sm text-slate-300 mt-2 mb-1 line-clamp-2">
              {stats}
            </p>
          )}
          <h4 className="flex justify-between group-hover:text-accent capitalize font-medium duration-200">
            <span>{name}</span>
            <span className="mr-1">{year}</span>
          </h4>
        </div>
      </button>
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;
