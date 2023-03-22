import ClearIcon from '@mui/icons-material/Clear';
import { Box, Button, Grid, IconButton, Paper, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFormCard } from './CartSlice';
import { cartItemsCountSelector, cartPriceSelector, cartTotalSelector } from './Selector';

Cart.propTypes = {};

function Cart(props) {

  // const [loading , setLoading] = useState(true);

  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    const action = removeFormCard(id);
    console.log('removeIteam', action);
    dispatch(action);
  }



  const carts = useSelector(state => state.cart.cartItems)
  // setLoading(false);

  const cartTotal = useSelector(cartTotalSelector);
  const cartPrice = useSelector(cartPriceSelector);
  const cartItemCount = useSelector(cartItemsCountSelector);
  console.log(carts);
  console.log(cartPrice);
  console.log(cartTotal);



  return (
    <div style={{ backgroundColor: '#D3D3D3' }}>
      <br />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Box sx={{ display: 'flex' }}>
              <Typography fontWeight='bold'>Giỏ hàng</Typography>
              <Typography sx={{ paddingLeft: 1 }}>{` ( ${cartItemCount} sản phẩm )`}</Typography>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 550 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Sản phẩm</TableCell>
                    <TableCell align="right">Đơn giá</TableCell>
                    <TableCell align="right">Số lượng&nbsp;</TableCell>
                    <TableCell align="right">Thao tác&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ backgroundColor: '#B0E0E6' }}>
                  {carts.map((cart) => (
                    <TableRow
                      key={cart.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Box sx={{ display: 'flex' }}>
                          <img
                            style={{ borderRadius: '0.1rem' }}
                            width='140px'
                            height='90px'
                            src={cart.product.thumbnailUrl} alt="..." />
                          <Box sx={{ paddingLeft: 2, paddingTop: 4 }}>
                            <Typography sx={{ fontSize: '15px' }}>{cart.product.name}</Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell align="right" sx={{ fontSize: '15px' }}>{`${cart.product.price}.000`}</TableCell>
                      <TableCell align="right" >
                        {cart.quantity}
                      </TableCell>
                      <TableCell align="right"><IconButton onClick={() => handleRemoveItem(cart.id)}><ClearIcon /></IconButton></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Box sx={{ marginTop: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography fontWeight='bold' sx={{ padding: 2 }}>Địa chỉ nhận hàng</Typography>
                  <Typography color='#FFA500' sx={{ padding: 2, cursor: 'pointer' }}>Thay đổi</Typography>
                </Box>
                <Typography fontWeight='bold' sx={{ paddingLeft: 2, paddingBottom: 2 }}>Chung | 09161234</Typography>
              </Box>
            </Paper>

            <Paper>
              <Box sx={{ marginTop: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ padding: 2 }}>Tạm tính:</Typography>
                  <Typography sx={{ padding: 2, fontWeight: 'bold' }}>{`${cartTotal}.000 đ`}</Typography>
                </Box>
                <hr />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ padding: 2 }}>Thành tiền:</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ paddingTop: 2, paddingLeft: 6, fontWeight: 'bold', fontSize: '19px', color: 'red' }}>{`${cartTotal}.000 đ`}</Typography>
                    <Typography sx={{ paddingRight: 1 }}>( Đã bao gồm VAT )</Typography>
                  </Box>
                </Box>
              </Box>

            </Paper>
            <Button sx={{ marginTop: 1 }} variant="contained" fullWidth>Thanh toán</Button>
            <Button sx={{ marginTop: 1 }} variant="contained" fullWidth>Lịch sử thanh toán</Button>
          </Grid>
        </Grid>
      </Container>
      <br />
    </div>
  );
}

export default Cart;