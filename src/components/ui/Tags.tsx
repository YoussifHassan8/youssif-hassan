import { useState, useEffect } from "react";

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tags.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [tags]);

  return (
    <div className="relative">
      <div className="w-fit px-4 py-2 bg-black backdrop-blur-md border border-white/10 rounded-full shadow-sm overflow-hidden">
        <span>✨</span>
        <span className="typing">{tags[currentIndex]}</span>
      </div>
    </div>
  );
};

export default Tags;
