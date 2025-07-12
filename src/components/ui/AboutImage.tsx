interface AboutImageProps {
  imgURL: string;
}

const AboutImage = ({ imgURL }: AboutImageProps) => {
  return (
    <div className="relative max-w-[320px] rounded-2xl overflow-hidden">
      <img
        src={imgURL}
        alt="Profile"
        className="scale-125 group-hover:scale-135 transition-all duration-500"
      />
    </div>
  );
};

export default AboutImage;
