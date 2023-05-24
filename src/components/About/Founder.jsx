import { Avatar, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
      <VStack>
        <Avatar
          src="https://avatars.githubusercontent.com/u/112529699?v=4"
          boxSize={['40', '48']}
        />
        <Text children="Co-Founder" opacity={'0.7'} />
      </VStack>
      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children="Chayan Panda" size={['md', 'xl']} />
        <Text
          alignItems={['center', 'left']}
          children={`Hi I'm a Full-stack developer from India.Our mission is to provide quality education at reasonable price.`}
        />
      </VStack>
    </Stack>
  );
};

export default Founder;
