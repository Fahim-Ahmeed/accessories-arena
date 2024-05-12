import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem/CarouselItem";
const Carousel = () => {
  const [carouselItem,setCarouselItem]=useState([]);
  useEffect(()=>{
    fetch("carouselItem.json")
    .then(response=>response.json())
    .then(data=>setCarouselItem(data))

  },[])
    return (
        
        <section className='w-full caurosel-area  rounded-lg shadow-zinc-500 mt-8 mb-8' >
            <div className="carousel w-full h-full">
{
  carouselItem.map((item,id)=>(<CarouselItem key={id} length={carouselItem.length} item={item}></CarouselItem>))
}
</div>
</section>
    );
};

export default Carousel;