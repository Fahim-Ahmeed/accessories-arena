import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CarouselItem = ({ item, length, currentIndex, handleNext, handlePrev }) => {
  const { title, image, id } = item;
  const isActive = currentIndex === id - 1;

  return (
    <div id={id} className={`carousel-item relative w-full ${isActive ? "block" : "hidden"}`}>
      <img src={image} alt="" className="object-cover w-full h-full" />
      <div className="absolute space-y-4 w-3/4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center bg-gradient-to-r from-gray-500 to-gray-900 rounded-lg">
        <h1 className="text-white md:text-4xl lg:text-4xl text-xl p-4">{title}</h1>
        <Link to="/products">
          <button className="btn btn-outline btn-secondary m-4">See More</button>
        </Link>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button onClick={handlePrev} className="btn btn-circle">❮</button>
        <button onClick={handleNext} className="btn btn-circle">❯</button>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  item: PropTypes.object,
  length: PropTypes.number,
  currentIndex: PropTypes.number,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
};

export default CarouselItem;
