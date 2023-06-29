import React, { useState } from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const submitHandler = async e => {
    e.preventDefault();

    await dispatch(updateProfile(name, email));
    dispatch(loadUser());
    navigate('/profile');
  };

  const { loading } = useSelector(state => state.profile);

  return (
    <Container py={'16'} minH={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          children="Update Profile"
          my={'16'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        />
        <VStack spacing={'8'}>
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            focusBorderColor="yellow.500"
          />
          <Input
            required
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            focusBorderColor="yellow.500"
          />
          <Button
            isLoading={loading}
            w={'full'}
            colorScheme="yellow"
            type="submit"
          >
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
