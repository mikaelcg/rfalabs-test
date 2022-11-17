import styles from './app-bar.module.scss';
import logo from '../../assets/logo.png';
import { useState, useContext } from 'react';
import { TabsContext } from '@rfalabs-test/contexts';
import { TabInterface, ITabsContext } from '@rfalabs-test/types';
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
  const tabs = useContext<ITabsContext | null>(TabsContext);

  console.log(tabs);
  // const [tabs, setTabs] = useState([
  //   {
  //     id: 'ALL_APPLICATIONS',
  //     route: '/',
  //     label: 'All Applications',
  //   },
  // ]);

  const navigate = useNavigate();

  const onChangeTab = (index: number) => {
    // const tabPath = tabs[index].route;
    // navigate(tabPath);
  };

  return (
    <div className={styles['container']}>
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
              {/* {tabs.map((tab: TabInterface) => {
                return (
                  <Tab bg="white" key={tab?.id}>
                    {tab?.label}
                  </Tab>
                );
              })} */}
            </TabList>
          </Tabs>
        </Box>

        <Box p={4} marginLeft="auto">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </Box>
      </Flex>
    </div>
  );
}

export default AppBar;
