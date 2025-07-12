import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  type: 'circle' | 'square' | 'triangle';
  color: string;
  animationDelay: number;
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = [];
      const colors = [
        'rgba(59, 130, 246, 0.1)',
        'rgba(34, 197, 94, 0.1)',
        'rgba(168, 85, 247, 0.1)',
        'rgba(236, 72, 153, 0.1)',
        'rgba(251, 146, 60, 0.1)',
      ];

      for (let i = 0; i < 15; i++) {
        newElements.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 60 + 20,
          rotation: Math.random() * 360,
          opacity: Math.random() * 0.3 + 0.1,
          type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
          color: colors[Math.floor(Math.random() * colors.length)],
          animationDelay: Math.random() * 5,
        });
      }
      setElements(newElements);
    };

    generateElements();
    window.addEventListener('resize', generateElements);

    return () => {
      window.removeEventListener('resize', generateElements);
    };
  }, []);

  const renderElement = (element: FloatingElement) => {
    const baseClasses = `absolute pointer-events-none animate-float`;
    const style = {
      left: `${element.x}px`,
      top: `${element.y}px`,
      width: `${element.size}px`,
      height: `${element.size}px`,
      opacity: element.opacity,
      backgroundColor: element.color,
      animationDelay: `${element.animationDelay}s`,
      transform: `rotate(${element.rotation}deg)`,
    };

    switch (element.type) {
      case 'circle':
        return (
          <div
            key={element.id}
            className={`${baseClasses} rounded-full animate-pulse-glow`}
            style={style}
          />
        );
      case 'square':
        return (
          <div
            key={element.id}
            className={`${baseClasses} animate-morph`}
            style={style}
          />
        );
      case 'triangle':
        return (
          <div
            key={element.id}
            className={`${baseClasses} animate-shimmer`}
            style={{
              ...style,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {elements.map(renderElement)}
      
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse-glow" />
      <div className="absolute bottom-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '4s' }} />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-shimmer" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-shimmer" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-shimmer" style={{ animationDelay: '3s' }} />
      </div>
    </div>
  );
};

export default FloatingElements; 