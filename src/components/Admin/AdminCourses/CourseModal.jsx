/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import VideoCard from './VideoCard';
import { fileUploadCss } from '../../Auth/Register';

const CourseModal = ({
  isOpen,
  onClose,
  id,
  deleteButtonHandler,
  addLectureHandler,
  courseTitle,
  lectures = [1, 2, 3, 4, 5, 6, 7, 8],
}) => {
  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const [video, setVideo] = useState('');

  const [videoPrev, setVideoPrev] = useState('');

  const changeVideoHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };
  const closeHandler = () => {
    setTitle('');
    setDescription('');
    setVideo('');
    setVideoPrev('');
    onClose('');
  };
  return (
    <Modal
      isOpen={isOpen}
      size={'full'}
      onClose={closeHandler}
      scrollBehavior="outside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> {courseTitle} </ModalHeader>
        <ModalCloseButton />
        <ModalBody p={'16'}>
          <Grid templateColumns={['1fr', '3fr 1fr']}>
            <Box px={['0', '16']}>
              <Box my={'5'}>
                <Heading children="Course Title" />
                <Heading children={`#${id}`} size={'sm'} opacity={0.4} />
              </Box>
              <Heading children={'Lectures'} size={'lg'} />
              {lectures.map((item, index) => (
                <VideoCard
                  num={index + 1}
                  key={index}
                  title="React Intro"
                  description="this is a intro lecture where you will know the basics of react"
                  lectureId="gakgnlectureoagoanong"
                  courseId={id}
                  deleteButtonHandler={deleteButtonHandler}
                />
              ))}
            </Box>
            <Box>
              <form
                onSubmit={e => addLectureHandler(e, id, description, video)}
              >
                <VStack spacing={'4'}>
                  <Heading
                    children="Add Lecture"
                    size={'md'}
                    textTransform={'uppercase'}
                  />
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                  <Input
                    accept="video/mp4"
                    type="file"
                    placeholder="password"
                    focusBorderColor="purple.300"
                    css={{
                      '&::file-selector-button': {
                        ...fileUploadCss,
                        color: 'purple',
                      },
                    }}
                    onChange={changeVideoHandler}
                  />
                  {videoPrev && (
                    <video
                      controlsList="nodownload"
                      controls
                      src={videoPrev}
                    ></video>
                  )}
                  <Button w={'full'} colorScheme="purple" type="submit">
                    Upload
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeHandler}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModal;
