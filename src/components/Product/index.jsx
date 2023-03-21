import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Box } from '@mui/material';

Product.propTypes = {
    product: PropTypes.object.isRequired,
};

function Product({ product }) {
    return (
        <Box>
            <div className='product'>
                <div className="product__image">
                    <img src={product.image} alt={product.name} />
                </div>

                <p className="center"> {product.name} </p>
                <p className="price"> {product.price}</p>

            </div>
        </Box>
    );
}

export default Product;