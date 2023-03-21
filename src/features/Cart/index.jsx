import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import { cartPriceSelector, cartTotalSelector } from './Selector';

Cart.propTypes = {};

function Cart(props) {
  const carts = useSelector(state => state.cart.cartItems)
  const cartTotal = useSelector(cartTotalSelector);
  const cartPrice = useSelector(cartPriceSelector); 
  console.log(carts);
  console.log(cartPrice);
  console.log(cartTotal);

  return (
    <div>
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sản phẩm</TableCell>

              <TableCell align="right">Đơn giá</TableCell>
              <TableCell align="right">Số lượng&nbsp;</TableCell>
              <TableCell align="right">Số tiền&nbsp;</TableCell>
              <TableCell align="right">thao tác&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{backgroundColor: 'pink'}}>
            {carts.map((cart) => (
              <TableRow
                key={cart.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box sx={{display: 'flex'}}>
                  <img
                    width='150px'
                    height='100px'
                    src={cart.product.thumbnailUrl} alt="..." />
                  <Box sx={{paddingLeft: 2 , paddingTop: 5}}>
                    <Typography>{cart.product.name}</Typography>
                  </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">{cart.product.price}</TableCell>
                <TableCell align="right">{cart.quantity}</TableCell>
                <TableCell align="right">{cartPrice[0]}</TableCell>
                <TableCell align="right"><IconButton><ClearIcon /></IconButton></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {cartTotal}
      </Container>
    </div>
  );
}

export default Cart;