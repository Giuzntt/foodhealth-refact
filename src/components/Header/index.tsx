import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { MdClose } from "react-icons/md";
import { Button } from "@/components/ui/button";
import ContainerWrapper from "../ContainerWrapper";

interface IHeaderProps {
  itensMenu: {
    name: string;
    href: string;
  }[];
}

const Header = ({ itensMenu }: IHeaderProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50  h-32 from-background-header to-green-500 bg-gradient-to-r
        shadow-xl   w-full 
        "
    >
      <ContainerWrapper
        className="
        flex items-center justify-between h-full w-full   px-8
        "
      >
        <h1
          className="text-3xl font-bold text-gray-200
            flex items-center justify-center 
        "
        >
          <img
            src="/images/logo-foodhealth.png"
            alt="logo"
            className="w-8 h-8 object-cover mr-2"
          />
          Food
          <span className="text-white font-semibold">Health</span>
        </h1>

        {isResponsive ? (
          <nav className="flex items-center justify-center h-full">
            {isOpenMenu ? (
              <MdClose
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className="text-white text-2xl cursor-pointer"
              />
            ) : (
              <AiOutlineMenu
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className="text-white text-2xl cursor-pointer"
              />
            )}

            {isOpenMenu && (
              <div
                className="
                    fixed top-32 left-0 right-0 z-40 h-36 w-full bg-gray-600 opacity-90
                    flex items-center justify-center
                    flex-col
                  "
              >
                {itensMenu.map(({ name, href }) => (
                  <Link
                    key={`item-${name}`}
                    to={href}
                    className={`
                            px-4 py-2 text-white font-semibold hover:text-color-typograph-header transition-all duration-300 ease-in-out text-xl uppercase cursor-pointer
                        `}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </nav>
        ) : (
          <nav className="flex items-center justify-center h-full">
            {itensMenu.map(({ name, href }) => (
              <Link
                key={`item-${name}`}
                to={href}
                className={
                  "px-4 py-2 text-white font-semibold hover:text-color-typograph-header transition-all duration-300 ease-in-out text-xl uppercase"
                }
              >
                {name}
              </Link>
            ))}
          </nav>
        )}
        {!isResponsive && (
          <div className="flex items-center justify-center h-full gap-5   ">
            <Button
              asChild
              className="bg-color-apple-logo hover:bg-primary-dark transition-all duration-300 ease-in-out rounded-3xl px-8"
            >
              <Link to="/login">
                <span className="text-white font-bold uppercase">Logar</span>
              </Link>
            </Button>
            <Button
              asChild
              className="bg-transparent  border-2 border-color-apple-logo hover:bg-primary-dark transition-all duration-300 ease-in-out hover:bg-color-apple-logo rounded-3xl px-8"
            >
              <Link to="/register">
                <span
                  className="text-white font-bold uppercase
                     transition-all duration-300 ease-in-out     
                    
                "
                >
                  Registrar
                </span>
              </Link>
            </Button>
          </div>
        )}
      </ContainerWrapper>
    </header>
  );
};

export default Header;
