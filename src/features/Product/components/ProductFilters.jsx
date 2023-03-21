import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/ByCategory/FilterByCategory'
import FilterByService from './Filters/ByService/FilterByService';
ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilters({ filters , onChange }) {
    const handleCategoryChange = (newCategoryId,value) => {
        if(!onChange) return;

        const newFilters = {
            ...filters,
            "categoryId": newCategoryId,
            "isSpecial": value,
        };
        console.log("??",newFilters);
        onChange(newFilters);
    };

    const handleChange = (value) => {
        if(!onChange) return;
        console.log('isSpecial', value);
        onChange(value);
    }

    return (
      <Box style={{
        marginTop: '15px'
      }}>
          <FilterByCategory onChange={handleCategoryChange} />
          <FilterByService filters={filters} onChange={handleChange} />
      </Box>
    );
}

export default ProductFilters;