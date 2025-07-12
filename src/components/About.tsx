import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import LeftSide from "./about/LeftSide";
import RightSide from "./about/RightSide";
import templateOneData from "../../templateOneData.json";

const About = () => {
  const data = templateOneData.About;
  const leftControls = useAnimation();
  const [leftRef, leftInView] = useInView({ triggerOnce: false });
  const rightControls = useAnimation();
  const [rightRef, rightInView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (leftInView) {
      leftControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      leftControls.start({
        x: -50,
        opacity: 0,
        transition: { duration: 0.3 },
      });
    }
  }, [leftInView, leftControls]);

  useEffect(() => {
    if (rightInView) {
      rightControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      rightControls.start({
        x: 50,
        opacity: 0,
        transition: { duration: 0.3 },
      });
    }
  }, [rightInView, rightControls]);

  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-8 sm:gap-16 lg:gap-28 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <motion.div
        ref={leftRef}
        className="group relative w-fit h-fit p-1"
        initial={{ x: -50, opacity: 0 }}
        animate={leftControls}
        style={{ willChange: "transform" }}
      >
        <LeftSide imgURL={data.imgUrl} availability={data.availability} />
      </motion.div>

      <motion.div
        ref={rightRef}
        className="space-y-4 sm:space-y-6 w-full max-w-lg lg:max-w-xl"
        initial={{ x: 50, opacity: 0 }}
        animate={rightControls}
        style={{ willChange: "transform" }}
      >
        <RightSide
          name={data.name}
          tags={data.tags}
          description={data.description}
          resumeButton={data.resumeButton}
          links={data.links}
        />
      </motion.div>
    </section>
  );
};

export default About;
