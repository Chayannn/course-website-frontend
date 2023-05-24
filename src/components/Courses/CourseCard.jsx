import React from 'react';
import {
  VStack,
  Image,
  Heading,
  Text,
  HStack,
  Stack,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CourseCard = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        size={'sm'}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text children={description} noOfLines={2} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children={'Creator'}
        />
        <Text
          fontFamily={'body'}
          textTransform={'uppercase'}
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        textTransform={'uppercase'}
        size={'xs'}
        children={`Lectures - ${lectureCount}`}
      />
      <Heading
        textTransform={'uppercase'}
        size={'xs'}
        children={`Views - ${views}`}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme="yellow"
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

export default CourseCard;
