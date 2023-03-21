import { Box, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

FilterByService.propTypes = {
    filters:PropTypes.object,
    onChange: PropTypes.func,
};

function FilterByService({ filters = {} , onChange }) {

    const handleChange = (e) => {
        if(!onChange) return;

        const { name ,checked } = e.target;
        onChange({ [name]: checked });
    }

    return (
        <Box>
            <hr></hr>
            <Box className='service' >
                <Typography variant='subtitle2' fontWeight='bold' color='green'>Dịch vụ</Typography>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                size="small"
                                onChange={handleChange}
                                checked={Boolean(filters['isSpecial'])}
                                name={'isSpecial'}
                            />}
                        label="Bán chạy nhất" />
                </FormGroup>
            </Box>

            <hr></hr>
            <img 
            width='100%'
            height='190px'
            src="https://khostock.net/wp-content/uploads/2021/12/KS1710-Converted.jpg" alt="..." />
        </Box>
    );
}

export default FilterByService;