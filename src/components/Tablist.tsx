import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Icon } from '@iconify/react';
import Link from './Link';
import ListItem from './ListItem';
import useWindowWidth from '../hooks/use-window-width';
import { ExperienceType } from '../types';
import { getBreakpointsWidth, getId } from '../utils/helper';

type Props = {
  experiences: ExperienceType[];
};

const Tablist = ({ experiences }: Props) => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData | null>(null);
  const windowWidth = useWindowWidth();

  const { role, company, companyUrl, started, upto, tasks } =
    experiences[activeExperience];
  const awards = (experiences[activeExperience] as any).awards;

  const sm = getBreakpointsWidth('sm');

  const sliderStyle =
    windowWidth <= sm
      ? {
        left: `calc(${activeExperience}*120px)`,
      }
      : {
        top: `calc(${activeExperience}*2.5rem)`,
      };

  return (
    <div className="flex flex-col sm:flex-row text-sm md:text-base gap-6 md:gap-10 min-h-[250px]">
      {/* Tab List */}
      <div className="font-mono text-xs sm:text-sm relative flex justify-start sm:flex-col overflow-scroll sm:overflow-auto sm:min-w-[150px]">
        {experiences.map(({ company }, i) => (
          <button
            key={getId()}
            className={`h-10 min-w-[120px] sm:w-auto sm:px-5 sm:!text-left capitalize hover:bg-accent-light hover:text-accent focus:outline-none focus:bg-accent-light focus:text-accent ${i === activeExperience ? 'text-accent' : ''
              }`}
            onClick={() => setActiveExperience(i)}
          >
            {company}
          </button>
        ))}
        {/* Slider */}
        <div className="absolute h-0.5 w-full sm:w-0.5 sm:h-full rounded-full bottom-0 sm:inset-0 left-0 bg-dark-3"></div>
        <div
          style={sliderStyle}
          className={`absolute h-0.5 w-[120px] sm:w-0.5 sm:h-10 rounded-full bg-accent bottom-0 left-0 sm:inset-0 transition-all duration-250 delay-100 in-scroll`}
        ></div>
      </div>

      <div key={getId()} className="space-y-5 p-1">
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-dark-2 capitalize">
            {role}{' '}
            <Link href={companyUrl} target="_blank" className="text-accent">
              @{company}
            </Link>
          </h3>
          <p className="text-xs font-mono capitalize">
            <>
              {started} - {upto}
            </>
          </p>
        </div>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <ListItem key={getId()}>{task}</ListItem>
          ))}
        </ul>

        {awards && (
          <div className="mt-6 space-y-4">
            <h4 className="text-lg font-medium text-dark-2 capitalize">Awards & Recognition</h4>
            <div className="grid grid-cols-1 gap-4">
              {awards.map((award: any, i: number) => (
                <div key={i} className="bg-bg-secondary p-4 rounded-lg border border-dark-3/10">
                  <h5 className="font-medium text-accent mb-1">{award.title}</h5>
                  <p className="text-sm font-mono mb-3 text-dark-3">{award.description}</p>
                  {award.image && (
                    <div
                      className="relative w-full h-48 rounded-md overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedImage(award.image)}
                    >
                      <Image
                        src={award.image}
                        alt={award.title}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                        <Icon icon="carbon:zoom-in" className="text-white text-4xl drop-shadow-lg" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <Icon icon="carbon:close" width={40} height={40} />
          </button>
          <div
            className="relative max-w-5xl w-full h-auto max-h-[90vh] flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Certificate Full View"
              width={1000}
              height={800}
              className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
              unoptimized
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tablist;
