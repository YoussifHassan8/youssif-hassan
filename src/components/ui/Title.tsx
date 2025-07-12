interface TitleProps {
  name: {
    content: string;
    gradient: string;
  };
}

const Title = ({ name }: TitleProps) => {
  return (
    <>
      <h1 className="font-bold text-4xl tracking-tight">
        Hello, I am
        <span className="relative text-4xl sm:text-5xl md:text-6xl inline-block">
          <span
            className="relative outline-none focus:border-b-2 focus:border-purple-500"
            style={{
              backgroundImage: name.gradient,
              backgroundSize: "200% 200%",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {name.content}
          </span>

          <span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-purple-600/20 blur-md rounded-full" />
        </span>
      </h1>
    </>
  );
};

export default Title;
