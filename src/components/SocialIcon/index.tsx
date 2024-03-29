import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ISocialIconProps {
  className?: string;
  href: string;
  icon: React.ReactNode;
  toolTip?: string;
}

const SocialIcon: React.FC<ISocialIconProps> = ({ className, href, icon }) => {
  return (
    <Link
      to={href}
      className={cn(
        "text-white hover:text-color-apple-logo text-4xl filter hover:brightness-90",
        className
      )}
    >
      <div className="p-2 rounded-full"> {icon}</div>
    </Link>
  );
};

export default SocialIcon;
