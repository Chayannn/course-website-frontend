import React, { useState } from 'react';
import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import CourseCard from './CourseCard';
const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const categories = [
    'Web Development',
    'Machine Learning',
    'App Development',
    'Blockchain',
    'Devops',
  ];
  const addToPlaylistHandler = () => {};

  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type="text"
        focusBorderColor="yellow.400"
      />
      <HStack
        overflowX="auto"
        paddingY="8"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <CourseCard
          title={'React The Complete Guide'}
          views={99}
          imageSrc={'https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_1280.png'}
          id={'Sample'}
          creator={'Maximilian'}
          description={'Sample'}
          lectureCount={69}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
