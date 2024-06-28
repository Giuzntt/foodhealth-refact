import { cn } from "@/lib/utils";

interface ITypographyProps {
  children: React.ReactNode;
  className?: string;
  fontSize?: "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
}

const Typography = ({ children, fontSize = "4xl" }: ITypographyProps) => {
  return (
    <h1
      className={cn(
        `text-${fontSize} font-semibold text-start text-color-apple-logo lg:text-5xl`
      )}
    >
      {children}
    </h1>
  );
};

export default Typography;
