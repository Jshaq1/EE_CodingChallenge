import React, { useContext } from 'react';
import GlobalContext from '../../Context/MyProductsContext';
import { IconButton } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavButton = ({ productDetails }) => {
    const { addProductToList, favProductsList, removeProductFromList } = useContext(GlobalContext);
    const isProductFavorited = favProductsList.some(product => product.id === productDetails.id);

    return (
        <IconButton onClick={() => isProductFavorited ? removeProductFromList(productDetails.id) : addProductToList(productDetails)}>
            {isProductFavorited ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderOutlinedIcon />}
        </IconButton>
    );
};

export default FavButton;