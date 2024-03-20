import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
}

const Tag = ({ children, ...props }: TagProps) => {
  return (
    <div
      {...props}
      className={cn(
        `inline-block px-4 py-2 text-sm font-light text-white bg-background-tag rounded`
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
