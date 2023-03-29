import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AlertDialog from './AlerDialog';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector } from '../../features/Cart/Selector';


export default function Header() {

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  const cartItemCount = useSelector(cartItemsCountSelector);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/' style={{
              textDecoration: 'none',
              marginRight: 30,
              color: 'white',
            }}>
              IceCream🍦__DrinkTea🥤
            </Link>
          </Typography>

          <Box sx={{ marginRight: 1 }}>
            <AlertDialog />
          </Box>

          <Box sx={{ marginRight: 2 }}>
            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleCartClick}
            >
              <Badge badgeContent={cartItemCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>

          <Box>
            <NavLink to='/' style={{
              textDecoration: 'none',
              marginRight: 30,
              color: 'white',
            }}>
              <Button color="inherit">Trang chủ</Button>
            </NavLink>

            <NavLink to='/product/listpage' style={{
              textDecoration: 'none',
              marginRight: 30,
              color: 'white',
            }}>
              <Button color="inherit">Sản phẩm</Button>
            </NavLink>


            <Button style={{
              textDecoration: 'none',
              marginRight: 30,
              color: 'white',
            }} disabled >Đăng nhập</Button>

          </Box >

        </Toolbar>
      </AppBar>
    </Box>
  );
}
