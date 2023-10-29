import { Link } from 'react-router-dom'
import { FavButton } from '../barrelExport';


const ProductCard = ({ productDetails }) => {
    const { id, title, image, price } = productDetails;
    return (
        <div className="products-card">
            <Link className='product-link-container' to={{ pathname: `/product/${id}` }}>
                <div className='image-container'>
                    <img src={image} alt={title} />
                </div>
            </Link>
            <div className='card-details'>
                <Link className='product-link-container' to={{ pathname: `/product/${id}` }}>
                    <div className='title-container'>
                        <h3>{title}</h3>
                    </div>
                </Link>
                <div className='price-likebtn'>
                    <h3>${price}</h3>
                    <FavButton productDetails={productDetails} />
                </div>
            </div>

        </div>
    );
};

export default ProductCard