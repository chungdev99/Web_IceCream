// import { Box } from '@mui/system';
import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Container } from '@mui/material';
// import './styles.css';
Image.propTypes = {

};

function Image(props) {
    return (
      <Box>
        <Container>
       <div>
       
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators/dots */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
          <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
          <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
        </div>
        {/* The slideshow/carousel */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.pinimg.com/originals/07/21/aa/0721aa1dd37cabb586e50e49a14059f5.jpg" alt="..." className="d-block" style={{ width: '100%', height: '270px' }} />
          </div>
          <div className="carousel-item">
            <img src="https://e.khoahoc.tv/photos/image/2017/08/05/kem-que-1.jpg" alt="..." className="d-block" style={{ width: '100%', height: '270px'}} />
          </div>
          <div className="carousel-item">
            <img src="http://media.vietq.vn/files/kemvietnam1.jpg" alt="..." className="d-block" style={{ width: '100%', height: '270px' }} />
          </div>
        </div>
        {/* Left and right controls/icons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </div>

      </div>
      </Container>
      </Box>
    );
}

export default Image;