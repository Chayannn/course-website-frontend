import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const VideoCard = ({
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteButtonHandler,  
}) => {
  return (
    <Stack
      direction={['column', 'row']}
      my={'8'}
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading children={`#${num} ${title}`} size={'sm'} />
        <Text children={description} />
      </Box>
      <Button>
        <RiDeleteBin7Fill
          color="purple"
          onClick={() => deleteButtonHandler(courseId, lectureId)}
        />
      </Button>
    </Stack>
  );
};

export default VideoCard;
