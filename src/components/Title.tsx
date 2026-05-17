import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import { useRef } from "react";

gsap.registerPlugin(Observer);

const Title = () => {
  const titleRef = useRef(null);
  useGSAP(() => {
    Observer.create({
      target: titleRef.current,
      onHover: () => {
        gsap.to(titleRef.current, {
          backgroundClip: "text",
          color: "transparent",
          background:
            "linear-gradient(to right,hsl(0, 100%, 50%),hsl(50, 100%, 50%),hsl(100, 100%, 45%),hsl(150, 100%, 45%),hsl(200, 100%, 50%),hsl(250, 100%, 50%),hsl(300, 100%, 50%))",
          duration: 0.4,
        });
      },
      onHoverEnd: () => {
        gsap.to(titleRef.current, {
          color: "#272727",
          duration: 0.4,
        });
      },
    });
  }, {});

  return (
    <h1 ref={titleRef} className="text-3xl font-bold">
      Color Palette Generator
    </h1>
  );
};

export default Title;
