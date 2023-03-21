import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

ProductDetail.propTypes = {
    product: PropTypes.object,
};

function ProductDetail({ product = {} }) {
    const { name, price, description } = product
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h3" >{name}</Typography>
            <Typography sx={{paddingTop: 1}}variant='h5' color='red'>Mô tả sản phẩm:</Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>{` - ${description}`}</Typography>
            <Box sx={{ display: 'flex', marginTop: 1, backgroundColor: '#f1f1f1' }}>
                <Typography sx={{ color: 'green', fontSize: 30 , paddingLeft: 1 }}>{`${price}.000 đ`}</Typography>
                <Typography variant="caption" sx={{ color: 'red', paddingLeft: 1 }} > + 1 phiếu tích lũy 🎁</Typography>
            </Box>
        </Box>
    );
}

export default ProductDetail;