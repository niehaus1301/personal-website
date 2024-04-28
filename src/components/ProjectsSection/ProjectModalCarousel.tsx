import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  mobile: {
    breakpoint: { max: 9999, min: 0 },
    items: 1,
  },
};

interface Props {
  images: string[];
}

export default function ProjectModalCarousel({ images }: Props) {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      showDots={false}
      arrows={images.length > 1}
    >
      {images.map((img) => (
        <img width="100%" src={img} alt="Screenshot of project" />
      ))}
    </Carousel>
  );
}
