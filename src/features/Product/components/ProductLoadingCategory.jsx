import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Skeleton } from '@mui/material';

ProductLoadingCategory.propTypes = {

};

function ProductLoadingCategory(props) {
    return (
        <Box sx={{ width: 175 , marginTop: 5 }}>
            <Skeleton />
            {/* <Skeleton animation="wave" />
            <Skeleton animation={false} /> */}
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <br></br>
            <Skeleton />
            <Skeleton />
        </Box>
    );
}

export default ProductLoadingCategory;