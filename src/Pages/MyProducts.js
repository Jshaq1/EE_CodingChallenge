import { useContext } from 'react';
import { ProductsList } from '../barrelExport';
import GlobalContext from '../Context/MyProductsContext';
import ErrorLoading from '../Components/Utilities/ErrorLoading';

const MyProducts = () => {
    const { favProductsList } = useContext(GlobalContext);

    return (
        <>
            {favProductsList.length > 0 ? (
                <ProductsList productsData={favProductsList} />
            ) : (
                <ErrorLoading message={'Your wishlist is empty!'} />
            )}
        </>
    );
};

export default MyProducts;