import ContainerWrapper from "@/components/ContainerWrapper";
import { Button } from "@/components/ui/button";
import { CarouselDApiDemo } from "../Carrousel";
import Tag from "@/components/Tag";
import { Typewriter } from "react-simple-typewriter";
import { prompts } from "@/constants/prompts";
import Icon from "@/components/IconHeader";
import SocialIcon from "@/components/SocialIcon";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative">
      <div
        className="bg-section-home
      relative
    "
      >
        <div
          className="absolute top-[-30px] left-[-30px] hidden lg:block xl:block 2xl:block 
      
      "
        >
          <Icon />
        </div>

        <ContainerWrapper className="relative flex-col items-start m-auto align-middle  mt-32">
          <div className="relative flex-col items-start m-auto align-middle">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
              <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                <div className="max-w-xl text-center lg:text-left">
                  <div>
                    <h1 className="text-4xl font-semibold tracking-tight text-gray-200 lg:text-5xl my-6 h-20 lg:h-24">
                      <Typewriter
                        words={prompts}
                        loop={true}
                        cursor={true}
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={2000}
                      />
                    </h1>

                    <p
                      className="max-w-xl mt-8  tracking-tight  text-white
                 font-semibold text-justify text-xl"
                    >
                      Uma alimentação balanceada é a chave para nutrir o corpo e
                      a mente, promovendo saúde e bem-estar em cada refeição.
                    </p>
                  </div>
                  <div className="flex items-start justify-start gap-3 mt-10 lg:flex-row lg:justify-start md:justify-start md:items-start md:gap-3 md:mt-12">
                    <Button className="bg-color-apple-logo text-white rounded py-5 px-12 text-lg font-semibold w-[232px] h-[48px] lg:w-[232px] lg:h-[56px] hover:bg-opacity-80 filter hover:brightness-90">
                      Quero saber mais
                    </Button>

                    {/* create divider */}

                    <SocialIcon
                      href="https://www.facebook.com"
                      icon={<FaFacebook />}
                    />
                    <div className="hidden lg:block xl:block 2xl:block w-0.5 h-12 bg-white" />

                    <SocialIcon
                      href="https://www.instagram.com"
                      icon={<FaInstagram />}
                    />
                    <div className="hidden lg:block xl:block 2xl:block w-0.5 h-12 bg-white" />

                    <SocialIcon
                      href="https://www.twitter.com"
                      icon={<FaTwitter />}
                    />
                  </div>

                  <div className="flex items-start  gap-2 mt-14">
                    <Tag>Receitas</Tag>
                    <Tag>Alimentação</Tag>
                    <Tag>Saúde</Tag>
                  </div>
                </div>
              </div>
              <div
                className="order-first block w-full mt-12 aspect-square lg:mt-0  sm:hidden md:hidden lg:block xl:block 2xl:block
            "
              >
                <CarouselDApiDemo />
              </div>
            </div>
          </div>
          <div>
            <div className="py-12 mx-auto lg:max-w-7xl">
              <dl
                className="grid grid-cols-1 gap-6 space-y-0 text-center lg:gap-24 lg:grid-cols-3 lg:text-left
               py-8
              "
              >
                <div>
                  <div>
                    <p className="mt-5 text-lg font-medium leading-6 text-green-100">
                      Cozinheiros profissionais
                    </p>
                  </div>
                  <div className="mt-2 text-base text-white">
                    Você pode contar com a nossa plataforma para encontrar as
                    melhores receitas e dicas de culinária.
                  </div>
                </div>
                <div>
                  <div>
                    <p className="mt-5 text-lg font-medium leading-6 text-green-100">
                      Acesso ilimitado
                    </p>
                  </div>
                  <div className="mt-2 text-base text-white">
                    Tenha acesso a um vasto catálogo de receitas, dicas e
                    truques de culinária.
                  </div>
                </div>
                <div>
                  <div>
                    <p className="mt-5 text-lg font-medium leading-6 text-green-100">
                      Experiência de usuário incrível
                    </p>
                  </div>
                  <div className="mt-2 text-base text-white">
                    Nossa plataforma é fácil de usar e oferece uma experiência
                    de usuário incrível.
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </ContainerWrapper>
        <div className="absolute bottom-[-30px] right-[0px] hidden lg:block xl:block 2xl:block">
          <Icon />
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path
          fill="#1ADC58"
          fill-opacity="1"
          d="M0,0L26.7,32C53.3,64,107,128,160,144C213.3,160,267,128,320,122.7C373.3,117,427,139,480,138.7C533.3,139,587,117,640,112C693.3,107,747,117,800,106.7C853.3,96,907,64,960,64C1013.3,64,1067,96,1120,90.7C1173.3,85,1227,43,1280,42.7C1333.3,43,1387,85,1413,106.7L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default HeroSection;
