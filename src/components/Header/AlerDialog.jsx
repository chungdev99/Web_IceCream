import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{ color: 'white' }} onClick={handleClickOpen}>
        💌
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" color='#ff0000'>
          <h3> {"Phần Giới thiệu.. 💬"}</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" fontWeight='bold'>
            - Đây là một WebSite Online của quán ạ!!
            <br></br>
            - Nhằm giới thiệu về các sản phẩm kem của quán để phục vụ tận nơi cho quý khách 😋
            <br></br>
            <br></br>
            - Xin cảm ơn quý khách ạ 💚
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}