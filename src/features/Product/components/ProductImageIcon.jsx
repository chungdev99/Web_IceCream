import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';

ProductImageIcon.propTypes = {

};

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

function ProductImageIcon(props) {
    return (
        <Box sx={{ display: 'flex' }}>
            <Typography variant='h6' color='#FF4500'>Chia sẽ : </Typography>
            <Box sx={{ paddingLeft: 1 }}>
                <StyledRating
                    name="customized-color"
                    defaultValue={4}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
            </Box>
        </Box>
    );
}

export default ProductImageIcon;