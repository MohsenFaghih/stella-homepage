import React from 'react';
import '../assets/css/layouts.css';

const Header = (props) => {
  return (
    <div className='HeaderRoot'>
      {props.children.nav}
      {props.children.image}
      {props.children.content}
    </div>
  )
};

export default Header;
