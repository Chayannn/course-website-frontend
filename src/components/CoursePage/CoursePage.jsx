import React, { useState } from 'react';
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 'faafaafafafa',
      title: 'sample1',
      description: 'sample jganav kjengiagiabgadnvilarhgureagkjsvis ibgrbsjb',
      video: {
        url: 'kkfnjanfiubaf jkajka vja',
      },
    },
    {
      _id: 'faafaafafafa',
      title: 'sample2',
      description: 'sample jganav kjengiagiabgadnvilarhgureagkjsvis ibgrbsjb',
      video: {
        url: 'kkfnjanfiubaf jkajka vja',
      },
    },
    {
      _id: 'faafaafafafa',
      title: 'sample3',
      description: 'sample jganav kjengiagiabgadnvilarhgureagkjsvis ibgrbsjb',
      video: {
        url: 'kkfnjanfiubaf jkajka vja',
      },
    },
  ];

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          autoPlay
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        />
        <Heading
          m={'4'}
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m={'4'} children="description" />
        <Text m="4" children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((element, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: '0',
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {element.title}{' '}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
