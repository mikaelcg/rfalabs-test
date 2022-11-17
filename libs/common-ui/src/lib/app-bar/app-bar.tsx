import styles from './app-bar.module.scss';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  useColorModeValue,
  Flex,
  Tabs,
  TabList,
  Tab,
  Avatar,
  Image,
} from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface AppBarProps {}

export function AppBar(props: AppBarProps) {
  const [tabs, setTabs] = useState([
    {
      id: 'ALL_APPLICATIONS',
      route: '/',
      label: 'All Applications',
    },
    {
      id: 'APPLICATION_1',
      route: '/applications/1',
      label: 'Application 01',
    },
    {
      id: 'APPLICATION_2',
      route: '/applications/2',
      label: 'Application 02',
    },
  ]);

  const navigate = useNavigate();

  const onChangeTab = (index: number) => {
    const tabPath = tabs[index].route;
    navigate(tabPath);
  };

  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      w="100%"
      color="grey"
      justify="flex-start"
      align="center"
    >
      <Box p={4}>
        <Image boxSize="100px" objectFit="contain" src={logo} alt="RFA" />
      </Box>

      <Box w="100%">
        <Tabs
          size="lg"
          variant="enclosed"
          onChange={(index) => onChangeTab(index)}
        >
          <TabList>
            {tabs.map((tab) => {
              return <Tab key={tab.id}>{tab.label}</Tab>;
            })}
          </TabList>
        </Tabs>
      </Box>

      <Box p={4} marginLeft="auto">
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </Box>
    </Flex>
  );
}

export default AppBar;
