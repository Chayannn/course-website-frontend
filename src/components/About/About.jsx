import React from 'react';
import {
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Founder from './Founder';
import VideoPlayer from './VideoPlayer';
import { RiSecurePaymentFill } from 'react-icons/ri';
import TandC from './TandC';
import termsAndCondition from '../../assets/docs/termsAndCondition';

const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>
        <Link to={'/subscribe'}>
          <Button variant={'ghost'} colorScheme="yellow">
            Check Out Pricing
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndCondition={termsAndCondition} />
      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children="Payment is secured by Razorpay"
        />
      </HStack>
    </Container>
  );
};

export default About;
