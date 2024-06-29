import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CarouselItem = ({item,length}) => {
    const{title,image,id}=item;
    return (
        <div id={id} className="carousel-item relative w-full">
                <img src={image} alt="" className="object-cover w-full h-full"  />  
         <div className="absolute  space-y-4 w-3/4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center bg-gradient-to-r from-gray-500 to-gray-900 rounded-lg ">
                <h1 className=" text-white md:text-4xl lg:text-4xl text-xl  p-4">{title}</h1>
                <Link to="/products">
                <button className="btn btn-outline btn-secondary">See More</button>
                </Link>
                <p></p>
                </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a 
      href={`#${id==1?length:id-1}`} 
      className="btn btn-circle">❮</a> 
      <a 
      href={`#${id==length?1:id+1}`} 
      className="btn btn-circle">❯</a>
    </div>
  </div>
    );
};
CarouselItem.propTypes={
    item:PropTypes.object,
    length:PropTypes.number
}

export default CarouselItem;