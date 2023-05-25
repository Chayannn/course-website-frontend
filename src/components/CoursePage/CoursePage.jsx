import React from 'react';
import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const lectureNumber = 1;
  const lectureTitle = 'What are props';

  const lectures = [
    {
      _id: 'faafaafafafa',
      title: 'sample',
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
        <Heading m={'4'} children={`#${lectureNumber + 1} ${lectureTitle}`} />
        <Heading m={'4'} children="description" />
        <Text
          m="4"
          children={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque, deleniti, quos dolores sequi totam voluptas id laboriosam provident corporis, consequuntur consequatur ipsa quas necessitatibus magni. Nihil, repellendus pariatur nesciunt ratione modi voluptas. Beatae perspiciatis tenetur suscipit architecto, earum iste?'
          }
        />
      </Box>
    </Grid>
  );
};

export default CoursePage;
