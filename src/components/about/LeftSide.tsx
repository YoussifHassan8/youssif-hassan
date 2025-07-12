import AboutImage from "../ui/AboutImage";
import AvailableForHire from "../ui/AvailableForHire";
import UnavailableForHire from "../ui/UnavailableForHire";
import LeftTopBorder from "../ui/LeftTopBorder";
import BottomRightBorder from "../ui/BottomRightBorder";

interface LeftSideProps {
  imgURL: string;
  availability: boolean;
}

const LeftSide = ({ imgURL, availability }: LeftSideProps) => {
  return (
    <>
      <div className="absolute w-full h-full inset-0 bg-gradient-to-br from-[#3b82f6] to-[#22c55e] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
      <AboutImage imgURL={imgURL} />
      {availability ? (
        <AvailableForHire />
      ) : (
        <UnavailableForHire />
      )}
      <LeftTopBorder />
      <BottomRightBorder />
    </>
  );
};

export default LeftSide;
