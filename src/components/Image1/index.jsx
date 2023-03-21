import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Container, Grid } from '@mui/material';
import Image from '../Image';
import './styles.scss';

Image1.propTypes = {

};

function Image1(props) {
    return (
        <Box className='mobile-close'>
            <Container>
                <Grid container >
                    <Grid item xs={8}>
                        <Image />
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' , paddingTop: '3px'}}>
                            <img width="100%" height="170px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7nJXh1BQZSww6wKPdw_QSINb4vLaVMM3zw&usqp=CAU" alt="..." />
                            <br />
                            <img width="100%" height="70px" src="https://cdn.tgdd.vn/bachhoaxanh/banners/2798/thien-duong-kem-mua-2-tang-1-cung-loai-30032022104318.jpg" alt="..." />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Image1;