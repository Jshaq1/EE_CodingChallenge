
import { useParams } from 'react-router-dom'
import { FavButton, Loader } from '../barrelExport';
import { Rating } from '@mui/material';
import '../Css/ProductPage.scss'

const ProductDetail = ({ productsData }) => {
    const params = useParams()
    const selectedProduct = productsData.filter(product => product.id === Number(params.id))[0]

    return (
        !selectedProduct ? <Loader></Loader> :
            <div className='product-container'>
                <div className='product-image-container'>
                    <img src={selectedProduct.image} alt='product' />
                </div>
                <div className='product-details-expanded'>
                    <h3>{selectedProduct.title}</h3>
                    <Rating value={selectedProduct.rating.rate} readOnly precision={0.1} />
                    <p>{selectedProduct.description}</p>
                    <div className='price-likebtn'>
                        <h3>${selectedProduct.price}</h3>
                        <FavButton productDetails={selectedProduct}></FavButton>
                    </div>
                </div>
            </div>

    )
}

export default ProductDetail