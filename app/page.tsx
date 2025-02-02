import FirstBanner from "@/components/Site/Advertising/Homepage/FirstBanner";
import Reels, { ReelImageType } from "@/components/Site/Carousels/Reels/Reels";
import Image from "next/image";

export default function Home() {
  const brands: ReelImageType[] = [
    {
      image: "/humans/0.png",
      alt: "Brand 1",
      title: "Amazing Results!",
      description:
        "The team transformed my raw footage into a professional masterpiece. Highly recommend their services!",
    },
    {
      image: "/humans/1.png",
      alt: "Brand 1",
      title: "Exceeded Expectations",
      description:
        "Their creative vision and attention to detail were outstanding. My project turned out better than I imagined!",
    },
    {
      image: "/humans/2.png",
      alt: "Brand 1",
      title: "Professional and Timely",
      description:
        "Delivered high-quality videos right on schedule. Truly a pleasure to work with!",
    },
    {
      image: "/humans/3.png",
      alt: "Brand 1",
      title: "Great Marketing Insights",
      description:
        "Their video edits were not only visually stunning but perfectly aligned with my brand strategy.",
    },
  ];
  // asdsd
  return (
    <div className="w-full h-full bg-zinc-100">
      <div className="bg-site-primary pt-44 text-white">
        <FirstBanner />
      </div>
      <div className="my-4 flex flex-col gap-4">
        <div className="text-center text-3xl font-thin">
          Trusted by 500+ customers around the world
        </div>
        <section className="relative -mt-10 mx-44 scale-75 origin-top-center flex flex-col gap-4">
          <div className="w-[20%] h-full absolute top-0 -left-1 bg-gradient-to-l from-transparent to-zinc-100 z-10"></div>
          <div className="w-[20%] h-full absolute top-0 -right-1 bg-gradient-to-r from-transparent to-zinc-100 z-10"></div>
          <Reels direction="horizontal" images={brands} gap={20} />
          <Reels
            direction="horizontal"
            images={brands}
            gap={20}
            invert
            speed={0.001}
            fps={20}
          />
        </section>
        <section className="-mt-10 mx-48">
          <div className="text-lg border-b py-2 tracking-wider border-black w-full">
            A NEW ERA OF CREATIVE WORK
          </div>
          <div className="grid grid-cols-2 w-full place-items-center">
            <div className="flex flex-col gap-4 pt-4 mr-auto">
              <div className="font-bold text-5xl">
                The support your
                <br /> creative team{" "}
                <span className="font-thin italic">
                  has <br /> been asking for
                </span>
              </div>
              <div className="font-thin text-2xl">
                Superside is your dedicated, on-call
                <br /> creative team to expand your
                <br /> production capacity and extend your
                <br /> team’s creative capabilities.
              </div>
              <div className="tracking-wide ">
                See us as an extension of your team, freeing you to focus on
                your
                <br /> most impactful and creative work.
              </div>
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/LwcXyw21SN4?si=pI_jhgNhrOxnMh6l&amp;controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay=true; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="rounded-xl bg-black p-1 mt-5"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
