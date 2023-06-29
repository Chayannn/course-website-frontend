import React, { useEffect, useState } from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { changePassword } from '../../redux/actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const dispatch = useDispatch();
  const submitHandler = async e => {
    e.preventDefault();

    await dispatch(changePassword(oldPassword, newPassword));
  };

  const { loading, message, error } = useSelector(state => state.profile);
  
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.error(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <Container py={'16'} minH={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          children="Change Password"
          my={'16'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        />
        <VStack spacing={'8'}>
          <Input
            required
            type="password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Old Password"
            focusBorderColor="yellow.500"
          />
          <Input
            required
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="New Password"
            focusBorderColor="yellow.500"
          />
          <Button
            isLoading={loading}
            w={'full'}
            colorScheme="yellow"
            type="submit"
          >
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
