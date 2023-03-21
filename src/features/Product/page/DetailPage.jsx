import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import useProductDetail from '../hooks/useProductDetail'
import ProductImage from '../components/ProductImage';
import ProductDetail from '../components/ProductDetail';
import ProductAddToCart from '../components/ProductAddToCart';
import { addToCart } from '../../Cart/CartSlice';
import { useDispatch } from 'react-redux';

DetailPage.propTypes = {

};

function DetailPage(props) {

    const dispatch = useDispatch();
    let { productId } = useParams();
    // console.log(productId);

    //custom hooks
    const { product } = useProductDetail(productId);

    const handleAddToCart = ({quantity}) => {
        // console.log('form submit', formValues);
        const action = addToCart({
            id: product.id,
            product,
            quantity,
        })
        console.log(action);
        dispatch(action);
    }
    return (
        <Box sx={{
            marginTop: 1,
        }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <ProductImage product={product} />
                    </Grid>
                    <Grid item xs={7}>
                        <Paper>
                            <ProductDetail product={product} />
                            <ProductAddToCart onSubmit={handleAddToCart} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default DetailPage;