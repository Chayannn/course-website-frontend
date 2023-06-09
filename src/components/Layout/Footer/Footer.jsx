import React from 'react';

import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import { AiFillYoutube, AiFillTwitterCircle , AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'full'}>
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size="sm"
            children="@CodeNation"
            color={'yellow.400'}
          />
        </VStack>
        
        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          color={'white'}
          fontSize={'50'}
        >
          <a
            href="https://www.youtube.com/@bigboxSWE"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillYoutube />
          </a>
          <a href="https://twitter.com/ChayanPanda11">
            <AiFillTwitterCircle />
          </a>
          <a href="https://github.com/Chayannn">
            <AiOutlineGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
