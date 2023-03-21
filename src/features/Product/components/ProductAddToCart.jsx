import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@mui/material';
import QuantityField from '../../../components/formControl/QuantityField';

ProductAddToCart.propTypes = {
    onSubmit: PropTypes.func,
};

function ProductAddToCart({ onSubmit = null}) {
    const schema = yup.object().shape({
        quantity: yup
        .number()
        .required('pls enter quantity')
        .min(1, 'Minium value is 1')
        .typeError('pls enter a number')
    });
    const form = useForm({
        defaultValues: {
            quantity: 1
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values)
        }
    }

    return (
        <Box sx={{
            marginLeft: 2,
            paddingBottom: 1
        }}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <QuantityField name='quantity' label='Số lượng:' form={form} />

            <Button type='submit' style={{ width: '230px' , margin: 1}} variant="contained" color='primary' fullWidth >
                Mua
            </Button>
        </form>
        </Box>
    );
}

export default ProductAddToCart;