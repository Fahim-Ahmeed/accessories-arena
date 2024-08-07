import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const DifferentProduct = ({item}) => {
    const{img,name}=item;
    return (
           <Link to="products">
            <div>
                <img className="" src={img} alt="" />
                <h4 className='text-rose-400 text-xl'> {name}</h4>
            </div>
           </Link>
    );
};
DifferentProduct.propTypes={
    item:PropTypes.object
}

export default DifferentProduct;