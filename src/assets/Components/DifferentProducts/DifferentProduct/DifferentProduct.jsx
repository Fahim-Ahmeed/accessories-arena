import PropTypes from 'prop-types';
const DifferentProduct = ({item}) => {
    const{img,name}=item;
    return (
            <div>
                <img className="" src={img} alt="" />
                <h4>{name}</h4>
            </div>
    );
};
DifferentProduct.propTypes={
    item:PropTypes.object
}

export default DifferentProduct;