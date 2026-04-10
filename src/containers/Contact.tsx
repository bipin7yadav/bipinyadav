import { Button, Wrapper } from '../components';
import { getSectionAnimation } from '../animations';
import { contactSection } from '../utils/portfolio';
import { useState } from 'react';
import { Icon } from '@iconify/react';

const Contact = () => {
  const { subtitle, title, paragraphs, link } = contactSection;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = link.replace('mailto:', '');
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Wrapper
      id="contact"
      className="lg:col-span-3 max-w-xl mx-auto text-center !py-16 md:!py-24 mb-20 md:mb-32 w-full"
      {...getSectionAnimation}
    >
      <p className="text-accent text-sm capitalize mb-3 font-mono">
        {subtitle}
      </p>
      <h2 className="heading-secondary !mb-5">{title}</h2>

      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <div className="mt-12 flex justify-center gap-4 flex-wrap">
        <Button type="link" size="lg" href={link}>
          Say Hello
        </Button>
        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-2 px-6 py-3 border border-slate-500 rounded-lg text-slate-300 hover:text-accent hover:border-accent duration-200"
        >
          {copied ? <Icon icon="lucide:check" width={20} /> : <Icon icon="lucide:copy" width={20} />}
          {copied ? 'Copied!' : 'Copy Email'}
        </button>
      </div>
    </Wrapper>
  );
};

export default Contact;
