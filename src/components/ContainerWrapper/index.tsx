import { cn } from "@/lib/utils";

interface IContainerWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ContainerWrapper = ({ children, className }: IContainerWrapperProps) => {
  return (
    <section className={cn(`container mx-auto`, className)}>{children}</section>
  );
};

export default ContainerWrapper;
