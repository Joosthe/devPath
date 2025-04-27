
import { FaChevronRight } from "react-icons/fa";
import Button from "../../Atoms/Buttons/Button";

const Jumbotron = ({
  title,
  subtitle,
  align = "center",
  CtaButtonText,
  CtaSecButtonText
}: {
  title: string;
  subtitle: string;
  CtaButtonText?: string;
  CtaSecButtonText?: string;
  align?: "left" | "center";
}) => {
  const alignmentClass = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`w-full h-[85vh] bg-blue-500 text-white flex flex-col justify-center p-4 ${alignmentClass}`}>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
      <p className="text-xl mb-8">{subtitle}</p>
      <div className="flex space-x-4">
        {CtaButtonText && <Button trailingIcon={<FaChevronRight/>} size="md">{CtaButtonText}</Button>}
        {CtaSecButtonText &&<Button appearance="secondary"  size="lg">{CtaSecButtonText}</Button>}
      </div>
    </div>
  );
};

export default Jumbotron;