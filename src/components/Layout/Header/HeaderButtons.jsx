import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderButtons = ({ url = '/', title = 'Home' }) => {
  return (
    <Link to={url}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>
  );
};

export default HeaderButtons;
