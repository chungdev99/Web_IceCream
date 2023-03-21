import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import ProductImageIcon from './ProductImageIcon';


ProductImage.propTypes = {
    product: PropTypes.object,
};

function ProductImage({ product }) {

    return (
        <Box>
            <img
                height='350px'
                src={product.thumbnailUrl}
                alt={product.name}
                width="100%"
            />
            <ProductImageIcon />
        </Box>
    );
}

export default ProductImage;