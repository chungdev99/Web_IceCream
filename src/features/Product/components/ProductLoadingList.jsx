import { Box, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import PropTypes from 'prop-types';
import React from 'react';

ProductLoadingList.propTypes = {
  length: PropTypes.number,
};

function ProductLoadingList({ length = 8 }) {
  return (
    <Box>
      <Grid container>
      {Array.from(new Array(length)).map((x, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Box padding={1}>
            <Skeleton variant="rectangular" width='100%' height={190} />
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Grid>
      ))}
      </Grid>
    </Box>
  );
}

export default ProductLoadingList;