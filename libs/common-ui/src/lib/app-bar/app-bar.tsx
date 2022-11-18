import styles from './app-bar.module.scss';
import logo from '../../assets/logo.png';
import { useMemo, useContext } from 'react';
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
  const tabsContext = useContext(TabsContext);

  const selectedTabs = useMemo(() => {
    const tabxAux: TabInterface[] = [
      {
        id: 0,
        label: 'All Applications',
        route: '/',
      },
      ...(tabsContext?.tabs || []),
    ];

    return tabxAux;
  }, [tabsContext]);

  const navigate = useNavigate();

  const onChangeTab = (index: number) => {
    const tabPath = selectedTabs?.[index].route;
    navigate(tabPath);
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
              {selectedTabs?.map((tab) => {
                return (
                  <Tab bg="white" key={tab?.id}>
                    {tab?.label}
                  </Tab>
                );
              })}
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
