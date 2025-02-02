import {
  Brain,
  BrainCog,
  Camera,
  Facebook,
  PlayCircle,
  Target,
  Video,
  Videotape,
} from "lucide-react";
import React from "react";
import Row, { MenuRowType } from "../Row";

type Props = {};

const Services = (props: Props) => {
  const creativeRows: MenuRowType[] = [
    {
      title: "Ad Creative",
      description: "Eye-Catching designs that perform",
      icon: <Target size={16} />,
    },
    {
      title: "Social media creative",
      description: "Engaging assets for all platforms",
      icon: <Facebook size={16} />,
    },
    {
      title: "Video Production",
      description: "High-quality video content",
      icon: <Video size={16} />,
    },
    {
      title: "Photography",
      description: "Professional photography services",
      icon: <Camera size={16} />,
    },
  ];

  const specialRows: MenuRowType[] = [
    {
      title: "Video production",
      description: "High-quality video content",
      icon: <Videotape size={16} />,
    },
    {
      title: "Motion design",
      description: "Engaging animations and motion graphics",
      icon: <PlayCircle size={16} />,
    },
  ];

  const aiRows: MenuRowType[] = [
    {
      title: "AI enhanced video",
      description: "AI enhanced video production",
      icon: <BrainCog size={16} />,
    },
    {
      title: "AI enhanced images",
      description: "AI enhanced image services",
      icon: <Camera size={16} />,
    },
    {
      title: "AI consulting",
      description: "AI consulting services",
      icon: <Brain size={16} />,
    },
  ];

  return (
    <div className="h-full w-[1000px] bg-[#F7F9F2] rounded-md p-4 drop-shadow-lg text-sm tracking-normal">
      <div className="grid grid-cols-3 w-full gap-4">
        <section>
          <div className="rounded-full p-2 px-3 my-4 bg-lime-600 text-white text-center">
            Creative Design Services
          </div>
          {creativeRows.map((row, index) => (
            <Row
              key={index}
              title={row.title}
              description={row.description}
              icon={row.icon}
            />
          ))}
        </section>
        <section>
          <div className="rounded-full p-2 px-3 my-4 bg-amber-600 text-white text-center">
            Specialized Production Services
          </div>
          {specialRows.map((row, index) => (
            <Row
              key={index}
              title={row.title}
              description={row.description}
              icon={row.icon}
            />
          ))}
        </section>
        <section>
          <div className="rounded-full p-2 px-3 my-4 bg-cyan-600 text-white text-center">
            AI Services
          </div>
          {aiRows.map((row, index) => (
            <Row
              key={index}
              title={row.title}
              description={row.description}
              icon={row.icon}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Services;
