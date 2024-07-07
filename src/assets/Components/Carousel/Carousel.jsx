import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem/CarouselItem";

const Carousel = () => {
  const [carouselItem, setCarouselItem] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("carouselItem.json")
      .then((response) => response.json())
      .then((data) => setCarouselItem(data));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItem.length);
    }, 3000); // Change item every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [carouselItem.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItem.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItem.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full carousel-area rounded-lg shadow-zinc-500 mt-8 mb-8">
      <div className="carousel w-full h-full">
        {carouselItem.map((item, index) => (
          <CarouselItem
            key={index}
            item={item}
            length={carouselItem.length}
            currentIndex={currentIndex}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
