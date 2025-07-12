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
        x: -100,
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
        x: 100,
        opacity: 0,
        transition: { duration: 0.3 },
      });
    }
  }, [rightInView, rightControls]);

  return (
    <section
      id="about"
      className="flex flex-wrap justify-center gap-28 py-20 relative"
    >
      <motion.div
        ref={leftRef}
        className="group relative w-fit h-fit p-1"
        initial={{ x: -100, opacity: 0 }}
        animate={leftControls}
      >
        <LeftSide imgURL={data.imgUrl} availability={data.availability} />
      </motion.div>

      <motion.div
        ref={rightRef}
        className="space-y-6 max-w-xl"
        initial={{ x: 100, opacity: 0 }}
        animate={rightControls}
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
