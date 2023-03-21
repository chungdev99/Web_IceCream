import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// function Scroll(showBelow) {

const Scroll = (showBelow) => {
  // const [show, setShow] = useState(false)

  // const handleScroll = () => {
  //     if (window.pageYOffset > showBelow) {
  //         if (!show) setShow(true)
  //     } else {
  //         if (show) setShow(false)
  //     }
  // }

  // const handleClick = () => {
  //     window[`scrollTo`]({ top: 0, behavior: `smooth` })
  // }   

  // useEffect(() => {
  //     if (showBelow) {
  //         window.addEventListener(`scroll`, handleScroll)
  //         return () => window.removeEventListener(`scroll`, handleScroll)
  //     }
  // })

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div>
      <IconButton onClick={scrollToTop}
        style={{ display: visible ? 'flex' : 'none' }}>
        <ExpandLessIcon />
      </IconButton>
    </div>
  );
}

export default Scroll;