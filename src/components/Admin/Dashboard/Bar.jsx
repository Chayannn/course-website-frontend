import { Box, HStack, Heading, Progress, Text } from '@chakra-ui/react';
import React from 'react';

const Bar = ({ Title, value, profit }) => {
  return (
    <Box py={'4'} px={['0', '20']}>
      <Heading size={'sm'} children={Title} mb={'2'} />
      <HStack w={'full'} alignItems={'center'}>
        <Text children={profit?'0%':`-${value}%`} />
        <Progress w={'full'} value={profit ? value : 0} colorScheme="purple" />
        <Text children={`${value > 100 ? value : 100}%`} />
      </HStack>
    </Box>
  );
};

export default Bar;
