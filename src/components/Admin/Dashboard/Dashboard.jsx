import React from 'react';
import { Box, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import cursor from '../../../assets/images/cursor.png';
import DataBox from './DataBox';
import Bar from './Bar';
import { DoughnutChart, LineChart } from './Chart';

const Dashboard = () => {
  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{ cursor: `url(${cursor}), default` }}
    >
      <Box boxSizing="border-box" py={'16'} px={['4', '0']}>
        <Text
          textAlign={'center'}
          opacity={0.5}
          children={`Last change was on ${String(new Date()).split('G')[0]}`}
        />

        <Heading
          children="Dashboard"
          ml={['0', '16']}
          mb={'16'}
          textAlign={['center', 'left']}
        />

        <Stack
          direction={['column', 'row']}
          minH={'24'}
          justifyContent={'space-evenly'}
        >
          <DataBox title={'Views'} qty={123} qtyPercentage={30} profit={true} />
          <DataBox title={'Users'} qty={33} qtyPercentage={70} profit={true} />
          <DataBox
            title={'Subscription'}
            qty={12}
            qtyPercentage={20}
            profit={false}
          />
        </Stack>

        <Box
          m={['0', '16']}
          borderRadius={'lg'}
          p={['0', '16']}
          mt={['4', '16']}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        >
          <Heading
            textAlign={['center', 'left']}
            size={'md'}
            children="Views Graph"
            pt={['8', '0']}
            ml={['0', '16']}
          />
          <LineChart />
        </Box>
        <Grid templateColumns={['1fr', '2fr 1fr']}>
          <Box p={'4'}>
            <Heading
              textAlign={['center', 'left']}
              size={'md'}
              children="Progress Bar"
              my={'8'}
              ml={['0', '16']}
            />
            <Box>
              <Bar Title={'Views'} value={30} profit={true} />
              <Bar Title={'Users'} value={78} profit={true} />
              <Bar Title={'Subscription'} value={20} profit={false} />
            </Box>
          </Box>

          <Box p={['0', '16']} boxSizing="border-box" py={'4'}>
            <Heading
              textAlign={'center'}
              size={'md'}
              mb={'4'}
              children="Users"
            />
            <DoughnutChart />
          </Box>
        </Grid>
      </Box>

      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
