import ContainerWrapper from "@/components/ContainerWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaHospital } from "react-icons/fa";

const MainSection = () => {
  return (
    // create gradient

    <ContainerWrapper
      className="relative flex-col items-start m-auto align-middle   
    
    "
    >
      <div className="flex flex-col  my-16  justify-center items-start  w-full h-full">
        <div className="items-start">
          <p className="text-base font-semibold tracking-tight text-green-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-800 lg:text-5xl  h-20 ">
            Lorem ipsum dolor
          </h1>
          <p
            className=" mt-8  tracking-tight  text-green-500
                  font-normal text-justify text-xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            obcaecati, temporibus, doloribus, recusandae corporis quidem quaerat
            molestias odio iste quas rem. Ratione adipisci nulla beatae ullam
            autem eum unde quaerat!
          </p>
        </div>
      </div>

      <div className="relative items-start w-full px-5 py-4  ">
        <div className="grid grid-cols-1 gap-8 py-15 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 ml-[100px] my-5">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>
                <FaHospital className="text-green-500" />
              </CardTitle>
              <CardDescription className="text-green-500 font-semibold text-base">
                Atendimento personalizado
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-500 font-bold text-2xl">
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p className="text-gray-600  text-base text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi obcaecati, temporibus, doloribus,
              </p>
            </CardFooter>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>
                <FaHospital className="text-green-500" />
              </CardTitle>
              <CardDescription className="text-green-500 font-semibold text-base">
                Atendimento personalizado
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-500 font-bold text-2xl">
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p className="text-gray-600  text-base text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi obcaecati, temporibus, doloribus,
              </p>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 py-15 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 ml-[100px]">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>
                <FaHospital className="text-green-500" />
              </CardTitle>
              <CardDescription className="text-green-500 font-semibold text-base">
                Atendimento personalizado
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-500 font-bold text-2xl">
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p className="text-gray-600  text-base text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi obcaecati, temporibus, doloribus,
              </p>
            </CardFooter>
          </Card>
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>
                <FaHospital className="text-green-500" />
              </CardTitle>
              <CardDescription className="text-green-500 font-semibold text-base">
                Atendimento personalizado
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-500 font-bold text-2xl">
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p className="text-gray-600  text-base text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi obcaecati, temporibus, doloribus,
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default MainSection;
