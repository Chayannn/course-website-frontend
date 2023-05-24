import { Box } from '@chakra-ui/react';
import React from 'react';
import introVideo from '../../assets/videos/intro.mp4';

const VideoPlayer = () => {
  return (
    <Box>
      <video 
        autoPlay
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}
      />
    </Box>
  );
};

export default VideoPlayer;
