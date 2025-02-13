import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const FallbackTechIcon = ({ icon, name }) => (
  <div className="flex flex-col items-center">
    <img 
      src={icon} 
      alt={name}
      className="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300"
    />
    <p className="mt-2 text-sm text-gray-300">{name}</p>
  </div>
);


const Tech = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div 
          className={`${isMobile ? 'w-24 h-24' : 'w-28 h-28'}`} 
          key={technology.name}
        >
          {isMobile ? (
            <FallbackTechIcon icon={technology.icon} name={technology.name} />
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};


export default SectionWrapper(Tech, "");
