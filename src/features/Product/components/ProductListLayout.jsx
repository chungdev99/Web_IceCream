import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

Product1.propTypes = {
    product: PropTypes.object,
};


function Product1({ product }) {
    let navigate = useNavigate();


    const handleClick = () => {
        navigate(`${product.id}`)
    };

    return (
        <Box padding={1} onClick={handleClick} >
            <Box padding={1} minHeight='210px' >
                <img
                    style={{borderRadius: '0.6rem'}}
                    height='200px'
                    width='207px'
                    src={product.thumbnailUrl}
                    alt='...' />
            </Box>
            <Typography variant='body1'>  {product.name} </Typography>
            <Typography variant='body2'>
                <Box component='span' fontSize="17px" fontWeight='bold' >
                    {`${product.price}.000 đ`}
                </Box>
            </Typography>
        </Box>
    );
}

export default Product1;