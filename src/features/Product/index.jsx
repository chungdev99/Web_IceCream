import { Box } from '@mui/material';
import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Routes } from "react-router-dom";
import DetailPage from './page/DetailPage';
import ListPage from './page/ListPage';


ProductList.propTypes = {};

function ProductList(props) {
    // const match = useRouteMatch();
    //  const match = useRoutes();
    // const { match } = useParams();
    // console.log(match);
    return (
        <Box>
            <Routes>
                <Route path='/listpage' element={<ListPage />} />
                <Route path='/listpage/:productId' element={<DetailPage />} />
                {/* {`${match.url}/:productId`} */}
            </Routes>
        </Box>
    );
}

export default ProductList;