import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { cartItemsCountSelector } from '../../features/Cart/Selector';
import AlertDialog from './AlerDialog';
// import CloseIcon from '@mui/icons-material/Close';
// import DialogContent from '@material-ui/core/DialogContent';
// import Register from '../../features/Auth/components/Register';
// import Login from '../../features/Auth/components/Login';


export default function Header() {

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  const cartItemCount = useSelector(cartItemsCountSelector);


  //
  // const [open, setOpen] = useState(false);

  // const handleClose = (_event, reason) => {
  //   // ko the thoat tru khi bam cancel
  //   if (reason === 'escapeKeyDown' || reason === 'backdropClick') return;
  //   setOpen(false);
  // };

  // const MODE = {
  //   LOGIN: 'login',
  //   REGISTER: 'register'
  // }

  // const [mode, setMode] = useState(MODE.LOGIN);

  //// show icon when login
  // const loginInUser = useSelector(state => state.user.current);
  // const isLoggedIn = !!loginInUser.id;

  // //// show menu to Avatar
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleUserClick = (e) => {
  //   setAnchorEl(e.currentTarget);
  // }

  // const handleCloseMenu = () => {
  //   setAnchorEl(null);
  // };

  // const handleLogOut = () => {
  //   const action = logOut();
  //   dispath(action);

  //   setAnchorEl(null);
  // };

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

            {/* <Dialog
              // disableBackdropClick 
              disableEscapeKeyDown
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title">

              <IconButton onClick={handleClose} >
                <CloseIcon />
              </IconButton>

              <DialogContent>
                {mode === MODE.REGISTER && (
                  <>
                    <Register closeDialog={handleClose} />

                    <Box textAlign='center'>
                      <Button color='primary' onClick={() => setMode(MODE.LOGIN)}>
                        FORM LOGIN
                      </Button>
                    </Box>
                  </>
                )}

                {mode === MODE.LOGIN && (
                  <>
                    <Login closeDialog={handleClose} />

                    <Box textAlign='center'>
                      <Button color='primary' onClick={() => setMode(MODE.REGISTER)}>
                        FORM REGISTER
                      </Button>
                    </Box>
                  </>
                )}

              </DialogContent>
            </Dialog> */}


          </Box >

        </Toolbar>
      </AppBar>
    </Box>
  );
}
