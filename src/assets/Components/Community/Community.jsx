import img from"../../community.jpg";

const Community = () => {
    return (
        <div className="card w-full h-fit bg-base-100 shadow-xl image-full">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title  text-center text-4xl md:text-6xl text-yellow-500">We build a community very soon<br /> Stay with us</h2>
        </div>
      </div>
    );
};

export default Community;