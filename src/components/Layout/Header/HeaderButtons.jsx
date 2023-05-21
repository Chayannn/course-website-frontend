import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderButtons = ({ url = '/', title = 'Home', onClose }) => {
  return (
    <Link onClick={onClose} to={url}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>
  );
};

export default HeaderButtons;
