import { HeroImage, ListItem, Wrapper, Link } from '../components';
import { getSectionAnimation } from '../animations';
import { aboutSection, author } from '../utils/portfolio';

const About = () => {
  const { title, img, list } = aboutSection;

  return (
    <Wrapper className="col-span-1 md:col-span-2 lg:col-span-3" id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex gap-8 items-center lg:items-start flex-col lg:flex-row justify-between">
        <div className="space-y-4 w-full lg:w-2/3">
          <p>
            Hi, my name is Bipin Yadav, a
            professional SDE 2 who loves building scalable web applications.
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at a
            start-up -{' '}
            <Link
              href="https://inviziosolutions.com/"
              target="_blank"
              className="text-sky-500"
            >
              Invizio Solutions
            </Link>
            .
          </p>
          <p>
            My main focus these days is learning mobile development and finding
            a decent remote job.
          </p>
          <p className="text-accent font-medium mt-4">{list.title}</p>
          <ul className="text-sm gap-2 grid grid-cols-1 xs:grid-cols-2 w-full mt-2">
            {list.items.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ul>
        </div>
        <div className="flex-shrink-0">
          <HeroImage src={img} alt={author.name} />
        </div>
      </main>
    </Wrapper>
  );
};

export default About;
