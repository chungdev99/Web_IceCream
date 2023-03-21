import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Box, FormControl, FormHelperText, IconButton, OutlinedInput, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disable: PropTypes.bool,
};

function QuantityField(props) {
    const { form, name, label } = props;
    const { control, setValue } = form;
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value, name},
                fieldState: { invalid, isTouched, error }
            }) => (
                <>
                    <FormControl error={isTouched && invalid} margin="normal" variant="outlined" size='small'>
                        <Typography sx={{paddingLeft: 1}}>{label}</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexFlow: 'row nowrap',
                            alignItems: 'center',
                            maxWidth: '145px',
                            paddingTop: 1,
                        }}>
                            <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
                                <RemoveCircleOutlineIcon />
                            </IconButton>
       
                            <OutlinedInput
                                id={name}
                                error={invalid}
                                type='number'
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                            />
                         
                            <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
                                <AddCircleOutlineIcon />
                            </IconButton>

                        </Box>
                    </FormControl>
                    <FormHelperText error={invalid}>{error?.message}</FormHelperText>
                </>
            )}
        />
    );
}

export default QuantityField;