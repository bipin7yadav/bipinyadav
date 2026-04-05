import Image from 'next/image';
import Profile from "../../public/Profile.jpg"
import newProfile from "../../public/profile4.jpg"

type Props = { src: string; alt: string };

const HeroImage = ({ src, alt }: Props) => {
  return (
    <div className="relative group w-48 h-48 xs:w-64 xs:h-64 sm:w-auto sm:h-auto mx-auto lg:mx-0">
      <Image
        src={newProfile}
        alt={alt}
        width={300}
        height={300}
        className="rounded shadow-xl w-full h-full object-cover"
      />
      <div className="absolute inset-0 border-[3px] z-[-1] rounded border-accent translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 duration-150 hidden sm:block"></div>
    </div>
  );
};

export default HeroImage;
