import { useEffect, useState } from "react";

const MouseInteraction = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let timeoutId: number;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {}, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <style>
        {`
          :root {
            --mouse-x: ${mousePosition.x}px;
            --mouse-y: ${mousePosition.y}px;
          }
        `}
      </style>
    </>
  );
};

export default MouseInteraction;
