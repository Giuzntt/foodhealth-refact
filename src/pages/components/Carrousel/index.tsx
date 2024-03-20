import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselDApiDemo() {
  return (
    <div>
      <Carousel
        className="w-full "
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <img
                src={`/carrousel/carrousel-${index + 1}.png`}
                alt="carousel item"
                className="object-cover w-full h-full rounded-lg "
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
